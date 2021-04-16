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
      disc: []
    },
    mounted() {
      axios.get('https://flynn.boolean.careers/exercises/api/array/music')
      .then(data =>{
        this.disc = data.data.response;
        console.log(data.data.response);
      })
    }
  })
}
document.addEventListener("DOMContentLoaded", init);
