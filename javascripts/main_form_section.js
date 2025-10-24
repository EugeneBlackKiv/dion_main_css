export class MainForm extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })

    // Crearea și atașarea HTML + CSS în interiorul DOM umbră
    this.shadowRoot.innerHTML = `
      <style>
        .main_form_section {
          display: flex;
          padding: 24px 16px 0 16px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          align-self: stretch;
          
          animation: form-anim-start 500ms linear both;
          will-change: transform;
          backface-visibility: hidden;
        }
        
        @keyframes form-anim-start {
          from {
            transform: perspective(600px) rotateX(32deg) scale(0.6);
            /*opacity: 0;*/
          }
          to {
            transform: perspective(600px) rotateX(0) scale(1); 
            /*opacity: 1;*/
          }
        }
        
        .main_form {
          display: flex;
          padding: 16px 16px 12px 16px;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          align-self: stretch;

          border-radius: 24px;
          border: 1px solid var(--outline-outline-variant, #393939);
          background: var(--blur-1, rgba(30, 30, 30, 0.24));
          box-shadow: 0 6px 24px 0 var(--shadow-card-2, #1b1b1b);
          backdrop-filter: blur(3px);
          
          transform: perspective(600px) rotateX(0) scale(1); 
          
          animation: card-anim linear both;
          animation-timeline: view();
          animation-range: contain 40% contain 120%;
          will-change: transform, opacity;
          backface-visibility: hidden;
        }
        @keyframes card-anim {
          from {
            transform: perspective(600px) rotateX(0) scale(1); 
            opacity: 1;
          }
          to {
            transform: perspective(600px) rotateX(-16deg) scale(0.9);
            opacity: 0;
          }
        }
        
        .inputs_group {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          align-self: stretch;
        }
        .inputs_row_prim {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 16px;
          align-self: stretch;
        }
        .input_parameters {
          display: flex;
          padding: 18px 16px;
          align-items: center;
          gap: 12px;
          align-self: stretch;

          border-radius: 16px;
          border: 1px solid var(--outline-outline, #45464c);
        }
        .input {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .label {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2px;

          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;

          overflow: hidden;
          color: var(--surface-on-surface, #fff);
          text-overflow: ellipsis;

          /* b1/prim */
          font-family: var(--family-body-primary, Jost);
          font-size: var(--size-body-b1, 16px);
          font-style: normal;
          font-weight: var(--weight-body-primary, 400);
          line-height: var(--line-height-body-b1, 20px); /* 125% */
        }
        .main_button_shadow {
          display: flex;
          padding: 24px 0;
          flex-direction: column;
          align-items: center;
          align-self: stretch;
          position: relative;
        }
        .main_button {
          display: flex;
          padding: 16px 24px;
          justify-content: center;
          align-items: center;
          gap: 10px;
          align-self: stretch;

          border-radius: 16px;
          background: radial-gradient(
            42.38% 100% at 50% 100%,
            #b19dff 0%,
            #643ae2 100%
          );
          box-shadow: 0 4px 4px 0 rgba(255, 255, 255, 0.48) inset;

          color: var(--primary-on-primary, #fff);

          /* s1/sec */
          font-family: var(--family-subtitle-primary, Jost);
          font-size: var(--size-subtitle-s1, 18px);
          font-style: normal;
          font-weight: var(--weight-subtitle-secondary, 500);
          line-height: var(--line-height-subtitle-s1, 22px); /* 122.222% */
        }
        .light_shadow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -46%);
          z-index: -1;
        }
        .icon_color {
          fill: var(--surface-on-surface, #fff);
        }
      </style>

      <div class="main_form_section">
        <div class="main_form">
          <div class="inputs_group">
            <div class="inputs_row_prim">
              <div class="input_parameters">
                <div class="input">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      class="icon_color"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.8815 4.51854C15.9397 2.75326 13.1019 2.38904 10.7772 3.60672L6.17191 6.01903C6.01693 6.10021 5.82718 6.07125 5.70346 5.94754L4.40886 4.65294C4.07407 4.31815 3.57886 4.20125 3.12969 4.35097L1.94561 4.74566C1.26955 4.97102 0.918396 5.71511 1.17422 6.38024L2.38593 9.53071C2.77906 10.5528 3.8964 11.0961 4.94308 10.774L8.13839 9.79087L7.86331 10.7536C7.62398 11.5913 8.42107 12.3545 9.24754 12.079L11.4964 11.3294C11.7882 11.2321 12.0339 11.0307 12.1865 10.7637L13.5268 8.41805C13.5808 8.32361 13.6695 8.25402 13.7741 8.22414L18.13 6.97961C18.9463 6.74638 19.1893 5.70745 18.5611 5.13636L17.8815 4.51854ZM11.1639 4.34492C13.1786 3.28959 15.638 3.60525 17.3209 5.13516L18.0005 5.75298C18.1455 5.88477 18.0894 6.12452 17.901 6.17834L13.5452 7.42287C13.2314 7.51251 12.9652 7.72129 12.8033 8.0046L11.4629 10.3502C11.4121 10.4392 11.3302 10.5064 11.2329 10.5388L8.98402 11.2884C8.7933 11.352 8.60935 11.1759 8.66458 10.9826L9.10848 9.42891C9.2175 9.04737 8.85995 8.69697 8.48068 8.81366L4.69801 9.97756C4.07 10.1708 3.3996 9.84483 3.16372 9.23156L1.952 6.08109C1.86673 5.85938 1.98378 5.61135 2.20914 5.53623L3.39322 5.14154C3.54294 5.09163 3.70801 5.1306 3.81961 5.2422L5.23551 6.6581C5.54479 6.96738 6.01917 7.03977 6.40662 6.83682L11.1639 4.34492Z"
                      fill="white"
                    />
                    <path
                      class="icon_color"
                      d="M1.66667 16.25C1.43655 16.25 1.25 16.4365 1.25 16.6667C1.25 16.8968 1.43655 17.0833 1.66667 17.0833H15C15.2301 17.0833 15.4167 16.8968 15.4167 16.6667C15.4167 16.4365 15.2301 16.25 15 16.25H1.66667Z"
                      fill="white"
                    />
                  </svg>
                  <div class="label">Los Angeles</div>
                </div>
              </div>
              <div class="input_parameters">
                <div class="input">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      class="icon_color"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.3182 11.0759C16.5641 8.56231 14.3201 6.7875 11.7004 6.63274L6.52279 6.32687C6.34086 6.31612 6.18703 6.18839 6.14302 6.01154L5.70389 4.24676C5.58957 3.7873 5.22547 3.43188 4.76339 3.32866L3.54528 3.05656C2.84979 2.9012 2.16534 3.35783 2.04172 4.05966L1.4562 7.38395C1.26624 8.46245 1.94369 9.50392 3.00662 9.76745L6.25153 10.5719L5.51956 11.2552C4.88271 11.8496 5.17238 12.9145 6.0226 13.1044L8.33613 13.6212C8.63628 13.6882 8.95061 13.6423 9.219 13.4921L11.5766 12.1729C11.6715 12.1198 11.7835 12.1059 11.8885 12.1342L16.2626 13.3129C17.0823 13.5338 17.8261 12.7688 17.5821 11.9556L17.3182 11.0759ZM11.6512 7.46462C13.9216 7.59875 15.8665 9.13692 16.52 11.3154L16.7839 12.1951C16.8402 12.3827 16.6686 12.5593 16.4794 12.5083L12.1053 11.3296C11.7902 11.2447 11.4545 11.2864 11.1697 11.4457L8.81209 12.7649C8.72263 12.8149 8.61785 12.8302 8.5178 12.8079L6.20428 12.2911C6.00807 12.2473 5.94122 12.0015 6.08819 11.8643L7.26939 10.7618C7.55947 10.491 7.43369 10.0065 7.04854 9.91096L3.20715 8.9586C2.5694 8.80049 2.16292 8.17561 2.2769 7.5285L2.86242 4.20422C2.90363 3.97027 3.13178 3.81806 3.36361 3.86985L4.58172 4.14195C4.73574 4.17635 4.85711 4.29483 4.89522 4.44798L5.33435 6.21276C5.46637 6.74331 5.92787 7.12651 6.47365 7.15875L11.6512 7.46462Z"
                      fill="white"
                    />
                    <path
                      class="icon_color"
                      d="M5 16.25C4.76988 16.25 4.58333 16.4366 4.58333 16.6667C4.58333 16.8968 4.76988 17.0834 5 17.0834H18.3333C18.5635 17.0834 18.75 16.8968 18.75 16.6667C18.75 16.4366 18.5635 16.25 18.3333 16.25H5Z"
                      fill="white"
                    />
                  </svg>
                  <div class="label">Singapore</div>
                </div>
              </div>
            </div>
            <div class="inputs_row_prim">
              <div class="input_parameters">
                <div class="input">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      class="icon_color"
                      d="M6.66667 11.6667C7.12691 11.6667 7.5 11.2936 7.5 10.8334C7.5 10.3731 7.12691 10 6.66667 10C6.20643 10 5.83333 10.3731 5.83333 10.8334C5.83333 11.2936 6.20643 11.6667 6.66667 11.6667Z"
                      fill="white"
                    />
                    <path
                      class="icon_color"
                      d="M7.5 14.1667C7.5 14.6269 7.12691 15 6.66667 15C6.20643 15 5.83333 14.6269 5.83333 14.1667C5.83333 13.7064 6.20643 13.3334 6.66667 13.3334C7.12691 13.3334 7.5 13.7064 7.5 14.1667Z"
                      fill="white"
                    />
                    <path
                      class="icon_color"
                      d="M10 15C10.4602 15 10.8333 14.6269 10.8333 14.1667C10.8333 13.7064 10.4602 13.3334 10 13.3334C9.53976 13.3334 9.16667 13.7064 9.16667 14.1667C9.16667 14.6269 9.53976 15 10 15Z"
                      fill="white"
                    />
                    <path
                      class="icon_color"
                      d="M10.8333 10.8334C10.8333 11.2936 10.4602 11.6667 10 11.6667C9.53976 11.6667 9.16667 11.2936 9.16667 10.8334C9.16667 10.3731 9.53976 10 10 10C10.4602 10 10.8333 10.3731 10.8333 10.8334Z"
                      fill="white"
                    />
                    <path
                      class="icon_color"
                      d="M13.3333 11.6667C13.7936 11.6667 14.1667 11.2936 14.1667 10.8334C14.1667 10.3731 13.7936 10 13.3333 10C12.8731 10 12.5 10.3731 12.5 10.8334C12.5 11.2936 12.8731 11.6667 13.3333 11.6667Z"
                      fill="white"
                    />
                    <path
                      class="icon_color"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5 0.416687C5.23012 0.416687 5.41667 0.603235 5.41667 0.833354V2.27199C5.55288 2.24892 5.69334 2.22879 5.83828 2.21118C6.89067 2.08335 8.23314 2.08335 9.97087 2.08335H10.0291C11.7669 2.08335 13.1093 2.08335 14.1617 2.21118C14.3067 2.22879 14.4471 2.24892 14.5833 2.27199V0.833354C14.5833 0.603235 14.7699 0.416687 15 0.416687C15.2301 0.416687 15.4167 0.603235 15.4167 0.833354V2.46959C15.9137 2.62854 16.3449 2.85543 16.7266 3.18149C16.9092 3.33743 17.0793 3.50747 17.2352 3.69005C17.8091 4.36202 18.0758 5.18699 18.2055 6.25496C18.3333 7.30736 18.3333 8.64983 18.3333 10.3876V10.4458C18.3333 12.1835 18.3333 13.526 18.2055 14.5784C18.0758 15.6464 17.8091 16.4714 17.2352 17.1433C17.0793 17.3259 16.9092 17.4959 16.7266 17.6519C16.0547 18.2258 15.2297 18.4925 14.1617 18.6222C13.1093 18.75 11.7669 18.75 10.0291 18.75H9.97089C8.23315 18.75 6.89067 18.75 5.83828 18.6222C4.7703 18.4925 3.94534 18.2258 3.27336 17.6519C3.09079 17.4959 2.92074 17.3259 2.76481 17.1433C2.19089 16.4714 1.92423 15.6464 1.7945 14.5784C1.66666 13.526 1.66666 12.1835 1.66667 10.4458V10.3876C1.66666 8.64982 1.66666 7.30735 1.7945 6.25496C1.92423 5.18699 2.19089 4.36202 2.76481 3.69005C2.92074 3.50747 3.09079 3.33743 3.27336 3.18149C3.65513 2.85543 4.08629 2.62854 4.58333 2.46959V0.833354C4.58333 0.603235 4.76988 0.416687 5 0.416687ZM14.5833 3.11869V4.16669C14.5833 4.39681 14.7699 4.58335 15 4.58335C15.2301 4.58335 15.4167 4.39681 15.4167 4.16669V3.35474C15.7135 3.47472 15.9638 3.62585 16.1854 3.81516C16.3348 3.94275 16.4739 4.08187 16.6015 4.23126C17.0106 4.71023 17.2414 5.32278 17.3648 6.25002H2.63516C2.75862 5.32278 2.9894 4.71023 3.39848 4.23126C3.52606 4.08187 3.66519 3.94275 3.81457 3.81516C4.03623 3.62585 4.2865 3.47472 4.58333 3.35474V4.16669C4.58333 4.39681 4.76988 4.58335 5 4.58335C5.23012 4.58335 5.41667 4.39681 5.41667 4.16669V3.11869C5.57932 3.08759 5.7529 3.06101 5.93876 3.03843C6.9351 2.91741 8.2271 2.91669 10 2.91669C11.7729 2.91669 13.0649 2.91741 14.0612 3.03843C14.2471 3.06101 14.4207 3.08759 14.5833 3.11869ZM2.5 10.4167C2.5 9.04702 2.50043 7.96438 2.55643 7.08335H17.4436C17.4996 7.96438 17.5 9.04702 17.5 10.4167C17.5 12.1896 17.4993 13.4816 17.3783 14.4779C17.2584 15.4646 17.0259 16.1052 16.6015 16.6021C16.4739 16.7515 16.3348 16.8906 16.1854 17.0182C15.6885 17.4426 15.0479 17.6751 14.0612 17.7949C13.0649 17.916 11.7729 17.9167 10 17.9167C8.2271 17.9167 6.9351 17.916 5.93876 17.7949C4.95213 17.6751 4.31147 17.4426 3.81457 17.0182C3.66519 16.8906 3.52606 16.7515 3.39848 16.6021C2.97409 16.1052 2.7416 15.4646 2.62175 14.4779C2.50072 13.4816 2.5 12.1896 2.5 10.4167Z"
                      fill="white"
                    />
                  </svg>
                  <div class="label">Apr 17 - Apr 24</div>
                </div>
              </div>
              <div class="input_parameters">
                <div class="input">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      class="icon_color"
                      d="M10 12.0003C14.3385 12.0003 17.3504 14.6271 17.9875 17.3877L17.0125 17.6123C16.4957 15.3729 13.9457 12.9997 10 12.9997C6.05431 12.9997 3.50435 15.3729 2.98747 17.6123L2.01253 17.3877C2.64959 14.6271 5.66152 12.0003 10 12.0003ZM10 2.00031C12.3472 2.00031 14.2497 3.90277 14.2497 6.24998C14.2497 8.59719 12.3472 10.4997 10 10.4997C7.65279 10.4997 5.75032 8.59719 5.75032 6.24998C5.75032 3.90277 7.65279 2.00031 10 2.00031ZM10 2.99965C8.20507 2.99965 6.74967 4.45505 6.74967 6.24998C6.74967 8.04491 8.20507 9.50031 10 9.50031C11.7949 9.50031 13.2503 8.04491 13.2503 6.24998C13.2503 4.45505 11.7949 2.99965 10 2.99965Z"
                      fill="white"
                    />
                  </svg>
                  <div class="label">1 Adult , Economy</div>
                </div>
              </div>
            </div>
          </div>
          <div class="main_button_shadow">
            <div class="main_button">Next</div>
            <svg
              class="light_shadow"
              xmlns="http://www.w3.org/2000/svg"
              width="274"
              height="102"
              viewBox="0 0 274 102"
              fill="none"
            >
              <g filter="url(#filter0_f_1220_80236)">
                <ellipse cx="137" cy="51" rx="109" ry="23" fill="#977CFF" />
              </g>
              <defs>
                <filter
                  id="filter0_f_1220_80236"
                  x="0.700001"
                  y="0.700001"
                  width="272.6"
                  height="100.6"
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
                    stdDeviation="13.65"
                    result="effect1_foregroundBlur_1220_80236"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    `
  }
}

customElements.define('main-form', MainForm)
