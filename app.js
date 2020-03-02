Vue.component('movie-list',{
  // props:{ imId: 'tt1201607'},
  template:`
  <div class="movie-list">
  <div class="row">
  <div class="col-md-4" v-for ="sts in status">
   <img :src="sts.Poster">
  <h5>{{ sts.Title }}</h5>
  <a v-bind:href="'movie.html?p=' + sts.imdbID"> Movie Details </a>
<!--    <br/>-->
<!--    <a v-on:click="doSomething(sts.imdbID)"> Movie ... </a>-->
</div>
</div>
</div>
 `,
  data() {
return {
        status:[]
      }
  },
  created: function()
  {
    this.getMovies();
  },

  methods: {
    getMovies: function()
    {
      this.status='loading';
      var vm=this;
      axios.get('https://www.omdbapi.com/?s=harry%20potter&apikey=e0620bd4&page=1')
      .then(function(response){
        console.log(response)
        vm.status = response.data.Search
      });
     
    }
    // ,
    //   doSomething : function(imd) {
    //     alert ("Here " + imd);
    //   }
  }
})
Vue.component('movie-desc',
    {
      // props:{ imId: 'tt1201607'},
  template:`
  <div class="movie-desc">
      <div class="row">
          <div class="col-md-6">
          <img :src="status1.Poster">
          <h6>{{ status1.Title }}</h6>
            <ul>
<!--                <li>ID : {{imId}}</li>-->
              <li>imdbID:{{status1.imdbID}}</li>
              <li>Year:{{status1.Year}}</li>
              <li>Type:{{status1.Type}}</li>
              <li>Director:{{status1.Director}}</li>
              <li>Actors:{{status1.Actors}}</li>
            </ul>         
          </div>
       </div>
  </div>
 `,
  data() {
return {
        status1: null
      }
  },
  created: function()
  {
    this.getMovies1();
  },

  methods: {
    getMovies1: function()
    {

      this.status1='loading';
      var vm=this;
      axios.get('https://www.omdbapi.com/?apikey=e0620bd4&i=tt1201607')
      .then(function(response){
        console.log(response)
        vm.status1 = response.data;
      });
     
    }
  }
})
new Vue(
  {
  el: '#app',
  })
 