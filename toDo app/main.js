var json_data={};

$(function(){

  

// wow animate input


$("input").click(function(){
  $(this).addClass("wow pulse animated");
  $(this).attr("style","visibility: visible; animation-name: pulse ;");
  $(this).data( "data-wow-iteration", 52 )
});
// wow animate input

  
// year input remove
    $("#checkIFEd").change(function() {
      if(this.checked) {
         $("#finishEd").hide(500);
         $("#myCheckboxEd").css("margin-top", "15%");
      }else{
         $("#finishEd").show(500);
    }
  });

  $("#checkIFEdTwo").change(function() {
    if(this.checked) {
       $("#finishEdTwo").hide(500);
       $("#myCheckboxEdTwo").css("margin-top", "15%");
    }else{
       $("#finishEdTwo").show(500);
  }
});

$("#checkIFEdThree").change(function() {
  if(this.checked) {
     $("#finishEdThree").hide(500);
     $("#myCheckboxEdThree").css("margin-top", "15%");
  }else{
     $("#finishEdThree").show(500);
}
});

$("#checkIFEdFour").change(function() {
  if(this.checked) {
     $("#finishEdFour").hide(500);
     $("#myCheckboxEdFour").css("margin-top", "15%");
  }else{
     $("#finishEdFour").show(500);
}
});
// year input remove





// year input Work


$("#checkIfWork").change(function() {
  if(this.checked) {
     $("#finishWork").hide(500);
     $("#myCheckboxWork").css("margin-top", "15%");
  }else{
     $("#finishWork").show(500);
  }
});

$("#checkIfWorkTwo").change(function() {
  if(this.checked) {
     $("#finishWorkTwo").hide(500);
     $("#myCheckboxWorkTwo").css("margin-top", "15%");
  }else{
     $("#finishWorkTwo").show(500);
  }
});

$("#checkIfWorkThree").change(function() {
  if(this.checked) {
     $("#finishWorkThree").hide(500);
     $("#myCheckboxWorkThree").css("margin-top", "15%");
  }else{
     $("#finishWorkThree").show(500);
  }
});

$("#checkIfWorkFour").change(function() {
  if(this.checked) {
     $("#finishWorkFour").hide(500);
     $("#myCheckboxWorkFour").css("margin-top", "15%");
  }else{
     $("#finishWorkFour").show(500);
  }
});


// year input Work


// addMore



$('#addMore').click(function(){

  addMore();

  if(a>1){
    $("#remove").show();
  }

  if(a>3){
    $('#addMore').hide();
  }

})
// addMore



// remove Add
$("#remove").click(function(){
  remove();

  if(a<=1){
    $("#remove").hide();
  }
  
  if(a<4){
    $('#addMore').show();
  }

});
// remove Add




// addMore Work
$('#addWork').click(function(){

  addMoreWork();
  
  if(b>1){
    $("#removeWork").show();
  }

  if(b>4){
    $('#addWork').hide();
  }
})
// addMore Work



// remove Work
$("#removeWork").click(function(){

  removeWork();
  if(b<=1){
    $("#removeWork").hide();
  }

  if(b<5){
    $('#addWork').show();
  }
});
// remove Work







// form validation
$("#submitButton").click(function(){

  /*
 var name =  $("#name").val();
 var surname = $("#surname").val();
 var email =  $("#email").val();
 var birth =  $("#birth").val();
 var tel =  $("#tel").val();
 var mySelect =  $("#mySelect").val();
 var addresOne =  $("#addresOne").val();
 var adresTwo =  $("#adresTwo").val();
 var postal =  $("#postal").val();
 var select =  $("#select").val();
 var summary =  $("#bio").val();

 var edcSelect =  $("#edcSelect").val();
 var schoolName =  $("#schoolName").val();
 var department =  $("#department").val();
 var edFrom =  $("#edFrom").val();
 var edTo =  $("#edTo").val();
 var checkIFEd =  $("#checkIFEd").val();

 var edcSelectTwo =  $("#edcSelectTwo").val();
 var schoolNameTwo =  $("#schoolNameTwo").val();
 var departmentTwo =  $("#departmentTwo").val();
 var edFromTwo =  $("#edFromTwo").val();
 var edToTwo =  $("#edToTwo").val();
 var checkIFEdTwo =  $("#checkIFEdTwo").val();

 var edcSelectThree =  $("#edcSelectThree").val();
 var schoolNameThree =  $("#schoolNameThree").val();
 var departmentThree =  $("#departmentThree").val();
 var edFromThree =  $("#edFromThree").val();
 var edToThree =  $("#edToThree").val();
 var checkIFEdThree =  $("#checkIFEdThree").val();

 var edcSelectFour =  $("#edcSelectFour").val();
 var schoolNameFour =  $("#schoolNameFour").val();
 var departmentFour =  $("#departmentFour").val();
 var edFromFour =  $("#edFromFour").val();
 var edToFour =  $("#edToFour").val();
 var checkIFEdFour =  $("#checkIFEdFour").val();

 var workName =  $("#workName").val();
 var departmentWork =  $("#departmentWork").val();
 var fromWork =  $("#fromWork").val();
 var toWork =  $("#toWork").val();
 var checkIfWork =  $("#checkIfWork").val();

 var workNameTwo =  $("#workNameTwo").val();
 var departmentWorkTwo =  $("#departmentWorkTwo").val();
 var fromWorkTwo =  $("#fromWorkTwo").val();
 var toWorkTwo =  $("#toWorkTwo").val();
 var checkIfWorkTwo =  $("#checkIfWorkTwo").val();

 var workNameThree =  $("#workNameThree").val();
 var departmentWorkThree =  $("#departmentWorkThree").val();
 var fromWorkThree =  $("#fromWorkThree").val();
 var toWorkThree =  $("#toWorkThree").val();
 var checkIfWorkThree =  $("#checkIfWorkThree").val();

 var workNameFour =  $("#workNameFour").val();
 var departmentWorkFour =  $("#departmentWorkFour").val();
 var fromWorkFour =  $("#fromWorkFour").val();
 var toWorkFour =  $("#toWorkFour").val();
 var checkIfWorkFour =  $("#checkIfWorkFour").val();
 var skills =  $("#skills").val();
 */

 
 var checkboxesCurrently = $('.check-currently');

 checkCurrentlyInput(checkboxesCurrently);

 var inputsForValidate = $('.valid');


 // ajax
 if(check(inputsForValidate)){
  addInputsToJson(inputsForValidate);
  console.log(json_data);
   $.ajax({
     url: 'test.php',
     type: 'GET',
     data: json_data,
     success: function(){
       alert("salam");
     }    
   });
 }
 // ajax


});
// form validation




}); // documet ready end line






