<template>
  <home-layout>
    <div class="footer-container">
      <div class="row m-0 align-items-start footer-container-cards pt-5">
        <div class="footer-container-card-one">
          <img :src="ImgKraudLogo" alt="" />
          <div class="global-width-1000 footer-text-title mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </div>
        </div>
        <div class="row m-0 justify-content-center footer-container-card-two">
          <div class="row m-0 align-items-center header-container-height" style="height: 40px;">
            <ul class="row m-0 header-back-ul">
              <li style="color: #D6C1F5;">Quiénes somos</li>
              <li class="ml-4" style="color: #D6C1F5;">Marketplace</li>
              <li class="ml-4" style="color: #D6C1F5;">Blog</li>
            </ul>
          </div>
        </div>
        <div class="footer-container-card-one">
          <img :src="IcnFacebook" alt="" />
          <img :src="IcnWhatsapp" class="ml-2" alt="" />
          <img :src="IcnTwitter" class="ml-2" alt="" />
          <img :src="IcnYoutube" class="ml-2" alt="" />
        </div>
      </div>
      <div class="row m-0 justify-content-center footer-text-subtitle mt-5">
        <a href="#?" class="mr-5">Privacy Policy</a>
        <a href="#?" class="ml-5 mr-5">Terms Of Service</a>
        <a href="#?" class="ml-5">Contact us</a>
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
      IcnYoutube: IcnYoutube
    }
  },
  methods: {
  },
  created () {
  },
  mounted () {
  },
  components: {
    HomeLayout
  }
}
</script>
