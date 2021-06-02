$(document).ready(function(){
		$("#textoPantalla").val("");
		op="";
		$("#textoPantalla").on("click",
		function(){ $("#textoPantalla").val("");});
		$("#btnC").on("click",
		function(){ $("#textoPantalla").val("");
		op="";
		});

/* muestra en "pantalla" lo que se presiona */
$(".val").on("click",
		function(e) {
			e.preventDefault();
			var a = $(this).attr("href");
			$("#textoPantalla").val($("#textoPantalla").val()+a);
		});			

$("#btnSuma").on("click",
		function() { num = $("#textoPantalla");
					 acc = num.val();
					  op= op+acc+"+";
					  $("#textoPantalla").val("");});
$("#btnResta").on("click",
		function() { num = $("#textoPantalla");
					 acc = num.val();
					  op= op+acc+"-";
					  $("#textoPantalla").val("");});
$("#btnMulti").on("click",
		function() { num = $("#textoPantalla");
					 acc = num.val();
					  op= op+acc+"*";
					  $("#textoPantalla").val("");});
$("#btnDivi").on("click",
		function() { num = $("#textoPantalla");
					 acc = num.val();
					  op= op + acc + "/" ;
					  $("#textoPantalla").val("");});

 
$("#btnIgual").on("click",
		function(){
			var num = $("#textoPantalla");
			acc = num.val();
			op+= acc;
			$("#textoPantalla").val (eval(op));
			op="";

        })
});