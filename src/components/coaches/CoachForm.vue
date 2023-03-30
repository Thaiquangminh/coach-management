<template>
    <form @submit.prevent='submitForm'>
      <div class='formControl'>
        <label for='firstname'>Firstname</label>
        <input type='text' id='firstname' v-model.trim='firstName'>
      </div>
      <div class='formControl'>
        <label for='lastname'>Lastname</label>
        <input type='text' id='lastname' v-model.trim='lastName'>
      </div>
      <div class='formControl'>
        <label for='description'>Description</label>
        <textarea id='firstname' v-model.trim='description'/>
      </div>
      <div class='formControl'>
        <label for='rate'>Hourly Rate</label>
        <input type='number' id='rate' v-model.number='rate'>
      </div>
      <div class='formControl'>
        <h3 class='areasTitle'>Areas of Expertise</h3>
        <div>
          <input type='checkbox' id='frontend' value='frontend' v-model='areas'>
          <label for='frontend'>Frontend Development</label>
        </div>
        <div>
          <input type='checkbox' id='backend' value='backend' v-model='areas'>
          <label for='backend'>Backend Development</label>
        </div>
        <div>
          <input type='checkbox' id='career' value='career' v-model='areas'>
          <label for='career'>Career Advisory</label>
        </div>
      </div>
      <BaseButton class='registerBtn'>Register</BaseButton>
    </form>

</template>
<script >

import BaseButton from '@/components/ui/BaseButton.vue';

export default {
  components: { BaseButton },
  emits: ['saveData'],
  data() {
    return {
      firstName: '',
      lastName: '',
      areas: [],
      description: '',
      rate: null,
    }
  },
  methods: {
    validateForm() {

    },

    submitForm() {
      this.validateForm()
      const formData = {
        first: this.firstName,
        last: this.lastName,
        areas: this.areas,
        desc: this.description,
        rate: this.rate,
      }
      this.$emit('saveData', formData)
    }
  }
};
</script>

<style>
  .formControl {
    margin: 0.5rem 0;
  }

  label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    margin-top: 2rem;
  }

  input[type='checkbox'] + label {
    font-weight: normal;
    display: inline;
    margin: 0 0 0 0.5rem;
  }

  input[type='text'], input[type='number'] {
    height: 30px;
  }
  textarea {
    height: 60px;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
  }

  input:focus,
  textarea:focus {
    background-color: #f0e6fd;
    outline: none;
    border-color: #3d008d;
  }

  input[type='checkbox'] {
    margin: 0.45rem 0;
    display: inline;
    width: auto;
    border: none;
  }

  input[type='checkbox']:focus {
    outline: #3d008d solid 1px;
  }

  h3 {
    margin: 0.5rem 0;
    font-size: 1rem;
  }

  .invalid label {
    color: red;
  }

  .invalid input,
  .invalid textarea {
    border: 1px solid red;
  }

  .registerBtn {
    margin-top: 1rem;
  }

  .areasTitle {
    margin-top: 1.5rem;
  }
</style>