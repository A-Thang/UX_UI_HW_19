console.log("trying to see if this works!");

// Event listener

$( "#button2" ).click(function() {
    alert( "Thanks for downloading my resume!" );
  });

  $('#hideme').on("click", function(){
    $('.content').slideToggle();
  });