<template>
  <home-layout>
    <div class="container-fluid p-0">
      <div class="position-relative row m-0 align-items-start home-carrusel" style="z-index: 500; margin-top: 80px !important;">
        <div class="position-relative header-slider-grid">
          <div class="header-industriales-primero mt-5" style="z-index: 1000;">
            <div class="header-desktop">
              <img :src="ImgKraudLogo" width="450" alt="" />
            </div>
            <div class="home-carrusel-title mt-4 position-relative">Plataforma de inversión en bienes raíces industriales con componentes sustentables basada en blockchain.</div>
            <div class="home-carrusel-subtitle mt-4 position-relative">Invierte desde $1000 MXN</div>
            <div class="row m-0 global-width-100 home-center-button">
              <button class="home-carrusel-button" @mouseover="setStyle()" @mouseleave="deleteStyle()" :style="changeStyle">Ver propiedades <img v-if="changeStyle !== ''" :src="Vector10Stroke" /></button>
            </div>
          </div>
          <div class="position-relative header-industriales-segundo mt-5" style="z-index: 200;">
            <div class="row m-0 position-relative justify-content-end global-width-100">
              <div class="home-carrusel-image">
                <img id="imgCarrusel" :src="SliderImg1" style="border-radius: 8px 8px 0px 0px;" alt="" />
                <div id="opacitySlider" class="home-carrusel-opacity"></div>
              </div>
              <div class="row m-0 justify-content-end home-carrusel-container-img">
                <div class="position-relative ml-3 mr-3" @click="carruselSelect(1)">
                  <img :src="SliderImg1" alt="" :style="numberCounter === 1 ? 'border: 6px solid #9AEEC5;' : ''" />
                  <div :class="numberCounter === 1 ? '' : 'home-carrusel-opacity home-carrusel-container-img-normal'"></div>
                </div>
                <div class="position-relative ml-2 mr-2" @click="carruselSelect(2)">
                  <img :src="SliderImg2" alt="" :style="numberCounter === 2 ? 'border: 6px solid #9AEEC5;' : ''" />
                  <div :class="numberCounter === 2 ? '' : 'home-carrusel-opacity home-carrusel-container-img-normal'"></div>
                </div>
                <div class="position-relative ml-3 mr-3" @click="carruselSelect(3)">
                  <img :src="SliderImg3" alt="" :style="numberCounter === 3 ? 'border: 6px solid #9AEEC5;' : ''" />
                  <div :class="numberCounter === 3 ? '' : 'home-carrusel-opacity home-carrusel-container-img-normal'"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="home-ticker" height="60">
          <div class="ticker-wrapper-h">
              <ul class="news-ticker-h">
                <li class="row m-0" style="width: 370px; height: 60px;">
                  <div class="home-ticker-line ml-2 mr-3"></div>
                  <div class="home-ticker-title">9902 Garfield Ave</div>
                  <div class="row m-0">
                  <div class="home-ticker-title ml-4">$52.89</div>
                  <div class="row m-0 align-items-center ml-2 home-ticker-string">
                    <div>5.32%</div>
                    <img :src="imgValor" class="ml-1" alt="" />
                    </div>
                  </div>
                </li>
                <li class="row m-0" style="width: 370px; height: 60px;">
                  <div class="home-ticker-line ml-2 mr-3"></div>
                  <div class="home-ticker-title">9902 Garfield Ave</div>
                  <div class="row m-0">
                  <div class="home-ticker-title ml-4">$52.89</div>
                  <div class="row m-0 align-items-center ml-2 home-ticker-string">
                    <div>5.32%</div>
                    <img :src="imgValor" class="ml-1" alt="" />
                    </div>
                  </div>
                </li>
                <li class="row m-0" style="width: 370px; height: 60px;">
                  <div class="home-ticker-line ml-2 mr-3"></div>
                  <div class="home-ticker-title">9902 Garfield Ave</div>
                  <div class="row m-0">
                  <div class="home-ticker-title ml-4">$52.89</div>
                  <div class="row m-0 align-items-center ml-2 home-ticker-string">
                    <div>5.32%</div>
                    <img :src="imgValor" class="ml-1" alt="" />
                    </div>
                  </div>
                </li>
                <li class="row m-0" style="width: 370px; height: 60px;">
                  <div class="home-ticker-line ml-2 mr-3"></div>
                  <div class="home-ticker-title">9902 Garfield Ave</div>
                  <div class="row m-0">
                  <div class="home-ticker-title ml-4">$52.89</div>
                  <div class="row m-0 align-items-center ml-2 home-ticker-string">
                    <div>5.32%</div>
                    <img :src="imgValor" class="ml-1" alt="" />
                    </div>
                  </div>
                </li>
                <li class="row m-0" style="width: 370px; height: 60px;">
                  <div class="home-ticker-line ml-2 mr-3"></div>
                  <div class="home-ticker-title">9902 Garfield Ave</div>
                  <div class="row m-0">
                  <div class="home-ticker-title ml-4">$52.89</div>
                  <div class="row m-0 align-items-center ml-2 home-ticker-string">
                    <div>5.32%</div>
                    <img :src="imgValor" class="ml-1" alt="" />
                    </div>
                  </div>
                </li>
                <li class="row m-0" style="width: 370px; height: 60px;">
                  <div class="home-ticker-line ml-2 mr-3"></div>
                  <div class="home-ticker-title">9902 Garfield Ave</div>
                  <div class="row m-0">
                  <div class="home-ticker-title ml-4">$52.89</div>
                  <div class="row m-0 align-items-center ml-2 home-ticker-string">
                    <div>5.32%</div>
                    <img :src="imgValor" class="ml-1" alt="" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row m-0 justify-content-center" style="background-color: #F5FBFF;">
          <div class="home-container-industriales">
            <div style="height: auto;">
              <div class="home-industriales-title mb-3">Inversión segura en desarrollos <br /> industriales sustentables</div>
              <div class="position-relative">
                <div class="home-industriales-img" :style="'background: url(' + ImgBackIndustriales + ') center center/cover no-repeat #204B65;'"></div>
                <div class="position-absolute home-industriales-grid">
                  <div class="home-industriales-primero">
                    <div class="home-industriales-silver p-5">
                      <img :src="ImgIndustriales1" width="47" alt="" />
                      <div class="mt-4 home-industriales-card-title">Examina</div>
                      <div class="home-industriales-card-subtitle">Visualiza los datos financieros, informes de inspección y más. Todos los documentos de la propiedad están disponibles públicamente.</div>
                    </div>
                  </div>
                  <div class="home-industriales-segundo">
                    <div class="home-industriales-silver p-5">
                      <img :src="ImgIndustriales2" width="47" alt="" />
                      <div class="mt-4 home-industriales-card-title">Selecciona</div>
                      <div class="home-industriales-card-subtitle">Compra fracciones de propiedades de alquiler y conviértete en propietario directo.</div>
                    </div>
                  </div>
                  <div class="home-industriales-tercero">
                    <div class="home-industriales-silver p-5">
                      <img :src="ImgIndustriales3" width="47" alt="" />
                      <div class="mt-4 home-industriales-card-title">Gana alquiler y apreciación </div>
                      <div class="home-industriales-card-subtitle">Obtén pagos de alquiler diarios y cobra la apreciación de la propiedad cuando retires el dinero.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row m-0 justify-content-center pt-5" style="background-color: #F5FBFF;">
          <div class="position-relative home-container-industriales2">
            <div class="home-container-industriales3">
              <div class="home-industriales-title mb-3 text-center">Adquiere tu token</div>
              <div class="card-body">
                <section class="carousel">
                  <div>
                    <div class="position-relative" :style="'width: 100%; height: 415px; background: url(' + ImgSmall01 + ') center center/cover no-repeat #204B65; border-radius: 4px;'">
                      <div class="home-carrusel-opacity home-token-hover row m-0 align-items-end" style="background: linear-gradient(180deg, rgba(13, 5, 26, 0) 0%, #0D051A 100%); z-index: 100;">
                        <div class="pl-2 pr-2 pb-5 global-width-100">
                          <button class="home-tag-button">Available: 2,149 tokens at $50</button>
                        </div>
                      </div>
                      <div class="position-absolute row m-0 p-2" style="top: 0px; z-index: 200;">
                        <div class="home-tags-left-adquiere">FEATURED</div>
                        <div class="home-tags-right-adquiere ml-2">New Listening</div>
                      </div>
                      <div class="position-absolute global-width-100" style="bottom: 100px; z-index: 200;">
                        <div class="row m-0 pl-2 pr-2">
                          <div class="position-relative home-tag-irr">9.6 %IRR</div>
                          <div class="home-tag-irr-string pl-4">594 Columbia Ave</div>
                        </div>
                        <div class="row m-0 pl-2 pr-2">
                          <div class="position-relative home-tag-co">7.6 %CoC</div>
                          <div class="home-tag-co-string pl-4">Akron, OH 44310</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="position-relative" :style="'width: 100%; height: 415px; background: url(' + ImgSmall02 + ') center center/cover no-repeat #204B65; border-radius: 4px;'">
                      <div class="home-carrusel-opacity home-token-hover row m-0 align-items-end" style="background: linear-gradient(180deg, rgba(13, 5, 26, 0) 0%, #0D051A 100%); z-index: 100;">
                        <div class="pl-2 pr-2 pb-5 global-width-100">
                          <button class="home-tag-button">Available: 2,149 tokens at $50</button>
                        </div>
                      </div>
                      <div class="position-absolute row m-0 p-2" style="top: 0px; z-index: 200;">
                        <div class="home-tags-left-adquiere">FEATURED</div>
                        <div class="home-tags-right-adquiere ml-2">New Listening</div>
                      </div>
                      <div class="position-absolute global-width-100" style="bottom: 100px; z-index: 200;">
                        <div class="row m-0 pl-2 pr-2">
                          <div class="position-relative home-tag-irr">9.6 %IRR</div>
                          <div class="home-tag-irr-string pl-4">594 Columbia Ave</div>
                        </div>
                        <div class="row m-0 pl-2 pr-2">
                          <div class="position-relative home-tag-co">7.6 %CoC</div>
                          <div class="home-tag-co-string pl-4">Akron, OH 44310</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="position-relative" :style="'width: 100%; height: 415px; background: url(' + ImgSmall03 + ') center center/cover no-repeat #204B65; border-radius: 4px;'">
                      <div class="home-carrusel-opacity home-token-hover row m-0 align-items-end" style="background: linear-gradient(180deg, rgba(13, 5, 26, 0) 0%, #0D051A 100%); z-index: 100;">
                        <div class="pl-2 pr-2 pb-5 global-width-100">
                          <button class="home-tag-button">Available: 2,149 tokens at $50</button>
                        </div>
                      </div>
                      <div class="position-absolute row m-0 p-2" style="top: 0px; z-index: 200;">
                        <div class="home-tags-left-adquiere">FEATURED</div>
                        <div class="home-tags-right-adquiere ml-2">New Listening</div>
                      </div>
                      <div class="position-absolute global-width-100" style="bottom: 100px; z-index: 200;">
                        <div class="row m-0 pl-2 pr-2">
                          <div class="position-relative home-tag-irr">9.6 %IRR</div>
                          <div class="home-tag-irr-string pl-4">594 Columbia Ave</div>
                        </div>
                        <div class="row m-0 pl-2 pr-2">
                          <div class="position-relative home-tag-co">7.6 %CoC</div>
                          <div class="home-tag-co-string pl-4">Akron, OH 44310</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="position-relative" :style="'width: 100%; height: 415px; background: url(' + ImgSmall02 + ') center center/cover no-repeat #204B65; border-radius: 4px;'">
                      <div class="home-carrusel-opacity home-token-hover row m-0 align-items-end" style="background: linear-gradient(180deg, rgba(13, 5, 26, 0) 0%, #0D051A 100%); z-index: 100;">
                        <div class="pl-2 pr-2 pb-5 global-width-100">
                          <button class="home-tag-button">Available: 2,149 tokens at $50</button>
                        </div>
                      </div>
                      <div class="position-absolute row m-0 p-2" style="top: 0px; z-index: 200;">
                        <div class="home-tags-left-adquiere">FEATURED</div>
                        <div class="home-tags-right-adquiere ml-2">New Listening</div>
                      </div>
                      <div class="position-absolute global-width-100" style="bottom: 100px; z-index: 200;">
                        <div class="row m-0 pl-2 pr-2">
                          <div class="position-relative home-tag-irr">9.6 %IRR</div>
                          <div class="home-tag-irr-string pl-4">594 Columbia Ave</div>
                        </div>
                        <div class="row m-0 pl-2 pr-2">
                          <div class="position-relative home-tag-co">7.6 %CoC</div>
                          <div class="home-tag-co-string pl-4">Akron, OH 44310</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="position-relative" :style="'width: 100%; height: 415px; background: url(' + ImgSmall03 + ') center center/cover no-repeat #204B65; border-radius: 4px;'">
                      <div class="home-carrusel-opacity home-token-hover row m-0 align-items-end" style="background: linear-gradient(180deg, rgba(13, 5, 26, 0) 0%, #0D051A 100%); z-index: 100;">
                        <div class="pl-2 pr-2 pb-5 global-width-100">
                          <button class="home-tag-button">Available: 2,149 tokens at $50</button>
                        </div>
                      </div>
                      <div class="position-absolute row m-0 p-2" style="top: 0px; z-index: 200;">
                        <div class="home-tags-left-adquiere">FEATURED</div>
                        <div class="home-tags-right-adquiere ml-2">New Listening</div>
                      </div>
                      <div class="position-absolute global-width-100" style="bottom: 100px; z-index: 200;">
                        <div class="row m-0 pl-2 pr-2">
                          <div class="position-relative home-tag-irr">9.6 %IRR</div>
                          <div class="home-tag-irr-string pl-4">594 Columbia Ave</div>
                        </div>
                        <div class="row m-0 pl-2 pr-2">
                          <div class="position-relative home-tag-co">7.6 %CoC</div>
                          <div class="home-tag-co-string pl-4">Akron, OH 44310</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="position-relative" :style="'width: 100%; height: 415px; background: url(' + ImgSmall02 + ') center center/cover no-repeat #204B65; border-radius: 4px;'">
                      <div class="home-carrusel-opacity home-token-hover row m-0 align-items-end" style="background: linear-gradient(180deg, rgba(13, 5, 26, 0) 0%, #0D051A 100%); z-index: 100;">
                        <div class="pl-2 pr-2 pb-5 global-width-100">
                          <button class="home-tag-button">Available: 2,149 tokens at $50</button>
                        </div>
                      </div>
                      <div class="position-absolute row m-0 p-2" style="top: 0px; z-index: 200;">
                        <div class="home-tags-left-adquiere">FEATURED</div>
                        <div class="home-tags-right-adquiere ml-2">New Listening</div>
                      </div>
                      <div class="position-absolute global-width-100" style="bottom: 100px; z-index: 200;">
                        <div class="row m-0 pl-2 pr-2">
                          <div class="position-relative home-tag-irr">9.6 %IRR</div>
                          <div class="home-tag-irr-string pl-4">594 Columbia Ave</div>
                        </div>
                        <div class="row m-0 pl-2 pr-2">
                          <div class="position-relative home-tag-co">7.6 %CoC</div>
                          <div class="home-tag-co-string pl-4">Akron, OH 44310</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div class="row m-0 justify-content-center global-width-100">
                <button class="home-carrusel-button mt-2" @mouseover="setStyle()" @mouseleave="deleteStyle()" :style="changeStyle">Ver marketplace <img v-if="changeStyle !== ''" :src="Vector10Stroke" /></button>
              </div>
            </div>
            <div class="home-opacity-bottom header-desktop"></div>
          </div>
        </div>
        <div class="home-container-invertir position-relative" :style="'background: url(' + ImgInvertir + ') center center/cover no-repeat #204B65;'">
          <div class="home-container-invertir-opacity"></div>
          <div class="home-container-invertir-opacity2"></div>
          <div class="position-relative">
            <div class="home-industriales-title mb-3 text-center" style="color: #F5FBFF; padding-top: 150px;">¿Qué beneficios obtienes por invertir <br /> en Kraud?</div>
            <div class="global-width-100">
              <section class="regulars slider mt-4">
                <div style="width: 100%; height: 100%;">
                  <div style="width: 100%; height: 100%;">
                    <img :src="ImgInvertir1" style="width: 32px;" alt="" />
                  </div>
                  <div class="home-invertir-title mt-3">Amplias tu portafolio de inversión</div>
                  <div class="home-invertir-subtitle mt-5">Kraud habilita la inversión en bienes raíces industriales. Para invertir en este segmento se necesitaba mucho capital, hoy ya puedes invertir en Naves Industriales que otorgan los mejores rendimientos.</div>
                </div>
                <div>
                  <div>
                    <img :src="ImgInvertir2" style="width: 32px;" alt="" />
                  </div>
                  <div class="home-invertir-title mt-3">Inversión segura</div>
                  <div class="home-invertir-subtitle mt-5">Los Tokens que adquieras en Kraud demuestran que eres un inversionista de una propiedad, lo que te asegura el pago periódico (rentas) de forma automática.</div>
                </div>
                <div>
                  <div>
                    <img :src="ImgInvertir3" style="width: 32px;" alt="" />
                  </div>
                  <div class="home-invertir-title mt-3">Tu inversión crece en el tiempo</div>
                  <div class="home-invertir-subtitle mt-5">En comparación con otras inversiones que están atadas al mercado, la inversión en bienes raíces industriales tiene (y más ahora) una tendencia de plus valía por si sola.</div>
                </div>
                <div>
                  <div>
                    <img :src="ImgInvertir4" style="width: 32px;" alt="" />
                  </div>
                  <div class="home-invertir-title mt-3">Inversiones sustentables</div>
                  <div class="home-invertir-subtitle mt-5">El mundo está en un punto de quiebre y la industria es una de las principales causantes del impacto al medio ambiente por lo que las inversiones en Kraud deberán contar con componentes sustentables para que de esta forma pongamos nuestro "granito de arena" fomentando una industria limpia y responsable.</div>
                </div>
                <div>
                  <div>
                    <img :src="ImgInvertir1" style="width: 32px;" alt="" />
                  </div>
                  <div class="home-invertir-title mt-3">Amplias tu portafolio de inversión</div>
                  <div class="home-invertir-subtitle mt-5">Kraud habilita la inversión en bienes raíces industriales. Para invertir en este segmento se necesitaba mucho capital, hoy ya puedes invertir en Naves Industriales que otorgan los mejores rendimientos.</div>
                </div>
                <div>
                  <div>
                    <img :src="ImgInvertir2" style="width: 32px;" alt="" />
                  </div>
                  <div class="home-invertir-title mt-3">Inversión segura</div>
                  <div class="home-invertir-subtitle mt-5">Los Tokens que adquieras en Kraud demuestran que eres un inversionista de una propiedad, lo que te asegura el pago periódico (rentas) de forma automática.</div>
                </div>
                <div>
                  <div>
                    <img :src="ImgInvertir3" style="width: 32px;" alt="" />
                  </div>
                  <div class="home-invertir-title mt-3">Tu inversión crece en el tiempo</div>
                  <div class="home-invertir-subtitle mt-5">En comparación con otras inversiones que están atadas al mercado, la inversión en bienes raíces industriales tiene (y más ahora) una tendencia de plus valía por si sola.</div>
                </div>
                <div>
                  <div>
                    <img :src="ImgInvertir4" style="width: 32px;" alt="" />
                  </div>
                  <div class="home-invertir-title mt-3">Inversiones sustentables</div>
                  <div class="home-invertir-subtitle mt-5">El mundo está en un punto de quiebre y la industria es una de las principales causantes del impacto al medio ambiente por lo que las inversiones en Kraud deberán contar con componentes sustentables para que de esta forma pongamos nuestro "granito de arena" fomentando una industria limpia y responsable.</div>
                </div>
              </section>
              <div class="row m-0 justify-content-center global-width-100">
                <button class="home-carrusel-button mt-5" @mouseover="setStyle()" @mouseleave="deleteStyle()" :style="changeStyle">Ver propiedades <img v-if="changeStyle !== ''" :src="Vector10Stroke" /></button>
              </div>
            </div>
          </div>
        </div>
        <div class="row m-0 align-items-center home-container-funciona-kraud">
          <div class="global-width-100 position-relative">
            <div class="home-funciona-right-title header-mobile">Como funciona <br /> <a style="color: #9747FF;"> Kraud </a></div>
            <div class="position-relative home-funciona-back-img">
              <img :src="valorDeveloper.img" alt="" />
              <div id="opacitySlider2" class="home-absolute-funciona-kraud header-mobile"></div>
            </div>
            <div class="home-absolute-funciona-kraud header-desktop"></div>
            <div class="home-funciona-back-right">
              <div class="row m-0 align-items-center" style="height: 100%;">
                <div class="position-relative" style="height: auto;">
                  <div class="home-funciona-right-title header-desktop">Como funciona <br /> <a style="color: #9747FF;"> Kraud </a></div>
                  <div class="row m-0 global-width-100 home-funciona-centers">
                    <div class="row m-0 home-funciona-options mt-4">
                      <div @click="changeOption(true)" :class="valiteOption ? 'home-funciona-option1' : 'home-funciona-option2'">SOY INVERSIONISTA</div>
                      <div @click="changeOption(false)" :class="!valiteOption ? 'home-funciona-option1' : 'home-funciona-option2'">SOY DESARROLLADOR</div>
                    </div>
                  </div>
                  <div v-if="valiteOption" class="row m-0">
                    <div class="mt-3 pr-5 home-funciona-width-content">
                      <div class="home-funciona-right-title2">{{valorDeveloper.title}}</div>
                      <div class="home-funciona-right-title3 mt-3">{{valorDeveloper.subtitle}}</div>
                      <div class="home-funciona-right-title4 mt-3">{{valorDeveloper.description}}</div>
                    </div>
                    <div class="home-funciona-one header-desktop" style="width: 30px;">
                      <div @click="changeSubOption(0)" :class="validateSubOption === 0 ? 'home-funciona-start' : ''">1</div>
                      <div @click="changeSubOption(1)" :class="validateSubOption === 1 ? 'home-funciona-center' : ''">2</div>
                      <div @click="changeSubOption(2)" :class="validateSubOption === 2 ? 'home-funciona-center' : ''">3</div>
                      <div @click="changeSubOption(3)" :class="validateSubOption === 3 ? 'home-funciona-end' : ''">4</div>
                    </div>
                    <div class="header-mobile global-width-100 mt-4">
                      <div class="row m-0 justify-content-center global-width-100">
                        <div class="row m-0 home-funciona-horizontal">
                          <div @click="changeSubOption(0)" :class="validateSubOption === 0 ? 'home-funciona-start2' : 'home-funciona-start3'">1</div>
                          <div @click="changeSubOption(1)" :class="validateSubOption === 1 ? 'home-funciona-center2' : 'home-funciona-start3'">2</div>
                          <div @click="changeSubOption(2)" :class="validateSubOption === 2 ? 'home-funciona-center2' : 'home-funciona-start3'">3</div>
                          <div @click="changeSubOption(3)" :class="validateSubOption === 3 ? 'home-funciona-end2' : 'home-funciona-start3'">4</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-if="!valiteOption" class="row m-0">
                    <div class="mt-3 pr-5 home-funciona-width-content">
                      <div class="home-funciona-right-title2">{{valorDeveloper.title}}</div>
                      <div class="home-funciona-right-title3 mt-3">{{valorDeveloper.subtitle}}</div>
                      <div class="home-funciona-right-title4 mt-3">{{valorDeveloper.description}}</div>
                    </div>
                    <div class="home-funciona-one header-desktop" style="width: 30px;">
                      <div @click="changeSubOption(0)" :class="validateSubOption === 0 ? 'home-funciona-start' : ''">1</div>
                      <div @click="changeSubOption(1)" :class="validateSubOption === 1 ? 'home-funciona-center' : ''">2</div>
                      <div @click="changeSubOption(2)" :class="validateSubOption === 2 ? 'home-funciona-center' : ''">3</div>
                      <div @click="changeSubOption(3)" :class="validateSubOption === 3 ? 'home-funciona-end' : ''">4</div>
                    </div>
                    <div class="header-mobile global-width-100 mt-4">
                      <div class="row m-0 justify-content-center global-width-100">
                        <div class="row m-0 home-funciona-horizontal">
                          <div @click="changeSubOption(0)" :class="validateSubOption === 0 ? 'home-funciona-start2' : 'home-funciona-start3'">1</div>
                          <div @click="changeSubOption(1)" :class="validateSubOption === 1 ? 'home-funciona-center2' : 'home-funciona-start3'">2</div>
                          <div @click="changeSubOption(2)" :class="validateSubOption === 2 ? 'home-funciona-center2' : 'home-funciona-start3'">3</div>
                          <div @click="changeSubOption(3)" :class="validateSubOption === 3 ? 'home-funciona-end2' : 'home-funciona-start3'">4</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row m-0 justify-content-center home-center-aprendizaje pt-4">
          <div class="home-center-container p-3">
            <div class="global-width-100" style="height: 50px;">
              <div class="float-left home-aprendizaje-title">Centro de aprendizaje</div>
              <div class="float-right">
                <img :src="ImgVector" alt="" />
              </div>
            </div>
            <div class="home-line-white"></div>
            <div class="row m-0">
              <div class="home-center-col">
                <div class="position-relative p-3">
                  <img :src="ImgNaves1" width="100%" alt="" />
                  <div class="row m-0 align-items-end home-aprendizaje-card-absolute pb-4 pl-2 pr-2">
                    <div class="home-aprendizaje-inversiones">Inversiones</div>
                  </div>
                </div>
                <div class="home-aprendizaje-title2 p-3">Como funciona Kraud para inversionistas</div>
              </div>
              <div class="home-center-col">
                <div class="position-relative p-3">
                  <img :src="Img02" width="100%" alt="" />
                  <div class="row m-0 align-items-end home-aprendizaje-card-absolute pb-4 pl-2 pr-2">
                    <div class="home-aprendizaje-inversiones">Inversiones</div>
                  </div>
                </div>
                <div class="home-aprendizaje-title2 p-3">¿Cómo funciona los impuestos?</div>
              </div>
              <div class="home-center-col">
                <div class="position-relative p-3">
                  <img :src="Img01" width="100%" alt="" />
                  <div class="row m-0 align-items-end home-aprendizaje-card-absolute pb-4 pl-2 pr-2">
                    <div class="home-aprendizaje-inversiones">Inversiones</div>
                  </div>
                </div>
                <div class="home-aprendizaje-title2 p-3">¿Qué son los bienes raíces fraccionados?</div>
              </div>
              <div class="home-center-col">
                <div class="position-relative p-3">
                  <img :src="ImgNaves1" width="100%" alt="" />
                  <div class="row m-0 align-items-end home-aprendizaje-card-absolute pb-4 pl-2 pr-2">
                    <div class="home-aprendizaje-inversiones">Inversiones</div>
                  </div>
                </div>
                <div class="home-aprendizaje-title2 p-3">¿Cómo comprar propiedades en Kraud?</div>
              </div>
            </div>
          </div>
        </div>
        <div class="position-relative row m-0 align-items-center justify-content-center home-width-start pb-5" :style="'background: url(' + ImgNaves + ') center center/cover no-repeat #204B65;'">
          <div class="home-width-start-absolute row m-0">
            <div class="global-width-100 pt-5 pb-5 header-desktop">
              <img id="valueGraph" :src="Animation1" width="100%" style="max-height: 550px;" alt="" />
            </div>
          </div>
          <div class="position-relative" style="height: auto;">
            <div class="home-start-text-title text-center">¿Listo para <br /> comenzar?</div>
            <div class="row m-0 justify-content-center global-width-100 mt-5 pt-5">
              <button class="home-carrusel-button mt-5" @mouseover="setStyle()" @mouseleave="deleteStyle()" :style="changeStyle">Comienza invertir <img v-if="changeStyle !== ''" :src="Vector10Stroke" /></button>
            </div>
          </div>
        </div>
      </div>
      <header-info></header-info>
      <footer-info></footer-info>
    </div>
  </home-layout>
