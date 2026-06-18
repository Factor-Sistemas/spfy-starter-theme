import { gsap } from 'gsap';

export default class ProductCardBuy extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		const buttons = this.querySelectorAll('button[data-action]');
		buttons.forEach(button => {
			button.addEventListener('click', this.handlePurchase.bind(this));
		});
	}

	async handlePurchase(event: Event) {
		event.preventDefault();
		const button = event.currentTarget as HTMLButtonElement;
		const action = button.getAttribute('data-action'); // 'add' o 'buy'
		const variantId = this.getAttribute('variant-id');
		if (!variantId || !action) return;

		// Bloquear interacciones durante la carga
		button.disabled = true;
		button.classList.add('pointer-events-none', 'opacity-70');

		const label = button.querySelector('.btn-label');
		const spinner = button.querySelector('.btn-spinner');
		if (label && spinner) {
			gsap.to(label, { opacity: 0, duration: 0.15 });
			gsap.to(spinner, { opacity: 1, scale: 1, duration: 0.15 });
		}

		try {
			const response = await fetch('/cart/add.js', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				},
				body: JSON.stringify({
					id: parseInt(variantId),
					quantity: 1
				})
			});

			if (!response.ok) {
				throw new Error('Error al añadir el producto');
			}

			if (action === 'buy') {
				// Comprar ya: redirigir directo al checkout
				window.location.href = '/checkout';
			} else {
				// Añadir al carrito: notificar para abrir y refrescar el drawer
				document.dispatchEvent(new CustomEvent('cart:updated'));
			}

		} catch (error) {
			console.error('ProductCardBuy: Error en el proceso de compra:', error);
			alert('Hubo un problema al procesar tu solicitud.');
		} finally {
			button.disabled = false;
			button.classList.remove('pointer-events-none', 'opacity-70');
			if (label && spinner) {
				gsap.to(label, { opacity: 1, duration: 0.15 });
				gsap.to(spinner, { opacity: 0, scale: 0.8, duration: 0.15 });
			}
		}
	}
}

if (!customElements.get('product-card-buy')) {
	customElements.define('product-card-buy', ProductCardBuy);
}
