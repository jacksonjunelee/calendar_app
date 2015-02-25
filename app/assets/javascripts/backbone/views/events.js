App.Views.Event = Backbone.View.extend({
  el: '.date-select',
  events:{
    'click .submit': 'grabEvents'
  },

  initialize:function(){
    console.log("Date Select Created");
    this.dateTemplate = HandlebarsTemplates['date'];
    this.render();
  },

  render: function(){
    this.$el.html(this.dateTemplate());
  },

  grabEvents:function(){
    var date= $('.event').val();
    $.get("https://www.googleapis.com/calendar/v3/calendars/" + user.email + "/events/?access_token=" + acToken).done(function(data){
      for(i = 0; i < data.items.length; i++){
        var startTime = data.items[i].start.dateTime
        if (startTime.indexOf(date) > -1){
          console.log(data.items[i].summary)

        }

      }

    });


  }
});
