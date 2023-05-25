<template>
  <home-layout>
    <div class="container-fluid p-0">
      <header-info></header-info>
      <div class="position-relative row m-0 align-items-start home-carrusel">
        <div class="home-carrusel-left mt-5">
          <div>
            <img :src="ImgKraudLogo" width="450" alt="" />
          </div>
          <div class="home-carrusel-title mt-4">Plataforma de inversión en bienes raíces industriales con componentes sustentables basada en blockchain.</div>
          <div class="home-carrusel-subtitle mt-4">Invierte desde $1000 MXN</div>
          <button class="home-carrusel-button">Ver propiedades</button>
        </div>
        <div class="row m-0 position-relative justify-content-end home-carrusel-right mt-5" style="z-index: 200;">
          <div class="home-carrusel-image">
            <img id="imgCarrusel" :src="SliderImg1" height="550" style="border-radius: 8px 8px 0px 0px;" alt="" />
            <div class="home-carrusel-opacity"></div>
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
        <div class="row m-0 justify-content-center pt-5" style="background-color: #F5FBFF;">
          <div class="home-container-industriales">
            <div class="home-industriales-title mb-3 text-center">Adquiere tu token</div>
            <img data-gifffer="https://i.pinimg.com/originals/9e/89/be/9e89be7c6a1ea7c56321bb3913272d12.gif" data-gifffer-duration="4000" data-gifffer-width="250" data-gifffer-height="237" />
            <div class="card-body">
              <section class="carousel">
                <div class="position-relative" :style="'width: 100%; height: 415px; background: url(' + ImgSmall01 + ') center center/cover no-repeat #204B65; border-radius: 4px;'">
                  <div class="home-carrusel-opacity" style="background-color: rgba(0, 0, 0, 0.2); z-index: 100;"></div>
                  <div class="position-absolute row m-0 p-2" style="top: 0px; z-index: 200;">
                    <div class="home-tags-left-adquiere">FEATURED</div>
                    <div class="home-tags-right-adquiere ml-2">New Listening</div>
                  </div>
                  <div class="position-absolute global-width-100" style="bottom: 40px; z-index: 200;">
                    <div class="row m-0 pl-2 pr-2">
                      <div class="position-relative home-tag-irr">9.6 %IRR</div>
                      <div class="home-tag-irr-string pl-4">594 Columbia Ave</div>
                    </div>
                    <div class="row m-0 pl-2 pr-2">
                      <div class="position-relative home-tag-co">7.6 %CoC</div>
                      <div class="home-tag-co-string pl-4">Akron, OH 44310</div>
                    </div>
                    <div class="pl-2 pr-2 mt-3">
                      <button class="home-tag-button">Available: 2,149 tokens at $50</button>
                    </div>
                  </div>
                </div>
                <div class="position-relative" :style="'width: 100%; height: 415px; background: url(' + ImgSmall02 + ') center center/cover no-repeat #204B65; border-radius: 4px;'">
                  <div class="home-carrusel-opacity" style="background-color: rgba(0, 0, 0, 0.2); z-index: 100;"></div>
                  <div class="position-absolute row m-0 p-2" style="top: 0px; z-index: 200;">
                    <div class="home-tags-left-adquiere">FEATURED</div>
                    <div class="home-tags-right-adquiere ml-2">New Listening</div>
                  </div>
                  <div class="position-absolute global-width-100" style="bottom: 40px; z-index: 200;">
                    <div class="row m-0 pl-2 pr-2">
                      <div class="position-relative home-tag-irr">9.6 %IRR</div>
                      <div class="home-tag-irr-string pl-4">594 Columbia Ave</div>
                    </div>
                    <div class="row m-0 pl-2 pr-2">
                      <div class="position-relative home-tag-co">7.6 %CoC</div>
                      <div class="home-tag-co-string pl-4">Akron, OH 44310</div>
                    </div>
                    <div class="pl-2 pr-2 mt-3">
                      <button class="home-tag-button">Available: 2,149 tokens at $50</button>
                    </div>
                  </div>
                </div>
                <div class="position-relative" :style="'width: 100%; height: 415px; background: url(' + ImgSmall03 + ') center center/cover no-repeat #204B65; border-radius: 4px;'">
                  <div class="home-carrusel-opacity" style="background-color: rgba(0, 0, 0, 0.2); z-index: 100;"></div>
                  <div class="position-absolute row m-0 p-2" style="top: 0px; z-index: 200;">
                    <div class="home-tags-left-adquiere">FEATURED</div>
                    <div class="home-tags-right-adquiere ml-2">New Listening</div>
                  </div>
                  <div class="position-absolute global-width-100" style="bottom: 40px; z-index: 200;">
                    <div class="row m-0 pl-2 pr-2">
                      <div class="position-relative home-tag-irr">9.6 %IRR</div>
                      <div class="home-tag-irr-string pl-4">594 Columbia Ave</div>
                    </div>
                    <div class="row m-0 pl-2 pr-2">
                      <div class="position-relative home-tag-co">7.6 %CoC</div>
                      <div class="home-tag-co-string pl-4">Akron, OH 44310</div>
                    </div>
                    <div class="pl-2 pr-2 mt-3">
                      <button class="home-tag-button">Available: 2,149 tokens at $50</button>
                    </div>
                  </div>
                </div>
                <div class="position-relative" :style="'width: 100%; height: 415px; background: url(' + ImgSmall02 + ') center center/cover no-repeat #204B65; border-radius: 4px;'">
                  <div class="home-carrusel-opacity" style="background-color: rgba(0, 0, 0, 0.2); z-index: 100;"></div>
                  <div class="position-absolute row m-0 p-2" style="top: 0px; z-index: 200;">
                    <div class="home-tags-left-adquiere">FEATURED</div>
                    <div class="home-tags-right-adquiere ml-2">New Listening</div>
                  </div>
                  <div class="position-absolute global-width-100" style="bottom: 40px; z-index: 200;">
                    <div class="row m-0 pl-2 pr-2">
                      <div class="position-relative home-tag-irr">9.6 %IRR</div>
                      <div class="home-tag-irr-string pl-4">594 Columbia Ave</div>
                    </div>
                    <div class="row m-0 pl-2 pr-2">
                      <div class="position-relative home-tag-co">7.6 %CoC</div>
                      <div class="home-tag-co-string pl-4">Akron, OH 44310</div>
                    </div>
                    <div class="pl-2 pr-2 mt-3">
                      <button class="home-tag-button">Available: 2,149 tokens at $50</button>
                    </div>
                  </div>
                </div>
                <div class="position-relative" :style="'width: 100%; height: 415px; background: url(' + ImgSmall03 + ') center center/cover no-repeat #204B65; border-radius: 4px;'">
                  <div class="home-carrusel-opacity" style="background-color: rgba(0, 0, 0, 0.2); z-index: 100;"></div>
                  <div class="position-absolute row m-0 p-2" style="top: 0px; z-index: 200;">
                    <div class="home-tags-left-adquiere">FEATURED</div>
                    <div class="home-tags-right-adquiere ml-2">New Listening</div>
                  </div>
                  <div class="position-absolute global-width-100" style="bottom: 40px; z-index: 200;">
                    <div class="row m-0 pl-2 pr-2">
                      <div class="position-relative home-tag-irr">9.6 %IRR</div>
                      <div class="home-tag-irr-string pl-4">594 Columbia Ave</div>
                    </div>
                    <div class="row m-0 pl-2 pr-2">
                      <div class="position-relative home-tag-co">7.6 %CoC</div>
                      <div class="home-tag-co-string pl-4">Akron, OH 44310</div>
                    </div>
                    <div class="pl-2 pr-2 mt-3">
                      <button class="home-tag-button">Available: 2,149 tokens at $50</button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div class="row m-0 justify-content-center global-width-100">
              <button class="home-carrusel-button mt-0">Ver propiedades</button>
            </div>
          </div>
        </div>
        <div class="row m-0 justify-content-center home-center-aprendizaje">
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
                <div class="home-aprendizaje-title p-3">Como funciona Kraud para inversionistas</div>
              </div>
              <div class="home-center-col">
                <div class="position-relative p-3">
                  <img :src="Img02" width="100%" alt="" />
                  <div class="row m-0 align-items-end home-aprendizaje-card-absolute pb-4 pl-2 pr-2">
                    <div class="home-aprendizaje-inversiones">Inversiones</div>
                  </div>
                </div>
                <div class="home-aprendizaje-title p-3">¿Cómo funciona los impuestos?</div>
              </div>
              <div class="home-center-col">
                <div class="position-relative p-3">
                  <img :src="Img01" width="100%" alt="" />
                  <div class="row m-0 align-items-end home-aprendizaje-card-absolute pb-4 pl-2 pr-2">
                    <div class="home-aprendizaje-inversiones">Inversiones</div>
                  </div>
                </div>
                <div class="home-aprendizaje-title p-3">¿Qué son los bienes raíces fraccionados?</div>
              </div>
              <div class="home-center-col">
                <div class="position-relative p-3">
                  <img :src="ImgNaves1" width="100%" alt="" />
                  <div class="row m-0 align-items-end home-aprendizaje-card-absolute pb-4 pl-2 pr-2">
                    <div class="home-aprendizaje-inversiones">Inversiones</div>
                  </div>
                </div>
                <div class="home-aprendizaje-title p-3">¿Cómo comprar propiedades en Kraud?</div>
              </div>
            </div>
          </div>
        </div>
        <div class="position-relative row m-0 align-items-center justify-content-center home-width-start pb-5" :style="'background: url(' + ImgNaves + ') center center/cover no-repeat #204B65;'">
          <div class="home-width-start-absolute row m-0">
            <div class="global-width-100 pt-5 pb-5">
              <img id="valueGraph" :src="Animation1" width="100%" style="max-height: 550px;" alt="" />
            </div>
          </div>
          <div class="position-relative" style="height: auto;">
            <div class="home-start-text-title text-center">¿Listo para <br /> comenzar?</div>
            <div class="row m-0 justify-content-center global-width-100 mt-5 pt-5">
              <button class="home-carrusel-button mt-5">Comienza a invertir</button>
            </div>
          </div>
        </div>
      </div>
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
      counterGraph: 1
    }
  },
  methods: {
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
      }, 1000)
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
          slidesToShow: 3,
          slidesToScroll: 2,
          arrows: true,
          dots: false,
          speed: 300,
          infinite: true,
          autoplaySpeed: 3000,
          autoplay: true,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 1
              }
            }
          ]
      });
    });
    Gifffer();
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
