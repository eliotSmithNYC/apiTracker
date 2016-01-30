'use strict';

$(document).ready(init);
var user;

function init(){
  formatPage();
  $('#stockButton').on('click', searchStock);
  
  $.get('/users/profile', function (data){
    console.log(data);
    user = data;
  })
}

function searchStock() {
  console.log('clicked');
  var stock = $('#stockInput').val();
  console.log('User:', user);

  $.ajax({
  url: "/users/profile",
  type: "POST",
  data: {"userId": user._id,"stock": stock}
    }).success(function(data) {
      console.log('successfully put:', data);
    });
}

function formatPage() {
   $('#login').hide();
}

// put users/addstock 

// id in cookie - 
