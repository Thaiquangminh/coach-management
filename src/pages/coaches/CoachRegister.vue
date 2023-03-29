<template>
  <BaseCard>
    <section>
      <h2>Register as a coach now!</h2>
      <CoachForm @saveData='handleFormData'/>
    </section>
  </BaseCard>

</template>

<script >


import BaseCard from '@/components/ui/BaseCard.vue';
import CoachForm from '@/components/coaches/CoachForm.vue';
import { mapActions } from 'vuex';

export default {
  components: { CoachForm, BaseCard },
  methods: {
    ...mapActions('coaches', ['handleAddCoach']),
    handleFormData(data) {
      this.handleAddCoach(data)
      this.$router.replace('/coaches')
    }
  }
};
</script>