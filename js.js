var horarioInicial = new Date()
var idInicial = 1

var app = new Vue({
  el: '#app',
  data: {
    todos: [
      { text: "texto" },
    ],
    horarios: [
    	{ horario: horarioInicial}
    ],
    ids: [
    	{ idAtual: idInicial}
    ]
  },
  methods: {
  	adicionarPost: function () {
    
    	var newPost = document.getElementById("postar").value
      var newDate = new Date()
      idInicial++;
      
      if (newPost != "") {
      
      	app.todos.push({text:newPost})
        app.horarios.push({horario:newDate})
        app.ids.push({idAtual:idInicial})
      
      }
	

    }
  
  
  },
});