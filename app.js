Vue.component('movie-list',{
  template:`
  <div class="movie-list">
  <div class="row">
  <div class="col-md-4" v-for ="sts in status">
  <a v-bind:href="'movie.html?p=' + sts.imdbID"><img :src="sts.Poster"></a>
  <h5>{{ sts.Title }}</h5>
  <a v-bind:href="'movie.html?p=' + sts.imdbID" class="btn btn-primary"> View Summary </a>
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
  }
})
Vue.component('movie-desc',
    {
  template:`
  <div class="movie-desc">
      <div class="row"> 
          <div class="col-md-4">
          <img :src="status1.Poster">
          <h5>{{ status1.Title }}</h5>
          </div>
          <div class="col-md-8">
          <ul class="list-group">
          <li class="list-group-item"><strong>Genre:</strong>{{ status1.Genre }}</li>
          <li class="list-group-item"><strong>Released:</strong>{{ status1.Released }}</li>
          <li class="list-group-item"><strong>Rated:</strong>{{ status1.Rated }}</li>
          <li class="list-group-item"><strong>Language:</strong>{{ status1.Language }}</li>
          <li class="list-group-item"><strong>Director:</strong>{{ status1.Director }}</li>
          <li class="list-group-item"><strong>Writer:</strong>{{ status1.Writer }}</li>
          <li class="list-group-item"><strong>Actors:</strong>{{ status1.Actors }}</li>
          <li class="list-group-item"><strong>Awards:</strong>{{ status1.Awards }}</li>
          <li class="list-group-item"><strong>Country:</strong>{{ status1.Country }}</li>
          <li class="list-group-item"><strong>Type:</strong>{{ status1.Type }}</li>
          <li class="list-group-item"><strong>DVD:</strong>{{ status1.DVD }}</li>
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
 