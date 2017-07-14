if (localStorage.form) {

	
		var form = JSON.parse(window.localStorage.getItem("form"));

		var nome = form["nome"];
		var email = form["email"];
		var sexo = form["sexo"];
		var curso = form["curso"];
		var endereco = form["endereco"];
		var complemento = form["complemento"];
		var cep = form["cep"];
		var municipio = form["municipio"];
		var uf = form["uf"];
		

		document.getElementById("nome").value = nome;
		document.getElementById("email").value = email;
		document.getElementById("sexo").value = sexo;
		document.getElementById("curso").value = curso;
		document.getElementById("endereco").value = endereco;
		document.getElementById("complemento").value = complemento;
		document.getElementById("cep").value = cep;
		document.getElementById("municipio").value = municipio;
		document.getElementById("uf").value = uf;

	
}


document.getElementById("formulario").addEventListener('submit', function (event) {
	var form = {
		nome: document.getElementById("nome").value,
		email: document.getElementById("email").value,
		sexo: document.getElementById("sexo").value,
		curso : document.getElementById('curso').value,
		endereco: document.getElementById("endereco").value,
		complemento: document.getElementById("complemento").value,
		cep: document.getElementById("cep").value,
		municipio: document.getElementById("municipio").value,
		uf: document.getElementById("uf").value
	}
	
	localStorage.setItem("form", JSON.stringify(form));

	event.preventDefault();
});
