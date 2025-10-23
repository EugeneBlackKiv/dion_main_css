import './main_form_section.js'
import './cyclical_card.js'
import './flight_card_v2.js'

export class TrackPrice extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })

    // Crearea și atașarea HTML + CSS în interiorul DOM umbră
    this.shadowRoot.innerHTML = `
      <style>
        .alert_section {
          display: flex;
          width: 328px;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
        }
        .alert_header {
          display: flex;
          height: 32px;
          padding-right: 16px;
          justify-content: space-between;
          align-items: center;
          align-self: stretch;
        }
        .header_details {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .full_label_alert {
          display: flex;
          align-items: center;
          gap: 8px;

          color: var(--tertiary-tertiary, #62ab03);
          text-align: justify;

          /* s1/sec */
          font-family: var(--family-subtitle-primary, Jost);
          font-size: var(--size-subtitle-s1, 18px);
          font-style: normal;
          font-weight: var(--weight-subtitle-secondary, 500);
          line-height: var(--line-height-subtitle-s1, 22px); /* 122.222% */
        }
        .label_alert {
          display: flex;
          padding: 2px;
          justify-content: center;
          align-items: center;

          border-radius: 12px;
          border: 1px solid var(--tertiary-tertiary, #62ab03);
          background: var(--tertiary-tertiary-container, #0e2000);
        }
        .track_prices_switch {
          display: flex;
          align-items: center;
          gap: 12px;

          color: var(--surface-on-surface, #fff);
          text-align: center;

          /* bu2/sec */
          font-family: var(--family-button-primary, Jost);
          font-size: var(--size-button-bu2, 14px);
          font-style: normal;
          font-weight: var(--weight-button-secondary, 500);
          line-height: var(--line-height-button-bu2, 16px); /* 114.286% */
        }
        .switching_selector {
          display: flex;
          min-width: 40px;
          max-width: 40px;
          min-height: 24px;
          max-height: 24px;
          padding: 2px;
          flex-direction: column;
          justify-content: center;
          align-items: flex-end;

          border-radius: 100px;
          background: var(--primary-primary, #805bff);
        }
        .thumb {
          display: flex;
          width: 20px;
          height: 20px;
          justify-content: center;
          align-items: center;

          border-radius: 100px;
          background: var(--white, #fff);

          /* shadow/card */
          box-shadow:
            0 0 2px 0 rgba(23, 29, 46, 0.04),
            0 1px 3px 0 rgba(23, 29, 46, 0.12);
        }
        .chart_time_line {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          align-self: stretch;
        }
        .chart_graph {
          display: flex;
          height: 124px;
          align-items: center;
          align-self: stretch;

          border-radius: 16px;
          border: 1px solid var(--outline-outline-variant, #393939);
          background: var(--surface-surface-container-lowest, #282828);
          box-shadow: 0 6px 12px 0 var(--shadow-card, #1b1b1b);
          overflow: hidden;
          position: relative;
        }
        .scale {
          width: 12px;
          align-self: stretch;
          height: 124px;
        }
        .graph_line {
          flex: 1 0 0;
          align-self: stretch;
          position: relative;
        }
        .horizontal {
          display: flex;
          width: 316px;
          height: 110px;
          flex-direction: column;
          align-items: flex-start;
        }
        .transparent_1 {
          flex: 1 0 0;
          align-self: stretch;
        }
        .line_2 {
          flex: 1 0 0;
          align-self: stretch;
          border-top: 2px dashed var(--outline-outline, #45464c);
          border-bottom: 2px dashed var(--outline-outline, #45464c);
          opacity: var(--surface-on-surface-opa-senary, 0.24);
        }
        .graph {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 316px;
          height: 109.938px;
        }
        .linie {
          position: absolute;
          top: 0;
          left: 0;
        }
        .time_line {
          display: flex;
          padding: 8px 8px 0 8px;
          align-items: flex-start;
          gap: 16px;
          align-self: stretch;
        }
        .date_element {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          flex: 1 0 0;
        }
        .date {
          align-self: stretch;
          color: var(--surface-on-surface, #fff);
          text-align: center;

          /* c1/prim */
          font-family: var(--family-caption-primary, Jost);
          font-size: var(--size-caption-c1, 12px);
          font-style: normal;
          font-weight: var(--weight-caption-primary, 400);
          line-height: var(--line-height-caption-c1, 14px); /* 116.667% */
        }
        .data_arrow_element {
          display: flex;
          padding-top: 2px;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }
        .label_now {
          margin-top: -8px;
          color: var(--surface-on-surface, #fff);
          text-align: center;

          /* b1/sec */
          font-family: var(--family-body-primary, Jost);
          font-size: var(--size-body-b1, 16px);
          font-style: normal;
          font-weight: var(--weight-body-secondary, 500);
          line-height: var(--line-height-body-b1, 20px); /* 125% */
        }
        .now_price {
          display: flex;
          height: 168px;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
        .info_chart {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          position: absolute;
          left: -36px;
          bottom: 26px;
        }
        .date_chart {
          display: flex;
          padding: 8px 16px;
          justify-content: center;
          align-items: center;
          gap: 12px;
          border-radius: 16px;
          border: 1px solid rgba(33, 0, 93, 0.08);
          background: var(--surface-surface, #1e1e1e);
          box-shadow: 0 6px 12px 0 var(--shadow-card, #1b1b1b);

          color: var(--surface-on-surface, #fff);
          text-align: center;

          /* p1/sec */
          font-family: var(--family-body-primary, Jost);
          font-size: var(--size-body-p1, 16px);
          font-style: normal;
          font-weight: var(--weight-body-secondary, 500);
          line-height: var(--line-height-body-p1, 22px); /* 137.5% */
        }
        .point_chart {
          width: 18px;
          height: 18px;
          
          border-radius: 24px;
          border: 4px solid var(--surface-surface, #1E1E1E);
          background: #8EBC14;
          box-shadow: 0 4px 8px 0 var(--shadow-card, #1B1B1B);
        }
        .color_arrow{
          fill: var(--surface-on-surface, #000);
        }
        .color_arrow_stroke{
          stroke: var(--surface-surface, #FFF);
        }
        .color_line_chart{
          stroke: var(--surface-on-surface, #000);
        }
      </style>

      <div class="alert_section">
        <div class="alert_header">
          <div class="header_details">
            <div class="full_label_alert">
              <div class="label_alert">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M22.1624 9.44285C22.1949 9.18399 22.1118 8.91339 21.913 8.71462C21.7142 8.51586 21.4436 8.43271 21.1848 8.46518C21.1441 8.46066 21.1028 8.45834 21.0609 8.45834H16.0443C15.561 8.45834 15.1693 8.85009 15.1693 9.33334C15.1693 9.81659 15.561 10.2083 16.0443 10.2083H19.1818L14.8776 14.5126L12.7446 12.3796C12.3118 11.9468 11.6101 11.9468 11.1772 12.3796L6.09222 17.4646C5.75051 17.8063 5.75051 18.3604 6.09222 18.7021C6.43393 19.0438 6.98795 19.0438 7.32966 18.7021L11.9609 14.0708L14.0939 16.2037C14.5267 16.6366 15.2285 16.6366 15.6613 16.2037L20.4193 11.4458V14.5833C20.4193 15.0666 20.811 15.4583 21.2943 15.4583C21.7775 15.4583 22.1693 15.0666 22.1693 14.5833V9.56668C22.1693 9.52482 22.167 9.48351 22.1624 9.44285Z"
                    fill="#62AB03"
                  />
                </svg>
              </div>
              <div>Buy now</div>
            </div>
          </div>
          <div class="track_prices_switch">
            <div>Track Prices</div>
            <div class="switching_selector">
              <div class="thumb"></div>
            </div>
          </div>
        </div>
        <div class="chart_time_line">
          <div class="chart_graph">
            <div class="scale">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="124"
                viewBox="0 0 12 124"
                fill="none"
              >
                <path
                  d="M0 0H12V124H0V0Z"
                  fill="url(#paint0_linear_1306_950)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1306_950"
                    x1="6"
                    y1="0"
                    x2="6"
                    y2="124"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF3D3D" />
                    <stop offset="0.504808" stop-color="#FFE83D" />
                    <stop offset="1" stop-color="#62AB03" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="graph_line">
              <div class="horizontal">
                <div class="transparent_1"></div>
                <div class="line_2"></div>
                <div class="transparent_1"></div>
              </div>
              <div class="graph">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="316"
                  height="110"
                  viewBox="0 0 316 110"
                  fill="none"
                >
                  <path
                    d="M210.955 97.0267L264.019 7.88182C266.904 3.03534 272.13 0.0618859 277.77 0.0618864L316 0.061882L316 110L0 110L7.05046e-06 32.1833L14.7225 32.1833C18.8814 32.1833 22.8768 33.8027 25.8621 36.6982L57.1905 67.084C60.1758 69.9794 64.1713 71.5988 68.3301 71.5988L104.327 71.5988C108.486 71.5988 112.481 73.2181 115.467 76.1136L127.697 87.9763C130.683 90.8718 134.678 92.4911 138.837 92.4911L155.876 92.4911C160.035 92.4911 164.031 94.1104 167.016 97.0059L170.445 100.332C173.43 103.227 177.426 104.847 181.585 104.847L197.204 104.847C202.844 104.847 208.07 101.873 210.955 97.0267Z"
                    fill="url(#paint0_linear_1306_960)"
                    fill-opacity="0.08"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1306_960"
                      x1="160.665"
                      y1="110"
                      x2="160.665"
                      y2="-19.0485"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#62AB03" />
                      <stop offset="0.495192" stop-color="#FFE83D" />
                      <stop offset="1" stop-color="#FF3D3D" />
                    </linearGradient>
                  </defs>
                </svg>
                <svg
                  class="linie"
                  xmlns="http://www.w3.org/2000/svg"
                  width="316"
                  height="107"
                  viewBox="0 0 316 107"
                  fill="none"
                >
                  <path
                    d="M1.46898e-05 33.1833L14.7225 33.1833C18.8813 33.1833 22.8768 34.8027 25.8621 37.6982L57.1905 68.084C60.1758 70.9795 64.1713 72.5988 68.3301 72.5988L104.327 72.5988C108.486 72.5988 112.481 74.2181 115.467 77.1136L127.697 88.9763C130.683 91.8718 134.678 93.4911 138.837 93.4911L155.876 93.4911C160.035 93.4911 164.031 95.1105 167.016 98.006L170.445 101.332C173.43 104.227 177.426 105.847 181.585 105.847L197.204 105.847C202.844 105.847 208.068 102.877 210.952 98.0306L264.022 8.87792C266.906 4.03145 272.13 1.06189 277.77 1.06189L316 1.06188"
                    stroke="url(#paint0_linear_1306_961)"
                    stroke-width="2"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1306_961"
                      x1="160.665"
                      y1="111"
                      x2="160.665"
                      y2="-17.8338"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#62AB03" />
                      <stop offset="0.495192" stop-color="#FFE83D" />
                      <stop offset="1" stop-color="#FF3D3D" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div class="now_price">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2"
                height="124"
                viewBox="0 0 2 124"
                fill="none"
              >
                <path
                class="color_line_chart"
                  d="M1 -37V131"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-dasharray="6 6"
                />
              </svg>
              <div class="info_chart">
                <div class="date_chart">$450</div>
                <div class="point_chart"></div>
              </div>
            </div>
          </div>
          <div class="time_line">
            <div class="date_element">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2"
                height="6"
                viewBox="0 0 2 6"
                fill="none"
              >
                <path
                  d="M1.25 1V5"
                  stroke="#C6C6CD"
                  stroke-opacity="0.24"
                  stroke-linecap="round"
                />
              </svg>
              <div class="date">Apr 10</div>
            </div>
            <div class="date_element">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2"
                height="6"
                viewBox="0 0 2 6"
                fill="none"
              >
                <path
                  d="M1.25 1V5"
                  stroke="#C6C6CD"
                  stroke-opacity="0.24"
                  stroke-linecap="round"
                />
              </svg>
              <div class="date">Apr 20</div>
            </div>
            <div class="date_element">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2"
                height="6"
                viewBox="0 0 2 6"
                fill="none"
              >
                <path
                  d="M1.25 1V5"
                  stroke="#C6C6CD"
                  stroke-opacity="0.24"
                  stroke-linecap="round"
                />
              </svg>
              <div class="date">Apr 30</div>
            </div>

            <div class="data_arrow_element">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="29"
                viewBox="0 0 35 29"
                fill="none"
              >
                <g filter="url(#filter0_d_1307_94000)">
                  <path
                    class="color_arrow"
                    d="M15.5719 5.75075L8.86992 12.1678C7.06442 13.8965 8.25685 17 10.7266 17H24.1306C26.6003 17 27.7927 13.8965 25.9872 12.1678L19.2852 5.75076C18.2398 4.74975 16.6174 4.74975 15.5719 5.75075Z"
                    fill="white"
                  />
                  <path
                    class="color_arrow_stroke"
                    d="M15.5719 5.75075L8.86992 12.1678C7.06442 13.8965 8.25685 17 10.7266 17H24.1306C26.6003 17 27.7927 13.8965 25.9872 12.1678L19.2852 5.75076C18.2398 4.74975 16.6174 4.74975 15.5719 5.75075Z"
                    stroke="#1E1E1E"
                    stroke-width="1.71429"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_1307_94000"
                    x="0.291295"
                    y="0.714312"
                    width="34.2768"
                    height="27.4285"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="3.42857" />
                    <feGaussianBlur stdDeviation="3.42857" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.364706 0 0 0 0 0.313726 0 0 0 0 0.705882 0 0 0 0.12 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1307_94000"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1307_94000"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <div class="label_now">Now</div>
            </div>

            <div class="date_element">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2"
                height="6"
                viewBox="0 0 2 6"
                fill="none"
              >
                <path
                  d="M1.25 1V5"
                  stroke="#C6C6CD"
                  stroke-opacity="0.24"
                  stroke-linecap="round"
                />
              </svg>
              <div class="date">May 10</div>
            </div>
            <div class="date_element">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2"
                height="6"
                viewBox="0 0 2 6"
                fill="none"
              >
                <path
                  d="M1.25 1V5"
                  stroke="#C6C6CD"
                  stroke-opacity="0.24"
                  stroke-linecap="round"
                />
              </svg>
              <div class="date">May 20</div>
            </div>
            <div class="date_element">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2"
                height="6"
                viewBox="0 0 2 6"
                fill="none"
              >
                <path
                  d="M1.25 1V5"
                  stroke="#C6C6CD"
                  stroke-opacity="0.24"
                  stroke-linecap="round"
                />
              </svg>
              <div class="date">May 30</div>
            </div>
          </div>
        </div>
      </div>
    `
  }
}

customElements.define('track-price', TrackPrice)
