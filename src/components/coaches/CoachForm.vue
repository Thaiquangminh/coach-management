<template>
  <div>
    <form @submit.prevent='submitForm'>
      <div class='formControl'>
        <label for='firstname'>Firstname</label>
        <input type='text' id='firstname' v-model.trim='firstName.value' @blur="clearValidate('firstName')" >
        <p class='helperText' v-if='!firstName.isValid'>First name should not be empty</p>
      </div>
      <div class='formControl'>
        <label for='lastname'>Lastname</label>
        <input type='text' id='lastname' v-model.trim='lastName.value' @blur="clearValidate('lastName')">
        <p class='helperText' v-if='!lastName.isValid'>Last name should not be empty</p>

      </div>
      <div class='formControl'>
        <label for='description'>Description</label>
        <textarea id='description' v-model.trim='description.value' @blur="clearValidate('description')"/>
        <p class='helperText' v-if='!description.isValid'>Description should not be empty</p>

      </div>
      <div class='formControl'>
        <label for='rate'>Hourly Rate</label>
        <input type='number' id='rate' v-model.number='rate.value' @blur="clearValidate('rate')">
        <p class='helperText' v-if='!rate.isValid'>Hourly rate should higher than 0</p>
      </div>
      <div class='formControl'>
        <h3 class='areasTitle'>Areas of Expertise</h3>
        <div>
          <input type='checkbox' id='frontend' value='frontend' v-model='areas.value' @blur="clearValidate('areas')">
          <label for='frontend'>Frontend Development</label>
        </div>
        <div>
          <input type='checkbox' id='backend' value='backend' v-model='areas.value' @blur="clearValidate('areas')">
          <label for='backend'>Backend Development</label>
        </div>
        <div>
          <input type='checkbox' id='career' value='career' v-model='areas.value' @blur="clearValidate('areas')">
          <label for='career'>Career Advisory</label>
        </div>
        <p class='helperText' v-if='!areas.isValid'>Please pick 1 area</p>
      </div>
      <BaseButton class='registerBtn'>Register</BaseButton>
    </form>
    <BaseDialog :show='!isValidForm' title='Submit form failed' @close='handleClose'>
      <p>Wrong data type. Please fix above errors and submit again.</p>
    </BaseDialog>
  </div>


</template>
<script >

import BaseButton from '@/components/ui/BaseButton.vue';
import BaseDialog from '@/components/ui/BaseDialog.vue';

export default {
  components: { BaseDialog, BaseButton },
  emits: ['saveData'],
  data() {
    return {
      firstName: {
        value: '',
        isValid: true
      },
      lastName: {
        value: '',
        isValid: true
      },
      areas: {
        value: [],
        isValid: true
      },
      description: {
        value: '',
        isValid: true
      },
      rate: {
        value: null,
        isValid: true
      },
      isValidForm: true
    }
  },
  methods: {
    validateForm() {
      this.isValidForm = true
      if(this.firstName.value === '') {
        this.firstName.isValid = false
        this.isValidForm = false
      }
      if(this.lastName.value === '') {
        this.lastName.isValid = false
        this.isValidForm = false
      }
      if(this.description.value === '') {
        this.description.isValid = false
        this.isValidForm = false
      }
      if(this.rate.value < 0 || this.rate.value === null) {
        this.rate.isValid = false
        this.isValidForm = false
      }
      if(this.areas.value.length === 0) {
        this.areas.isValid = false
        this.isValidForm = false
      }
    },
    clearValidate(input) {
      this[input].isValid = true
    },
    handleClose() {
      this.isValidForm = true
    },

    submitForm() {
      this.validateForm()
      if(!this.isValidForm) {
        return;
      }
      const formData = {
        first: this.firstName.value,
        last: this.lastName.value,
        areas: this.areas.value,
        desc: this.description.value,
        rate: this.rate.value,
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

  .helperText {
    color: #d44950;
  }
</style>