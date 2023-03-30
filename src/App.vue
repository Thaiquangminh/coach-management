<template>
  <TheHeader />
<!--  <router-view v-slot='slotProps'>-->
<!--    <Transition name='page-opacity' mode='out-in'>-->
<!--      <component :is='slotProps.Component'></component>-->
<!--    </Transition>-->
<!--  </router-view>-->
  <router-view></router-view>
</template>
<script >
  export default {
    created() {
      this.$store.dispatch('keepLogin')
    }
  }
</script>
<style>
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

  * {
    box-sizing: border-box;
  }

  html {
    font-family: "Roboto", sans-serif;
  }

  body {
    margin: 0;
  }
</style>
<script setup>
import TheHeader from '@/components/layout/TheHeader.vue';
</script>
<style>
  .page-opacity-enter-active {
    transition: 600ms ease-out;

  }
  .page-opacity-leave-active {
    transition: 600ms ease-in;
  }

  .page-opacity-enter-from {
    opacity: 0;
    transform: translateY(-30px);
  }
  .page-opacity-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

</style>