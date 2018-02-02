$('#form').on('submit',
  function(e) {
    var name = $('#name').val();
    var phone = $('#phone').val();
    var email = $('#email').val();
    var trueName = false;
    var truePhone = false;
    var trueEmail = false;
    var emailCheck =/.+@.+/;
    e.preventDefault();

    if (!checkEmail.test(email)) {
      console.log( 'You did not put in a valid email');
      return false;      
    }
  }
)
