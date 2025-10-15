export class ScrollBox extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })

    // Crearea și atașarea HTML + CSS în interiorul DOM umbră
    this.shadowRoot.innerHTML = `
      <style>
        .container {
          width: 100px;
          height: 100px;
          margin: 0 auto;
          background: var(--surface-on-surface, #fff);
          transform: scaleX(0)
        }
        @keyframes grow-progress {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        #progress {
          animation: grow-progress linear forwards;
          /*animation-timeline: scroll();*/
          animation-timeline: view();
          animation-range: cover 20% cover 80%;
        }
      </style>

      <div id="progress" class="container"></div>
    `
  }
}

customElements.define('scroll-box', ScrollBox)
