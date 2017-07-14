$(function($) {

	document.getElementById("evento").addEventListener('mouseover', function (event) {
		$("#evento").hide();

			
				var form = localStorage.getItem("inscritos");
			
						
				$("#cadastros").prepend(
							"<p>" + form + "</p>");
					
			
		});


	});
