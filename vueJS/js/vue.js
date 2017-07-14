var obj = {
  email: "",
  nome: "",
  sexo: "",
  curso: "",
  endereco: "",
  complemento: "",
  cep: "",
  municipio: "",
  uf: ""
}
new Vue({
    el: "#vue",
    data: function(){
      return obj;
    },
    created: function() {  
        var formC = JSON.parse(localStorage.getItem("form"));
          if(formC){
              this.email = formC.email;
              this.nome = formC.nome;
              this.sexo = formC.sexo;
              this.curso = formC.curso;
              this.endereco = formC.endereco;
              this.complemento = formC.complemento;
              this.cep = formC.cep;
              this.municipio = formC.municipio;
              
           }
    },
    methods: {
      salvar: function(){
      
        localStorage.setItem("form", JSON.stringify(obj));
          }
    }
      
});

