$(document).ready(function(){
    $('#MyButton').click(function(){
       chooseDinner();
    });
  });

function chooseDinner(){
    document.getElementById("dinnerList").textContent += "You are having curried sausages";
}