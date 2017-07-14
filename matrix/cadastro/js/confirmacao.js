$(function($) {
	// Quando o formulário for enviado, essa função é chamada
	
	$("#formulario").submit(function() {
		$("#btns").show();//mostra o botao que estava escondido ao submeter

		var email = $("#email").val();
		var nome = $("#nome").val();
		var sexo = $("#sexo").val();
		var curso = $("#curso").val();
		var endereco = $("#endereco").val();
		var complemento = $("#complemento").val();
		var cep = $("#cep").val();
		var municipio = $("#municipio").val();
		var uf = $("#uf").val();
	
					$("#sec1").hide();//esconde todo o formulario e exibe a mensagem				
					// Coloca a mensagem no div de mensagens
					$("#mensagens").prepend(
						"<br><h5>Confirme seus dados</h5> <br><br>Email: " + email + 
						"<br>Nome: " + nome + 
						"<br>Sexo: " + sexo +
						"<br>Curso: " + curso +
						"<br>Endereço: " + endereco +
						"<br>Complemento: " + complemento +
						"<br>CEP: " + cep +
						"<br>Municipio: " + municipio +
						"<br>UF: " + uf);
				
		});

		$("#botao").click(function(){
			var nome = $("#nome").val();
			var email = $("#email").val();
				$("#pessoa").prepend(nome);
				$("#emailp").prepend(email);

		});

		$("#botao").click(function(){
			var nome = $("#nome").val();
				$("#pessoa2").prepend(nome);
				
		});

	});