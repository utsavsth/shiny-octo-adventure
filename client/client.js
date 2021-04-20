var dataArray = [];
// pcw Feb 2021

$(document).on("pagecreate", "#mainPage", function(event) {
  $( "#display" ).on( "click", function(event, ui) {  
    $('#responses li').remove();
    $.get("http://localhost:3000/getData" ,function(data, status){
      alert( data  + "\nStatus: " + status);
       data = JSON.parse(data);
      for (let loop = 0; loop < data.length; loop++){
        $("#responses").append("<li>" + data[loop].name + "  :  "  + data[loop].age + "</li>");
        }
        $('#responses').listview('refresh');
      });
    });

$( "#post" ).on( "click", function(event, ui) {
// There is several ways to do this..Discuss in tute
  let dataName =  $('#name' ).val();
  let dataAge = $('#age' ).val();
 
  $.post("http://localhost:3000/post", {name: dataName,	age: dataAge } ,function(  data, status){
    alert("Data: " + data + "\nStatus: " + status);
  });
}); // end buttonAdd

// ++++++++++++++++++++++++++++++++++++++++

}); // END jQueryMobile init

