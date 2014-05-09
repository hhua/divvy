$(function(){
  $.ajax({
    type: "GET",
    url: 'http://divvybikes.com/stations/json',
    dataType: "jsonp",
    jsonp: "jsonp",
    jsonpCallback: "handleData",
    success: function(){
      
    }
  });
});

function handleData(data){
  console.log(data);
}