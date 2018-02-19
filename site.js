$('#form').on('submit',
  function(e) {
    var name = $('#name').val();
    var email = $('#email').val();
    var emcheck = /^[^\s@]+@[^\s@]+$/;
    var trueName = false;
    var trueEmail = false;
    e.preventDefault();

    if(name.length > 0 || name.length == null){
      trueName =true;
      $('#name-bad').remove();
    }
    else {
      if(!$('#name-bad').length){
        $('#name-get').append('<li id="name-bad">Enter A Name Please!</li>');
      }
    }

    if (emcheck.test(email))
    {
      trueEmail = true;
      $('#email-bad').remove();
    }
    else{
      if(!$('email-bad').length){
        $('#email-get').append('<li id="email-bad"> Invalid Email Adress! Please enter a Valid Address</li>');
      }
    }
    if(trueName && trueEmail){
      $(this).remove();
      $('#Persuasion').append('<h1 id="thanks"> Thanks For Joining The Community!');
      $('#Persuasion').append('<li> You will recieve letters at :' + ' ' + email + '</li>');

    }
  }
);
