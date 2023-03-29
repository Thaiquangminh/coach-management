<template>
    <form @submit.prevent='handleSubmit'>
      <BaseCard>
        <div class='formControl'>
          <label for='email'>Your E-Mail</label>
          <input type='text' id='email' v-model='email'>
        </div>
        <div class='formControl'>
          <label for='message'>Message</label>
          <textarea rows='5' id='message' v-model='message' />
        </div>
        <div class='actions'>
          <BaseButton>Send Message</BaseButton>
        </div>
      </BaseCard>
    </form>

</template>

<script>
  import BaseButton from '@/components/ui/BaseButton.vue';
  import BaseCard from '@/components/ui/BaseCard.vue';
  import { mapActions } from 'vuex';

  export default {
    components: { BaseCard, BaseButton },
    data() {
      return {
        email: '',
        message: ''
      }
    },
    methods: {
      ...mapActions('request', ['handleAddRequest']),
      handleSubmit() {
        const contactValue = {
          email: this.email,
          message: this.message,
          coachId: this.$route.params.id
        }
        this.handleAddRequest(contactValue)
        this.$router.push('/coaches')
      }
    }
  }
</script>

<style scoped>
  form {
    margin: 1rem;
    border-radius: 12px;
    padding: 1rem;
  }

  .formControl {
    margin: 0.5rem 0;
  }

  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
  }

  input {
    height: 2.5rem;
  }

  textarea {
    height: 5rem
  }

  input,
  textarea {
    display: block;
    width: 100%;
    font: inherit;
    border: 1px solid #ccc;
    padding: 0.15rem;
    margin-top: 1rem;
  }

  input:focus,
  textarea:focus {
    border-color: #3d008d;
    background-color: #faf6ff;
    outline: none;
  }

  .errors {
    font-weight: bold;
    color: red;
  }

  .actions {
    margin-top: 2rem;
    text-align: center;
  }
</style>