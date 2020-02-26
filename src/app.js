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
  );

  $('.fa-spotify').click(function () {
    home();
  })

  $('.vai').click(function () {
    search();
  });
  $('.search').keyup(function () {
    if (event.keyCode == 13) {
      search();
    }
  })
});

function home() {
  $('h1').addClass('none');
  $.ajax(
    {
      url: 'http://localhost/php-ajax-dischi/server/server.php',
      method: 'GET',
      success: function (data) {
        var source = $("#entry-template").html();
        var template = Handlebars.compile(source);
        $('.list').html('');
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
  );
}

function search() {
  var value = $('.search').val();
  $.ajax({
    url: 'http://localhost/php-ajax-dischi/server/filter.php',
    method: 'GET',
    data: {
      titolo: value,
    },
    success: function (data) {
      var source = $("#entry-template").html();
      var template = Handlebars.compile(source);
      $('.list').html('');
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
      if ($('.list').text() == 0) {
        $('h1').removeClass('none');
      } else {
        $('h1').addClass('none');
      }
      value = $('.search').val('');
    },
    error: function () {
      console.log('errore ajax');
    }
  });
}
