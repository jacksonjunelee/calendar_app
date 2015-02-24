App.Models.User = Backbone.Model.extend({
  initialize:function(){
    this.login(_url);
  },

  login:function(_url){
    console.log(_url);
    var win         =   window.open(_url, "windowname1", 'width=800, height=600');
    var pollTimer   =   window.setInterval(function() {
        try {
            console.log(win.document.URL);
            console.log("mooo");
            if (win.document.URL.indexOf(REDIRECT) != -1) {
                window.clearInterval(pollTimer);
                var url =   win.document.URL;
                acToken =   App.user.gup(url, 'access_token');
                tokenType = App.user.gup(url, 'token_type');
                expiresIn = App.user.gup(url, 'expires_in');
                win.close();

                App.user.validateToken(acToken);
            }
        } catch(e) {
          console.log(e)
        }
    }, 500);
  },

  //credits: http://www.netlobo.com/url_query_string_javascript.html
  gup:function(url,name){
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\#&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( url );
    if( results == null )
        return "";
    else
        return results[1];
  },

  validateToken:function(token){
    $.ajax({
        url: VALIDURL + token,
        data: null,
        success: function(responseText){
          App.user.getUserInfo();
            loggedIn = true;
            $('#loginText').hide();
            $('#logoutText').show();
        },
        dataType: "jsonp"
    });
  },

  getUserInfo: function(){
    $.ajax({
        url: 'https://www.googleapis.com/oauth2/v1/userinfo?access_token=' + acToken,
        data: null,
        success: function(resp) {
            user    =   resp;
            console.log(user);
            $('#uName').text('Welcome ' + user.name);
            $('#imgHolder').attr('src', user.picture);
        },
        dataType: "jsonp"
    });
  },

  startLogoutPolling: function(){
    $('#loginText').show();
    $('#logoutText').hide();
    loggedIn = false;
    $('#uName').text('Welcome ');
    $('#imgHolder').attr('src', 'none.jpg');
  }


  //
  //       function startLogoutPolling() {
  //       }
  //
  //
  //
  //
  // }


});


// App.Models.Headquarter = Backbone.Model.extend({
//   url: '/locations',
//   parse:function(response){
//     return response[1];
//   },
//   initialize:function(){
//     console.log("headquarter Model created");
//     this.fetch();
//   }
// });
