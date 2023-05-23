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
        <div class="row m-0 justify-content-center">
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
      </div>
    </div>
  </home-layout>
</template>

<script>
import HomeLayout from '@/layouts/HomeLayout'
import HeaderInfo from '@/components/HeaderInfo'
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
      ImgIndustriales3: ImgIndustriales3
    }
  },
  methods: {
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
  },
  mounted () {
    this.carrusel()
  },
  components: {
    HomeLayout,
    HeaderInfo
  }
}
</script>
