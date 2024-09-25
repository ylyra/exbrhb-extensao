function objectLength(obj) {
  var result = 0;
  for(var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
    // or Object.prototype.hasOwnProperty.call(obj, prop)
      result++;
    }
  }
  return result;
}

function pesquisar(nickname) {
	if (nickname != '' || nickname != undefined) {
		$.ajax({
		  	url:`https://exbrhb.net/ajax/pesquisa`,
		  	"dataType": "html",
			type: "POST",
			"data": {
				"usuario": nickname
			},
			crossDomain: true,
			"success": function(response) {
				$('.resultado').html(response);
			    $('.resultado').css('display', 'flex')
			    $('#usuario').val(usuario)
			},

			error: function(e) {
				document.getElementById("saida2").style.display = 'none';
				console.log(e.responseText);
			}
		});
	}

	console.log(usuario)
}

var query = location.search.slice(1);
var partes = query.split('&');
var data = {};
partes.forEach(function (parte) {
    var chaveValor = parte.split('=');
    var chave = chaveValor[0];
    var valor = chaveValor[1];
    data[chave] = valor;
});

var usuario = data['usuario'];

if (objectLength(data) == 1) {
	jQuery.support.cors = true
	$('#usuario').val(usuario)
}

$(document).ready(function () {	
	$('#pesquisa').on('submit', function (e) {
		e.preventDefault()
		let nickname = $('#usuario').val()
		pesquisar(nickname)
	});
	$('#procurarMilitar').on('click', function (e) {
		e.preventDefault()
		let nickname = $('#usuario').val()
		pesquisar(nickname)
	});
});