// addMore function
var a = 1;
function addMore(){
  
  if(a==3){
    $("#edcClonedivFour").show(500);
    a++;
  }
  if(a==2){
    $("#edcClonedivThree").show(500);
    a++;
  }
  if(a==1){
    $("#edcClonedivTwo").show(500);
    a++;
  }

  }

 function remove(){
  if(a==2){
    $("#edcClonedivTwo").hide(500);
    a--;
    $("#edcClonedivTwo input").val('');
  }
  if(a==3){
    $("#edcClonedivThree").hide(500);
    a--;
    $("#edcClonedivThree input").val('');
  }
  if(a==4){
    $("#edcClonedivFour").hide(500);
    a--;
    $("#edcClonedivThree input").val('');
  }
  
  
 } 

// addMore function 





// addMore function Work
var b = 1;
function addMoreWork(){
  

  if(b==4){
    $("#workcClonedivFour").show(500);
    b++;
  }
  if(b==3){
    $("#workcClonedivThree").show(500);
    b++;
  }
  if(b==2){
    $("#workcClonedivTwo").show(500);
    b++;
  }

  if(b==1){
    $("#workcClonediv").show(500);
    b++;
  }

  }

 function removeWork(){

  if(b==2){
    $("#workcClonediv").hide(500);
    b--;
    $("#workcClonediv input").val('');
  }

  if(b==3){
    $("#workcClonedivTwo").hide(500);
    b--;
    $("#workcClonedivTwo input").val('');
  }
  if(b==4){
    $("#workcClonedivThree").hide(500);
    b--;
    $("#workcClonedivThree input").val('');
  }
  if(b==5){
    $("#workcClonedivFour").hide(500);
    b--;
    $("#workcClonedivFour input").val('');
  }
  
  
  
 } 

// addMore function Work





/*
* @params checkboxesCurrently
* 
*/
function checkCurrentlyInput(checkboxesCurrently){
    checkboxesCurrently.each(function(i){

          var checkboxId = $(this).attr('id');
          var input = $('.'+checkboxId);
          if(!input.hasClass('valid')){
          input.addClass('valid');
        }

        if($(this).is(':checked')){
          input.removeClass('valid');
        }
      });
}
// curretn function




// form validation function
function check(inputsForValidate){
  var result = true;
  var firstFailedInput = null;
  var flagForFirstFailedInput = 0;



  inputsForValidate.each(function(i){

    $(this).removeClass('valid-error');

    if ($(this).is(':visible')) {
        if ($(this).val().trim().length==0) {
              $(this).addClass('valid-error');
              result = false;
              if (flagForFirstFailedInput==0) {
                  firstFailedInput = $(this);
                  flagForFirstFailedInput=1;
              }
              
        }
    }
    
    
  });

  if (firstFailedInput!=null) {
    $('html, body').animate({
        scrollTop: firstFailedInput.offset().top
    }, 700);
  }
  

return result;
}
// form validation function

function addInputsToJson(inputs){
  inputs.each(function(i){
    var value = $(this).val();
    var key = $(this).attr('id');
    json_data[key]=value;
  });
  if($("#adresTwo").val().trim().length != 0){
    var value = $("#adresTwo").val();
    var key = $("#adresTwo").attr('id');
    json_data[key]=value;
  }
}
