export default class FsToaster extends HTMLElement {
	private template: HTMLTemplateElement | null = null;

	constructor() {
		super();
	}

	connectedCallback() {
		// Localizar el template en el DOM
		this.template = document.getElementById('fs-toast-template') as HTMLTemplateElement;

		// Registrar los listeners para eventos de la tienda
		document.addEventListener('toast:show', this.handleToastEvent.bind(this) as EventListener);
		document.addEventListener('cart:updated', this.handleCartUpdated.bind(this));
	}

	private handleToastEvent(event: CustomEvent<{ type: 'success' | 'alert' | 'info'; title?: string; message: string }>) {
		const { type, title, message } = event.detail;
		this.createToast(type, message, title);
	}

	private handleCartUpdated() {
		// Mostrar toast automático al recibir evento de carrito actualizado
		this.createToast(
			'success', 
			'Se ha añadido el producto al carrito correctamente.', 
			'¡Carrito actualizado!'
		);
	}

	public createToast(type: 'success' | 'alert' | 'info', message: string, title?: string) {
		if (!this.template) {
			console.warn('FsToaster: No se ha encontrado el template #fs-toast-template');
			return;
		}

		// Clonar el contenido del template HTML
		const clone = this.template.content.cloneNode(true) as DocumentFragment;
		const toast = clone.querySelector('.outer-toast-shell') as HTMLDivElement;

		if (!toast) return;

		// Configurar tipo, título y mensaje
		toast.setAttribute('data-type', type);

		const titleEl = toast.querySelector('.toast-title');
		if (titleEl) {
			if (title) {
				titleEl.textContent = title;
			} else {
				titleEl.remove();
			}
		}

		const messageEl = toast.querySelector('.toast-message');
		if (messageEl) {
			messageEl.textContent = message;
		}

		// Configurar evento de cierre manual
		const closeBtn = toast.querySelector('.toast-close-btn');
		if (closeBtn) {
			closeBtn.addEventListener('click', (e) => {
				e.preventDefault();
				this.dismissToast(toast);
			});
		}

		// Añadir al contenedor
		this.appendChild(toast);

		// Forzar un reflow para que el navegador registre el estado inicial de CSS (opacity: 0, translate-y-6...)
		// antes de aplicar la clase activa de transición.
		toast.offsetHeight;

		// Activar transición nativa de CSS/Tailwind
		toast.classList.add('is-active');

		// Programar cierre automático después de 5 segundos
		setTimeout(() => {
			this.dismissToast(toast);
		}, 5000);
	}

	private dismissToast(toast: HTMLDivElement) {
		if (!toast.parentNode) return; // Ya fue removido

		// Remover clase para activar la transición CSS de salida
		toast.classList.remove('is-active');

		// Esperar a que concluya la transición CSS para remover físicamente del DOM
		toast.addEventListener('transitionend', () => {
			toast.remove();
		}, { once: true });
	}
}

// Registrar el Custom Element
if (!customElements.get('fs-toaster')) {
	customElements.define('fs-toaster', FsToaster);
}
