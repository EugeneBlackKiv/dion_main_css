import './main_form_section.js'
import './cyclical_card.js'

export class HowSection extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })

    // Crearea și atașarea HTML + CSS în interiorul DOM umbră
    this.shadowRoot.innerHTML = `
      <style>
        .how_dion_section {
          margin-top: 132px;
          display: flex;
          padding: 16px 16px 0 16px;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          align-self: stretch;
          position: relative;
        }
        .how_title_group {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--surface-on-surface, #fff);

          /* h3/sec */
          font-family: var(--family-heading-primary, Jost);
          font-size: var(--size-heading-h3, 28px);
          font-style: normal;
          font-weight: var(--weight-heading-secondary, 500);
          line-height: var(--line-height-heading-h3, 32px); /* 114.286% */

          transform: translateY(-140px) scale(0.8);
          opacity: 0;

          animation: title-anim linear both;
          animation-timeline: view();
          animation-range: cover 5% cover 30%;
          will-change: transform, opacity;
        }
        @keyframes title-anim {
          from {
            transform: translateY(-140px) scale(0.8);
            opacity: 0;
          }
          to {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }

        .dion_logo {
          display: flex;
          align-items: center;
          gap: 2px;
        }
        .logo_color {
          stroke: var(--surface-on-surface, #fff);
        }
        .how_card_group {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 24px;
          align-self: stretch;
        }
        .how_card {
          display: flex;
          height: 342px;
          padding: 24px;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          align-self: stretch;
          position: relative;
          overflow: hidden;

          border-radius: 20px;
          border: 1px solid var(--outline-outline-variant, #393939);
          background: var(--blur-1, rgba(30, 30, 30, 0.24));
          box-shadow: 0 6px 24px 0 var(--shadow-card-2, #1b1b1b);
          backdrop-filter: blur(3px);

          transform: perspective(600px) rotateX(45deg) scale(0.8);  
          
          animation: card-anim linear both;
          animation-timeline: view();
          animation-range: entry 0% contain 10%;
          will-change: transform;
          backface-visibility: hidden;
        }
        @keyframes card-anim {
          from {
            transform: perspective(600px) rotateX(45deg) scale(0.8); 
          }
          to {
            transform: perspective(600px) rotateX(0) scale(1); 
          }
        }
        .card_header {
          display: flex;
          align-items: baseline;
          gap: 8px;
          align-self: stretch;
        }
        .step {
          color: var(--surface-on-surface, #fff);

          /* h4/ter */
          font-family: var(--family-heading-primary, Jost);
          font-size: var(--size-heading-h4, 24px);
          font-style: normal;
          font-weight: var(--weight-heading-tertiary, 700);
          line-height: var(--line-height-heading-h4, 28px); /* 116.667% */
        }
        .step_description {
          flex: 1 0 0;

          color: var(--surface-on-surface, #fff);

          /* s1/prim */
          font-family: var(--family-subtitle-primary, Jost);
          font-size: var(--size-subtitle-s1, 18px);
          font-style: normal;
          font-weight: var(--weight-subtitle-primary, 400);
          line-height: var(--line-height-subtitle-s1, 22px); /* 122.222% */
        }
        .imag_arrow {
          position: absolute;
          top: 70px;
          left: 16px;
          flex-shrink: 0;
          z-index: 3;
        }
        .positie_form {
          position: absolute;
          width: 390px;
          top: 50%;
          left: 50%;
          transform: translate(-45%, -48%) scale(0.6) rotate(-15deg);
          z-index: 2;
          
          animation-name: animate-search_decor_1;
          animation-duration: 6s;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          will-change: transform, opacity;
        }
        
        @keyframes animate-search_decor_1 {
          0% {
             transform: translate(-45%, -48%) scale(0.6) rotate(-15deg);
          }
          50% {
            transform: translate(-45%, -48%) scale(0.68) rotate(-5deg);
          }
          100% {
             transform: translate(-45%, -48%) scale(0.6) rotate(-15deg);
          }
        }
        .fundal_forma {
          width: 200px;
          height: 248px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-54%, -38%) rotate(-20deg);
          flex-direction: column;
          align-items: flex-start;
          flex-shrink: 0;

          border-radius: 15px;
          /*border: 0.61px solid var(--outline-outline-variant, #393939);*/
          background: var(--blur-1, rgba(30, 30, 30, 0.24));
          box-shadow: 0 3.659px 14.634px 0 var(--shadow-card-2, #1b1b1b);
          backdrop-filter: blur(3px);
          
          animation-name: animate-search_fundal;
          animation-duration: 6s;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          will-change: transform, opacity;
        }
        
        @keyframes animate-search_fundal {
          0% {
             transform: translate(-54%, -38%) rotate(-20deg);
          }
          50% {
            transform: translate(-54%, -38%) rotate(-25deg);
          }
          100% {
             transform: translate(-54%, -38%) rotate(-20deg);
          }
        }
        .cyclic_fundal {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(60px) translateY(-43%) scale(0.7);
        }
        .logo_fundal {
          position: absolute;
          top: -280px;
          left: 50%;
          
          transform: translateX(-50%) translateY(80px) perspective(600px) rotateX(48deg) scale(0.8) ;
          opacity: 0;
          
          animation: logo-anim linear both;
          animation-timeline: view();
          animation-range: contain 50% contain 80%;
          will-change: transform, opacity;
          backface-visibility: hidden;
        }
        @keyframes logo-anim {
          from {
            transform: translateX(-50%) translateY(80px) perspective(600px) rotateX(48deg) scale(0.6) ; 
            opacity: 0;
          }
          to {
            transform:  translateX(-50%) translateY(0) perspective(600px) rotateX(0) scale(0.8) ; 
            opacity: 1;
          }
        }
      </style>

      <div class="how_dion_section">
        <svg class="logo_fundal" xmlns="http://www.w3.org/2000/svg" width="190" height="189" viewBox="0 0 190 189" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M86.956 5.08824C90.2702 -1.54016 99.7297 -1.54015 103.044 5.08824L188.492 175.986C191.435 181.872 187.268 188.781 180.761 188.995L180.449 189H9.55069C2.86582 189 -1.48149 181.965 1.50772 175.986L86.956 5.08824ZM49.5673 155.276H140.433L94.9999 64.4095L49.5673 155.276Z" fill="#805BFF" fill-opacity="0.08"/>
        </svg>
        <div class="how_title_group">
          How
          <div class="dion_logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                class="logo_color"
                d="M18.0723 18.5001H2.92773L10.5 3.35461L18.0723 18.5001Z"
                stroke="white"
                stroke-width="3"
              />
            </svg>
            ion
          </div>
          Works
        </div>
        <div class="how_card_group">
          <div class="how_card">
            <div class="card_header">
              <div class="step">1.</div>
              <div class="step_description">You tell us your travel need</div>
            </div>
            <svg
              class="imag_arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="105"
              height="129"
              viewBox="0 0 105 129"
              fill="none"
            >
              <path
                d="M36.5797 1.54432C36.638 1.45181 36.6584 1.34006 36.6354 1.23303C36.6124 1.12601 36.5481 1.03258 36.4565 0.973181C36.3649 0.913784 36.2532 0.893152 36.1459 0.915711C36.0386 0.938263 35.9446 1.00226 35.8836 1.09301C35.8836 1.09301 35.8836 1.09301 35.8836 1.09301C34.5758 3.03864 33.3409 5.06385 32.186 7.14696C9.6188 43.8514 22.9773 98.9667 63.8883 116.88C65.49 117.729 67.022 118.495 68.6605 119.27C69.2045 119.527 69.9013 119.471 70.7374 119.095C70.8262 119.053 70.9114 119.012 70.9804 118.969C71.0497 118.925 71.0992 118.877 71.1269 118.816C71.1545 118.756 71.1583 118.687 71.1462 118.606C71.1339 118.526 71.1088 118.435 71.0826 118.34C71.0826 118.34 71.0826 118.34 71.0826 118.34C70.8222 117.466 70.4333 116.907 69.9023 116.656C68.3026 115.899 66.808 115.153 65.2465 114.328C25.6587 96.8735 12.0341 44.7633 33.0976 7.63365C34.1808 5.54419 35.3437 3.50729 36.5797 1.54432Z"
                fill="#805BFF"
              />
              <path
                d="M63.399 103.397C63.3375 103.312 63.2484 103.248 63.1449 103.222C63.0415 103.196 62.9331 103.21 62.8422 103.262C62.7513 103.314 62.6842 103.4 62.6542 103.503C62.6241 103.605 62.6346 103.714 62.6769 103.81C62.6769 103.81 62.6769 103.81 62.6769 103.81C62.9235 104.367 63.1729 104.923 63.425 105.477C65.6823 110.439 68.1615 115.275 70.8626 119.983C70.6402 119.617 70.6397 119.076 70.8634 118.707C71.0688 118.328 71.5379 118.054 71.9679 118.058C66.5182 118.137 61.0713 118.469 55.6273 119.057C55.0192 119.123 54.4112 119.191 53.8031 119.263C53.6986 119.276 53.5987 119.322 53.5256 119.4C53.4524 119.478 53.412 119.579 53.4131 119.683C53.4143 119.787 53.457 119.888 53.5318 119.963C53.6067 120.039 53.7075 120.082 53.8123 120.092C53.8123 120.092 53.8123 120.092 53.8123 120.092C54.4217 120.147 55.0311 120.199 55.6405 120.248C61.0959 120.684 66.5484 120.866 71.9982 120.793C72.4861 120.797 73.0114 120.489 73.2451 120.06C73.4981 119.642 73.4978 119.035 73.246 118.62C70.5402 113.914 67.6124 109.335 64.4628 104.884C64.1109 104.386 63.7564 103.891 63.399 103.397Z"
                fill="#805BFF"
              />
            </svg>
            <main-form class="positie_form"></main-form>
            <div class="fundal_forma"></div>
          </div>
          <div class="how_card">
            <div class="card_header">
              <div class="step">2.</div>
              <div class="step_description">
                We analyze flights from dozens of sources
              </div>
            </div>
             <cyclical-card class="cyclic_fundal"></cyclical-card>
          </div>
          <div class="how_card">
            <div class="card_header">
              <div class="step">3.</div>
              <div class="step_description">
                You get a curated shortlist with full transparency
              </div>
            </div>
            <svg
              class="imag_arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="105"
              height="129"
              viewBox="0 0 105 129"
              fill="none"
            >
              <path
                d="M36.5797 1.54432C36.638 1.45181 36.6584 1.34006 36.6354 1.23303C36.6124 1.12601 36.5481 1.03258 36.4565 0.973181C36.3649 0.913784 36.2532 0.893152 36.1459 0.915711C36.0386 0.938263 35.9446 1.00226 35.8836 1.09301C35.8836 1.09301 35.8836 1.09301 35.8836 1.09301C34.5758 3.03864 33.3409 5.06385 32.186 7.14696C9.6188 43.8514 22.9773 98.9667 63.8883 116.88C65.49 117.729 67.022 118.495 68.6605 119.27C69.2045 119.527 69.9013 119.471 70.7374 119.095C70.8262 119.053 70.9114 119.012 70.9804 118.969C71.0497 118.925 71.0992 118.877 71.1269 118.816C71.1545 118.756 71.1583 118.687 71.1462 118.606C71.1339 118.526 71.1088 118.435 71.0826 118.34C71.0826 118.34 71.0826 118.34 71.0826 118.34C70.8222 117.466 70.4333 116.907 69.9023 116.656C68.3026 115.899 66.808 115.153 65.2465 114.328C25.6587 96.8735 12.0341 44.7633 33.0976 7.63365C34.1808 5.54419 35.3437 3.50729 36.5797 1.54432Z"
                fill="#805BFF"
              />
              <path
                d="M63.399 103.397C63.3375 103.312 63.2484 103.248 63.1449 103.222C63.0415 103.196 62.9331 103.21 62.8422 103.262C62.7513 103.314 62.6842 103.4 62.6542 103.503C62.6241 103.605 62.6346 103.714 62.6769 103.81C62.6769 103.81 62.6769 103.81 62.6769 103.81C62.9235 104.367 63.1729 104.923 63.425 105.477C65.6823 110.439 68.1615 115.275 70.8626 119.983C70.6402 119.617 70.6397 119.076 70.8634 118.707C71.0688 118.328 71.5379 118.054 71.9679 118.058C66.5182 118.137 61.0713 118.469 55.6273 119.057C55.0192 119.123 54.4112 119.191 53.8031 119.263C53.6986 119.276 53.5987 119.322 53.5256 119.4C53.4524 119.478 53.412 119.579 53.4131 119.683C53.4143 119.787 53.457 119.888 53.5318 119.963C53.6067 120.039 53.7075 120.082 53.8123 120.092C53.8123 120.092 53.8123 120.092 53.8123 120.092C54.4217 120.147 55.0311 120.199 55.6405 120.248C61.0959 120.684 66.5484 120.866 71.9982 120.793C72.4861 120.797 73.0114 120.489 73.2451 120.06C73.4981 119.642 73.4978 119.035 73.246 118.62C70.5402 113.914 67.6124 109.335 64.4628 104.884C64.1109 104.386 63.7564 103.891 63.399 103.397Z"
                fill="#805BFF"
              />
            </svg>
            <div class="fundal_forma"></div>
          </div>

          <div class="how_card">
            <div class="card_header">
              <div class="step">4.</div>
              <div class="step_description">
                Best value. <br />
                No surprises. <br />
                Smart, explainable picks.
              </div>
            </div>
            <svg
              class="imag_arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="105"
              height="129"
              viewBox="0 0 105 129"
              fill="none"
            >
              <path
                d="M36.5797 1.54432C36.638 1.45181 36.6584 1.34006 36.6354 1.23303C36.6124 1.12601 36.5481 1.03258 36.4565 0.973181C36.3649 0.913784 36.2532 0.893152 36.1459 0.915711C36.0386 0.938263 35.9446 1.00226 35.8836 1.09301C35.8836 1.09301 35.8836 1.09301 35.8836 1.09301C34.5758 3.03864 33.3409 5.06385 32.186 7.14696C9.6188 43.8514 22.9773 98.9667 63.8883 116.88C65.49 117.729 67.022 118.495 68.6605 119.27C69.2045 119.527 69.9013 119.471 70.7374 119.095C70.8262 119.053 70.9114 119.012 70.9804 118.969C71.0497 118.925 71.0992 118.877 71.1269 118.816C71.1545 118.756 71.1583 118.687 71.1462 118.606C71.1339 118.526 71.1088 118.435 71.0826 118.34C71.0826 118.34 71.0826 118.34 71.0826 118.34C70.8222 117.466 70.4333 116.907 69.9023 116.656C68.3026 115.899 66.808 115.153 65.2465 114.328C25.6587 96.8735 12.0341 44.7633 33.0976 7.63365C34.1808 5.54419 35.3437 3.50729 36.5797 1.54432Z"
                fill="#805BFF"
              />
              <path
                d="M63.399 103.397C63.3375 103.312 63.2484 103.248 63.1449 103.222C63.0415 103.196 62.9331 103.21 62.8422 103.262C62.7513 103.314 62.6842 103.4 62.6542 103.503C62.6241 103.605 62.6346 103.714 62.6769 103.81C62.6769 103.81 62.6769 103.81 62.6769 103.81C62.9235 104.367 63.1729 104.923 63.425 105.477C65.6823 110.439 68.1615 115.275 70.8626 119.983C70.6402 119.617 70.6397 119.076 70.8634 118.707C71.0688 118.328 71.5379 118.054 71.9679 118.058C66.5182 118.137 61.0713 118.469 55.6273 119.057C55.0192 119.123 54.4112 119.191 53.8031 119.263C53.6986 119.276 53.5987 119.322 53.5256 119.4C53.4524 119.478 53.412 119.579 53.4131 119.683C53.4143 119.787 53.457 119.888 53.5318 119.963C53.6067 120.039 53.7075 120.082 53.8123 120.092C53.8123 120.092 53.8123 120.092 53.8123 120.092C54.4217 120.147 55.0311 120.199 55.6405 120.248C61.0959 120.684 66.5484 120.866 71.9982 120.793C72.4861 120.797 73.0114 120.489 73.2451 120.06C73.4981 119.642 73.4978 119.035 73.246 118.62C70.5402 113.914 67.6124 109.335 64.4628 104.884C64.1109 104.386 63.7564 103.891 63.399 103.397Z"
                fill="#805BFF"
              />
            </svg>
            <div class="fundal_forma"></div>
          </div>
        </div>
      </div>
    `
  }
}

customElements.define('how-section', HowSection)
