<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>{{ rate }}$ / hour</h4>
    <div class='areas'>
      <span v-for='area in areas' :key='area'>
         <BaseBadge :title='area' :type='area'/>
      </span>
    </div>
    <div class='actions'>
      <BaseButton link='true' mode='outline' :to='getLinkViewDetail'>View Detail</BaseButton>
      <BaseButton link='true' :to='getLinkContact'>Contact</BaseButton>
    </div>
  </li>
</template>

<script>
  import BaseButton from '@/components/ui/BaseButton.vue';
  import BaseBadge from '@/components/ui/BaseBadge.vue';

  export default {
    components: { BaseBadge, BaseButton },
    props: {
      id: String,
      firstName: String,
      lastName: String,
      rate: Number,
      areas: Array,
    },
    computed: {
      fullName() {
        return this.firstName + ' ' + this.lastName
      },
      getLinkViewDetail() {
        return this.$route.path + '/' + this.id
      },
      getLinkContact() {
        return this.$route.path + '/' + this.id + '/contact'
      }
    }
  }
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.areas {
  margin: 1.5rem 0 1.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>