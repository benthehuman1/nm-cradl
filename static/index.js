$(document).ready(function() {
    const RootComponent = {
        data(){
          return {
            isViewingManyCategories: true
          }
        }
    }
    const app = Vue.createApp(RootComponent);

    app.component('chart', chartComponentOptions);
    app.component('app', appComponentOptions);

    const vm = app.mount('#app');
});