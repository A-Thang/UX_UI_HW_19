console.log("trying to see if this works!");

// Event listener

$( "#button2" ).click(function() {
    alert( "Thanks for downloading my resume!" );
  });

  // Step 2: Change a color
$('img').on("click", function(){
    $('header').css("background-color","pink");
  });