// $ = jQuery's way of naming its stuff.
// $( ... ) = what's inside () is the "object" we are messin with
// .ready() = method of $jQ
// .ready( ... ) = argument/parameter passed to that method
// function(){} in the method is an IIFE = Immediately Invoked F/n Expresson
$(document).ready(function () {
  // alert("page is ready");
  console.log("doc is ready");
  
  let wowCount=0;
  let wowMsg;
  
  //  { containment: "#dogeHouse", scroll: false }, { 
   
    $("#dogePic").draggable(
      { 
      containment: "#dogeHouse",
      scroll: false,
      
      start: function () {
        wowCount++;
        console.log("starting", "Here is wowCount: ", wowCount);

        if(wowCount<=4) {
          wowMsg = "your wow is weak";
        }
        else if(4<wowCount<8) {
          wowMsg = "your wow is mediocre";
        }
        // else {
        //   wowMsg = "your wow is extraordinary";
        // }


        $("#wowOutput").text(wowMsg + "(" + wowCount + ")");
      
      }
      });

    $("#dogeDiv").draggable();

  let userGreeting = "Hello there, "; 

  $("button").click(function () {
    userGreeting += $("#fname").val();

    $("#greetingOutput").text(userGreeting);
  });
});