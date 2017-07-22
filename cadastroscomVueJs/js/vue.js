var i = -1;
var inscritos = [];

new Vue({
    el: "#vue",
    data: {
        email: "",
        nome: "",
        sexo: "",
        curso: "",
        endereco: "",
        complemento: "",
        cep: "",
        municipio: "",
        uf: ""
    },
    methods: {
      salvar: function(){
        i++;
        obj = {
          email: this.email,
          nome: this.nome,
          sexo: this.sexo,
          curso: this.curso,
          endereco: this.endereco,
          complemento: this.complemento,
          cep: this.cep,
          municipio: this.municipio,
          uf: this.uf
      };
        inscritos[i] = obj;   
        
      },
      setar: function(){
        localStorage.setItem("inscritos", JSON.stringify(inscritos));
      }     

    } 
});

