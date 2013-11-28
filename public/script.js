$(document).ready(function() {
  $('#save').click(function() {
    var data = {
      email: $('form .email').val(), 
      phone: $('form .phone').val(), 
      url: $('form .url').val()
    }
    $.ajax({
      url: '/example',
      type: 'PUT',
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      dataType: 'json',
      data: JSON.stringify(data),
    }).done(function(msg) {
      alert("put success: " + msg);
    }).fail(function(msg) {
      console.log("failure: " + msg);
    });
  })
});
