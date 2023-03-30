<template>
  <div class='authWrapper'>
    <BaseCard>
      <div class='title'>{{submitButton}}</div>
      <form class='form' @submit.prevent='submitForm'>
        <div class='formControl'>
          <label for='email'>E-Mail</label>
          <input type='text' id='email' v-model.trim='email'>
        </div>
        <div class='formControl'>
          <label for='password'>Password</label>
          <input type='password' id='password' autocomplete="on" v-model.trim='password'>
        </div>
        <p v-if='!isValid'>
          Please enter a valid email and password ( must be at least 6 characters long )
        </p>
        <div class='groupBtn'>
          <BaseButton>{{ submitButton }}</BaseButton>
          <BaseButton type='button' mode='flat' @click='switchAuthMode'>{{switchModeButton}}</BaseButton>
        </div>
      </form>
    </BaseCard>
  </div>
</template>
<script >

import BaseButton from '@/components/ui/BaseButton.vue';
import BaseCard from '@/components/ui/BaseCard.vue';
import { mapActions } from 'vuex';

export default {
  components: { BaseCard, BaseButton },
  data() {
    return {
      email: '',
      password: '',
      isValid: true,
      mode: 'login'
    }
  },
  computed: {
    token() {
      return this.$store.getters.getIsAuthenticated
    },
    submitButton() {
      if(this.mode === 'login') {
        return 'Login'
      }
      else {
        return 'Signup'
      }
    },
    switchModeButton() {
      if(this.mode === 'login') {
        return 'Switch to Signup'
      }
      else {
        return 'Switch to Login'
      }
    }
  },
  methods: {
    ...mapActions(['signup', 'login']),
    async submitForm() {
      this.isValid = true
      if (this.email === '' || !this.email.includes('@') || this.email.password <=6) {
        this.isValid = false
        return;
      }

      else if(this.mode === 'signup') {
        await this.signup({email: this.email, password: this.password})
      }

      else if(this.mode === 'login') {
        await this.login({email: this.email, password: this.password})
        const urlRedirect = '/' + (this.$route.query.redirect || 'coaches')
        this.token && this.$router.replace(urlRedirect)
      }
    },
    switchAuthMode() {
      if(this.mode === 'login') {
        this.mode = 'signup'
      }
      else if(this.mode === 'signup') {
        this.mode = 'login'
      }
    }
  }

};
</script>

<style scoped>
  .authWrapper {
    max-width: 450px;
    margin: 0 auto;
  }

  .title {
    font-size: 2.5rem;
    text-align: center;
  }

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

  input[type='text'], input[type='password'] {
    height: 40px;
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

  .groupBtn {
    margin-top: 3rem;
  }

  p {
    color: #d44950
  }

  .registerBtn {
    margin-top: 1rem;
  }

  .areasTitle {
    margin-top: 1.5rem;
  }
</style>