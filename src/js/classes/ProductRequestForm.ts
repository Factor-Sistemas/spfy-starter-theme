export default class ProductRequestForm {
  private formSelector: string = '.product-info-form';
  private phoneSelector: string = '.js-dynamic-phone';
  private apiBaseUrl: string = '/apps/peticion-info';

  constructor() {
    this.init();
  }

  private init(): void {
    this.persistUtmSource();
    this.loadDynamicPhone();
    this.initAjaxForm();
  }

  /**
   * Obtiene el valor de una cookie por su nombre
   */
  private getCookie(name: string): string {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop()?.split(';').shift() || '';
    }
    return '';
  }

  /**
   * Crea o actualiza una cookie con una duración en días
   */
  private setCookie(name: string, value: string, days: number): void {
    let expires = '';
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = `; expires=${date.toUTCString()}`;
    }
    document.cookie = `${name}=${value || ''}${expires}; path=/; SameSite=Lax; Secure`;
  }

  /**
   * Persiste el parámetro utm_source de la URL en una cookie por 30 días
   */
  private persistUtmSource(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get('utm_source');
    if (utmSource) {
      this.setCookie('utm_source', utmSource, 30);
    }
  }

  /**
   * Carga el teléfono dinámico de la API Proxy según la cookie utm_source
   */
  private async loadDynamicPhone(): void {
    const phoneElements = document.querySelectorAll(this.phoneSelector);
    if (phoneElements.length === 0) return;

    const utmSource = this.getCookie('utm_source');
    
    try {
      const response = await fetch(`${this.apiBaseUrl}/telefono?utm_source=${encodeURIComponent(utmSource)}`);
      if (!response.ok) throw new Error('Error al recuperar el teléfono');
      
      const data = await response.json();
      if (data && data.phone) {
        phoneElements.forEach(element => {
          if (element instanceof HTMLAnchorElement) {
            element.href = `tel:${data.phone}`;
            element.textContent = data.label || data.phone;
          } else {
            element.textContent = data.phone;
          }
          
          // Micro-animación de aparición usando GSAP si está disponible
          if ((window as any).gsap) {
            (window as any).gsap.fromTo(
              element, 
              { opacity: 0, scale: 0.95 }, 
              { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(1.7)' }
            );
          }
        });
      }
    } catch (error) {
      console.warn('No se pudo cargar el teléfono dinámico:', error);
    }
  }

  /**
   * Inicializa el envío por AJAX para procesar la respuesta Liquid inyectada directamente
   */
  private initAjaxForm(): void {
    const form = document.querySelector(this.formSelector) as HTMLFormElement | null;
    if (!form) return;

    form.addEventListener('submit', async (e: Event) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement | null;
      const originalBtnText = submitBtn ? submitBtn.textContent : 'Enviar';
      
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';
      }

      const formData = new FormData(form);
      const urlEncodedData = new URLSearchParams(formData as any).toString();

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: urlEncodedData
        });

        if (!response.ok) throw new Error('Error en el envío');

        const htmlResponse = await response.text();
        
        // Animación de salida y renderizado de la respuesta Liquid sin recarga
        if ((window as any).gsap) {
          (window as any).gsap.to(form, {
            opacity: 0,
            y: 15,
            duration: 0.3,
            onComplete: () => {
              const parent = form.parentElement;
              if (parent) {
                const container = document.createElement('div');
                container.innerHTML = htmlResponse;
                parent.replaceChild(container, form);
                
                (window as any).gsap.fromTo(
                  container, 
                  { opacity: 0, y: -15 }, 
                  { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
                );
              }
            }
          });
        } else {
          const parent = form.parentElement;
          if (parent) {
            const container = document.createElement('div');
            container.innerHTML = htmlResponse;
            parent.replaceChild(container, form);
          }
        }
      } catch (error) {
        console.error('Error enviando formulario:', error);
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalBtnText;
        }
        alert('Hubo un problema al procesar tu solicitud. Inténtalo de nuevo más tarde.');
      }
    });
  }
}
