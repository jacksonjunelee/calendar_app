// handles events
App.Views.Event = Backbone.View.extend({
  el: '.date-select',
  events:{
    'click .show': 'renderDateInput',
    'click .submit': 'grabEvents',
    'click .add': 'addEvent',
    'click .eventSubmit': 'eventSubmit'
  },

  initialize:function(){
    console.log("Event View Created");
    this.selectEventTemplate = HandlebarsTemplates['selectEvent'];
    this.dateTemplate = HandlebarsTemplates['date'];
    this.eventListTemplate = HandlebarsTemplates['eventList'];
    this.addEventTemplate = HandlebarsTemplates['addEvent'];
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
        var startTime = data.items[i].start.dateTime;
        if (startTime.indexOf(date) > -1){
          model.$el.append(model.eventListTemplate(data.items[i]));
        }
      }
    });
  },

  addEvent:function(){
    $('.date-select').find('*').not('button').remove();
    this.$el.append(this.addEventTemplate());
  },
// 2015-02-24T16:30:00-05:00
  eventSubmit:function(e){
    e.preventDefault();
  var startDate =  $('#startDate').val();
  var startTime =  $('#startTime').val();
  var endDate =  $('#endDate').val();
  var endTime =  $('#endTime').val();
  var description =  $('#description').val();
  var inputStartDate = startDate + "T" + startTime + ":00-05:00";
  var inputEndDate = endDate + "T" + endTime + ":00-05:00";

  var eventObject =
  {
    "end": {
      "dateTime": inputEndDate
    },
    "start": {
      "dateTime": inputStartDate
    },
      "summary": description
    };


    if( startDate == false || startTime == false || endDate == false || endTime == false || description == false) {
      alert( "one or more fields is empty" );
    }
    else {
	    $.post('https://www.googleapis.com/calendar/v3/calendars/' + user.email + "/events?access_token=" + acToken, eventObject)
    }
  }

});
