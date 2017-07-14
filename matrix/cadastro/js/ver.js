$(function($) {

	document.getElementById("evento").addEventListener('mouseover', function (event) {
		$("#evento").hide();

			if (localStorage.length !== 0) {

				for(var i = 1; i <= localStorage.length; ++i){
						var form = JSON.parse(window.localStorage.getItem(i));

						var nome = form["nome"];
						var email = form["email"];
						var sexo = form["sexo"];
						var curso = form["curso"];
						var endereco = form["endereco"];
						var complemento = form["complemento"];
						var cep = form["cep"];
						var municipio = form["municipio"];
						var uf = form["uf"];

						$("#cadastros").prepend(
							"<h5>" + nome + "</h5>. Email: " + email +
							". Sexo: " + sexo +
							". Curso: " + curso +
							". Endereço: " + endereco +
							". Complemento: " + complemento +
							". CEP: " + cep +
							". Municipio: " + municipio +
							". UF: " + uf +
							"</br>");
					}
			}else{

				$("#cadastros").prepend("Nada foi cadastrado!");
			}
		});


	});
