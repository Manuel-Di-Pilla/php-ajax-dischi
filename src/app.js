const $ = require('jquery');
const Handlebars = require("handlebars");
$(document).ready(function () {
  $.ajax(
    {
      url: 'http://localhost/php-ajax-dischi/server/server.php',
      method: 'GET',
      success: function (data) {
        var source = $("#entry-template").html();
        var template = Handlebars.compile(source);
        for (var i = 0; i < data.length; i++) {
          var thisData = data[i];
          var context = {
            img: thisData.poster,
            title: thisData.title,
            author: thisData.author,
            year: thisData.year
          };
          var html = template(context);
          $('.list').append(html);
        }
      },
      error: function () {
        console.log('errore');
      }
    }
  )
});
