$(document).ready(
  
function textCount(val) {
  var length = val.value.length
  console.log(length);
  var remaining = 32 - length
  var string = "Text remaining: " + remaining
  $('#textcountnum').text(string)
}

function textAreaCount(val) {
  var length = val.value.length
  console.log(length);
  var remaining = 140 - length
  var string = "Text remaining: " + remaining
  $('#textareacountnum').text(string)
}

function passwordCount(val) {
  var length = val.value.length
  console.log(length);
  var remaining = 16 - length
  var string = "Text remaining: " + remaining
  $('#passwordcountnum').text(string)
}

function passwordConfirmationCount(val) {
  var length = val.value.length
  console.log(length);
  var remaining = 16 - length
  var string = "Text remaining: " + remaining
  $('#passwordconfirmationcountnum').text(string)
}

function passwordMatch() {
  if ( ($('#pwd1')[0].value !== $('#pwd2')[0].value) ){
    $('#passwordmatchconfirmation').text("Passwords don't match")
    //console.log($('#pwd2')[0].value);
  }

  if ($('#pwd2')[0].value.length == 0) {
    $('#passwordmatchconfirmation').empty()
  }
}

function submitCheck() {
  //if (
  //  $('#text')[0].value.length == 1
  //) {
  if (
    ($('#pwd1')[0].value == $('#pwd2')[0].value) &&
    ($('#pwd1')[0].value.length > 5) &&
    ($('#pwd1')[0].value.length < 17) &&
    ($('#text')[0].value.length > 3) &&
    ($('#text')[0].value.length < 33) &&
    ($('#textarea')[0].value.length > 3) &&
    ($('#textarea')[0].value.length < 141) 
  ) {
    $('form').attr('action','https://en.wikipedia.org/wiki/Success_(magazine)')
  }
  //}
}
)
