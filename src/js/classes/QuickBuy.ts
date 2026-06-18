import { gsap } from 'gsap';

export default class QuickBuy extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		const button = this.querySelector('button');
		if (!button) return;

		button.addEventListener('click', this.addToCart.bind(this));
	}

	async addToCart(event: Event) {
		event.preventDefault();
		const button = event.currentTarget as HTMLButtonElement;
		const variantId = this.getAttribute('variant-id');
		if (!variantId) return;

		button.disabled = true;
		button.classList.add('pointer-events-none', 'opacity-70');

		const label = button.querySelector('.quick-buy-label');
		const spinner = button.querySelector('.quick-buy-spinner');
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
				throw new Error('Error al añadir al carrito');
			}

			// Disparar evento global para actualizar el estado del carrito
			document.dispatchEvent(new CustomEvent('cart:updated'));

		} catch (error) {
			console.error('QuickBuy: Error al procesar la compra rápida:', error);
			alert('Hubo un problema al añadir el producto al carrito.');
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

if (!customElements.get('quick-buy')) {
	customElements.define('quick-buy', QuickBuy);
}
