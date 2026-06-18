export default class FsTrackingFields extends HTMLElement {
	connectedCallback() {
		// Deferimos la ejecución al siguiente tick de macro-tareas
		// para garantizar que los elementos hijos (inputs) estén en el DOM.
		setTimeout(() => this.initTracking(), 0);
	}

	getParam(name: string): string | null {
		return new URLSearchParams(window.location.search).get(name);
	}

	buildTrackingData() {
		const trackingKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'promotor'];
		const tracking: { [key: string]: string | null } = {};

		trackingKeys.forEach((key) => {
			const paramValue = this.getParam(key);
			if (paramValue) {
				localStorage.setItem(`c_${key}`, paramValue);
				tracking[key] = paramValue;
			} else {
				tracking[key] = localStorage.getItem(`c_${key}`);
			}
		});

		const getCookie = (name: string): string | null => {
			const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
			return match ? decodeURIComponent(match[2]) : null;
		};

		tracking['_fbc'] = getCookie('_fbc');
		tracking['_fbp'] = getCookie('_fbp');

		return tracking;
	}

	fillProductFormProperties(trackingData: { [key: string]: string | null }) {
		const formMapping: { [key: string]: string } = {
			utm_source: 'properties[_utm_source]',
			utm_medium: 'properties[_utm_medium]',
			utm_campaign: 'properties[_utm_campaign]',
			utm_content: 'properties[_utm_content]',
			utm_term: 'properties[_utm_term]',
			promotor: 'properties[_promotor]',
			_fbc: 'properties[_fbc]',
			_fbp: 'properties[_fbp]',
		};

		for (const [trackingKey, inputName] of Object.entries(formMapping)) {
			const value = trackingData[trackingKey];
			if (value) {
				const input = this.querySelector(`input[name="${inputName}"]`) as HTMLInputElement | null;
				if (input) {
					input.value = value;
				}
			}
		}
	}

	setupBuyItNowListener(trackingData: { [key: string]: string | null }) {
		const form = this.closest('form');
		const buyItNowBtn = form ? form.querySelector('.shopify-payment-button__button') : null;
		if (buyItNowBtn) {
			buyItNowBtn.addEventListener('click', () => {
				this.fillProductFormProperties(trackingData);
			});
		}
	}

	async saveTrackingToCartGlobal(trackingData: { [key: string]: string | null }) {
		const attributes: { [key: string]: string } = {};
		for (const [key, value] of Object.entries(trackingData)) {
			if (value) {
				if (key === 'promotor') {
					attributes['promotor'] = value;
				} else {
					attributes[key] = value;
				}
			}
		}

		if (Object.keys(attributes).length === 0) {
			return;
		}

		try {
			const response = await fetch('/cart/update.js', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ attributes }),
			});
			await response.json();
		} catch (e) {
			// Silenciamos errores de red en producción
		}
	}

	initTracking() {
		const trackingData = this.buildTrackingData();

		// 1. Rellenamos los inputs de este componente
		this.fillProductFormProperties(trackingData);

		// 2. Registramos el listener para botón de pago rápido
		this.setupBuyItNowListener(trackingData);

		// 3. Actualizamos el carrito global una sola vez por carga de página
		if (!(window as any).fsCartAttributesUpdated) {
			(window as any).fsCartAttributesUpdated = true;
			this.saveTrackingToCartGlobal(trackingData);
		}
	}
}

if (!customElements.get('fs-tracking-fields')) {
	customElements.define('fs-tracking-fields', FsTrackingFields);
}
