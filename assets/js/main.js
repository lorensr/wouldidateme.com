// Generated by CoffeeScript 1.6.2
(function() {
  Chute.setApp('52280ae16e29313957000153');

  $(function() {
    return $('#choose').click(function() {
      return Chute.MediaChooser.choose(function(urls) {
        console.log(urls);
        return $.post('http://wouldidateme.herokuapp.com/photos', {
          urls: urls,
          email: $('#email').val()
        });
      });
    });
  });

  console.log('test');

}).call(this);
