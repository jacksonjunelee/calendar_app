App.Views.Login = Backbone.View.extend({
  el: '#initialLogin',
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
    App.user = new App.Models.User();
  }

});


// <a href="#" style="display:none" id="logoutText" target='myIFrame' onclick="myIFrame.location='https://www.google.com/accounts/Logout'; startLogoutPolling();return false;"> Click here to logout </a>
// <iframe name='myIFrame' id="myIFrame" style='display:none'></iframe>
// <div id='uName'></div>
// <img src='' id='imgHolder'/> -->
