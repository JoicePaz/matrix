var i = -1;
var inscritos = [];
var  obj = {
        email: "",
        nome: "",
        sexo: "",
        curso: "",
        endereco: "",
        complemento: "",
        cep: "",
        municipio: "",
        uf: ""
      };
new Vue({
    el: "#vue",
    data: function(){
     return obj;
      
    },
    methods: {
      salvar: function(){
        i++;
        inscritos[i] = obj;
        alert(JSON.stringify(inscritos));
        
      },
      setar: function(){
        localStorage.setItem("inscritos", JSON.stringify(inscritos));
      }

    } 
});

