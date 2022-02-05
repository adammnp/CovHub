$('#swag input[required]').on('input propertychange paste change', function() {

    var empty = $('#swag').find('input[required]').filter(function() {
      return this.value == '';
    });
  
    $('#register').prop('disabled', (empty.length))
  
  })