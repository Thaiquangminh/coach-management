<template>
  <section>
    <BaseCard >
      <header>
        <h2>Requested Received</h2>
      </header>
      <BaseSpinner v-if='loading' />
      <ul v-else-if='hasMessage'>
        <RequestItem v-for='request in getRequest'
                     :key='request.id'
                     :email='request.email'
                     :message='request.message'
                     :coachId='request.coachId'
        />
      </ul>
      <h3 v-else>You haven't received any requests yet!</h3>
    </BaseCard>
  </section>
</template>
<script >
import BaseCard from '@/components/ui/BaseCard.vue';
import { mapActions, mapGetters } from 'vuex';
import RequestItem from '@/components/request/RequestItem.vue';
import BaseSpinner from '@/components/ui/BaseSpinner.vue';

export default {
  components: { BaseSpinner, RequestItem, BaseCard },
  data() {
    return {
      loading: false
    }
  },
  computed: {
    ...mapGetters('request', ['getMessages', 'hasMessage']),
    getRequest() {
      return this.getMessages
    }
  },
  methods: {
    ...mapActions('request', ['handleGetRequests']),
    async loadRequests() {
      this.loading = true
      await this.handleGetRequests()
      this.loading = false
    }
  },
  created() {
    this.loadRequests()
  }
};
</script>


<style scoped>
  header {
    text-align: center;
  }

  ul {
    list-style: none;
    margin: 2rem auto;
    padding: 0;
    max-width: 30rem;
  }

  h3 {
    text-align: center;
  }
</style>
