import Vue from 'vue'
import vuetify from './plugins/vuetify'
import './plugins/base'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

var config = {
  apiKey: "apiKey",
  authDomain: "kristenlovescookies.firebaseapp.com",
  // For databases not in the us-central1 location, databaseURL will be of the
  // form https://[databaseName].[region].firebasedatabase.app.
  // For example, https://your-database-123.europe-west1.firebasedatabase.app
  databaseURL: "https://kristenlovescookies-default-rtdb.firebaseio.com/",
  // storageBucket: "bucket.appspot.com"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

var subs = database.ref('subscribers')
subs.on('value', (snapshot) => {
  const data = snapshot.val()
  console.log('IS THIS DATA', data)
})

// database.child("subscribers").get().then(function(snapshot) {
//   console.log('IS THIS DATABAE CONTENTS', snapshot.val())
// })

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
