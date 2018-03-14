$(document).ready(function() {
  // $(':button[type="submit"]').prop('disabled', true);
  $('input[type="email"]').keyup(function() {
    if($(this).val() != '') {
      $(':button[type="submit"]').prop('disabled', false);
    }else{
      $(':button[type="submit"]').prop('disabled', true);
    }
  });
});
