export default class CartDrawer extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.addEventListener('change', this.onQuantityChange.bind(this));
		this.addEventListener('click', this.onButtonClick.bind(this));
	}

	onQuantityChange(event: Event) {
		console.log('CartDrawer: onQuantityChange detectado');
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
			} else {
				console.warn('CartDrawer: input de cantidad no encontrado');
			}
		}
	}

	async updateQuantity(line: number, quantity: number) {
		console.log(`CartDrawer: updateQuantity llamado para linea ${line}, cantidad ${quantity}`);
		this.classList.add('opacity-50', 'pointer-events-none');

		try {
			const response = await fetch('/cart/change.js', {
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
		console.log('CartDrawer: Iniciando refresco de drawer');
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
				
				// Buscar el elemento. Si está dentro de una etiqueta <template>, querySelector normal fallará,
				// por lo que debemos buscar dentro del fragmento .content del template.
				let newCartDrawer = doc.querySelector('#cart-drawer-component');
				if (!newCartDrawer) {
					const templates = doc.querySelectorAll('template');
					for (const template of Array.from(templates)) {
						const found = template.content.querySelector('#cart-drawer-component');
						if (found) {
							newCartDrawer = found;
							break;
						}
					}
				}
				console.log('CartDrawer: Nuevo elemento drawer parseado:', newCartDrawer);

				if (newCartDrawer) {
					const currentCartDrawer = this.querySelector('#cart-drawer-component') || this;
					console.log('CartDrawer: Reemplazando innerHTML de', currentCartDrawer);
					currentCartDrawer.innerHTML = newCartDrawer.innerHTML;
				} else {
					console.warn('CartDrawer: No se encontró #cart-drawer-component en el HTML nuevo ni dentro de los templates');
				}

				// Actualizar el contador del carrito en el header si existe
				let newActions = doc.querySelector('#menu-actions');
				if (!newActions) {
					const templates = doc.querySelectorAll('template');
					for (const template of Array.from(templates)) {
						const found = template.content.querySelector('#menu-actions');
						if (found) {
							newActions = found;
							break;
						}
					}
				}

				const currentActions = document.querySelector('#menu-actions');
				if (newActions && currentActions) {
					console.log('CartDrawer: Actualizando contador de acciones del menú');
					currentActions.innerHTML = newActions.innerHTML;
				}
			} else {
				console.warn(`CartDrawer: La propiedad del JSON para la sección ${sectionId} vino vacía o indefinida`);
			}
		} catch (e) {
			console.error('CartDrawer: Error al refrescar el drawer:', e);
		} finally {
			this.classList.remove('opacity-50', 'pointer-events-none');
		}
	}
}

// Registrar el elemento si no está registrado
if (!customElements.get('cart-drawer')) {
	customElements.define('cart-drawer', CartDrawer);
}
