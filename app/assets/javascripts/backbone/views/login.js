App.Views.Login = Backbone.View.extend({
  el: '.initialLogin',
  events:{
    'click .loginText': 'renderUser'
  },

  initialize:function(){
    console.log("LoginView Created");
    this.loginTemplate = HandlebarsTemplates['login'];
    this.render();
  },

  render: function(){
    this.$el.html(this.loginTemplate());
  },

  renderUser: function(){
    $('.initialLogin').empty();
    App.user = new App.Models.User;
  }

});