</template>

<script>
import HomeLayout from '@/layouts/HomeLayout'
import HeaderInfo from '@/components/HeaderInfo'
import FooterInfo from '@/components/FooterInfo'
import ImgKraudLogo from '@/assets/header/logo_kraud.svg'
import SliderImg1 from '@/assets/home/sliderimg1.jpg'
import SliderImg2 from '@/assets/home/sliderimg2.jpg'
import SliderImg3 from '@/assets/home/sliderimg3.jpg'
import imgValor from '@/assets/home/imgvalor.png'
import {getId} from '@/services/returnVal'
import ImgBackIndustriales from '@/assets/home/img-back-industriales.jpg'
import ImgIndustriales1 from '@/assets/home/img-industriales1.png'
import ImgIndustriales2 from '@/assets/home/img-industriales2.png'
import ImgIndustriales3 from '@/assets/home/img-industriales3.png'
import ImgSmall01 from '@/assets/home/img-011.jpg'
import ImgSmall02 from '@/assets/home/img-071.jpg'
import ImgSmall03 from '@/assets/home/img-021.jpg'
import ImgVector from '@/assets/home/Vector10.png'
import ImgNaves1 from '@/assets/home/naves-industriales-mexico1.jpg'
import Img01 from '@/assets/home/image1.jpg'
import Img02 from '@/assets/home/image2.jpg'
import AnimationHart from '@/assets/home/Animationchart.svg'
import ImgNaves from '@/assets/home/naves-industriales-mexico2.jpg'
import Animation1 from '@/assets/home/animation1.png'
import Animation2 from '@/assets/home/animation2.png'
import Animation3 from '@/assets/home/animation3.png'
import Animation4 from '@/assets/home/animation4.png'
import Animation5 from '@/assets/home/animation5.png'
import ImgInvertir from '@/assets/home/img-invertir.jpg'
import ImgInvertir1 from '@/assets/home/ImgInvertir1.png'
import ImgInvertir2 from '@/assets/home/ImgInvertir2.png'
import ImgInvertir3 from '@/assets/home/ImgInvertir3.png'
import ImgInvertir4 from '@/assets/home/ImgInvertir4.png'
import Industriales1 from '@/assets/home/industriales1.png'
import Industriales2 from '@/assets/home/industriales2.png'
import Industriales3 from '@/assets/home/industriales3.png'
import Industriales4 from '@/assets/home/industriales4.png'
import Vector10Stroke from '@/assets/home/Vector10Stroke.png'

