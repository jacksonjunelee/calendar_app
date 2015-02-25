App.Views.ProfileModal = Backbone.View.extend({
  el: '.main-modal',
  events:{
    'click .logout': 'logout'
  },

  initialize:function(){
    console.log("Profile View Created");
    this.mainTemplate = HandlebarsTemplates['main'];
    this.render();
  },

  render: function(){
    this.$el.html(this.mainTemplate(this.model))
    $('.main-modal').append(this.$el);
  },

  logout:function(){
      $('.main-modal').empty();
      $('.date-select').empty();
      loggedIn = false;
      App.login = new App.Views.Login();
    }

  }
);
