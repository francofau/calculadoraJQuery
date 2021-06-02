/* Javascript */

// Para poner en lista el resultado obtenido (cuando apretemos el igual)

// var identf = ""
// function igual(id){
//     document.getElementById("demo").innerHTML += "Clicked!<br>";}



$(document).ready(function(){
    $("#igual").on('click', function(e){
        e.preventDefault();
       $("#demo").html("click"); 
    })







    
})