import './cyclical.js'

export class StatisticDate extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })

    // Crearea și atașarea HTML + CSS în interiorul DOM umbră
    this.shadowRoot.innerHTML = `
      <style>
        .container_section {
          position: relative;
          display: flex;
          width: 100vw;
          height: 656px;
          padding: 88px 0 64px 0;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          /*overflow-x: hidden;*/
          contain: content;
        }
        .statist {
          display: flex;
          padding: 16px 32px;
          justify-content: center;
          align-items: baseline;
          gap: 12px;

          border-radius: 16px;
          border: 1px solid var(--outline-outline-variant, #393939);
          background: var(--blur-1, rgba(30, 30, 30, 0.24));
          box-shadow: 0 2px 12px 0 var(--shadow-card, #1b1b1b);
          backdrop-filter: blur(4px);

          transform: translateY(-140px) scale(0.8);
          opacity: 0;

          animation: stat_prim linear forwards;
          animation-timeline: view();
          animation-range: cover 5% cover 30%;
        }
        @keyframes stat_prim {
          from {
            transform: translateY(-140px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .valoare {
          color: var(--surface-on-surface, #fff);

          /* h3/sec */
          font-family: var(--family-heading-primary, Jost);
          font-size: var(--size-heading-h3, 28px);
          font-style: normal;
          font-weight: var(--weight-heading-secondary, 500);
          line-height: var(--line-height-heading-h3, 32px); /* 114.286% */
        }

        .curen {
          color: var(--primary-primary, #805bff);
          font-family: var(--family-heading-primary, Jost);
          font-size: var(--size-heading-h5, 22px);
          font-style: normal;
          font-weight: var(--weight-heading-secondary, 500);
          line-height: var(--line-height-heading-h5, 28px); /* 127.273% */
        }
        .stat_prim {
          position: absolute;
          top: 21%;
          left: 38%;
          z-index: 10;
          
          opacity: 0;
          
          animation: prim-anim linear both;
          animation-timeline: view();
          animation-range: contain 40% contain 56%;

        }
        @keyframes prim-anim {
          0% {
            transform: translateX(-120px) scale(0.6);
            opacity: 0;
          }
          100% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }

        .stat_sec {
          position: absolute;
          top: 62%;
          left: 7%;
          z-index: 10;
          opacity: 0;
          
          animation: sec-anim linear both;
          animation-timeline: view();
          animation-range: contain 10% contain 28%;

        }
        @keyframes sec-anim {
          0% {
            transform: translateX(120px) scale(0.6);
            opacity: 0;
          }
          100% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }

        .stat_ter {
          position: absolute;
          top: 77%;
          left: 26%;
          z-index: 10;
          opacity: 0;
          animation: ter-anim linear both;
          animation-timeline: view();
          animation-range: contain 4% contain 20%;

        }
        @keyframes ter-anim {
          0% {
            transform: translateX(-120px) scale(0.4);
            opacity: 0;
          }
          100% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }

      </style>

      <div class="container_section">
      
        <div class="statist stat_prim">
          <div class="valoare">120</div>
          <div class="curen">sources</div>
        </div>
        <div class="statist stat_sec">
          <div class="valoare">16 000</div>
          <div class="curen">users</div>
        </div>
        <div class="statist stat_ter">
          <div class="valoare">2100</div>
          <div class="curen">offers/day</div>
        </div>
        
        <cyclical-anim></cyclical-anim>

      </div>
    `
  }
}

customElements.define('statistic-date', StatisticDate)
