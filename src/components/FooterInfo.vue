<template>
  <home-layout>
    <div class="footer-container">
      <div class="row m-0 align-items-start footer-container-cards pt-5">
        <div class="footer-container-card-one">
          <img :src="ImgKraudLogo" alt="" />
          <div class="global-width-1000 footer-text-title mt-4 header-desktop">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </div>
        </div>
        <div class="header-desktop footer-container-card-two">
          <div class="row m-0 justify-content-center">
            <div class="row m-0 align-items-center header-container-height" style="height: 40px;">
              <ul class="row m-0 justify-content-center header-back-ul2">
                <li>Quiénes somos</li>
                <li class="ml-4">Marketplace</li>
                <li class="ml-4">Blog</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-container-card-one">
          <img :src="changeImg1" @mouseover="setHoverImg(1)" @mouseleave="deleteOverImg(1)" alt="" />
          <img :src="changeImg2" @mouseover="setHoverImg(2)" @mouseleave="deleteOverImg(2)" class="ml-2" alt="" />
          <img :src="changeImg3" @mouseover="setHoverImg(3)" @mouseleave="deleteOverImg(3)" class="ml-2" alt="" />
          <img :src="changeImg4" @mouseover="setHoverImg(4)" @mouseleave="deleteOverImg(4)" class="ml-2" alt="" />
        </div>
      </div>
      <div class="row m-0 justify-content-center footer-text-subtitle mt-5">
        <div class="mr-5">
          <a href="#?">Privacy Policy</a>
        </div>
        <div class="ml-5 mr-5">
          <a href="#?">Terms Of Service</a>
        </div>
        <div class="ml-5">
          <a href="#?">Contact us</a>
        </div>
      </div>
    </div>
  </home-layout>
</template>

<script>
import HomeLayout from '@/layouts/HomeLayout'
import ImgKraudLogo from '@/assets/header/logo_kraud.svg'
import IcnFacebook from '@/assets/footer/Icn_Facebook.png'
import IcnWhatsapp from '@/assets/footer/Icn_Whatsapp.png'
import IcnTwitter from '@/assets/footer/Icn_Twitter.png'
import IcnYoutube from '@/assets/footer/Icn_Youtube.png'
import IcnFacebookGreen from '@/assets/footer/Icn_Facebook_green.png'
import IcnWhatsappGreen from '@/assets/footer/Icn_Whatsapp_green.png'
import IcnTwitterGreen from '@/assets/footer/Icn_Twitter_green.png'
import IcnYoutubeGreen from '@/assets/footer/Icn_Youtube_green.png'

export default {
  name: 'FooterInfo',
  props: {
  },
  data () {
    return {
      ImgKraudLogo: ImgKraudLogo,
      IcnFacebook: IcnFacebook,
      IcnWhatsapp: IcnWhatsapp,
      IcnTwitter: IcnTwitter,
      IcnYoutube: IcnYoutube,
      IcnFacebookGreen: IcnFacebookGreen,
      IcnWhatsappGreen: IcnWhatsappGreen,
      IcnTwitterGreen: IcnTwitterGreen,
      IcnYoutubeGreen: IcnYoutubeGreen,
      changeImg1: '',
      changeImg2: '',
      changeImg3: '',
      changeImg4: ''
    }
  },
  methods: {
    deleteOverImg (value) {
      if (value === 1) {
        this.changeImg1 = this.IcnFacebook
      } else if (value === 2) {
        this.changeImg2 = this.IcnWhatsapp
      } else if (value === 3) {
        this.changeImg3 = this.IcnTwitter
      } else if (value === 4) {
        this.changeImg4 = this.IcnYoutube
      }
    },
    setHoverImg (value) {
      if (value === 1) {
        this.changeImg1 = this.IcnFacebookGreen
      } else if (value === 2) {
        this.changeImg2 = this.IcnWhatsappGreen
      } else if (value === 3) {
        this.changeImg3 = this.IcnTwitterGreen
      } else if (value === 4) {
        this.changeImg4 = this.IcnYoutubeGreen
      }
    }
  },
  created () {
    this.changeImg1 = this.IcnFacebook
    this.changeImg2 = this.IcnWhatsapp
    this.changeImg3 = this.IcnTwitter
    this.changeImg4 = this.IcnYoutube
  },
  mounted () {
  },
  components: {
    HomeLayout
  }
}
</script>
