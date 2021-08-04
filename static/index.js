$(document).ready(function() {
    const RootComponent = {
        data(){
          return {
            isViewingManyCategories: true
          }
        }
    }
    // const app = Vue.createApp(RootComponent);
    Vue.component('reactive', reactiveComponentOptions);
    Vue.component('chart', chartComponentOptions);
    Vue.component('app', appComponentOptions);
    
    var app = new Vue({
      el: '#app',
      data: {
        message: 'Hello Vue!'
      }
    })
    

});