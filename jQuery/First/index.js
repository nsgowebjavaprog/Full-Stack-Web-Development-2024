// // // // // // // // // // // alert("Wel-Come Nagaraj Loni");

// // // // // // // // // // // // jQuery == `$`

// // // // // // // // // // // // $("h1").css("color", "red");
// // // // // // // // // // // // $("button").css("color", "orange");

// // // // // // // // // // // $(document).ready(function(){
// // // // // // // // // // //     $("h1").css("color", "red");
// // // // // // // // // // //     $("button").css("color", "orange");
// // // // // // // // // // // })

// // // // // // // // // // // // add css class 1 classess......
// // // // // // // // // // // $("h1").addClass("big-title");
// // // // // // // // // // // $("button");

// // // // // // // // // // //add css class more classess......
// // // // // // // // // // $("h1").addClass("big-title margin-50");
// // // // // // // // // // $("button");

// // // // // // // // // // Changing HTML
// // // // // // // // // $("h1").text("Bye");
// // // // // // // // // $("button").text("Owwwwnnn.. Don't click me...")

// // // // // // // // // //** */ Changing inner-HTML

// // // // // // // // // $("h1").text("Bye");
// // // // // // // // // $("button").html("Owwwwnnn....")


// // // // // // // // // // * Manipulate a Attributes

// // // // // // // // // $("a").attr("href", "https://www.yahoo.com");


// // // // // // // // // // // * Event Listener

// // // // // // // // // // $("h1").click(function(){
// // // // // // // // // //     $("h1").css("color", "purple");
// // // // // // // // // // });

// // // // // // // // // // 1.In JS

// // // // // // // // // for(var i=0; i<10; i++){
// // // // // // // // //     document.querySelectorAll("button")[i].addEventListener("click", function(){
// // // // // // // // //         document.querySelector("h1").style.color = "purple";
// // // // // // // // //     });
// // // // // // // // // }

// // // // // // // // // 2.In jQuery

// // // // // // // // $("button").click(function(){
// // // // // // // //     $("h1").css("color", "purple");
// // // // // // // // });

// // // // // // // // What i press in keyboard that will print on screen

// // // // // // // $(document).keypress(function(evet){
// // // // // // //     $("h1").text(event.key);
// // // // // // // });


// // // // // // // $(document).click(function(evet){
// // // // // // //     $("h1").text(event.key);
// // // // // // // });

// // // // // // //mouse

// // // // // // $("h1").on("mouseover", function(){
// // // // // //     $("h1").css("color", "red");
// // // // // // });


// // // // // $("h1").on("click", function(){
// // // // //     $("h1").css("color", "red");
// // // // // });

// // // // // Add and Remove element

// // // // // 1.before -->opening tag
// // // // // 2.after ---->closing tag
// // // // // 3.prepend--->before
// // // // // 4.append----->after

// // // // // 1.Animation

// // // // $("button").on("click", function(){
// // // //     $("h1").fadeOut();
// // // // });

// // // // 2.Animation

// // // $("button").on("click", function(){
// // //     $("h1").fadeToggle();
// // // });


// // // 3.Animation

// // $("button").on("click", function(){
// //     $("h1").slideUp();
// // });

// // 4.Animation

// $("button").on("click", function(){
//     $("h1").slideToggle();
// });



// // 5.Animation---1

// $("button").on("click", function(){
//     $("h1").animate({opacity:0.5});
// });

// 5.Animation--2

$("button").on("click", function(){
    $("h1").slideToggle().animate({opacity:0.5});
});