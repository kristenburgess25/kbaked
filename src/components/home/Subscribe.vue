<template>
  <v-container
    id="subscribe"
    tag="section"
  >
    <base-card
      color="rgb(118, 20, 20)"
      class="pa-3"
    >
      <v-container id="subscribe-container">
        <v-row>
          <v-col
          >
            <base-subheading class="mb-3">
              Subscribe
            </base-subheading>

            <p>
              Enter your email address to subscribe to this blog
              and receive notifications of new recipes!
            </p>

            <v-row class="pa-2">
              <v-responsive
                class="overflow-visible mr-2"
                max-width="400"
              >
                <v-text-field
                  hide-details
                  v-model="email"
                  class="textarea"
                  label="Your Email Address"
                  solo

                />
              </v-responsive>

              <v-btn
                :block="$vuetify.breakpoint.xsOnly"
                id="subscribe-btn"
                class="ma-0"
                color="#00b9bc"
                style="height: 48px"
                @click="handleClick()"
              >
                Subscribe
              </v-btn>
            </v-row>
            <p v-if="message">
              <br/>
              Please enter a valid email address.
            </p>
          </v-col>

          <!-- <v-col
            cols="12"
            md="6"
            offset-md="1"
          >
            <base-subheading>Contact</base-subheading>

            <v-list class="transparent">
              <v-list-item>
                <v-list-item-avatar
                  color="primary"
                >
                  <v-icon
                    class="elevation-4"
                    dark
                  >
                    mdi-email-outline
                  </v-icon>
                </v-list-item-avatar>

                <v-list-item-title>EMAIL</v-list-item-title>

                <v-list-item-subtitle>
                  THEARTOFTRAVEL@GMAIL.COM
                </v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <v-list-item-avatar color="primary">
                  <v-icon
                    class="elevation-4"
                    dark
                  >
                    mdi-map-marker
                  </v-icon>
                </v-list-item-avatar>

                <v-list-item-title>ADDRESS</v-list-item-title>

                <v-list-item-subtitle>
                  1234 WORLD DR. HERE, TX 76123
                </v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <v-list-item-avatar color="primary">
                  <v-icon
                    class="elevation-4"
                    dark
                  >
                    mdi-phone
                  </v-icon>
                </v-list-item-avatar>

                <v-list-item-title>PHONE</v-list-item-title>

                <v-list-item-subtitle>
                  555-789-1234
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-col> -->
        </v-row>
      </v-container>
    </base-card>
  </v-container>
</template>

<script>
  import firebase from 'firebase'
  export default {
    name: 'HomeSubscribe',

    data () {
      return {
        email: '',
        reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
        message: '',
      }
    },

    methods: {
      handleClick: function() {
        this.validateEmail()
      },

      handleMessage: function(status) {
        console.log('HIT HANDLE MSG')
        if(status == "success") {
          console.log('HIT SUCCESS')
          this.message = "Now we're cooking! Thanks for subscribing!"
        } 
        if (status == "invalid") {
          console.log('EMAIL FAIL')
          this.message = "Please enter a valid email address 🍪"
        }
      },

      validateEmail: function() {
        return (this.email == "")? "" : (this.reg.test(this.email)) ? this.addSubscriber() : this.handleMessage("invalid")
      },

      addSubscriber: function() {
        this.handleMessage("success")
        const subscribers = firebase.database().ref('subscribers')
        const newSub = subscribers.push()
        newSub.set({
          email: this.email
        })
      }
    }
  }


</script>

<style>
  #subscribe {
    margin-bottom: 35px;
  }

  #subscribe-container {
    color: white;
  }

  #subscrine-btn {
    height: 48px;
    background-color: #00b9bc;
  }
</style>
