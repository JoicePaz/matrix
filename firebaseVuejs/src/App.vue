<template>
  <div id="app">

    <nav>
      <div class="nav-wrapper grey darken-3">
        <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
        <ul class="left hide-on-med-and-down">
          <li class="active"><a href="http://cariocadev.com.br/">CariocaDev</a></li>
          <li><a href="https://github.com/JoicePaz">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/joicepaz/">Linkedin</a></li>
        </ul>
        <ul class="side-nav" id="mobile-demo">
          <li class="active"><a href="http://cariocadev.com.br/">CariocaDev</a></li>
          <li><a href="github.com/JoicePaz">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/joicepaz/">Linkedin</a></li>
        </ul>
      </div>
    </nav>

    <div class="row center"><h4>Formulario</h4></div>

    <div class="row center">
      <form class="col s12" name="formulario" id="formulario" method="post" action="#" v-on:submit.prevent>

        <div class="row">
          <label for="email" data-error="wrong" data-success="right">Endereço de e-mail:</label>
            <div class="input-field inline">
              <input v-model="obj.email" id="email" type="email" class="validate" required>
            </div>
        </div>

        <div class="row">
          <label for="nome">Nome:</label>
            <div class="input-field inline">
              <input v-model="obj.nome" id="nome" type="text" class="validate" required>
            </div>
        </div>

        <div class="row">
          <label>Sexo:</label>
            <div class="input-field inline">
              <select id="sexo" v-model="obj.sexo" class="browser-default">
                <option value="" disabled selected></option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="outro">Outro</option>
              </select>
            </div>
        </div>
     
        <div class="row">
          <label for="curso">Curso:</label>
            <div class="input-field s9 inline">
              <select name="curso" id="curso" v-model="obj.curso" class="browser-default">
                <option value="" disabled selected></option>
                <option value="informatica">Curso Técnico em Informática</option>
                <option value="alimentos">Curso Técnico em Alimentos</option>
                <option value="agropecuaria">Curso Técnico em Agropecuária</option>
              </select>
            </div>
        </div>  
    
        <div class="row">
          <label for="endereco">Endereço para correspondência:</label>
            <div class="input-field inline">
              <input v-model="obj.endereco" id="endereco" type="text" class="validate" name="endereco" required>
            </div>
        </div>
          
        <div class="row">
          <label for="complemento">Complemento do endereço:</label>
            <div class="input-field inline">
              <input v-model="obj.complemento" id="complemento" type="text" class="validate" name="complemento" required>
            </div>
        </div>  
              
        <div class="row">
          <label for="cep">CEP:</label>
            <div class="input-field inline">
              <input v-model="obj.cep" id="cep" type="text" class="validate" name="cep" required>
            </div>
        </div>    

        <div class="row">
          <label for="municipio">Município:</label>
            <div class="input-field inline">
              <input v-model="obj.municipio" id="municipio" type="text" class="validate" name="municipio" required>
            </div>

            <div class="input-field s9 inline">
              <select name="uf" id="uf" v-model="obj.uf" class="browser-default">
                <option value="AC">AC</option>
                <option value="AL">AL</option>
                <option value="AM">AM</option>
                <option value="AP">AP</option>
                <option value="BA">BA</option>
                <option value="CE">CE</option>
                <option value="DF">DF</option>
                <option value="ES">ES</option>
                <option value="GO">GO</option>
                <option value="MA">MA</option>
                <option value="MG">MG</option>
                <option value="MS">MS</option>
                <option value="MT">MT</option>
                <option value="PA">PA</option>
                <option value="PB">PB</option>
                <option value="PE">PE</option>
                <option value="PI">PI</option>
                <option value="PR">PR</option>
                <option value="RJ">RJ</option>
                <option value="RN">RN</option>
                <option value="RS" selected>RS</option>
                <option value="RO">RO</option>
                <option value="RR">RR</option>
                <option value="SC">SC</option>
                <option value="SE">SE</option>
                <option value="SP">SP</option>
                <option value="TO">TO</option>
              </select>
            </div>
        </div>

        <div class="row">
          <div class="input-field inline">
              <button type="submit" class="waves-effect grey darken-4 btn" id="botao" @click="salvar">Salvar</button>
          </div>
          <div class="input-field inline">
              <a class="waves-effect grey darken-4 btn" id="botao2" href="inscritos.html">Ver inscritos</a>
          </div>
        </div>

         <div class="row">
              <div class="input-field inline">
                <input type="checkbox" class="filled-in" id="check" />
                <label for="check">Salvar no Firebase</label>         
              </div>
          </div> 

    </form>
</div>

<footer class="page-footer grey darken-4">

  <div class="container">
    <div class="row">

      <div class="col l6 s12">
        <h5 class="white-text">Projeto Matrix</h5>
        <p class="grey-text text-lighten-4">Exercício de javascript, html e css.</p>
      </div>
      <div class="col l4 offset-l2 s12">
        <h5 class="white-text">Siga-me</h5>
        <ul>
          <li><a href="https://twitter.com/juicemundo" class="twitter-follow-button" data-show-count="false" data-size="large">Follow @juicemundo</a></li>
          <li><a class="github-button" href="https://github.com/JoicePaz" data-size="large" aria-label="Follow @JoicePaz on GitHub">Seguir @JoicePaz</a></li>
        </ul>
      </div>

    </div>
  </div>

  <div class="footer-copyright grey darken-3"">
    <div class="container">© 2017 Copyright - Joice Paz</div>
  </div>

</footer>

</div><!--fim div-->

</template>
<script>

$(document).ready(function () {
      $('select').material_select();
    });

import Firebase from 'firebase'

let config = {
    apiKey: "AIzaSyB7-Qs_3x7i6agrDyPdpYc_WGujsts8nHw",
    authDomain: "cadastro-a64e4.firebaseapp.com",
    databaseURL: "https://cadastro-a64e4.firebaseio.com",
    projectId: "cadastro-a64e4",
    storageBucket: "cadastro-a64e4.appspot.com",
    messagingSenderId: "440579616251"
}

let app = Firebase.initializeApp(config);
let db = app.database();

let inscritosRef = db.ref('inscritos');

export default {
  name: 'app',
  firebase: {
    inscritos: inscritosRef
  },
  data() {
  return {
    obj: {
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
        lInscritos: []
    }
     
    },
    methods: {
      salvar: function(){
        var check = document.getElementById("check");
        if (check.checked == true) {
        inscritosRef.push(this.obj);
          
        } else {
          if (localStorage.getItem("inscritos")) {
              this.lInscritos = JSON.parse(localStorage.getItem("inscritos"));
          }
          this.lInscritos.push(this.obj);
          localStorage.setItem("inscritos", JSON.stringify(this.lInscritos));
            alert("Inscrito salvo no LocalStorage com sucesso!");

            //zerar formulario
        }
        
      }   

    } 

}
</script>
