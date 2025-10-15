export class LogoCenter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});

    this.shadowRoot.innerHTML = `
      <style>
        .container-logo {
          width: 78px;
          height: 78px;
          position: relative;
        }
        .triangle_1{
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
        }
        
        @keyframes animate-triangle_1 {
          0% {
            transform: translateY(0) translateX(-50%) rotateY(0deg);
          }
          50% {
            transform: translateY(0) translateX(-50%) rotateY(180deg);
          }
          100% {
            transform: translateY(0) translateX(-50%) rotateY(0deg);
          }
        }

      </style>
      
      <div class="container-logo">
      
        <svg class="triangle_1" xmlns="http://www.w3.org/2000/svg" width="62" height="63" viewBox="0 0 62 63" fill="none">
          <path d="M28.5036 2.41497C29.5976 0.227597 32.72 0.227525 33.8139 2.41497L61.6614 58.111C62.6173 60.0228 61.3004 62.262 59.2113 62.4003L59.0067 62.407H53.0684H3.31073L3.10616 62.4003C1.01688 62.2622 -0.299859 60.0228 0.656086 58.111L28.5036 2.41497ZM16.518 51.276H45.7994L31.1582 21.9946L16.518 51.276Z" fill="white"/>
        </svg>
              
      </div>

    `;
  }

}

customElements.define('logo-center', LogoCenter);

