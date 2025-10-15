export class FaqSection extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })

    // Crearea și atașarea HTML + CSS în interiorul DOM umbră
    this.shadowRoot.innerHTML = `
      <style>
        .faq_section {
          display: flex;
          padding: 48px 24px 0 24px;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          align-self: stretch;
          margin-bottom: 48px;
        }
        .faq_title {
          align-self: stretch;

          color: var(--surface-on-surface, #fff);
          text-align: center;

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
        .faq_group {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 24px;
          align-self: stretch;
        }
        .faq_sec {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 16px;
          align-self: stretch;
          
          transform: translateY(80px) scale(0.8);
          opacity: 0;

          animation: card-anim linear forwards;
          animation-timeline: view();
          animation-range: entry 0% contain 10%;
        }
        @keyframes card-anim {
          from {
            transform: translateY(80px) scale(0.8);
            opacity: 0;
          }
          to {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }
        .question {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          align-self: stretch;
        }
        .question_title {
          align-self: stretch;
          color: var(--surface-on-surface, #fff);
          text-align: center;

          /* s1/sec */
          font-family: var(--family-subtitle-primary, Jost);
          font-size: var(--size-subtitle-s1, 18px);
          font-style: normal;
          font-weight: var(--weight-subtitle-secondary, 500);
          line-height: var(--line-height-subtitle-s1, 22px); /* 122.222% */
        }
        .icon_container {
          width: 40px;
          height: 40px;
          border-radius: 32px;
          position: relative;
          background: var(
            --state-layers-primary-primary-opa-xs,
            rgba(128, 91, 255, 0.08)
          );
        }
        .icon_position {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .animatie_1 {
          animation: anim-icon_1 20s linear infinite;
        }

        @keyframes anim-icon_1 {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        .animatie_2 {
          animation: anim-icon_2 20s linear infinite;
        }

        @keyframes anim-icon_2 {
          0% {
            transform: translate(-50%, -50%) rotate(180deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(540deg);
          }
        }

        .animatie_3 {
          animation: anim-icon_3 20s linear infinite;
        }

        @keyframes anim-icon_3 {
          0% {
            transform: translate(-50%, -50%) rotate(90deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(450deg);
          }
        }
        .answer {
          display: flex;
          justify-content: center;
          align-items: center;
          align-self: stretch;

          color: var(--surface-on-surface, #fff);

          /* p1/prim */
          font-family: var(--family-body-primary, Jost);
          font-size: var(--size-body-p1, 16px);
          font-style: normal;
          font-weight: var(--weight-body-primary, 400);
          line-height: var(--line-height-body-p1, 22px); /* 137.5% */

          opacity: var(--surface-on-surface-opa-secondary, 0.72);
        }
      </style>

      <div class="faq_section">
        <div class="faq_title">FAQ</div>
        <div class="faq_group">
          <div class="faq_sec card_1">
            <div class="question">
              <div class="icon_container">
                <svg
                  class="icon_position animatie_1"
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M43.5 23C43.5 22.7239 43.2761 22.5 43 22.5C42.7239 22.5 42.5 22.7239 42.5 23H43H43.5ZM20.3333 3C20.3333 4.47276 21.5272 5.66667 23 5.66667C24.4728 5.66667 25.6667 4.47276 25.6667 3C25.6667 1.52724 24.4728 0.333333 23 0.333333C21.5272 0.333333 20.3333 1.52724 20.3333 3ZM43 23H42.5C42.5 33.7696 33.7696 42.5 23 42.5V43V43.5C34.3218 43.5 43.5 34.3218 43.5 23H43ZM23 43V42.5C12.2304 42.5 3.5 33.7696 3.5 23H3H2.5C2.5 34.3218 11.6782 43.5 23 43.5V43ZM3 23H3.5C3.5 12.2304 12.2304 3.5 23 3.5V3V2.5C11.6782 2.5 2.5 11.6782 2.5 23H3Z"
                    fill="#805BFF"
                  />
                </svg>

                <svg
                  class="icon_position"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.989 17.6152C12.2745 17.6152 12.5157 17.5168 12.7125 17.3198C12.9093 17.1226 13.0078 16.8812 13.0078 16.5955C13.0078 16.31 12.9092 16.0688 12.712 15.872C12.5148 15.6753 12.2735 15.577 11.988 15.577C11.7025 15.577 11.4613 15.6756 11.2645 15.8728C11.0677 16.0699 10.9692 16.3113 10.9692 16.5968C10.9692 16.8823 11.0678 17.1234 11.265 17.3203C11.4622 17.5169 11.7035 17.6152 11.989 17.6152ZM11.2808 14.0345H12.6885C12.7013 13.5423 12.7734 13.1491 12.9048 12.8548C13.0363 12.5606 13.3552 12.1706 13.8615 11.6848C14.3013 11.2449 14.6382 10.8388 14.872 10.4663C15.106 10.0939 15.223 9.65417 15.223 9.147C15.223 8.28617 14.9138 7.61375 14.2953 7.12975C13.6766 6.64592 12.9448 6.404 12.1 6.404C11.2653 6.404 10.5747 6.62675 10.028 7.07225C9.48117 7.51775 9.09108 8.04242 8.85775 8.64625L10.1423 9.1615C10.2641 8.8295 10.4724 8.50608 10.7673 8.19125C11.0621 7.87658 11.4999 7.71925 12.0808 7.71925C12.6718 7.71925 13.1086 7.88108 13.3913 8.20475C13.6741 8.52858 13.8155 8.88467 13.8155 9.273C13.8155 9.61283 13.7187 9.92375 13.525 10.2057C13.3315 10.4877 13.0848 10.7602 12.7848 11.023C12.1283 11.6153 11.7135 12.0878 11.5405 12.4405C11.3673 12.793 11.2808 13.3243 11.2808 14.0345ZM12.0018 21.5C10.6878 21.5 9.45267 21.2507 8.2965 20.752C7.14033 20.2533 6.13467 19.5766 5.2795 18.7218C4.42433 17.8669 3.74725 16.8617 3.24825 15.706C2.74942 14.5503 2.5 13.3156 2.5 12.0018C2.5 10.6878 2.74933 9.45267 3.248 8.2965C3.74667 7.14033 4.42342 6.13467 5.27825 5.2795C6.13308 4.42433 7.13833 3.74725 8.294 3.24825C9.44967 2.74942 10.6844 2.5 11.9982 2.5C13.3123 2.5 14.5473 2.74933 15.7035 3.248C16.8597 3.74667 17.8653 4.42342 18.7205 5.27825C19.5757 6.13308 20.2528 7.13833 20.7518 8.294C21.2506 9.44967 21.5 10.6844 21.5 11.9982C21.5 13.3123 21.2507 14.5473 20.752 15.7035C20.2533 16.8597 19.5766 17.8653 18.7218 18.7205C17.8669 19.5757 16.8617 20.2528 15.706 20.7518C14.5503 21.2506 13.3156 21.5 12.0018 21.5ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
                    fill="#805BFF"
                  />
                </svg>
              </div>
              <div class="question_title">
                How is this different from a regular flight search website?
              </div>
            </div>
            <div class="answer">
              Unlike typical sites that just show you a list, this AI broker
              analyzes multiple sources and filters everything based on your
              needs — price, comfort, flexibility, and more — then shows you
              only the smartest options.
            </div>
          </div>
          <div class="faq_sec card_2">
            <div class="question">
              <div class="icon_container">
                <svg
                  class="icon_position animatie_2"
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M43.5 23C43.5 22.7239 43.2761 22.5 43 22.5C42.7239 22.5 42.5 22.7239 42.5 23H43H43.5ZM20.3333 3C20.3333 4.47276 21.5272 5.66667 23 5.66667C24.4728 5.66667 25.6667 4.47276 25.6667 3C25.6667 1.52724 24.4728 0.333333 23 0.333333C21.5272 0.333333 20.3333 1.52724 20.3333 3ZM43 23H42.5C42.5 33.7696 33.7696 42.5 23 42.5V43V43.5C34.3218 43.5 43.5 34.3218 43.5 23H43ZM23 43V42.5C12.2304 42.5 3.5 33.7696 3.5 23H3H2.5C2.5 34.3218 11.6782 43.5 23 43.5V43ZM3 23H3.5C3.5 12.2304 12.2304 3.5 23 3.5V3V2.5C11.6782 2.5 2.5 11.6782 2.5 23H3Z"
                    fill="#805BFF"
                  />
                </svg>

                <svg
                  class="icon_position"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.989 17.6152C12.2745 17.6152 12.5157 17.5168 12.7125 17.3198C12.9093 17.1226 13.0078 16.8812 13.0078 16.5955C13.0078 16.31 12.9092 16.0688 12.712 15.872C12.5148 15.6753 12.2735 15.577 11.988 15.577C11.7025 15.577 11.4613 15.6756 11.2645 15.8728C11.0677 16.0699 10.9692 16.3113 10.9692 16.5968C10.9692 16.8823 11.0678 17.1234 11.265 17.3203C11.4622 17.5169 11.7035 17.6152 11.989 17.6152ZM11.2808 14.0345H12.6885C12.7013 13.5423 12.7734 13.1491 12.9048 12.8548C13.0363 12.5606 13.3552 12.1706 13.8615 11.6848C14.3013 11.2449 14.6382 10.8388 14.872 10.4663C15.106 10.0939 15.223 9.65417 15.223 9.147C15.223 8.28617 14.9138 7.61375 14.2953 7.12975C13.6766 6.64592 12.9448 6.404 12.1 6.404C11.2653 6.404 10.5747 6.62675 10.028 7.07225C9.48117 7.51775 9.09108 8.04242 8.85775 8.64625L10.1423 9.1615C10.2641 8.8295 10.4724 8.50608 10.7673 8.19125C11.0621 7.87658 11.4999 7.71925 12.0808 7.71925C12.6718 7.71925 13.1086 7.88108 13.3913 8.20475C13.6741 8.52858 13.8155 8.88467 13.8155 9.273C13.8155 9.61283 13.7187 9.92375 13.525 10.2057C13.3315 10.4877 13.0848 10.7602 12.7848 11.023C12.1283 11.6153 11.7135 12.0878 11.5405 12.4405C11.3673 12.793 11.2808 13.3243 11.2808 14.0345ZM12.0018 21.5C10.6878 21.5 9.45267 21.2507 8.2965 20.752C7.14033 20.2533 6.13467 19.5766 5.2795 18.7218C4.42433 17.8669 3.74725 16.8617 3.24825 15.706C2.74942 14.5503 2.5 13.3156 2.5 12.0018C2.5 10.6878 2.74933 9.45267 3.248 8.2965C3.74667 7.14033 4.42342 6.13467 5.27825 5.2795C6.13308 4.42433 7.13833 3.74725 8.294 3.24825C9.44967 2.74942 10.6844 2.5 11.9982 2.5C13.3123 2.5 14.5473 2.74933 15.7035 3.248C16.8597 3.74667 17.8653 4.42342 18.7205 5.27825C19.5757 6.13308 20.2528 7.13833 20.7518 8.294C21.2506 9.44967 21.5 10.6844 21.5 11.9982C21.5 13.3123 21.2507 14.5473 20.752 15.7035C20.2533 16.8597 19.5766 17.8653 18.7218 18.7205C17.8669 19.5757 16.8617 20.2528 15.706 20.7518C14.5503 21.2506 13.3156 21.5 12.0018 21.5ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
                    fill="#805BFF"
                  />
                </svg>
              </div>
              <div class="question_title">
                Where do you get your flight data from?
              </div>
            </div>
            <div class="answer">
              We search across dozens of airline websites, travel agencies, and
              booking platforms in real time — so you get the most complete and
              competitive offers in one place.
            </div>
          </div>
          <div class="faq_sec card_3">
            <div class="question">
              <div class="icon_container">
                <svg
                  class="icon_position animatie_1"
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M43.5 23C43.5 22.7239 43.2761 22.5 43 22.5C42.7239 22.5 42.5 22.7239 42.5 23H43H43.5ZM20.3333 3C20.3333 4.47276 21.5272 5.66667 23 5.66667C24.4728 5.66667 25.6667 4.47276 25.6667 3C25.6667 1.52724 24.4728 0.333333 23 0.333333C21.5272 0.333333 20.3333 1.52724 20.3333 3ZM43 23H42.5C42.5 33.7696 33.7696 42.5 23 42.5V43V43.5C34.3218 43.5 43.5 34.3218 43.5 23H43ZM23 43V42.5C12.2304 42.5 3.5 33.7696 3.5 23H3H2.5C2.5 34.3218 11.6782 43.5 23 43.5V43ZM3 23H3.5C3.5 12.2304 12.2304 3.5 23 3.5V3V2.5C11.6782 2.5 2.5 11.6782 2.5 23H3Z"
                    fill="#805BFF"
                  />
                </svg>

                <svg
                  class="icon_position"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.989 17.6152C12.2745 17.6152 12.5157 17.5168 12.7125 17.3198C12.9093 17.1226 13.0078 16.8812 13.0078 16.5955C13.0078 16.31 12.9092 16.0688 12.712 15.872C12.5148 15.6753 12.2735 15.577 11.988 15.577C11.7025 15.577 11.4613 15.6756 11.2645 15.8728C11.0677 16.0699 10.9692 16.3113 10.9692 16.5968C10.9692 16.8823 11.0678 17.1234 11.265 17.3203C11.4622 17.5169 11.7035 17.6152 11.989 17.6152ZM11.2808 14.0345H12.6885C12.7013 13.5423 12.7734 13.1491 12.9048 12.8548C13.0363 12.5606 13.3552 12.1706 13.8615 11.6848C14.3013 11.2449 14.6382 10.8388 14.872 10.4663C15.106 10.0939 15.223 9.65417 15.223 9.147C15.223 8.28617 14.9138 7.61375 14.2953 7.12975C13.6766 6.64592 12.9448 6.404 12.1 6.404C11.2653 6.404 10.5747 6.62675 10.028 7.07225C9.48117 7.51775 9.09108 8.04242 8.85775 8.64625L10.1423 9.1615C10.2641 8.8295 10.4724 8.50608 10.7673 8.19125C11.0621 7.87658 11.4999 7.71925 12.0808 7.71925C12.6718 7.71925 13.1086 7.88108 13.3913 8.20475C13.6741 8.52858 13.8155 8.88467 13.8155 9.273C13.8155 9.61283 13.7187 9.92375 13.525 10.2057C13.3315 10.4877 13.0848 10.7602 12.7848 11.023C12.1283 11.6153 11.7135 12.0878 11.5405 12.4405C11.3673 12.793 11.2808 13.3243 11.2808 14.0345ZM12.0018 21.5C10.6878 21.5 9.45267 21.2507 8.2965 20.752C7.14033 20.2533 6.13467 19.5766 5.2795 18.7218C4.42433 17.8669 3.74725 16.8617 3.24825 15.706C2.74942 14.5503 2.5 13.3156 2.5 12.0018C2.5 10.6878 2.74933 9.45267 3.248 8.2965C3.74667 7.14033 4.42342 6.13467 5.27825 5.2795C6.13308 4.42433 7.13833 3.74725 8.294 3.24825C9.44967 2.74942 10.6844 2.5 11.9982 2.5C13.3123 2.5 14.5473 2.74933 15.7035 3.248C16.8597 3.74667 17.8653 4.42342 18.7205 5.27825C19.5757 6.13308 20.2528 7.13833 20.7518 8.294C21.2506 9.44967 21.5 10.6844 21.5 11.9982C21.5 13.3123 21.2507 14.5473 20.752 15.7035C20.2533 16.8597 19.5766 17.8653 18.7218 18.7205C17.8669 19.5757 16.8617 20.2528 15.706 20.7518C14.5503 21.2506 13.3156 21.5 12.0018 21.5ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
                    fill="#805BFF"
                  />
                </svg>
              </div>
              <div class="question_title">Is this service free to use?</div>
            </div>
            <div class="answer">
              Yes — using the assistant and searching flights is 100% free. We
              may earn a small referral fee from some booking partners, but it
              never affects your price.
            </div>
          </div>
          <div class="faq_sec card_4">
            <div class="question">
              <div class="icon_container">
                <svg
                  class="icon_position animatie_3"
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M43.5 23C43.5 22.7239 43.2761 22.5 43 22.5C42.7239 22.5 42.5 22.7239 42.5 23H43H43.5ZM20.3333 3C20.3333 4.47276 21.5272 5.66667 23 5.66667C24.4728 5.66667 25.6667 4.47276 25.6667 3C25.6667 1.52724 24.4728 0.333333 23 0.333333C21.5272 0.333333 20.3333 1.52724 20.3333 3ZM43 23H42.5C42.5 33.7696 33.7696 42.5 23 42.5V43V43.5C34.3218 43.5 43.5 34.3218 43.5 23H43ZM23 43V42.5C12.2304 42.5 3.5 33.7696 3.5 23H3H2.5C2.5 34.3218 11.6782 43.5 23 43.5V43ZM3 23H3.5C3.5 12.2304 12.2304 3.5 23 3.5V3V2.5C11.6782 2.5 2.5 11.6782 2.5 23H3Z"
                    fill="#805BFF"
                  />
                </svg>

                <svg
                  class="icon_position"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.989 17.6152C12.2745 17.6152 12.5157 17.5168 12.7125 17.3198C12.9093 17.1226 13.0078 16.8812 13.0078 16.5955C13.0078 16.31 12.9092 16.0688 12.712 15.872C12.5148 15.6753 12.2735 15.577 11.988 15.577C11.7025 15.577 11.4613 15.6756 11.2645 15.8728C11.0677 16.0699 10.9692 16.3113 10.9692 16.5968C10.9692 16.8823 11.0678 17.1234 11.265 17.3203C11.4622 17.5169 11.7035 17.6152 11.989 17.6152ZM11.2808 14.0345H12.6885C12.7013 13.5423 12.7734 13.1491 12.9048 12.8548C13.0363 12.5606 13.3552 12.1706 13.8615 11.6848C14.3013 11.2449 14.6382 10.8388 14.872 10.4663C15.106 10.0939 15.223 9.65417 15.223 9.147C15.223 8.28617 14.9138 7.61375 14.2953 7.12975C13.6766 6.64592 12.9448 6.404 12.1 6.404C11.2653 6.404 10.5747 6.62675 10.028 7.07225C9.48117 7.51775 9.09108 8.04242 8.85775 8.64625L10.1423 9.1615C10.2641 8.8295 10.4724 8.50608 10.7673 8.19125C11.0621 7.87658 11.4999 7.71925 12.0808 7.71925C12.6718 7.71925 13.1086 7.88108 13.3913 8.20475C13.6741 8.52858 13.8155 8.88467 13.8155 9.273C13.8155 9.61283 13.7187 9.92375 13.525 10.2057C13.3315 10.4877 13.0848 10.7602 12.7848 11.023C12.1283 11.6153 11.7135 12.0878 11.5405 12.4405C11.3673 12.793 11.2808 13.3243 11.2808 14.0345ZM12.0018 21.5C10.6878 21.5 9.45267 21.2507 8.2965 20.752C7.14033 20.2533 6.13467 19.5766 5.2795 18.7218C4.42433 17.8669 3.74725 16.8617 3.24825 15.706C2.74942 14.5503 2.5 13.3156 2.5 12.0018C2.5 10.6878 2.74933 9.45267 3.248 8.2965C3.74667 7.14033 4.42342 6.13467 5.27825 5.2795C6.13308 4.42433 7.13833 3.74725 8.294 3.24825C9.44967 2.74942 10.6844 2.5 11.9982 2.5C13.3123 2.5 14.5473 2.74933 15.7035 3.248C16.8597 3.74667 17.8653 4.42342 18.7205 5.27825C19.5757 6.13308 20.2528 7.13833 20.7518 8.294C21.2506 9.44967 21.5 10.6844 21.5 11.9982C21.5 13.3123 21.2507 14.5473 20.752 15.7035C20.2533 16.8597 19.5766 17.8653 18.7218 18.7205C17.8669 19.5757 16.8617 20.2528 15.706 20.7518C14.5503 21.2506 13.3156 21.5 12.0018 21.5ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
                    fill="#805BFF"
                  />
                </svg>
              </div>
              <div class="question_title">
                Will I book directly on this site?
              </div>
            </div>
            <div class="answer">
              No — after we find the best flight for you, we’ll redirect you to
              the most reliable booking partner (like the airline or agency) to
              complete your purchase.
            </div>
          </div>
          <div class="faq_sec card_5">
            <div class="question">
              <div class="icon_container">
                <svg
                  class="icon_position animatie_1"
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M43.5 23C43.5 22.7239 43.2761 22.5 43 22.5C42.7239 22.5 42.5 22.7239 42.5 23H43H43.5ZM20.3333 3C20.3333 4.47276 21.5272 5.66667 23 5.66667C24.4728 5.66667 25.6667 4.47276 25.6667 3C25.6667 1.52724 24.4728 0.333333 23 0.333333C21.5272 0.333333 20.3333 1.52724 20.3333 3ZM43 23H42.5C42.5 33.7696 33.7696 42.5 23 42.5V43V43.5C34.3218 43.5 43.5 34.3218 43.5 23H43ZM23 43V42.5C12.2304 42.5 3.5 33.7696 3.5 23H3H2.5C2.5 34.3218 11.6782 43.5 23 43.5V43ZM3 23H3.5C3.5 12.2304 12.2304 3.5 23 3.5V3V2.5C11.6782 2.5 2.5 11.6782 2.5 23H3Z"
                    fill="#805BFF"
                  />
                </svg>

                <svg
                  class="icon_position"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.989 17.6152C12.2745 17.6152 12.5157 17.5168 12.7125 17.3198C12.9093 17.1226 13.0078 16.8812 13.0078 16.5955C13.0078 16.31 12.9092 16.0688 12.712 15.872C12.5148 15.6753 12.2735 15.577 11.988 15.577C11.7025 15.577 11.4613 15.6756 11.2645 15.8728C11.0677 16.0699 10.9692 16.3113 10.9692 16.5968C10.9692 16.8823 11.0678 17.1234 11.265 17.3203C11.4622 17.5169 11.7035 17.6152 11.989 17.6152ZM11.2808 14.0345H12.6885C12.7013 13.5423 12.7734 13.1491 12.9048 12.8548C13.0363 12.5606 13.3552 12.1706 13.8615 11.6848C14.3013 11.2449 14.6382 10.8388 14.872 10.4663C15.106 10.0939 15.223 9.65417 15.223 9.147C15.223 8.28617 14.9138 7.61375 14.2953 7.12975C13.6766 6.64592 12.9448 6.404 12.1 6.404C11.2653 6.404 10.5747 6.62675 10.028 7.07225C9.48117 7.51775 9.09108 8.04242 8.85775 8.64625L10.1423 9.1615C10.2641 8.8295 10.4724 8.50608 10.7673 8.19125C11.0621 7.87658 11.4999 7.71925 12.0808 7.71925C12.6718 7.71925 13.1086 7.88108 13.3913 8.20475C13.6741 8.52858 13.8155 8.88467 13.8155 9.273C13.8155 9.61283 13.7187 9.92375 13.525 10.2057C13.3315 10.4877 13.0848 10.7602 12.7848 11.023C12.1283 11.6153 11.7135 12.0878 11.5405 12.4405C11.3673 12.793 11.2808 13.3243 11.2808 14.0345ZM12.0018 21.5C10.6878 21.5 9.45267 21.2507 8.2965 20.752C7.14033 20.2533 6.13467 19.5766 5.2795 18.7218C4.42433 17.8669 3.74725 16.8617 3.24825 15.706C2.74942 14.5503 2.5 13.3156 2.5 12.0018C2.5 10.6878 2.74933 9.45267 3.248 8.2965C3.74667 7.14033 4.42342 6.13467 5.27825 5.2795C6.13308 4.42433 7.13833 3.74725 8.294 3.24825C9.44967 2.74942 10.6844 2.5 11.9982 2.5C13.3123 2.5 14.5473 2.74933 15.7035 3.248C16.8597 3.74667 17.8653 4.42342 18.7205 5.27825C19.5757 6.13308 20.2528 7.13833 20.7518 8.294C21.2506 9.44967 21.5 10.6844 21.5 11.9982C21.5 13.3123 21.2507 14.5473 20.752 15.7035C20.2533 16.8597 19.5766 17.8653 18.7218 18.7205C17.8669 19.5757 16.8617 20.2528 15.706 20.7518C14.5503 21.2506 13.3156 21.5 12.0018 21.5ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
                    fill="#805BFF"
                  />
                </svg>
              </div>
              <div class="question_title">
                Can I search for flexible or refundable tickets?
              </div>
            </div>
            <div class="answer">
              Absolutely. Just tell the assistant that you prefer flexible
              fares, and it will prioritize options you can change or cancel
              without penalty.
            </div>
          </div>
          <div class="faq_sec card_6">
            <div class="question">
              <div class="icon_container">
                <svg
                  class="icon_position animatie_2"
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M43.5 23C43.5 22.7239 43.2761 22.5 43 22.5C42.7239 22.5 42.5 22.7239 42.5 23H43H43.5ZM20.3333 3C20.3333 4.47276 21.5272 5.66667 23 5.66667C24.4728 5.66667 25.6667 4.47276 25.6667 3C25.6667 1.52724 24.4728 0.333333 23 0.333333C21.5272 0.333333 20.3333 1.52724 20.3333 3ZM43 23H42.5C42.5 33.7696 33.7696 42.5 23 42.5V43V43.5C34.3218 43.5 43.5 34.3218 43.5 23H43ZM23 43V42.5C12.2304 42.5 3.5 33.7696 3.5 23H3H2.5C2.5 34.3218 11.6782 43.5 23 43.5V43ZM3 23H3.5C3.5 12.2304 12.2304 3.5 23 3.5V3V2.5C11.6782 2.5 2.5 11.6782 2.5 23H3Z"
                    fill="#805BFF"
                  />
                </svg>

                <svg
                  class="icon_position"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.989 17.6152C12.2745 17.6152 12.5157 17.5168 12.7125 17.3198C12.9093 17.1226 13.0078 16.8812 13.0078 16.5955C13.0078 16.31 12.9092 16.0688 12.712 15.872C12.5148 15.6753 12.2735 15.577 11.988 15.577C11.7025 15.577 11.4613 15.6756 11.2645 15.8728C11.0677 16.0699 10.9692 16.3113 10.9692 16.5968C10.9692 16.8823 11.0678 17.1234 11.265 17.3203C11.4622 17.5169 11.7035 17.6152 11.989 17.6152ZM11.2808 14.0345H12.6885C12.7013 13.5423 12.7734 13.1491 12.9048 12.8548C13.0363 12.5606 13.3552 12.1706 13.8615 11.6848C14.3013 11.2449 14.6382 10.8388 14.872 10.4663C15.106 10.0939 15.223 9.65417 15.223 9.147C15.223 8.28617 14.9138 7.61375 14.2953 7.12975C13.6766 6.64592 12.9448 6.404 12.1 6.404C11.2653 6.404 10.5747 6.62675 10.028 7.07225C9.48117 7.51775 9.09108 8.04242 8.85775 8.64625L10.1423 9.1615C10.2641 8.8295 10.4724 8.50608 10.7673 8.19125C11.0621 7.87658 11.4999 7.71925 12.0808 7.71925C12.6718 7.71925 13.1086 7.88108 13.3913 8.20475C13.6741 8.52858 13.8155 8.88467 13.8155 9.273C13.8155 9.61283 13.7187 9.92375 13.525 10.2057C13.3315 10.4877 13.0848 10.7602 12.7848 11.023C12.1283 11.6153 11.7135 12.0878 11.5405 12.4405C11.3673 12.793 11.2808 13.3243 11.2808 14.0345ZM12.0018 21.5C10.6878 21.5 9.45267 21.2507 8.2965 20.752C7.14033 20.2533 6.13467 19.5766 5.2795 18.7218C4.42433 17.8669 3.74725 16.8617 3.24825 15.706C2.74942 14.5503 2.5 13.3156 2.5 12.0018C2.5 10.6878 2.74933 9.45267 3.248 8.2965C3.74667 7.14033 4.42342 6.13467 5.27825 5.2795C6.13308 4.42433 7.13833 3.74725 8.294 3.24825C9.44967 2.74942 10.6844 2.5 11.9982 2.5C13.3123 2.5 14.5473 2.74933 15.7035 3.248C16.8597 3.74667 17.8653 4.42342 18.7205 5.27825C19.5757 6.13308 20.2528 7.13833 20.7518 8.294C21.2506 9.44967 21.5 10.6844 21.5 11.9982C21.5 13.3123 21.2507 14.5473 20.752 15.7035C20.2533 16.8597 19.5766 17.8653 18.7218 18.7205C17.8669 19.5757 16.8617 20.2528 15.706 20.7518C14.5503 21.2506 13.3156 21.5 12.0018 21.5ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
                    fill="#805BFF"
                  />
                </svg>
              </div>
              <div class="question_title">
                What if I have special needs, like traveling with pets or kids?
              </div>
            </div>
            <div class="answer">
              You can include that in your preferences when starting the search.
              The AI will consider that info to suggest flights that better suit
              your situation.
            </div>
          </div>
        </div>
      </div>
    `
  }
  // connectedCallback() {
  //   // ----------- Valorile care se introduc manual -----------
  //   const element = this.shadowRoot.querySelector('.faq_section')
  //
  //   // Position relative to the viewport
  //   const rect = element.getBoundingClientRect()
  //   console.log('Top relative to viewport:', rect.top)
  //
  //   // Position relative to the document (top of the page)
  //   const topPosition = rect.top + window.scrollY
  //   console.log('Top relative to document:', topPosition)
  //
  //   const newAnim = (startPoint, endPoint, className) => {
  //     const elementPornire = this.shadowRoot.querySelector(className)
  //     const rect = elementPornire.getBoundingClientRect()
  //     let valoareScroll = window.scrollY
  //
  //     const topPosition = rect.top + window.scrollY
  //     console.log('Top relative to document:', topPosition)
  //
  //     if (valoareScroll < startPoint) valoareScroll = startPoint
  //     if (valoareScroll > endPoint) valoareScroll = endPoint
  //
  //     let progress = (valoareScroll - startPoint) / (endPoint - startPoint)
  //     let marginTop = (1 - progress) * (startPoint - endPoint)
  //     let opacitate = progress
  //
  //     // elementPornire.style.marginTop = `${marginTop}px`;
  //     elementPornire.style.transform = `translateY(${marginTop}px)`
  //     elementPornire.style.opacity = opacitate
  //
  //     // console.log(
  //     //   `progress: ${progress}, translateY: ${marginTop}, opacitate: ${opacitate}`
  //     // )
  //   }
  //
  //   let start = 3800 // ➡️start: când începe animația, pe baza poziției verticale a elementului.
  //   let end = 4020 // ➡️end: poziția de defilare hardcoded în care se termină animația.
  //   let elementNume = '.faq_title' //➡️ elementNume: Selector CSS pentru elementul care urmează să fie animat.
  //
  //   let start_sec = 4000
  //   let end_sec = 4120
  //   let elementNume_sec = '.card_1'
  //
  //   let start_ter = 4200
  //   let end_ter = 4320
  //   let elementNume_ter = '.card_2'
  //
  //   let start_qua = 4400
  //   let end_qua = 4520
  //   let elementNume_qua = '.card_3'
  //
  //   let start_qui = 4600
  //   let end_qui = 4720
  //   let elementNume_qui = '.card_4'
  //
  //   let start_cin = 4800
  //   let end_cin = 4920
  //   let elementNume_cin = '.card_5'
  //
  //   let start_sep = 4900
  //   let end_sep = 5020
  //   let elementNume_sep = '.card_6'
  //
  //   const parametriiAnimatiei = (startPoint, endPoint, className) => {
  //     const elementPornire = this.shadowRoot.querySelector(className)
  //     let valoareScroll = window.scrollY
  //
  //     if (valoareScroll < startPoint) valoareScroll = startPoint
  //     if (valoareScroll > endPoint) valoareScroll = endPoint
  //
  //     let progress = (valoareScroll - startPoint) / (endPoint - startPoint)
  //     let marginTop = (1 - progress) * (startPoint - endPoint)
  //     let opacitate = progress
  //
  //     // elementPornire.style.marginTop = `${marginTop}px`;
  //     elementPornire.style.transform = `translateY(${marginTop}px)`
  //     elementPornire.style.opacity = opacitate
  //
  //     // console.log(
  //     //   `progress: ${progress}, translateY: ${marginTop}, opacitate: ${opacitate}`
  //     // )
  //   }
  //
  //   const parametriiAnimatiei_sec = (startPoint, endPoint, className) => {
  //     const elementPornire = this.shadowRoot.querySelector(className)
  //     let valoareScroll = window.scrollY
  //
  //     if (valoareScroll < startPoint) valoareScroll = startPoint
  //     if (valoareScroll > endPoint) valoareScroll = endPoint
  //
  //     let progress = (valoareScroll - startPoint) / (endPoint - startPoint)
  //     let marginTop = (progress - 1) * (startPoint - endPoint)
  //     let opacitate = progress
  //
  //     elementPornire.style.transform = `translateY(${marginTop}px)`
  //     elementPornire.style.opacity = opacitate
  //
  //     // console.log(`progress: ${progress}, translateX: ${marginTop} opacity: ${opacitate}`);
  //   }
  //
  //   let ticking = false //➡️ Flag pentru a controla requestAnimationFrame. Împiedică rularea simultană a mai multor cadre de animație, îmbunătățind performanța.
  //
  //   const monitorScroll = () => {
  //     //➡️ Definește funcția de gestionare a evenimentului scroll.
  //     if (!ticking) {
  //       //➡️ Dacă ticking este fals:Programează parametriiAnimatiei să ruleze la următorul cadru de animație. Setează ticking la true, astfel încât să nu se programeze din nou până nu se termină. După execuție, resetează ticking la false.
  //       window.requestAnimationFrame(() => {
  //         parametriiAnimatiei(start, end, elementNume)
  //         parametriiAnimatiei_sec(start_sec, end_sec, elementNume_sec)
  //         parametriiAnimatiei_sec(start_ter, end_ter, elementNume_ter)
  //         parametriiAnimatiei_sec(start_qua, end_qua, elementNume_qua)
  //         parametriiAnimatiei_sec(start_qui, end_qui, elementNume_qui)
  //         parametriiAnimatiei_sec(start_cin, end_cin, elementNume_cin)
  //         parametriiAnimatiei_sec(start_sep, end_sep, elementNume_sep)
  //         ticking = false
  //       })
  //       ticking = true
  //     }
  //   }
  //
  //   window.addEventListener('scroll', monitorScroll) //➡️ Înregistrează ascultătorul de evenimente scroll pe fereastră. Fiecare derulare declanșează monitorScroll().
  // }
}

customElements.define('faq-section', FaqSection)
