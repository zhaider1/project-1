$.noConflict();
$('#form').on('submit',
  function(e) {
    var name = $('#name').val();
    var email = $('#email').val();
    var emcheck = /^[^\s@]+@[^\s@]+$/;
    var trueName = false;
    var trueEmail = false;
    e.preventDefault();

    if (emcheck.test(email))
    {
      trueEmail = true;
      #('#email-warning').remove();
    }
    else{
      if()
    }
  }
)
