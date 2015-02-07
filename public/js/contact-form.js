function initializeContactForm() {
  $("#contact-form").submit(function(event) {
    cleanResponse();
    if (!isValid()) {
      event.preventDefault();
      writeMessage("Please supply all of the required information.", true);
    }
  });
}

function isValid() {
  var valid = true;
  var fields = $("#contact-form").serializeArray();
  
  jQuery.each(fields, function(i, field) {
    if (field.value === "") {
      $('#' + field.name).css('border', '1px solid #ef0000');
      valid = false;
    }
  });
  
  return valid;
}

function writeMessage(message, isError) {
  $('#response').text(message).hide().fadeIn(1000);

  if (isError) {
    $('#response').css('color', '#ef0000');
  } else {
    $('#response').css('color', '#1a456d');
  }
}

function cleanResponse() {
  var fields = $("#contact-form").serializeArray();
  
  jQuery.each(fields, function(i, field) {
    $('#' + field.name).css('border', '');
  });
  
  $('#response').empty();
}
