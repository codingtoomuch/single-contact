(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.user_profile_dropdown').dropdown({
      coverTrigger: false
    });
    // sidebar__toggle
    $("#sidebar__toggle").click(function(e){
      e.preventDefault();
      $("body").toggleClass("active__minimal_sidebar");
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
