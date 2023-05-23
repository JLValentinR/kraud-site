<template>
  <home-layout>
    <div class="container-fluid header-container">
      <div>
        <div class="row m-0 align-items-center header-container-height float-left">
          <img :src="ImgKraudLogo" height="40" alt="" />
        </div>
        <div class="row m-0 align-items-center header-container-height float-right">
          <ul class="row m-0 header-back-ul">
            <li>Quiénes somos</li>
            <li>Marketplace</li>
            <li>Blog</li>
            <li>Iniciar sesión</li>
          </ul>
        </div>
      </div>
    </div>
  </home-layout>
</template>

<script>
import HomeLayout from '@/layouts/HomeLayout'
import ImgKraudLogo from '@/assets/header/logo_kraud.svg'

export default {
  name: 'HeaderInfo',
  props: {
  },
  data () {
    return {
      ImgKraudLogo: ImgKraudLogo
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
