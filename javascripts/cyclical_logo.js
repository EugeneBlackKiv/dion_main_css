import './logo_center.js'

export class CyclicalLogo extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })

    // Crearea și atașarea HTML + CSS în interiorul DOM umbră
    this.shadowRoot.innerHTML = `
      <style>
        .logo_section{
           display: flex;
           justify-content: center;
        }
        .logo{
          display: flex;
          width: 94px;
          height: 94px;
          padding: 5px;
          align-items: center;
          justify-content: center;
          gap: 10px;
          
          border-radius: 999px;
          border: 2px solid var(--primary-primary, #805BFF);
          position: relative;
        }
        
        .positionare_video{
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          z-index: -1;
          border-radius: 80px;
          width: 94px;
          height: 94px;
        }
        
        .masca_fundal{
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          
          width: 95px;
          height: 95px;
          
          border-radius: 94px;
          background: radial-gradient(91.06% 91.06% at 26.06% 75%, rgba(255, 255, 255, 0.00) 41.58%, #FFF 100%);
        }
        .imaginefundal{
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          
          border-radius: 94px;
          z-index: -1;
          
          width: 94px;
          height: 94px;
          aspect-ratio: 1/1;
          background: url(./images/logo_back.png) lightgray 50% / cover no-repeat;
        }

      </style>
      
      <div class="logo_section">
      
        <div class="logo">
          <logo-center></logo-center>
          <div class="masca_fundal"></div>
          <div class="imaginefundal"></div>
<!--          <video class="positionare_video" autoplay muted loop>-->
<!--            <source src="./video/video_logo_2.mp4" type="video/mp4">-->
<!--            Your browser does not support the video tag.-->
<!--          </video>-->
        </div>
        
      </div>
    `
  }
}

customElements.define('cyclical-logo', CyclicalLogo)
