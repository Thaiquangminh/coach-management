<template>
  <router-view></router-view>
  <div>
    <section>
      <BaseCard>
        <h2>{{ fullName }}</h2>
        <h3>$ {{ rate }}/hour</h3>
      </BaseCard>
    </section>
    <section>
      <BaseCard>
        <h2>Interested ? Reach out now!</h2>
        <BaseButton link='true' :to='contactLink'>Contact</BaseButton>
      </BaseCard>
    </section>
    <section>
      <BaseCard>
        <BaseBadge v-for='area in areas' :key='area' :title='area' :type='area' />
        <p>{{ description }}</p>
      </BaseCard>
    </section>
  </div>
</template>
<script >

import BaseCard from '@/components/ui/BaseCard.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import BaseBadge from '@/components/ui/BaseBadge.vue';

export default {
  data() {
    return {
      coachInfo: null
    }
  },
  computed: {
    fullName() {
      return this.coachInfo?.firstName + ' ' + this.coachInfo?.lastName
    },
    rate() {
      return this.coachInfo?.hourlyRate
    },
    contactLink() {
      return this.$route.path + '/contact'
    },
    areas() {
      return this.coachInfo?.areas
    },
    description() {
      return this.coachInfo?.description
    }
  },
  components: { BaseBadge, BaseButton, BaseCard },
  props: ['id'],
  created() {
      this.coachInfo = this.$store.getters['coaches/getCoaches'].find(coach => coach.id === this.id)
  }
};
</script>