export default class TiendaAprendizaje {
  constructor() {
    this.init();
  }

  init(): void {
    console.log('🚀 Clase TiendaAprendizaje cargada en TypeScript');
    this.initWelcomeMessage();
  }

  initWelcomeMessage(): void {
    const title = document.querySelector('h1') as HTMLElement | null;
    if (title) {
      title.addEventListener('click', () => {
        title.classList.toggle('text-blue-500');
        console.log('¡Interacción en TypeScript detectada!');
      });
    }
  }
}