export default {
  name: 'Home',
  props: {
  },
  data () {
    return {
      ImgKraudLogo: ImgKraudLogo,
      SliderImg1: SliderImg1,
      SliderImg2: SliderImg2,
      SliderImg3: SliderImg3,
      imgValor: imgValor,
      numberCounter: 1,
      setIntervalValue : '',
      ImgBackIndustriales: ImgBackIndustriales,
      ImgIndustriales1: ImgIndustriales1,
      ImgIndustriales2: ImgIndustriales2,
      ImgIndustriales3: ImgIndustriales3,
      ImgSmall01: ImgSmall01,
      ImgSmall02: ImgSmall02,
      ImgSmall03: ImgSmall03,
      ImgVector: ImgVector,
      ImgNaves1: ImgNaves1,
      Img01: Img01,
      Img02: Img02,
      AnimationHart: AnimationHart,
      ImgNaves: ImgNaves,
      Animation1: Animation1,
      Animation2: Animation2,
      Animation3: Animation3,
      Animation4: Animation4,
      Animation5: Animation5,
      temporizadorDato: '',
      counterGraph: 1,
      ImgInvertir: ImgInvertir,
      ImgInvertir1: ImgInvertir1,
      ImgInvertir2: ImgInvertir2,
      ImgInvertir3: ImgInvertir3,
      ImgInvertir4:ImgInvertir4,
      Industriales1: Industriales1,
      Industriales2: Industriales2,
      Industriales3: Industriales3,
      Industriales4: Industriales4,
      valiteOption: true,
      validateSubOption: 0,
      valorDeveloper: {
        img: '',
        title: '',
        subtitle: '',
        description: ''
      },
      valorInvestorAll: [
        {
          img: '',
          title: 'Paso 1',
          subtitle: 'Selección de la propiedad',
          description: 'Todas las propiedades en Kraud son evaluadas para definir su viabilidad. Por lo que cada proyecto contará con la información necesaria no solo para que puedas evaluar la parte financiera y de mercado, sino también verificar todo el sustento legal y de esta forma puedas seleccionar el proyecto que mejor se adecue a tus necesidades de manera segura.'
        },
        {
          img: '',
          title: 'Paso 2',
          subtitle: 'Compra de tokens',
          description: 'Todas las propiedades en Kraud son evaluadas para definir su viabilidad. Por lo que cada proyecto contará con la información necesaria no solo para que puedas evaluar la parte financiera y de mercado, sino también verificar todo el sustento legal y de esta forma puedas seleccionar el proyecto que mejor se adecue a tus necesidades de manera segura.'
        },
        {
          img: '',
          title: 'Paso 3',
          subtitle: 'Cuál es tu riesgo',
          description: 'En cualquier inversión, existe un riesgo asociado. En el caso de las inversiones en Kraud el riesgo esta en la tasa de desocupación (cuando no está rentado el inmueble) y por ende no hayan ingresos. Sin embargo Kraud ha pensado en eso resolviéndolo de dos formas: A) Dentro del monto de inversión existe un fondo de desocupación el cual se irá devengando cuando no exista un arrendatario y B) Kraud cuenta con un equipo dedicado a comercializar las propiedades. Toma en cuenta que mientras está en proceso de construcción obviamente no recibirás renta.'
        },
        {
          img: '',
          title: 'Paso 4',
          subtitle: 'Recibe tus rentas',
          description: 'En el proceso para darte de alta en Kraud te pediremos tus datos bancarios para que en cuanto paguen la renta, a ti se te disperse tu pago correspondiente y proporcional al monto de tu inversión. Comúnmente son pagos mensuales, pero es posible que esta condición cambie dependiendo el proyecto.'
        }
      ],
      valorDeveloperAll: [
        {
          img: '',
          title: 'Paso 1',
          subtitle: 'Propiedad enviada',
          description: 'Un desarrollador envía su proyecto para ser sometido a la evaluación de viabilidad de inversión. El desarrollador debe contar con un terreno y cumplir  en forma con todos los requerimientos no solo de posesión sino también de información acerca de su proyecto.'
        },
        {
          img: '',
          title: 'Paso 2',
          subtitle: 'Propiedad puesta bajo contrato',
          description: 'Una vez aprobado el proyecto de desarrollo, estos son procesados legalmente para formar una entidad moral que permita la inclusión de inversionistas en diferentes series de acciones. Al mismo tiempo se hace la oferta de Tokens de seguridad basados en blockchain para demostrar la participación en la inversión ya sea por la cesión del terreno o la aportación de capital. A ti como dueño del terreno se te asignarán Tokens.'
        },
        {
          img: '',
          title: 'Paso 3',
          subtitle: 'Recaudación de fondos',
          description: 'Kraud ayuda a la recaudación de los fondos necesarios para el desarrollo del proyecto a través de inversionistas. Cuando los fondos se recaudan, se inicia la construcción del proyecto. A través de esas entidades legales creadas para cada proyecto, Kraud se asegura que los fondos sean usados adecuadamente. El monto total de inversión incluye un rubro por desocupación.'
        },
        {
          img: '',
          title: 'Paso 4',
          subtitle: 'Comercialización de propiedades',
          description: 'El equipo de Kraud trabaja para conseguir a los arrendatarios para que en cuanto se concluya la construcción la propiedad se ocupe inmediatamente. En este punto, Kraud será encargado de la administración y mantenimiento.'
        }
      ],
      Vector10Stroke: Vector10Stroke,
      changeStyle: ''
    }
  },
  methods: {
    deleteStyle () {
      this.changeStyle = ''
    },
    setStyle () {
      this.changeStyle = 'background-color: #0D051A;'
    },
    changeInvestorValue (value) {
      if (value === 0) {
        this.valorDeveloper.img = this.Industriales1
      } else if (value === 1) {
        this.valorDeveloper.img = this.Industriales2
      } else if (value === 2) {
        this.valorDeveloper.img = this.Industriales3
      } else if (value === 3) {
        this.valorDeveloper.img = this.Industriales4
      }
      this.valorDeveloper.title = this.valorInvestorAll[value].title
      this.valorDeveloper.subtitle = this.valorInvestorAll[value].subtitle
      this.valorDeveloper.description = this.valorInvestorAll[value].description
    },
    changeDeveloperValue (value) {
      if (value === 0) {
        this.valorDeveloper.img = this.Industriales4
      } else if (value === 1) {
        this.valorDeveloper.img = this.Industriales3
      } else if (value === 2) {
        this.valorDeveloper.img = this.Industriales2
      } else if (value === 3) {
        this.valorDeveloper.img = this.Industriales1
      }
      this.valorDeveloper.title = this.valorDeveloperAll[value].title
      this.valorDeveloper.subtitle = this.valorDeveloperAll[value].subtitle
      this.valorDeveloper.description = this.valorDeveloperAll[value].description
    },
    changeSubOption (value) {
      this.validateSubOption= value
      if (this.valiteOption) {
        this.changeInvestorValue(value)
      } else {
        this.changeDeveloperValue(value)
      }
    },
    changeOption (value) {
      this.valiteOption = value
      if (value) {
        this.changeSubOption(0)
        this.changeInvestorValue(0)
      } else {
        this.changeSubOption(0)
        this.changeDeveloperValue(0)
      }
    },
    comenzarTemporizador () {
      const vm = this
      this.temporizadorDato = setInterval(function () {
        if (vm.counterGraph === 5) {
          vm.counterGraph = 1
        } else {
          vm.counterGraph = vm.counterGraph + 1
        }
        if (vm.counterGraph === 1) {
          getId('valueGraph').src = vm.Animation1
        } else if (vm.counterGraph === 2) {
          getId('valueGraph').src = vm.Animation2
        } else if (vm.counterGraph === 3) {
          getId('valueGraph').src = vm.Animation3
        } else if (vm.counterGraph === 4) {
          getId('valueGraph').src = vm.Animation4
        } else if (vm.counterGraph === 5) {
          getId('valueGraph').src = vm.Animation5
        }
      }, 900)
    },
    carruselSelect (value) {
      this.numberCounter = value
      getId('imgCarrusel').setAttribute('class', 'dropdown4')
      if (value === 1) {
        getId('imgCarrusel').src = this.SliderImg1
      } else if (value === 2) {
        getId('imgCarrusel').src = this.SliderImg2
      } else if (value === 3) {
        getId('imgCarrusel').src = this.SliderImg3
      }
      setTimeout(function () {
        getId('imgCarrusel').setAttribute('class', '')
      }, 1000)
      clearInterval(this.setIntervalValue)
      this.carrusel()
    },
    carrusel () {
      const vm = this
      this.setIntervalValue = setInterval(function () {
        getId('imgCarrusel').setAttribute('class', 'dropdown4')
        if (vm.numberCounter < 3) {
          vm.numberCounter = vm.numberCounter + 1
          if (vm.numberCounter === 1) {
            getId('imgCarrusel').src = vm.SliderImg1
          } else if (vm.numberCounter === 2) {
            getId('imgCarrusel').src = vm.SliderImg2
          } else if (vm.numberCounter === 3) {
            getId('imgCarrusel').src = vm.SliderImg3
          }
        } else {
          vm.numberCounter = 1
          getId('imgCarrusel').src = vm.SliderImg1
        }
        setTimeout(function () {
          getId('imgCarrusel').setAttribute('class', '')
        }, 1000)
      }, 6000)
    }
  }
  ,
  created () {
    $(document).on('ready', function() {
      $('.carousel').slick({
          centerMode: true,
          slidesToShow: 5,
          slidesToScroll: 2,
          arrows: true,
          dots: true,
          speed: 300,
          infinite: true,
          autoplaySpeed: 30000,
          autoplay: true,
          responsive: [
            {
              breakpoint: 1300,
              settings: {
                centerMode: true,
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 1100,
              settings: {
                centerMode: true,
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 900,
              settings: {
                centerMode: false,
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 576,
              settings: {
                centerMode: false,
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });
      $(".regulars").slick({
        centerMode: false,
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 1100,
              settings: {
                centerMode: false,
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 900,
              settings: {
                centerMode: false,
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 576,
              settings: {
                centerMode: false,
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });
    });
    this.changeInvestorValue(0)
  },
  mounted () {
    this.carrusel()
    this.comenzarTemporizador()
  },
  components: {
    HomeLayout,
    HeaderInfo,
    FooterInfo
  }
}
</script>
