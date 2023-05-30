<template>
  <home-layout>
    <div class="container-fluid header-container">
      <div>
        <div class="row m-0 align-items-center header-container-height float-left">
          <img :src="ImgKraudLogo" class="header-desktop" height="40" alt="" />
          <img :src="Group2" class="header-mobile" style="cursor: pointer;" height="40" alt="" />
        </div>
        <div class="row m-0 align-items-center header-container-height float-right">
          <div class="header-mobile">
            <div class="row m-0 align-items-center" style="width: 180px;">
              <div class="header-login mr-5">Log In</div>
              <img :src="!setShow ? IcnMenu : IcnClose" @click="setShow ? setChangeValue (false) : setChangeValue(true)" class="header-mobile" style="cursor: pointer;" width="42" alt="">
            </div>
          </div>
          <div id="menuShow" class="header-container-info">
            <ul class="row m-0 header-back-ul">
              <li>Quiénes somos</li>
              <li>Marketplace</li>
              <li>Blog</li>
              <li class="header-desktop">Iniciar sesión</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </home-layout>
</template>

<script>
import HomeLayout from '@/layouts/HomeLayout'
import ImgKraudLogo from '@/assets/header/logo_kraud.svg'
import Group2 from '@/assets/header/Group2.png'
import IcnMenu from '@/assets/header/Icn_Menu.png'
import IcnClose from '@/assets/header/icn_close.png'
import {getId} from '@/services/returnVal'

export default {
  name: 'HeaderInfo',
  props: {
  },
  data () {
    return {
      ImgKraudLogo: ImgKraudLogo,
      Group2: Group2,
      IcnMenu: IcnMenu,
      IcnClose: IcnClose,
      setShow: false
    }
  },
  methods: {
    setChangeValue (value) {
      this.setShow = value
      if (value) {
        getId('menuShow').style.display = ''
      } else {
        getId('menuShow').style.display = 'none'
      }
    }
  },
  created () {
  },
  mounted () {
    if (screen.width < 951) {
      getId('menuShow').style.display = 'none'
    }
  },
  components: {
    HomeLayout
  }
}
</script>
