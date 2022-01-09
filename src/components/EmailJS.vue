<template>
<div>
 <div class="contactform">
        <form ref="form" @submit.prevent="sendEmail">
          <label>Name</label>
          <input 
            type="text" 
            v-model="user_name"
            name="user_name"
            placeholder="Your Name"
          >
          <label>Email</label>
          <input 
            type="email" 
            v-model="user_email"
            name="user_email"
            placeholder="Your Email"
            >
          <label>Message</label>
          <textarea 
            name="message"
            v-model="message"
            cols="30" rows="5"
            placeholder="Message">
          </textarea>
          
          <input type="submit" value="Send">
        </form>
    </div>
</div>
</template>

<script>
import emailjs from 'emailjs-com';
import { toast } from 'bulma-toast';

export default {
    name: 'EmailJS',
    data() {
    return {
      user_name: '',
      user_email: '',
      message: ''
    }
  },
  methods: {
    sendEmail() {
      try {
        if (this.user_name == ''|| this.user_email == '' || this.message==''){
          toast({
                message: 'Finish filling out the form!',
                type: 'is-danger',
                dismissible: true,
                pauseOnHover: true,
                duration: 5000,
                position: 'center',
            })
          return
        } else {
        emailjs.sendForm('contact_service2', 'contact_form2', this.$refs.form,
        'user_uKgW0D0y2h4gVWiwAdz5T', {
          user_name: this.user_name,
          user_email: this.user_email,
          message: this.message
        })
         toast({
                message: 'The message was sent successfully!',
                type: 'is-success',
                dismissible: true,
                pauseOnHover: true,
                duration: 5000,
                position: 'center',
            })
        }
      } catch(error) {
          console.log({error})

           toast({
                message: 'Message did not send. Please try again!',
                type: 'is-danger',
                dismissible: true,
                pauseOnHover: true,
                duration: 5000,
                position: 'center',
            })
      }
      // Reset form field
      this.user_name = ''
      this.user_email = ''
      this.message = ''
    }
  },
}
</script>
