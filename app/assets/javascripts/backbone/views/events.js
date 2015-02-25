App.Views.Event = Backbone.View.extend({
  el: '.date-select',
  events:{
    'click .show': 'renderDateInput',
    'click .submit': 'grabEvents'
  },

  initialize:function(){
    console.log("Event View Created");
    this.selectEventTemplate = HandlebarsTemplates['selectEvent'];
    this.dateTemplate = HandlebarsTemplates['date'];
    this.eventListTemplate = HandlebarsTemplates['eventList'];
    this.render();
  },

  render: function(){
    this.$el.html(this.selectEventTemplate());
  },

  renderDateInput: function(){
    $('.date-select').find('*').not('button').remove();
    this.$el.append(this.dateTemplate());
  },

  grabEvents:function(){
    var date= $('.event').val();
    var model = this;
    $.get("https://www.googleapis.com/calendar/v3/calendars/" + user.email + "/events/?access_token=" + acToken).done(function(data){
      for(i = 0; i < data.items.length; i++){
        var startTime = data.items[i].start.dateTime
        if (startTime.indexOf(date) > -1){
          model.$el.append(model.eventListTemplate(data.items[i]));
          debugger;
          console.log(data.items[i].summary)

        }

      }

    });


  }
});
