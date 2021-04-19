/*  Attraverso una chiamata ajax all'API di boolean
    https://flynn.boolean.careers/exercises/api/array/music
    avremo a disposizione una decina di dischi musicali.
    Utilizzando vue, stampiamo a schermo una card per ogni album.*/

/*  BONUS: Creare una select con tutti i generi dei dischi. In base a cosa
    scegliamo nella select, vedremo i corrispondenti cd.*/

/* BONUS 2: Ordinare i dischi per anno di uscita */

function init() {
  new Vue({
    el: '#app',
    data: {
      pickGenre: "default",
      disc: []
    },
    mounted() {
      axios.get('https://flynn.boolean.careers/exercises/api/array/music')
      .then(result => {
        this.disc = result.data.response;
        console.log(result.data.response);
      })
    },
    methods: {
      orderByYear: function() {
        let temp = 0;
        for(var i = 0; i < data.disc; i++){
          if(this.disc.year[i] > this.disc.year[i + 1]) {
            temp = this.disc.year[i];
            this.disc.year[i] = this.disc.year[i + 1];
            this.disc.year[i + 1] = temp;
          }
        }
      }
    }
  })
}
document.addEventListener("DOMContentLoaded", init);
