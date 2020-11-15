var url = "https://geo.api.gouv.fr/departements"
$(document).ready(function() {
	function ajax(){
		var request= $.ajax({
			url:
			url,
			method:
			"GET",
			dataType: "json",
			beforeSend: function( xhr ) {
				xhr.overrideMimeType( "application/json; charset=utf-8" );
			}});
		console.log(url)
		request.done(function( msg ) {
			var departement = document.getElementById("departement");

			$.each(msg, function(index, e){
				var opt = document.createElement('option');
				opt.value = e.code;
				opt.innerHTML = e.nom; 
				st=document.getElementById("departement");
				st.appendChild(opt)
			});
		});

		$('#departement').on('change',function(){
			document.getElementById("villesParDep").options.length = 0;
			let url = "https://geo.api.gouv.fr/departements/" + this.value + "/communes"
			alert(this.value)
			var request= $.ajax({
				url:
				url,
				method:
				"GET",
				dataType: "json",
				beforeSend: function( xhr ) {
					xhr.overrideMimeType( "application/json; charset=utf-8" );
				}});
			request.done(function( msg ) {
				var villesParDep = document.getElementById("villesParDep");

				$.each(msg, function(index, e){
					var opta = document.createElement('option');
					opta.value = e.code;
					opta.innerHTML = e.nom; 
					sta=document.getElementById("villesParDep");
					sta.appendChild(opta)
				});
			});
		});

request.fail(function( jqXHR, textStatus ) {
	alert ('erreur');
});
};

ajax()
});
