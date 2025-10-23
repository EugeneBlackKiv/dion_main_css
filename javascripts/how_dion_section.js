import './main_form_section.js'
import './cyclical_card.js'
import './flight_card_v2.js'
import './track_prices.js'

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
          contain: content;
          /*overflow: hidden;*/

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
        .final_step{
          color: var(--tertiary-tertiary, #62AB03);
  
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
          transform: translateX(-45%) translateY(-45%);
        }

        .position_logo {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-11%) translateY(-24%);
          z-index: 4;
        }
        .position_raze {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-38%) translateY(-38%);
          z-index: 3;
        }
        .logo_fundal {
          position: absolute;
          top: -240px;
          left: 50%;

          transform: translateX(-50%) translateY(-280px);
          opacity: 0;

          animation: logo-anim linear both;
          animation-timeline: view();
          animation-range: contain 45% contain 80%;
          will-change: transform, opacity;
          backface-visibility: hidden;
        }
        @keyframes logo-anim {
          from {
            transform: translateX(-50%) translateY(-280px) scale(1);
            opacity: 0;
          }
          to {
            transform: translateX(-50%) translateY(0) scale(0.8);
            opacity: 1;
          }
        }
        .card_1 {
          position: absolute;
          top: 50%;
          left: 50%;
          transform-origin: 0% 50%;
          transform: translate(-30%, -43%) scale(0.68) rotate(-15deg);
          
          animation-name: card_one_anim;
          animation-duration: 6s;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          will-change: transform, opacity;
        }

        @keyframes card_one_anim {
          0% {
            transform: translate(-30%, -43%) scale(0.68) rotate(-15deg);
          }
          50% {
            transform: translate(-30%, -43%) scale(0.68) rotate(-10deg);
          }
          100% {
            transform: translate(-30%, -43%) scale(0.68) rotate(-15deg);
          }
        }         
        .light_sec_2{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-26%, -98%) rotate(-15deg);
          z-index: 1;
          
          width: 173px;
          height: 65px;
          
          border-radius: 124px;
          opacity: var(--surface-on-surface-opa-senary, 0.24);
          background: var(--primary-primary, #805BFF);
          filter: blur(24px);
        }       
        .card_2 {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-56%, -36%) scale(0.68) rotate(0);
          z-index: 2;
        }   
        .light_sec_3{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-36%, 0%) rotate(-15deg);
          z-index: 3;
          
          width: 173px;
          height: 65px;
          
          border-radius: 124px;
          opacity: var(--surface-on-surface-opa-senary, 0.24);
          background: var(--primary-primary, #805BFF);
          filter: blur(24px);
        }   

        .card_3 {
          position: absolute;
          top: 50%;
          left: 50%;
          transform-origin: 0% 50%;
          transform: translate(-52%, -31%) scale(0.68) rotate(15deg);
          z-index: 4;
          
          animation-name: card_one_thre;
          animation-duration: 6s;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          will-change: transform, opacity;
        }

        @keyframes card_one_thre {
          0% {
            transform: translate(-52%, -31%) scale(0.68) rotate(15deg);
          }
          50% {
            transform: translate(-52%, -31%) scale(0.68) rotate(10deg);
          }
          100% {
            transform: translate(-52%, -31%) scale(0.68) rotate(15deg);
          }
        }  
        .position_arrow_sec{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(54%, -104%) rotate(11deg);
          z-index: 5;
        }
        .position_arrow_qua{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-216%, -135%) rotate(11deg);
          z-index: 5;
        }
        .light_qua{
          width: 194px;
          height: 74px;
          
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-44%, -86%) rotate(-18deg);

          border-radius: 122px;
          opacity: var(--surface-on-surface-opa-senary, 0.24);
          background: var(--tertiary-tertiary, #62AB03);
          filter: blur(36px);
          z-index: 5;
        }
        .track{
          position: absolute;
          top: 50%;
          left: 50%;
          transform-origin: 0% 50%;
          transform: translate(-42%, -12%) rotate(-15deg);
          z-index: 4;
        
        }

      </style>

      <div class="how_dion_section">
        <svg
          class="logo_fundal"
          xmlns="http://www.w3.org/2000/svg"
          width="190"
          height="189"
          viewBox="0 0 190 189"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M86.956 5.08824C90.2702 -1.54016 99.7297 -1.54015 103.044 5.08824L188.492 175.986C191.435 181.872 187.268 188.781 180.761 188.995L180.449 189H9.55069C2.86582 189 -1.48149 181.965 1.50772 175.986L86.956 5.08824ZM49.5673 155.276H140.433L94.9999 64.4095L49.5673 155.276Z"
            fill="#805BFF"
            fill-opacity="0.08"
          />
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
            <svg
              class="position_logo"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="49"
              viewBox="0 0 50 49"
              fill="none"
            >
              <path
                d="M22.8399 1.57018C23.6946 -0.139279 26.1335 -0.139279 26.9883 1.57018L49.0256 45.6439C49.7725 47.1377 48.7438 48.8872 47.1115 48.9954L2.87676 49.0008L2.71665 48.9954C1.08433 48.8872 0.0556509 47.1377 0.802557 45.6439L22.8399 1.57018ZM13.1965 40.3037H36.6316L24.9141 16.8686L13.1965 40.3037Z"
                fill="white"
              />
            </svg>
            <svg
              class="position_raze"
              xmlns="http://www.w3.org/2000/svg"
              width="157"
              height="157"
              viewBox="0 0 157 157"
              fill="none"
            >
              <g opacity="0.32" filter="url(#filter0_f_1283_94585)">
                <path
                  d="M91.4242 40.2605L112.547 29.6999V44.7081H127.554L116.993 65.8292L142.562 78.6138L116.992 91.3967L127.554 112.52H112.547V127.527L91.4242 116.966L78.6402 142.535L65.8555 116.966L44.7344 127.527V112.52H29.7263L40.2868 91.3973L14.7188 78.6138L40.2868 65.8292L29.7263 44.7081H44.7344V29.6999L65.8555 40.2605L78.6402 14.6924L91.4242 40.2605Z"
                  fill="#805BFF"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_1283_94585"
                  x="0.764019"
                  y="0.737652"
                  width="155.753"
                  height="155.752"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="6.97737"
                    result="effect1_foregroundBlur_1283_94585"
                  />
                </filter>
              </defs>
            </svg>
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
              class="position_arrow_sec"
              xmlns="http://www.w3.org/2000/svg"
              width="107"
              height="130"
              viewBox="0 0 107 130"
              fill="none"
            >
              <path
                d="M68.4752 1.26772C68.4154 1.17557 68.3935 1.06359 68.4151 0.95577C68.4368 0.847955 68.5001 0.75324 68.5913 0.692343C68.6826 0.631446 68.7944 0.609221 68.9025 0.630438C69.0106 0.651649 69.1059 0.714677 69.1684 0.805009C70.5082 2.74186 71.776 4.75963 72.9641 6.83664C96.1265 43.4037 83.4483 98.9476 42.5932 117.492C40.9957 118.366 39.467 119.156 37.8315 119.957C37.2885 120.222 36.5877 120.175 35.7428 119.809C35.653 119.768 35.5669 119.728 35.497 119.685C35.4268 119.642 35.3764 119.595 35.3479 119.534C35.3193 119.474 35.3146 119.405 35.3256 119.323C35.3368 119.242 35.3609 119.151 35.3859 119.055C35.6358 118.174 36.0189 117.606 36.549 117.347C38.1456 116.566 39.637 115.796 41.1945 114.946C80.7267 96.881 93.7126 44.3521 72.0549 7.33778C70.9387 5.25343 69.7432 3.22295 68.4752 1.26772Z"
                fill="#805BFF"
              />
              <path
                d="M42.901 103.94C42.9616 103.854 43.0503 103.788 43.1539 103.761C43.2574 103.734 43.3665 103.747 43.4585 103.798C43.5505 103.849 43.6191 103.934 43.6506 104.036C43.6822 104.138 43.6731 104.248 43.6319 104.345C43.3917 104.908 43.1487 105.47 42.9028 106.03C40.702 111.045 38.2766 115.936 35.6266 120.702C35.845 120.331 35.8383 119.787 35.6086 119.42C35.3972 119.042 34.9223 118.773 34.4904 118.783C39.9658 118.788 45.4417 119.05 50.9183 119.567C51.53 119.624 52.1417 119.685 52.7535 119.75C52.8586 119.761 52.9596 119.806 53.0341 119.883C53.1086 119.96 53.1506 120.061 53.1509 120.166C53.1511 120.271 53.1096 120.372 53.0354 120.449C52.9612 120.526 52.8605 120.571 52.7554 120.582C52.1439 120.645 51.5325 120.706 50.921 120.763C45.4469 121.275 39.9721 121.53 34.4967 121.53C34.0067 121.541 33.4748 121.239 33.2343 120.811C32.9746 120.394 32.9667 119.785 33.2141 119.364C35.8689 114.601 38.7483 109.962 41.8524 105.448C42.1991 104.944 42.5487 104.441 42.901 103.94Z"
                fill="#805BFF"
              />
            </svg>
            <flight-card class="card_1"></flight-card>
            <div class="light_sec_2"></div>
            <flight-card class="card_2"></flight-card>
            <div class="light_sec_3"></div>
            <flight-card class="card_3"></flight-card>
          </div>

          <div class="how_card">
            <div class="card_header">
              <div class="final_step">✓</div>
              <div class="step_description">
                Best value. <br />
                No surprises. <br />
                Smart, explainable picks.
              </div>
            </div>
            <svg class="position_arrow_qua" xmlns="http://www.w3.org/2000/svg" width="84" height="102" viewBox="0 0 84 102" fill="none">
              <path d="M30.0024 0.996984C30.0494 0.924519 30.0667 0.836457 30.0496 0.751665C30.0326 0.666878 29.9828 0.592393 29.9111 0.544502C29.8393 0.496612 29.7513 0.479133 29.6663 0.495819C29.5813 0.512499 29.5064 0.562064 29.4572 0.633103C28.4036 2.15627 27.4066 3.74308 26.4723 5.37647C8.25694 34.1334 18.2273 77.8141 50.3564 92.3978C51.6127 93.0852 52.8149 93.7064 54.1011 94.3359C54.5281 94.5447 55.0792 94.5078 55.7437 94.2199C55.8143 94.1874 55.882 94.1562 55.937 94.1225C55.9922 94.0884 56.0318 94.0511 56.0542 94.0036C56.0767 93.9562 56.0804 93.902 56.0718 93.8378C56.0629 93.774 56.044 93.702 56.0243 93.627C55.8278 92.9337 55.5266 92.4877 55.1097 92.2838C53.854 91.6693 52.6812 91.064 51.4564 90.3956C20.3676 76.1888 10.1553 34.8793 27.1872 5.77058C28.0651 4.13141 29.0052 2.53461 30.0024 0.996984Z" fill="#805BFF"/>
              <path d="M50.1144 81.7401C50.0667 81.6724 49.9969 81.6207 49.9155 81.5993C49.8341 81.5779 49.7483 81.588 49.6759 81.6281C49.6036 81.6682 49.5496 81.7356 49.5249 81.8159C49.5 81.8962 49.5071 81.9826 49.5396 82.0588C49.7285 82.5017 49.9196 82.9435 50.1129 83.384C51.8437 87.3279 53.7511 91.1738 55.8351 94.9218C55.6633 94.6303 55.6686 94.2026 55.8492 93.9139C56.0155 93.6168 56.389 93.4048 56.7286 93.4129C52.4227 93.4172 48.1163 93.6226 43.8094 94.0292C43.3284 94.0746 42.8473 94.1226 42.3662 94.173C42.2835 94.1817 42.2041 94.2174 42.1455 94.278C42.0869 94.3385 42.0539 94.4181 42.0537 94.5004C42.0535 94.5828 42.0862 94.6624 42.1445 94.7228C42.2028 94.7833 42.2821 94.8189 42.3647 94.8276C42.8456 94.8775 43.3264 94.925 43.8073 94.9699C48.1123 95.3723 52.4177 95.5734 56.7236 95.5734C57.109 95.5821 57.5273 95.3444 57.7164 95.0078C57.9206 94.6801 57.9269 94.2009 57.7323 93.8699C55.6445 90.124 53.3801 86.476 50.939 82.926C50.6663 82.5295 50.3914 82.1342 50.1144 81.7401Z" fill="#805BFF"/>
            </svg>
            <div class="light_qua"></div>
            <track-price class="track"></track-price>
          </div>
        </div>
      </div>
    `
  }
}

customElements.define('how-section', HowSection)
