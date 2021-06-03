$(document).ready(function(){
	/* Agregar al listado de calculo histórico */
	 $("#btnIgual").on('click', function(e){
        e.preventDefault();
       $("#listadoHistorico").html("agregar al historial"); 
    })

	$("#textoPantalla").val("");
	op="";
	$("#textoPantalla").on("click",
	function(){ $("#textoPantalla").val("");});
	$("#btnC").on("click",
	function(){ $("#textoPantalla").val("");
	op="";
	});
	/* PI */
	$("#btnPI").on("click",
	function(){ $("#textoPantalla").val("3.141592653589");
	op="";
	});
	/* número E */
	$("#btnE").on("click",
	function(){ $("#textoPantalla").val("2.718281828459");
	op="";
	});
	/* Paréntesis REVISAR*/
	$("#btnParI").on("click",
	function(){ $("#textoPantalla").val("(");
	op="";
	});
	$("#btnParD").on("click",
	function(){ $("#textoPantalla").val(")");
	op="";
	});

	/* muestra en "pantalla" lo que se presiona */
	$(".val").on("click",
			function(e) {
				e.preventDefault();
				var a = $(this).attr("href");
				$("#textoPantalla").val($("#textoPantalla").val()+a);
			});
	/* Suma */
	$("#btnSuma").on("click",
			function() { num = $("#textoPantalla");
						acc = num.val();
						op= op+acc+"+";
						$("#textoPantalla").val("");});
	/* Resta */
	$("#btnResta").on("click",
			function() { num = $("#textoPantalla");
						acc = num.val();
						op= op+acc+"-";
						$("#textoPantalla").val("");});
	/* Multiplicación */
	$("#btnMulti").on("click",
			function() { num = $("#textoPantalla");
						acc = num.val();
						op= op+acc+"*";
						$("#textoPantalla").val("");});
	/* División */
	$("#btnDivi").on("click",
			function() { num = $("#textoPantalla");
						acc = num.val();
						op= op + acc + "/" ;
						$("#textoPantalla").val("");});

	/* Igual */
	$("#btnIgual").on("click",
			function(){
				var num = $("#textoPantalla");
				acc = num.val();
				op+= acc;
				$("#textoPantalla").val (eval(op));
				op="";

			})

	// otras operaciones
		$("#btnX2").on("click",
			function() {
				var num = $("#textoPantalla");
				$("#textoPantalla").val(num.val() * num.val());
			});	
		$("#btn1x").on("click",
			function() {
				var num = $("#textoPantalla");
				$("#textoPantalla").val(1 / num.val());
			});	
		$("#btnRaiz").on("click",
			function() {
				var num = $("#textoPantalla");
				$("#textoPantalla").val( Math.sqrt(num.val()));
			});	
});