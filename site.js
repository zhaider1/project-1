$.noConflict();
$('#form').on('submit',
  function(e) {
    var name = $('#name').val();
    var email = $('#email').val();
    var emcheck = /^[^\s@]+@[^\s@]+$/;
    var trueName = false;
    var trueEmail = false;
    e.preventDefault();

    if(trueName && trueEmail){
      $(this).remove();
      $('#description').append('<h1 id="thanks"> Thanks For Joining The Community!')
      $('#description').append('<li> You will recive the letter at: ' + email.val + '</li>');

    }

    if(name.length > 0){
      trueName =true;
      $('#name-warning').remove();
    }
    else {
      if(!$('#name-warning').length){
        $('#name-get').append('<li id="name-warning">Enter A Valid Email Please!,/li>');
      }
    }

    if (emcheck.test(email))
    {
      trueEmail = true;
      #('#email-warning').remove();
    }
    else{
      if(!$('email-warning').length){
        $('#email-get').append('<li id="email-warning"> Invalid Email Adress! Please enter a Valid Address<li>');
      }
    }
  }
)
