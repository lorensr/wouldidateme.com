Chute.setApp '52280ae16e29313957000153'

$ ->
  $('#choose').click ->
    Chute.MediaChooser.choose (urls) ->
      console.log urls
      $.post 'http://wouldidateme.herokuapp.com/photos',
        urls: urls
        email: $('#email').val()

console.log 'test'