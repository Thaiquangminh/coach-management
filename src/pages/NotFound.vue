<template>
  <BaseCard>
    <h2>Page not found.</h2>
    <p>This page could not be found - maybe you can check all out coaches in
      <router-link to='/coaches'>coaches</router-link>
    </p>
  </BaseCard>
</template>
<script setup>
import BaseCard from '@/components/ui/BaseCard.vue';
</script>