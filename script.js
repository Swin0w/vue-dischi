/*  Attraverso una chiamata ajax all'API di boolean
    https://flynn.boolean.careers/exercises/api/array/music
    avremo a disposizione una decina di dischi musicali.
    Utilizzando vue, stampiamo a schermo una card per ogni album.*/

/*  BONUS: Creare una select con tutti i generi dei dischi. In base a cosa
    scegliamo nella select, vedremo i corrispondenti cd.*/

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
        console.log(result);
      })
    }
  })
}
document.addEventListener("DOMContentLoaded", init);
