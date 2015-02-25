App.Views.ProfileModal = Backbone.View.extend({
  el: '.main-modal',
  events:{
    'click .logout': 'logout'
  },

  initialize:function(){
    console.log("Profile View Created");
    this.profileTemplate = HandlebarsTemplates['profile'];
    this.render();
  },

  render: function(){
    this.$el.html(this.profileTemplate(this.model))
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
