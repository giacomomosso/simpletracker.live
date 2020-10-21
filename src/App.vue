<template>
  <v-app>
    <Header />
     <v-main>
      <v-container>
        <v-row>
          <v-col
            v-for="n in articles.length"
            :key="n"
            cols="4"
          >
          <Card :data="articles[n]"/>
          </v-col>
        </v-row>
      </v-container>
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'

export default {
  name: 'app',
   components: {
    Header,
    Card,
    Footer
  },
  data () {
    return {
      status : "ok",
      articles : []
    }
  },
  mounted () {
  fetch("http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=07dbcedcdf4f42a8b53bfe5639f5920a", {
	"method": "GET"
})
.then(response => {
	return response.json();
})
.then(data => {
  this.articles = data.articles;
  console.log(data.articles)
})
.catch(err => {
	console.error(err);
});
  }
}
</script>

<style lang="scss">
#app {
  color: #2c3e50;
}
</style>
