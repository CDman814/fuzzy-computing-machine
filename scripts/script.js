// $ = jQuery's way of naming its stuff.
// $( ... ) = what's inside () is the "object" we are messin with
// .ready() = method of $jQ
// .ready( ... ) = argument/parameter passed to that method
// function(){} in the method is an IIFE = Immediately Invoked F/n Expresson
$(document).ready(function () {
  // alert("page is ready");
  console.log("doc is ready");
  
 
    let $start_counter = $( "#event-start" ),
      $drag_counter = $( "#event-drag" ),
      $stop_counter = $( "#event-stop" ),
      counts = [0, 0, 0],
      updateCounterStatus = 0
      ;
  
  //  { containment: "#dogeHouse", scroll: false }, { 
   
    $("#dogePic").draggable(
      {
      start: function () {
        // counts[0]++;
        // //updateCounterStatus($start_counter, counts[0]);
        // console.log(counts[0]);
        // if (counts[2]>=10) {
        //   alert("wow 10");
      }
    }
    );

    $("#dogeDiv").draggable();

  let userGreeting = "Hello there, "; 

  $("button").click(function () {
    userGreeting += $("#fname").val();

    $("#greetingOutput").text(userGreeting);
  });
});