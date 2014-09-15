$(function() {
  
  $('[data-toggle="dropdown"]').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    var parent = $(this).parent('.dropdown');
    parent.toggleClass('open');
    
    $('.dropdown.open').not(parent).removeClass('open');
    
  });
  
  $(document).click(function() {
    $('.dropdown.open').removeClass('open');
  });
  
  // Modal cookie.
  // Only show modal the first time the user enters the page.
  // It will be language dependent.
  if (readCookie('welcome_modal') != 'hide') {
    $('#welcome').addClass('revealed');
  }
  
  $('[data-modal-dismiss]').click(function(e) {
    e.preventDefault();
    createCookie('welcome_modal', 'hide', 10, '/' + CS.lang);
  });
  
});
