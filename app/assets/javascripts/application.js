// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require underscore
//= require backbone
//= require handlebars
//= require_self
//= require_tree ./backbone/routers
//= require_tree ./backbone/models
//= require_tree ./backbone/collections
//= require_tree ./backbone/views
//= require_tree ./templates
//= require_tree .
var App = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

$(function(){
	function login() {
					var win         =   window.open(_url, "windowname1", 'width=800, height=600');

					var pollTimer   =   window.setInterval(function() {
							try {
									console.log(win.document.URL);
									if (win.document.URL.indexOf(REDIRECT) != -1) {
											window.clearInterval(pollTimer);
											var url =   win.document.URL;
											acToken =   gup(url, 'access_token');
											tokenType = gup(url, 'token_type');
											expiresIn = gup(url, 'expires_in');
											win.close();

											validateToken(acToken);
									}
							} catch(e) {
							}
					}, 100);
			}
			function validateToken(token) {

			}

			//credits: http://www.netlobo.com/url_query_string_javascript.html
			function gup(url, name) {
					name = name.replace(/[[]/,"\[").replace(/[]]/,"\]");
					var regexS = "[\?&]"+name+"=([^&#]*)";
					var regex = new RegExp( regexS );
					var results = regex.exec( url );
					if( results == null )
							return "";
					else
							return results[1];
			}

			function login() {
					var win         =   window.open(_url, "windowname1", 'width=800, height=600');

					var pollTimer   =   window.setInterval(function() {
							try {
									console.log(win.document.URL);
									if (win.document.URL.indexOf(REDIRECT) != -1) {
											window.clearInterval(pollTimer);
											var url =   win.document.URL;
											acToken =   gup(url, 'access_token');
											tokenType = gup(url, 'token_type');
											expiresIn = gup(url, 'expires_in');
											win.close();

											validateToken(acToken);
									}
							} catch(e) {
							}
					}, 100);
			}
			function validateToken(token) {

			}

			//credits: http://www.netlobo.com/url_query_string_javascript.html
			function gup(url, name) {
					name = name.replace(/[[]/,"\[").replace(/[]]/,"\]");
					var regexS = "[\?&]"+name+"=([^&#]*)";
					var regex = new RegExp( regexS );
					var results = regex.exec( url );
					if( results == null )
							return "";
					else
							return results[1];
			}

			function getUserInfo() {
					$.ajax({
							url: 'https://www.googleapis.com/oauth2/v1/userinfo?access_token=' + acToken,
							data: null,
							success: function(resp) {
									user    =   resp;
									console.log(user);
									$('#uName').append(user.name);
									$('#imgHolder').attr('src', user.picture);
							},
							dataType: "jsonp"
					});
			}





})
