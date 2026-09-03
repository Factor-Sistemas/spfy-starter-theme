import { gsap } from 'gsap';

function getTrackingProperties(): { [key: string]: string } {
	const trackingKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'promotor'];
	const properties: { [key: string]: string } = {};

	trackingKeys.forEach((key) => {
		const value = localStorage.getItem(`c_${key}`);
		if (value) {
			properties[`_${key}`] = value;
		}
	});

	const getCookie = (name: string): string | null => {
		const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
		return match ? decodeURIComponent(match[2]) : null;
	};

	const fbc = getCookie('_fbc');
	if (fbc) properties['_fbc'] = fbc;

	const fbp = getCookie('_fbp');
	if (fbp) properties['_fbp'] = fbp;

	return properties;
}

export default class ProductForm extends HTMLElement {
	private form: HTMLFormElement | null = null;
	private submitButton: HTMLButtonElement | null = null;

	constructor() {
		super();
	}

	connectedCallback() {
		this.form = this.querySelector('form');
		if (!this.form) return;

		this.submitButton = this.querySelector('button[type="submit"]');
		this.form.addEventListener('submit', this.onSubmitHandler.bind(this));
	}

	async onSubmitHandler(evt: Event) {
		evt.preventDefault();
		if (!this.form) return;

		const submitButton = this.submitButton || (this.querySelector('button[type="submit"]') as HTMLButtonElement);
		if (submitButton && submitButton.disabled) return;

		if (submitButton) {
			submitButton.disabled = true;
			submitButton.classList.add('pointer-events-none', 'opacity-75');
		}

		const label = submitButton?.querySelector('.btn-label') || submitButton?.querySelector('span');
		const spinner = submitButton?.querySelector('.btn-spinner');

		if (label && spinner) {
			gsap.to(label, { opacity: 0, duration: 0.15 });
			gsap.to(spinner, { opacity: 1, scale: 1, duration: 0.15 });
		} else if (label) {
			gsap.to(label, { opacity: 0.5, duration: 0.15 });
		}

		try {
			const formData = new FormData(this.form);
			const variantId = formData.get('id');
			const quantity = parseInt((formData.get('quantity') as string) || '1', 10);

			if (!variantId) {
				throw new Error('No se pudo determinar la variante seleccionada.');
			}

			const trackingProps = getTrackingProperties();

			const response = await fetch('/cart/add.js', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json',
				},
				body: JSON.stringify({
					id: parseInt(variantId as string, 10),
					quantity: quantity,
					properties: trackingProps,
				}),
			});

			const data = await response.json();

			if (!response.ok || data.status) {
				const errorMsg = data.description || data.message || 'Error al añadir el producto al carrito.';
				throw new Error(errorMsg);
			}

			// Disparar evento global de actualización de carrito.
			// Esto actualiza el drawer de carrito y dispara el Toast de aviso automáticamente.
			document.dispatchEvent(new CustomEvent('cart:updated'));
		} catch (error: any) {
			console.error('ProductForm: Error en envío AJAX:', error);
			document.dispatchEvent(
				new CustomEvent('toast:show', {
					detail: {
						type: 'alert',
						title: 'Atención',
						message: error.message || 'No se pudo procesar tu solicitud.',
					},
				})
			);
		} finally {
			if (submitButton) {
				submitButton.disabled = false;
				submitButton.classList.remove('pointer-events-none', 'opacity-75');
			}
			if (label && spinner) {
				gsap.to(label, { opacity: 1, duration: 0.15 });
				gsap.to(spinner, { opacity: 0, scale: 0.75, duration: 0.15 });
			} else if (label) {
				gsap.to(label, { opacity: 1, duration: 0.15 });
			}
		}
	}
}

if (!customElements.get('product-form')) {
	customElements.define('product-form', ProductForm);
}
