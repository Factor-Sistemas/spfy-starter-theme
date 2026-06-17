export default class CartDrawer extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.addEventListener('change', this.onQuantityChange.bind(this));
		this.addEventListener('click', this.onButtonClick.bind(this));
	}

	onQuantityChange(event: Event) {
		const input = event.target as HTMLInputElement;
		if (input && input.classList.contains('quantity__input')) {
			this.updateQuantity(
				parseInt(input.dataset.line || '1'),
				parseInt(input.value)
			);
		}
	}

	onButtonClick(event: Event) {
		const button = (event.target as HTMLElement).closest('.quantity__button');
		if (button) {
			event.preventDefault();
			const input = this.querySelector(`#Quantity-${button.getAttribute('data-line')}`) as HTMLInputElement;
			if (input) {
				const value = parseInt(input.value);
				const direction = button.getAttribute('name') === 'plus' ? 1 : -1;
				const newValue = Math.max(0, value + direction);
				input.value = newValue.toString();

				this.updateQuantity(
					parseInt(button.getAttribute('data-line') || '1'),
					newValue
				);
			}
		}
	}

	async updateQuantity(line: number, quantity: number) {
		this.classList.add('opacity-50', 'pointer-events-none');

		try {
			const response = await fetch(`${(window as any).shopUrl || ''}/cart/change.js`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				},
				body: JSON.stringify({
					line: line,
					quantity: quantity
				})
			});

			if (!response.ok) {
				throw new Error('Error al actualizar el carrito');
			}

			// Recargar el contenido del drawer usando la Section Rendering API
			await this.refreshDrawer();

		} catch (error) {
			console.error(error);
			this.classList.remove('opacity-50', 'pointer-events-none');
		}
	}

	async refreshDrawer() {
		// Obtenemos el ID de la sección actual (normalmente renderizada por el layout)
		const sectionId = 'fs-header-drawer';

		try {
			const cartUrl = (window as any).routes?.cart_url || '/cart';
			const response = await fetch(`${cartUrl}?sections=${sectionId}`);
			if (!response.ok) throw new Error('Error al recargar la sección');

			const json = await response.json();
			const html = json[sectionId];

			if (html) {
				const parser = new DOMParser();
				const doc = parser.parseFromString(html, 'text/html');
				const newCartDrawer = doc.querySelector('#cart-drawer-component');

				if (newCartDrawer) {
					const currentCartDrawer = this.querySelector('#cart-drawer-component') || this;
					currentCartDrawer.innerHTML = newCartDrawer.innerHTML;
				}

				// Actualizar el contador del carrito en el header si existe
				const newActions = doc.querySelector('#menu-actions');
				const currentActions = document.querySelector('#menu-actions');
				if (newActions && currentActions) {
					currentActions.innerHTML = newActions.innerHTML;
				}
			}
		} catch (e) {
			console.error('Error al refrescar el drawer:', e);
		} finally {
			this.classList.remove('opacity-50', 'pointer-events-none');
		}
	}
}

// Registrar el elemento si no está registrado
if (!customElements.get('cart-drawer')) {
	customElements.define('cart-drawer', CartDrawer);
}
