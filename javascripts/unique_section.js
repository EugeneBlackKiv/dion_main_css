export class UniqueSection extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })

    // Crearea și atașarea HTML + CSS în interiorul DOM umbră
    this.shadowRoot.innerHTML = `
      <style>
        .unique_section {
          margin-top: 140px;
          display: flex;
          padding: 0px 16px 0 16px;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          align-self: stretch;
        }
        .unique_title_group {
          display: flex;
          width: 328px;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .main_title {
          display: flex;
          padding: 0 16px;
          justify-content: center;
          align-items: center;
          align-content: center;
          gap: 0 12px;
          align-self: stretch;
          flex-wrap: wrap;

          color: var(--surface-on-surface, #fff);

          /* h3/sec */
          font-family: var(--family-heading-primary, Jost);
          font-size: var(--size-heading-h3, 28px);
          font-style: normal;
          font-weight: var(--weight-heading-secondary, 500);
          line-height: var(--line-height-heading-h3, 32px); /* 114.286% */
          
          transform: translateY(-140px) scale(0.8);
          opacity: 0;

          animation: title-anim linear forwards;
          animation-timeline: view();
          animation-range: cover 5% cover 30%;
        }
        @keyframes title-anim {
          from {
            transform: translateY(-140px) scale(0.6);
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
        .vs_title_group {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 22px;

          color: var(--primary-primary, #805bff);
          text-align: right;

          /* h6/sec */
          font-family: var(--family-heading-primary, Jost);
          font-size: var(--size-heading-h6, 20px);
          font-style: normal;
          font-weight: var(--weight-heading-secondary, 500);
          line-height: var(--line-height-heading-h6, 24px); /* 120% */
        }
        .unique_card_list {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 24px;
          align-self: stretch;
        }
        .vs_row {
          display: flex;
          justify-content: center;
          align-items: center;
          align-self: stretch;
          transform: perspective(600px) rotateX(-90deg) scale(0.8);  
          
          animation: card-anim linear forwards;
          animation-timeline: view();
          animation-range: entry 0% contain 10%;
        }
        @keyframes card-anim {
          from {
            transform: perspective(600px) rotateX(-90deg) scale(0.8); 
          }
          to {
            transform: perspective(600px) rotateX(0) scale(1); 
          }
        }
        
        .decor_left {
          width: 24px;
          align-self: stretch;

          border-radius: 24px 0 0 24px;
          border-top: 1px solid var(--primary-primary, #805bff);
          border-bottom: 1px solid var(--primary-primary, #805bff);
          border-left: 1px solid var(--primary-primary, #805bff);
          background: var(--blur-3, rgba(30, 30, 30, 0.56));
          backdrop-filter: blur(3px);
        }
        .decor_right {
          width: 24px;
          align-self: stretch;

          border-radius: 0 24px 24px 0;
          border-top: 1px solid var(--primary-primary, #805bff);
          border-right: 1px solid var(--primary-primary, #805bff);
          border-bottom: 1px solid var(--primary-primary, #805bff);
          background: var(--blur-3, rgba(30, 30, 30, 0.56));
          backdrop-filter: blur(3px);
        }
        .card_body {
          display: flex;
          padding: 8px 0;
          flex-direction: column;
          align-items: center;
          flex: 1 0 0;

          border-top: 1px solid var(--outline-outline-variant, #393939);
          border-bottom: 1px solid var(--outline-outline-variant, #393939);
          background: var(--blur-3, rgba(30, 30, 30, 0.56));
          backdrop-filter: blur(3px);
        }
        .vs_arg {
          display: flex;
          padding: 8px 16px;
          align-items: center
          align-self: stretch;

        }
        .vs_arg_label {
          flex: 1 0 0;

          color: var(--surface-on-surface, #fff);
          text-align: center;

          /* h6/prim */
          font-family: var(--family-heading-primary, Jost);
          font-size: var(--size-heading-h6, 20px);
          font-style: normal;
          font-weight: var(--weight-heading-primary, 400);
          line-height: var(--line-height-heading-h6, 24px); /* 120% */
        }
      </style>

      <div class="unique_section">
        <div class="unique_title_group">
          <div class="main_title">
            What Makes
            <div class="dion_logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  className="logo_color"
                  d="M18.0723 18.5H2.92773L10.5 3.35449L18.0723 18.5Z"
                  stroke="white"
                  stroke-width="3"
                />
              </svg>
              ion
            </div>
            Unique
          </div>
          <div class="vs_title_group">
            Old Way
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
            >
              <circle
                cx="12.3818"
                cy="12.3818"
                r="11.8103"
                transform="matrix(0.706978 0.707236 -0.706978 0.707236 19.9888 3.4856)"
                fill="#805BFF"
                stroke="#805BFF"
                stroke-width="1.14286"
              />
              <circle
                opacity="0.24"
                cx="18.1943"
                cy="18.1943"
                r="18.1943"
                transform="matrix(0.706978 0.707236 -0.706978 0.707236 19.9888 -4.73608)"
                fill="#805BFF"
              />
              <path
                d="M39.7906 2.20122C40.0695 1.9223 40.0697 1.46996 39.7908 1.19089C39.512 0.911817 39.0598 0.911698 38.7809 1.19062L39.2857 1.69592L39.7906 2.20122ZM39.2857 1.69592L38.7809 1.19062L28.0652 11.9046L28.57 12.4099L29.0749 12.9152L39.7906 2.20122L39.2857 1.69592Z"
                fill="#805BFF"
              />
              <path
                d="M0.209204 39.7769C-0.0697123 40.0558 -0.069746 40.5082 0.209128 40.7872C0.488002 41.0662 0.940181 41.0663 1.2191 40.7873L0.71415 40.2821L0.209204 39.7769ZM11.4238 29.5701L10.9188 29.0649L0.209204 39.7769L0.71415 40.2821L1.2191 40.7873L11.9287 30.0753L11.4238 29.5701Z"
                fill="#805BFF"
              />
              <path
                d="M12.6758 16.6145L15.8167 26.3898C15.8592 26.522 16.0462 26.522 16.0887 26.3898L19.2296 16.6145"
                stroke="white"
                stroke-width="1.42857"
                stroke-linecap="round"
              />
              <path
                d="M27.2403 18.968C27.2403 17.6682 26.1866 16.6145 24.8868 16.6145H23.7682C22.4683 16.6145 21.4146 17.6682 21.4146 18.968C21.4146 20.2678 22.4683 21.3216 23.7682 21.3216H24.4945C26.011 21.3216 27.2403 22.5509 27.2403 24.0673C27.2403 25.5838 26.011 26.8131 24.4945 26.8131H24.1604C22.644 26.8131 21.4146 25.5838 21.4146 24.0673"
                stroke="white"
                stroke-width="1.42857"
                stroke-linecap="round"
              />
            </svg>
            Dion AI
          </div>
        </div>
        <div class="unique_card_list">
          <div class="vs_row">
            <div class="decor_left"></div>
            <div class="card_body">
              <div class="vs_arg">
                <div class="vs_arg_label">User sets filters manually</div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="41"
                viewBox="0 0 40 41"
                fill="none"
              >
                <circle
                  cx="12.3818"
                  cy="12.3818"
                  r="11.8103"
                  transform="matrix(0.706978 0.707236 -0.706978 0.707236 19.9888 2.9856)"
                  fill="#805BFF"
                  stroke="#805BFF"
                  stroke-width="1.14286"
                />
                <circle
                  opacity="0.24"
                  cx="18.1943"
                  cy="18.1943"
                  r="18.1943"
                  transform="matrix(0.706978 0.707236 -0.706978 0.707236 19.9888 -5.23608)"
                  fill="#805BFF"
                />
                <path
                  d="M39.7906 1.70122C40.0695 1.4223 40.0697 0.969956 39.7908 0.690886C39.512 0.411817 39.0598 0.411698 38.7809 0.690622L39.2857 1.19592L39.7906 1.70122ZM39.2857 1.19592L38.7809 0.690622L28.0652 11.4046L28.57 11.9099L29.0749 12.4152L39.7906 1.70122L39.2857 1.19592Z"
                  fill="#805BFF"
                />
                <path
                  d="M0.209204 39.2769C-0.0697123 39.5558 -0.069746 40.0082 0.209128 40.2872C0.488002 40.5662 0.940181 40.5663 1.2191 40.2873L0.71415 39.7821L0.209204 39.2769ZM11.4238 29.0701L10.9188 28.5649L0.209204 39.2769L0.71415 39.7821L1.2191 40.2873L11.9287 29.5753L11.4238 29.0701Z"
                  fill="#805BFF"
                />
                <path
                  d="M12.6758 16.1145L15.8167 25.8898C15.8592 26.022 16.0462 26.022 16.0887 25.8898L19.2296 16.1145"
                  stroke="white"
                  stroke-width="1.42857"
                  stroke-linecap="round"
                />
                <path
                  d="M27.2403 18.468C27.2403 17.1682 26.1866 16.1145 24.8868 16.1145H23.7682C22.4683 16.1145 21.4146 17.1682 21.4146 18.468C21.4146 19.7678 22.4683 20.8216 23.7682 20.8216H24.4945C26.011 20.8216 27.2403 22.0509 27.2403 23.5673C27.2403 25.0838 26.011 26.3131 24.4945 26.3131H24.1604C22.644 26.3131 21.4146 25.0838 21.4146 23.5673"
                  stroke="white"
                  stroke-width="1.42857"
                  stroke-linecap="round"
                />
              </svg>
              <div class="vs_arg">
                <div class="vs_arg_label">
                  Dion learns from preferences + context
                </div>
              </div>
            </div>
            <div class="decor_right"></div>
          </div>
          <div class="vs_row">
            <div class="decor_left"></div>
            <div class="card_body">
              <div class="vs_arg">
                <div class="vs_arg_label">User compares results side-by-side</div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="41"
                viewBox="0 0 40 41"
                fill="none"
              >
                <circle
                  cx="12.3818"
                  cy="12.3818"
                  r="11.8103"
                  transform="matrix(0.706978 0.707236 -0.706978 0.707236 19.9888 2.9856)"
                  fill="#805BFF"
                  stroke="#805BFF"
                  stroke-width="1.14286"
                />
                <circle
                  opacity="0.24"
                  cx="18.1943"
                  cy="18.1943"
                  r="18.1943"
                  transform="matrix(0.706978 0.707236 -0.706978 0.707236 19.9888 -5.23608)"
                  fill="#805BFF"
                />
                <path
                  d="M39.7906 1.70122C40.0695 1.4223 40.0697 0.969956 39.7908 0.690886C39.512 0.411817 39.0598 0.411698 38.7809 0.690622L39.2857 1.19592L39.7906 1.70122ZM39.2857 1.19592L38.7809 0.690622L28.0652 11.4046L28.57 11.9099L29.0749 12.4152L39.7906 1.70122L39.2857 1.19592Z"
                  fill="#805BFF"
                />
                <path
                  d="M0.209204 39.2769C-0.0697123 39.5558 -0.069746 40.0082 0.209128 40.2872C0.488002 40.5662 0.940181 40.5663 1.2191 40.2873L0.71415 39.7821L0.209204 39.2769ZM11.4238 29.0701L10.9188 28.5649L0.209204 39.2769L0.71415 39.7821L1.2191 40.2873L11.9287 29.5753L11.4238 29.0701Z"
                  fill="#805BFF"
                />
                <path
                  d="M12.6758 16.1145L15.8167 25.8898C15.8592 26.022 16.0462 26.022 16.0887 25.8898L19.2296 16.1145"
                  stroke="white"
                  stroke-width="1.42857"
                  stroke-linecap="round"
                />
                <path
                  d="M27.2403 18.468C27.2403 17.1682 26.1866 16.1145 24.8868 16.1145H23.7682C22.4683 16.1145 21.4146 17.1682 21.4146 18.468C21.4146 19.7678 22.4683 20.8216 23.7682 20.8216H24.4945C26.011 20.8216 27.2403 22.0509 27.2403 23.5673C27.2403 25.0838 26.011 26.3131 24.4945 26.3131H24.1604C22.644 26.3131 21.4146 25.0838 21.4146 23.5673"
                  stroke="white"
                  stroke-width="1.42857"
                  stroke-linecap="round"
                />
              </svg>
              <div class="vs_arg">
                <div class="vs_arg_label">
                  Dion presents a best-fit ranked shortlist
                </div>
              </div>
            </div>
            <div class="decor_right"></div>
          </div>
          <div class="vs_row">
            <div class="decor_left"></div>
            <div class="card_body">
              <div class="vs_arg">
                <div class="vs_arg_label">No intelligence about travel intent</div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="41"
                viewBox="0 0 40 41"
                fill="none"
              >
                <circle
                  cx="12.3818"
                  cy="12.3818"
                  r="11.8103"
                  transform="matrix(0.706978 0.707236 -0.706978 0.707236 19.9888 2.9856)"
                  fill="#805BFF"
                  stroke="#805BFF"
                  stroke-width="1.14286"
                />
                <circle
                  opacity="0.24"
                  cx="18.1943"
                  cy="18.1943"
                  r="18.1943"
                  transform="matrix(0.706978 0.707236 -0.706978 0.707236 19.9888 -5.23608)"
                  fill="#805BFF"
                />
                <path
                  d="M39.7906 1.70122C40.0695 1.4223 40.0697 0.969956 39.7908 0.690886C39.512 0.411817 39.0598 0.411698 38.7809 0.690622L39.2857 1.19592L39.7906 1.70122ZM39.2857 1.19592L38.7809 0.690622L28.0652 11.4046L28.57 11.9099L29.0749 12.4152L39.7906 1.70122L39.2857 1.19592Z"
                  fill="#805BFF"
                />
                <path
                  d="M0.209204 39.2769C-0.0697123 39.5558 -0.069746 40.0082 0.209128 40.2872C0.488002 40.5662 0.940181 40.5663 1.2191 40.2873L0.71415 39.7821L0.209204 39.2769ZM11.4238 29.0701L10.9188 28.5649L0.209204 39.2769L0.71415 39.7821L1.2191 40.2873L11.9287 29.5753L11.4238 29.0701Z"
                  fill="#805BFF"
                />
                <path
                  d="M12.6758 16.1145L15.8167 25.8898C15.8592 26.022 16.0462 26.022 16.0887 25.8898L19.2296 16.1145"
                  stroke="white"
                  stroke-width="1.42857"
                  stroke-linecap="round"
                />
                <path
                  d="M27.2403 18.468C27.2403 17.1682 26.1866 16.1145 24.8868 16.1145H23.7682C22.4683 16.1145 21.4146 17.1682 21.4146 18.468C21.4146 19.7678 22.4683 20.8216 23.7682 20.8216H24.4945C26.011 20.8216 27.2403 22.0509 27.2403 23.5673C27.2403 25.0838 26.011 26.3131 24.4945 26.3131H24.1604C22.644 26.3131 21.4146 25.0838 21.4146 23.5673"
                  stroke="white"
                  stroke-width="1.42857"
                  stroke-linecap="round"
                />
              </svg>
              <div class="vs_arg">
                <div class="vs_arg_label">
                  Dion understands goals like: “arrive early” or “save $”
                </div>
              </div>
            </div>
            <div class="decor_right"></div>
          </div>
          <div class="vs_row">
            <div class="decor_left"></div>
            <div class="card_body">
              <div class="vs_arg">
                <div class="vs_arg_label">Just static results</div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="41"
                viewBox="0 0 40 41"
                fill="none"
              >
                <circle
                  cx="12.3818"
                  cy="12.3818"
                  r="11.8103"
                  transform="matrix(0.706978 0.707236 -0.706978 0.707236 19.9888 2.9856)"
                  fill="#805BFF"
                  stroke="#805BFF"
                  stroke-width="1.14286"
                />
                <circle
                  opacity="0.24"
                  cx="18.1943"
                  cy="18.1943"
                  r="18.1943"
                  transform="matrix(0.706978 0.707236 -0.706978 0.707236 19.9888 -5.23608)"
                  fill="#805BFF"
                />
                <path
                  d="M39.7906 1.70122C40.0695 1.4223 40.0697 0.969956 39.7908 0.690886C39.512 0.411817 39.0598 0.411698 38.7809 0.690622L39.2857 1.19592L39.7906 1.70122ZM39.2857 1.19592L38.7809 0.690622L28.0652 11.4046L28.57 11.9099L29.0749 12.4152L39.7906 1.70122L39.2857 1.19592Z"
                  fill="#805BFF"
                />
                <path
                  d="M0.209204 39.2769C-0.0697123 39.5558 -0.069746 40.0082 0.209128 40.2872C0.488002 40.5662 0.940181 40.5663 1.2191 40.2873L0.71415 39.7821L0.209204 39.2769ZM11.4238 29.0701L10.9188 28.5649L0.209204 39.2769L0.71415 39.7821L1.2191 40.2873L11.9287 29.5753L11.4238 29.0701Z"
                  fill="#805BFF"
                />
                <path
                  d="M12.6758 16.1145L15.8167 25.8898C15.8592 26.022 16.0462 26.022 16.0887 25.8898L19.2296 16.1145"
                  stroke="white"
                  stroke-width="1.42857"
                  stroke-linecap="round"
                />
                <path
                  d="M27.2403 18.468C27.2403 17.1682 26.1866 16.1145 24.8868 16.1145H23.7682C22.4683 16.1145 21.4146 17.1682 21.4146 18.468C21.4146 19.7678 22.4683 20.8216 23.7682 20.8216H24.4945C26.011 20.8216 27.2403 22.0509 27.2403 23.5673C27.2403 25.0838 26.011 26.3131 24.4945 26.3131H24.1604C22.644 26.3131 21.4146 25.0838 21.4146 23.5673"
                  stroke="white"
                  stroke-width="1.42857"
                  stroke-linecap="round"
                />
              </svg>
              <div class="vs_arg">
                <div class="vs_arg_label">
                  Dynamic analysis across multiple data sources
                </div>
              </div>
            </div>
            <div class="decor_right"></div>
          </div>
          <div class="vs_row">
            <div class="decor_left"></div>
            <div class="card_body">
              <div class="vs_arg">
                <div class="vs_arg_label">Zero transparency on why one is better</div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="41"
                viewBox="0 0 40 41"
                fill="none"
              >
                <circle
                  cx="12.3818"
                  cy="12.3818"
                  r="11.8103"
                  transform="matrix(0.706978 0.707236 -0.706978 0.707236 19.9888 2.9856)"
                  fill="#805BFF"
                  stroke="#805BFF"
                  stroke-width="1.14286"
                />
                <circle
                  opacity="0.24"
                  cx="18.1943"
                  cy="18.1943"
                  r="18.1943"
                  transform="matrix(0.706978 0.707236 -0.706978 0.707236 19.9888 -5.23608)"
                  fill="#805BFF"
                />
                <path
                  d="M39.7906 1.70122C40.0695 1.4223 40.0697 0.969956 39.7908 0.690886C39.512 0.411817 39.0598 0.411698 38.7809 0.690622L39.2857 1.19592L39.7906 1.70122ZM39.2857 1.19592L38.7809 0.690622L28.0652 11.4046L28.57 11.9099L29.0749 12.4152L39.7906 1.70122L39.2857 1.19592Z"
                  fill="#805BFF"
                />
                <path
                  d="M0.209204 39.2769C-0.0697123 39.5558 -0.069746 40.0082 0.209128 40.2872C0.488002 40.5662 0.940181 40.5663 1.2191 40.2873L0.71415 39.7821L0.209204 39.2769ZM11.4238 29.0701L10.9188 28.5649L0.209204 39.2769L0.71415 39.7821L1.2191 40.2873L11.9287 29.5753L11.4238 29.0701Z"
                  fill="#805BFF"
                />
                <path
                  d="M12.6758 16.1145L15.8167 25.8898C15.8592 26.022 16.0462 26.022 16.0887 25.8898L19.2296 16.1145"
                  stroke="white"
                  stroke-width="1.42857"
                  stroke-linecap="round"
                />
                <path
                  d="M27.2403 18.468C27.2403 17.1682 26.1866 16.1145 24.8868 16.1145H23.7682C22.4683 16.1145 21.4146 17.1682 21.4146 18.468C21.4146 19.7678 22.4683 20.8216 23.7682 20.8216H24.4945C26.011 20.8216 27.2403 22.0509 27.2403 23.5673C27.2403 25.0838 26.011 26.3131 24.4945 26.3131H24.1604C22.644 26.3131 21.4146 25.0838 21.4146 23.5673"
                  stroke="white"
                  stroke-width="1.42857"
                  stroke-linecap="round"
                />
              </svg>
              <div class="vs_arg">
                <div class="vs_arg_label">
                  Explains recommendations in plain language
                </div>
              </div>
            </div>
            <div class="decor_right"></div>
          </div>
        </div>
      </div>
    `
  }
}

customElements.define('unique-section', UniqueSection)
