Vue.component('movie-list',{
    template:` 
    <div class="movie-list">
    <div class="row">
    <div class="col-md-4" v-for ="sts in status">
    <img :src="sts.Poster">
    <h5>{{ sts.Title }}</h5>
    <a href="movie.html" class="btn btn-primary">Click to view Summary</a>
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
      getMovies: function(imdbID) 
      {
        this.status='loading';
        var vm=this;
        axios.get('https://www.omdbapi.com/?s=harry%20potter&apikey=e0620bd4&page=1'+imdbID)
        .then(function(response){
          console.log(response)
          vm.status = response.data.Search
        });
        
      }
    }
  })
  Vue.component('movie-desc',{
    template:` 
    <div class="movie-desc">
    <div class="row">
    <div class="col-md-6" v-for ="sts1 in status1">
     <img :src="sts1.Poster">
    <h6>{{ sts1.Title }}</h6>
    <ul>
    <li>imdbID:{{sts1.imdbID}}</li>
    <li>Year:{{sts1.Year}}</li>
    <li>Type:{{sts1.Type}}</li>
    <li>Director:{{sts1.Director}}</li>
    <li>Actors:{{sts1.Actors}}</li>
    </ul>
  
  </div> 
  </div>
  </div>
   `,
    data() {
  return {
          status1:[]
        }
    },
    created: function()
    {
      this.getMovies1();
    },
  
    methods: {
      getMovies1: function(imdbID) 
      {
        this.status1='loading';
        var vm=this;
        axios.get('https://www.omdbapi.com/?s=harry%20potter&apikey=e0620bd4&page=1'+imdbID)
        .then(function(response){
          console.log(response)
          vm.status1 = response.data.Search;
        });
        
      }
    }
  })
  new Vue(
    {
    el: '#app',
    })
    
    