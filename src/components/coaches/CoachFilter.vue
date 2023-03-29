<template>
  <BaseCard>
    <h2 class='filterTitle'>Find Your Coach</h2>
    <span class="filterOption">
      <input
        type="checkbox"
        id="frontend"
        checked
        @change="handleFilter"
      />
      <label for="frontend">Frontend</label>
    </span>
    <span class="filterOption">
      <input
        type="checkbox"
        id="backend"
        checked
        @change="handleFilter"/>
      <label for="backend">Backend</label>
    </span>
    <span class="filterOption">
      <input
        type="checkbox"
        id="career"
        checked
        @change="handleFilter"/>
      <label for="career">Career</label>
    </span>
  </BaseCard>
</template>
<script>
import BaseCard from '@/components/ui/BaseCard.vue';

export default {
  components: { BaseCard },
  emits: ['change-filter'],
  name: 'CoachFilter',
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  methods: {
    handleFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      this.filters = {
        ...this.filters,
        [inputId]: isActive,
      };
      this.$emit('change-filter', this.filters);
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filterTitle {
  margin-bottom: 1rem;
}

.filterOption {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
