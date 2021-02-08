import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: require('@/data/articles.json'),
    displayArticles: [],
    selectedArticle: '',
    drawer: false,
    viewCategory: false,
    searchOn: false,
    items: [
      {
        text: 'Home',
        href: '/',
      },
      {
        text: 'About',
        href: '/about',
      },
    ],
  },
  getters: {
    categories: state => {
      const categories = []

      const cookies = []
      const pastries = []
      const bread = []
      const keto = []

      state.articles.forEach((article) => {
        if(article.tags.includes("cookies")) {
          cookies.push(article)
        } 

        if(article.tags.includes("pastries")) {
          pastries.push(article)
        }

        if(article.tags.includes("bread")) {
          bread.push(article)
        }

        if(article.tags.includes("keto")) {
          keto.push(article)
        }
      })

      for (const article of state.articles) {
        if (
          !article.category ||
          categories.find(category => category.text === article.category)
        ) continue


        const text = article.category

        if(text === "Cookies"){
          categories.push({
            text,
            href: '/cookies',
            recipes: cookies
          })
        }

        if(text === "Bread"){
          categories.push({
            text,
            href: '/bread',
            recipes: bread
          })
        }

        if(text === "Pastries"){
          categories.push({
            text,
            href: '/pastries',
            recipes: pastries
          })
        }

        if(text === "Keto"){
          categories.push({
            text,
            href: '/keto',
            recipes: keto
          })
        }
  
      }

      return categories.sort().slice(0, 4)
    },
    links: (state, getters) => {
      return state.items.concat(getters.categories)
    },
    subscribers: (state, getters) => {
//       // Import Admin SDK
//       var admin = require("firebase-admin");

//       // Get a database reference to our posts
//       var db = admin.database();
//       var ref = db.ref("server/saving-data/fireblog/posts");

//       // Attach an asynchronous callback to read the data at our posts reference
//       ref.on("value", function(snapshot) {
//         console.log(snapshot.val());
//       }, function (errorObject) {
//         console.log("The read failed: " + errorObject.code);
// });
      
    },
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    setArticles: (state, payload) => (state.displayArticles = payload),
    toggleDrawer: state => (state.drawer = !state.drawer),
    selectArticle: (state, selected) => (state.selectedArticle = selected),
    viewCategory: (state, payload) => (state.viewCategory = payload)
  },
  actions: {

  },
})
