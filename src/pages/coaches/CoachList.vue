<template>
  <div>
    <section>
      <CoachFilter  @change-filter='handleFilter'></CoachFilter>
    </section>
    <section>
      <BaseCard>
        <div class='controls'>
          <BaseButton mode='outline' @click='handleGetCoachesList'>Refresh</BaseButton>
          <BaseButton v-if='!userIsCoach' link='true' to='register' >Register as Coach</BaseButton>
        </div>
        <BaseSpinner v-if='loading'/>
        <ul v-else-if='hasCoach'>
          <li v-for='coach in filterGetCoaches' :key='coach.id'>
            <CoachItem
              :id='coach.id'
              :firstName='coach.firstName'
              :lastName='coach.lastName'
              :rate='coach.hourlyRate'
              :areas='coach.areas'
            />
          </li>
        </ul>
        <h2 v-else class='notFound'>No coaches found</h2>
      </BaseCard>
    </section>
  </div>
</template>

<script>
  import CoachItem from '@/components/coaches/CoachItem.vue';
  import BaseCard from '@/components/ui/BaseCard.vue';
  import BaseButton from '@/components/ui/BaseButton.vue';
  import CoachFilter from '@/components/coaches/CoachFilter.vue';
  import { mapActions, mapGetters } from 'vuex';
  import BaseSpinner from '@/components/ui/BaseSpinner.vue';
  export default {
    components: { BaseSpinner, CoachFilter, BaseButton, BaseCard, CoachItem },
    data() {
      return {
        activeFilter: {
          frontend: true,
          backend: true,
          career: true
        },
        loading: false,
      }
    },
    computed: {
      ...mapGetters('coaches', ['isCoach', 'getCoaches']),
      userIsCoach() {
        console.log(this.isCoach);
        return this.isCoach
      },
      filterGetCoaches() {
        const coaches = this.getCoaches
        return coaches.filter(coach => {
          if(this.activeFilter.frontend && coach.areas.includes('frontend')) {
            return true
          }
          if(this.activeFilter.backend && coach.areas.includes('backend')) {
            return true
          }
          if(this.activeFilter.career && coach.areas.includes('career')) {
            return true
          }
          return false
        })
      },
      hasCoach() {
        return !this.loading && this.$store.getters['coaches/hasCoach']
      }
    },
    methods: {
      ...mapActions('coaches', ['handleGetCoaches']),
      handleFilter(updatedFilter) {
        this.activeFilter = updatedFilter
      },
      async handleGetCoachesList() {
        this.loading = true
        await this.handleGetCoaches()
        this.loading = false
      }
    },
    created() {
      this.handleGetCoachesList()
    }
  }
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .controls {
    display: flex;
    justify-content: space-between;
  }

  .notFound {
    margin-top: 4rem;
    text-align: center;
  }
</style>