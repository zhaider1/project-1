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
      $('#submitted').append('<h1 id="thanks"> Thanks For Joining The Community!')
      $('#submitted').append('<li> You will recive the letter at: ' + email.val + '</li>');

    }

    if(name.length > 0){
      trueName =true;
      $('#name-bad').remove();
    }
    else {
      if(!$('#name-bad').length){
        $('#name-get').append('<li id="name-bad">Enter A Valid Email Please!/li>');
      }
    }

    if (emcheck.test(email))
    {
      trueEmail = true;
      #('#email-bad').remove();
    }
    else{
      if(!$('email-bad').length){
        $('#email-get').append('<li id="email-bad"> Invalid Email Adress! Please enter a Valid Address<li>');
      }
    }
  }
)
