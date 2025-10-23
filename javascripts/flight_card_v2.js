export class FlightCard extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })

    // Crearea și atașarea HTML + CSS în interiorul DOM umbră
    this.shadowRoot.innerHTML = `
      <style>
        .flight_card {
          display: flex;
          width: 360px;
          flex-direction: column;
          align-items: center;

          border-radius: 16px;
          border: 1px solid var(--outline-outline-variant, #393939);
          /*background: var(--surface-surface-container, #303030);*/
          background: var(--surface-surface-container-lowest, #282828);
          box-shadow: 0 6px 12px 0 var(--shadow-card, #1b1b1b);
        }
        .content {
          display: flex;
          padding: 12px 8px 8px 12px;
          flex-direction: column;
          align-items: flex-start;
          align-self: stretch;

          border-bottom: 1px dashed var(--outline-outline, #45464c);
        }
        .header {
          color: var(--surface-on-surface, #fff);

          /* b2/prim */
          font-family: var(--family-body-primary, Jost);
          font-size: var(--size-body-b2, 14px);
          font-style: normal;
          font-weight: var(--weight-body-primary, 400);
          line-height: var(--line-height-body-b2, 16px); /* 114.286% */

          opacity: var(--surface-on-surface-opa-quinary, 0.4);
        }
        .leg {
          display: flex;
          padding: 8px 0;
          align-items: center;
          align-self: stretch;
        }
        .leg_body {
          display: flex;
          align-items: flex-start;
          flex: 1 0 0;
          align-self: stretch;
        }
        .airline_container {
          display: flex;
          min-width: 32px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          align-self: stretch;
        }
        .time {
          display: flex;
          min-width: 184px;
          padding-left: 8px;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
          flex: 1 0 0;
        }
        .tiem_det {
          display: flex;
          justify-content: space-between;
          align-items: center;
          align-self: stretch;
        }
        .time_det_up {
          display: flex;
          align-items: center;
          gap: 2px;

          color: var(--surface-on-surface, #fff);

          /* b1/sec */
          font-family: var(--family-body-primary, Jost);
          font-size: var(--size-body-b1, 16px);
          font-style: normal;
          font-weight: var(--weight-body-secondary, 500);
          line-height: var(--line-height-body-b1, 20px); /* 125% */
        }
        .time_container {
          display: flex;
          align-items: flex-end;
          gap: 2px;
        }
        .stops {
          display: flex;
          width: 96px;
          padding: 2px 6px;
          justify-content: center;
          align-items: center;
          gap: 4px;

          border-radius: 8px;
          background: var(--surface-surface-container-low, #2c2c2c);

          color: var(--tertiary-tertiary, #62ab03);

          /* b2/prim */
          font-family: var(--family-body-primary, Jost);
          font-size: var(--size-body-b2, 14px);
          font-style: normal;
          font-weight: var(--weight-body-primary, 400);
          line-height: var(--line-height-body-b2, 16px); /* 114.286% */

          opacity: 0.72;
        }
        .one_stop {
          display: flex;
          width: 96px;
          padding: 2px 6px;
          align-items: center;
          gap: 4px;

          border-radius: 8px;
          background: var(--surface-surface-container-low, #2c2c2c);
        }
        .one_stop_font {
          color: var(--surface-on-surface, #fff);

          /* b2/prim */
          font-family: var(--family-body-primary, Jost);
          font-size: var(--size-body-b2, 14px);
          font-style: normal;
          font-weight: var(--weight-body-primary, 400);
          line-height: var(--line-height-body-b2, 16px); /* 114.286% */
          opacity: var(--surface-on-surface-opa-quaternary, 0.48);
        }
        .air_port {
          display: flex;
          padding-right: 4px;
          justify-content: space-between;
          align-items: center;
          align-self: stretch;
        }
        .air_port_cont {
          display: flex;
          align-items: center;
          gap: 2px;

          color: var(--surface-on-surface, #fff);

          /* b2/prim */
          font-family: var(--family-body-primary, Jost);
          font-size: var(--size-body-b2, 14px);
          font-style: normal;
          font-weight: var(--weight-body-primary, 400);
          line-height: var(--line-height-body-b2, 16px); /* 114.286% */
          opacity: var(--surface-on-surface-opa-tertiary, 0.56);
        }
        .duration {
          color: var(--surface-on-surface, #fff);

          /* b2/prim */
          font-family: var(--family-body-primary, Jost);
          font-size: var(--size-body-b2, 14px);
          font-style: normal;
          font-weight: var(--weight-body-primary, 400);
          line-height: var(--line-height-body-b2, 16px); /* 114.286% */
        }
        .price_block {
          display: flex;
          min-height: 48px;
          padding: 12px 16px;
          align-items: center;
          gap: 4px;
          align-self: stretch;

          border-top: 1px dashed var(--outline-outline, #45464c);
          background: var(--surface-surface-container-low, #2c2c2c);
          box-shadow: 0 2px 4px 0 var(--shadow-card, #1b1b1b);
          
          border-radius: 0 0 12px 12px;
        }
        .block_left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          flex: 1 0 0;
        }
        .carry_on {
          display: flex;
          padding: 4px 0;
          align-items: center;
          gap: 4px;
        }
        .cary_label {
          flex: 1 0 0;

          color: var(--surface-on-surface, #fff);
          text-align: center;

          /* c1/sec */
          font-family: var(--family-caption-primary, Jost);
          font-size: var(--size-caption-c1, 12px);
          font-style: normal;
          font-weight: var(--weight-caption-secondary, 500);
          line-height: var(--line-height-caption-c1, 14px); /* 116.667% */

          opacity: 0.48;
        }
        .block_right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 4px;
          align-self: stretch;
        }
        .big_price {
          display: flex;
          align-items: flex-start;
        }
        .big_curency {
          display: flex;
          padding-top: 2px;
          justify-content: center;
          align-items: center;
          gap: 8px;

          color: var(--surface-on-surface, #fff);
          font-family: var(--family-caption-primary, Jost);
          font-size: var(--size-caption-c1, 12px);
          font-style: normal;
          font-weight: var(--weight-caption-primary, 400);
          line-height: var(--line-height-caption-c1, 14px); /* 116.667% */
        }
        .big_price {
          color: var(--surface-on-surface, #fff);

          /* s1/sec */
          font-family: var(--family-subtitle-primary, Jost);
          font-size: var(--size-subtitle-s1, 18px);
          font-style: normal;
          font-weight: var(--weight-subtitle-secondary, 500);
          line-height: var(--line-height-subtitle-s1, 22px); /* 122.222% */
        }
        .total_price_block {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2px;
        }
        .total_price {
          display: flex;
          align-items: center;

          color: var(--surface-on-surface, #fff);
          font-family: var(--family-caption-primary, Jost);
          font-size: var(--size-caption-c1, 12px);
          font-style: normal;
          font-weight: var(--weight-caption-primary, 400);
          line-height: var(--line-height-caption-c1, 14px); /* 116.667% */
        }
        .total {
          color: var(--surface-on-surface, #fff);
          font-family: var(--family-caption-primary, Jost);
          font-size: var(--size-caption-c1, 12px);
          font-style: normal;
          font-weight: var(--weight-caption-primary, 400);
          line-height: var(--line-height-caption-c1, 14px); /* 116.667% */
        }
      </style>

      <div class="flight_card">
        <div class="content">
          <div class="header">Departure</div>
          <div class="leg">
            <div class="leg_body">
              <div class="airline_container">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.4859 19.6673C14.4859 18.8114 14.9308 18.6495 15.7737 19.1121C17.3191 19.968 18.9347 20.847 18.9347 20.847C18.9815 20.3613 19.4029 19.968 20.3395 20.1531C21.2059 20.3613 22.1659 20.5695 22.1659 20.5695C22.1659 20.5695 21.6507 19.4128 21.4166 18.9039C20.9951 17.9786 21.3932 17.516 21.8146 17.4003C21.8146 17.4003 21.2293 17.007 20.8312 16.7526C20.0117 16.1743 20.199 15.6191 20.9951 15.2721C22.0956 14.8095 23.4771 14.208 23.4771 14.208C23.0322 13.9535 22.5171 13.2596 23.1024 12.4268C23.6644 11.6172 24.5073 10.4837 24.5073 10.4837C24.5073 10.4837 23.0088 10.4837 22.0254 10.4837C21.1122 10.4605 20.9015 9.76656 20.9015 9.25765C20.9015 9.25765 19.4264 10.2755 18.3727 10.9926C17.483 11.5709 16.6869 11.0157 16.8274 9.99789C17.0381 8.42488 17.2254 6.66681 17.2254 6.66681C16.6869 7.03693 15.7503 7.01379 15.3288 6.13475C14.72 4.8162 13.9942 3.28946 13.9942 3.28946C13.9942 3.28946 13.2918 4.8162 12.683 6.13475C12.2849 7.01379 11.3249 7.03693 10.7864 6.66681C10.7864 6.66681 10.9737 8.42488 11.1845 9.99789C11.3249 11.0157 10.5054 11.5709 9.6391 10.9926C8.58545 10.2986 7.11033 9.25765 7.11033 9.25765C7.11033 9.76656 6.8996 10.4837 6.00985 10.4837C5.00303 10.4837 3.52792 10.4837 3.52792 10.4837C3.52792 10.4837 4.37084 11.6172 4.9562 12.4268C5.51815 13.2364 5.00303 13.9535 4.58157 14.208C4.58157 14.208 5.93961 14.8095 7.04009 15.2721C7.8596 15.6191 8.04691 16.1743 7.20399 16.7526C6.82936 17.0302 6.22058 17.4003 6.22058 17.4003C6.64204 17.5391 7.04009 17.9786 6.61863 18.9039C6.38448 19.4128 5.86937 20.5695 5.86937 20.5695C5.86937 20.5695 6.82936 20.3613 7.6957 20.1531C8.60886 19.9449 9.05374 20.3613 9.10057 20.847C9.10057 20.847 10.6928 19.968 12.2381 19.1121C13.081 18.6495 13.5259 18.8114 13.5259 19.6673V21.7955C13.5259 23.0215 13.2918 24.3632 12.8235 25.0803C6.8996 24.4326 2.00597 19.7598 2.00597 13.6066C2.00597 7.26825 7.36789 2.1097 13.9942 2.1097C20.6205 2.1097 25.9824 7.26825 25.9824 13.6066C25.9824 19.5516 21.3229 24.3863 15.3288 25.034V26.5839C22.3532 25.9593 27.8556 20.3844 27.8556 13.6066C27.8556 6.41235 21.6507 0.559814 13.9942 0.559814C6.33766 0.559814 0.132812 6.38922 0.132812 13.6066C0.132812 19.9449 4.93279 25.2191 11.3249 26.3988C12.402 26.607 13.081 26.769 13.643 27.4398C14.322 26.2138 14.4859 23.5998 14.4859 22.1193V19.6673Z"
                    fill="#E82C2A"
                  />
                </svg>
              </div>
              <div class="time">
                <div class="tiem_det">
                  <div class="time_det_up">
                    <div class="time_container">
                      <div>5:30</div>
                      <div>am</div>
                    </div>
                    <div>–</div>
                    <div class="time_container">
                      <div>5:55</div>
                      <div>pm</div>
                    </div>
                  </div>
                  <div class="stops">Nonstop</div>
                </div>
                <div class="air_port">
                  <div class="air_port_cont">
                    <div>Los Angeles (LAX)</div>
                    <div>–</div>
                    <div>Singapore (SIN)</div>
                  </div>
                  <div class="duration">7h 25m</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="header">Return</div>
          <div class="leg">
            <div class="leg_body">
              <div class="airline_container">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <rect width="28" height="28" fill="url(#pattern0_1274_123)" />
                  <defs>
                    <pattern
                      id="pattern0_1274_123"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlink:href="#image0_1274_123"
                        transform="scale(0.005)"
                      />
                    </pattern>
                    <image
                      id="image0_1274_123"
                      width="200"
                      height="200"
                      preserveAspectRatio="none"
                      xlink:href="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              </div>
              <div class="time">
                <div class="tiem_det">
                  <div class="time_det_up">
                    <div class="time_container">
                      <div>6:00</div>
                      <div>am</div>
                    </div>
                    <div>–</div>
                    <div class="time_container">
                      <div>1:05</div>
                      <div>pm</div>
                    </div>
                  </div>
                  <div class="one_stop">
                    <div class="one_stop_font">1 stop</div>
                    <div class="one_stop_font">·</div>
                    <div class="one_stop_font">Zürich</div>
                  </div>
                </div>
                <div class="air_port">
                  <div class="air_port_cont">
                    <div>Singapore (SIN)</div>
                    <div>–</div>
                    <div>Los Angeles (LAX)</div>
                  </div>
                  <div class="duration">12h 5m</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="price_block">
          <div class="block_left">
            <div class="carry_on">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g opacity="0.56">
                  <path
                    d="M10.5 8C10.7761 8 11 8.22386 11 8.5C11 8.77614 10.7761 9 10.5 9H5.5C5.22386 9 5 8.77614 5 8.5C5 8.22386 5.22386 8 5.5 8H10.5Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.5 1C10.7761 1 11 1.22386 11 1.5C11 1.77614 10.7761 2 10.5 2H10V5.5C11.933 5.5 13.5 7.067 13.5 9V12C13.5 13.7632 12.1961 15.2212 10.5 15.4639V15.5C10.5 15.7761 10.2761 16 10 16C9.72386 16 9.5 15.7761 9.5 15.5H6.5C6.5 15.7761 6.27614 16 6 16C5.72386 16 5.5 15.7761 5.5 15.5V15.4639C3.8039 15.2212 2.5 13.7632 2.5 12V9C2.5 7.067 4.067 5.5 6 5.5V2H5.5C5.22386 2 5 1.77614 5 1.5C5 1.22386 5.22386 1 5.5 1H10.5ZM6 6.5C4.61929 6.5 3.5 7.61929 3.5 9V12C3.5 13.2108 4.3609 14.22 5.50391 14.4502C5.52897 14.1975 5.74071 14 6 14C6.27614 14 6.5 14.2239 6.5 14.5H9.5C9.5 14.2239 9.72386 14 10 14C10.2593 14 10.47 14.1976 10.4951 14.4502C11.6386 14.2204 12.5 13.2112 12.5 12V9C12.5 7.61929 11.3807 6.5 10 6.5H6ZM7 5.5H9V2H7V5.5Z"
                    fill="white"
                  />
                </g>
              </svg>
              <div class="cary_label">1 Included</div>
            </div>
            <div class="carry_on">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g opacity="0.56">
                  <path
                    d="M10.5 5.5C10.7761 5.5 11 5.72386 11 6C11 6.27614 10.7761 6.5 10.5 6.5H5.5C5.22386 6.5 5 6.27614 5 6C5 5.72386 5.22386 5.5 5.5 5.5H10.5Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.5 0C10.7761 0 11 0.223858 11 0.5C11 0.776142 10.7761 1 10.5 1H10V2.5H11C12.933 2.5 14.5 4.067 14.5 6V12C14.5 13.7632 13.1961 15.2212 11.5 15.4639V15.5C11.5 15.7761 11.2761 16 11 16C10.7239 16 10.5 15.7761 10.5 15.5H5.5C5.5 15.7761 5.27614 16 5 16C4.72386 16 4.5 15.7761 4.5 15.5V15.4639C2.8039 15.2212 1.5 13.7632 1.5 12V6C1.5 4.067 3.067 2.5 5 2.5H6V1H5.5C5.22386 1 5 0.776142 5 0.5C5 0.223858 5.22386 0 5.5 0H10.5ZM5 3.5C3.61929 3.5 2.5 4.61929 2.5 6V12C2.5 13.2108 3.3609 14.22 4.50391 14.4502C4.52897 14.1975 4.74071 14 5 14C5.27614 14 5.5 14.2239 5.5 14.5H10.5C10.5 14.2239 10.7239 14 11 14C11.2593 14 11.47 14.1976 11.4951 14.4502C12.6386 14.2204 13.5 13.2112 13.5 12V6C13.5 4.61929 12.3807 3.5 11 3.5H5ZM7 2.5H9V1H7V2.5Z"
                    fill="white"
                  />
                </g>
              </svg>
              <div class="cary_label">10$ Baggage</div>
            </div>
          </div>
          <div class="block_right">
            <div class="big_price">
              <div class="big_curency">$</div>
              <div class="big_price">675</div>
            </div>
            <div class="total_price_block">
              <div class="total_price">
                <div>$</div>
                <div>675</div>
              </div>
              <div class="total">total</div>
            </div>
          </div>
        </div>
      </div>
    `
  }
}

customElements.define('flight-card', FlightCard)
