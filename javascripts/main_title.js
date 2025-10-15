export class MainTitle extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })

    // Crearea și atașarea HTML + CSS în interiorul DOM umbră
    this.shadowRoot.innerHTML = `
      <style>
        .titlul_principal {
          color: var(--surface-on-surface, #fff);
          text-align: center;

          /* h3/sec */
          font-family: var(--family-heading-primary, Jost);
          font-size: var(--size-heading-h3, 28px);
          font-style: normal;
          font-weight: var(--weight-heading-secondary, 500);
          line-height: var(--line-height-heading-h3, 32px); /* 114.286% */
          
          animation: title-anim-and linear forwards;
          animation-timeline: view();
          animation-range: contain 90% contain 100%;
        }
        @keyframes title-anim-and {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
        .sectiunea_titluri {
          display: flex;
          margin-top: 24px;
          justify-content: center;
          align-items: center;
          gap: 10px;
          align-self: stretch;
          
          transform: translateY(-30px) scale(0.8);
          opacity: 0;
          
          animation: title-anim 500ms linear forwards;
          /*animation-delay: 1s;*/
        }
        
        @keyframes title-anim {
          from {
            transform: translateY(-30px) scale(0.8);
            opacity: 0;
          }
          to {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }
      </style>

      <div class="sectiunea_titluri">
        <div class="titlul_principal">
          Let Al Broker Search <br />
          Flight for You
        </div>
      </div>
    `
  }
}

customElements.define('main-title', MainTitle)
