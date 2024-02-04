function printData(data)
{
	const obj = JSON.parse(data);

	var table = '<table width: 90% class="table table-hover table-dark">\
	<tr>\
	<th>NumeroDeTicket</th> \
	<th>SN</th> \
	<th>Equipement</th> \
	<th>Model</th> \
	<th>NaturePane</th> \
	<th>Utilisateur</th> \
	<th>DateOuverture</th> \
	<th>DateAffectation</th> \
	<th>CodeCloture</th> \
	<th>Remarque</th> \
	<th>TicketFE</th> \
	<th>DateResolution</th> \
	<th>NatureResolution</th> \
	<th>DateDeclaration</th> \
	</tr>';

	for(var i = 0; i < obj.length; i++)
	{		
		table += "<tr><td>" +  obj[i].NumeroDeTicket  + "</td><td>" +  obj[i].SN  + "</td><td>" + obj[i].Equipement  + "</td><td>" + obj[i].Model +"</td>\
		<td>"+ obj[i].NaturePane + "</td>\
		<td>"+obj[i].Utilisateur + "</td><td>"+obj[i].DateOuverture +"</td><td>"+obj[i].DateAffectation +"</td><td>"+obj[i].CodeCloture +"</td><td>"+obj[i].Remarque  +"</td>\
		<td>"+obj[i].TicketFE +"</td><td>"+obj[i].DateResolution +"</td><td>"+obj[i].NatureResolution +"</td><td>"+obj[i].DateDeclaration  + 
		"</tr>"
	}
	table += '</table>' ;

	document.getElementById('mytable').innerHTML = table;
	$idd =obj[i].NumeroDeTicket ;
}

function getMyDataPlease()
{
	var xmlHttp = new XMLHttpRequest();
		//xmlHttp.open("GET", "ss.json", true); // true for 
		xmlHttp.open("GET", "http://localhost/gestion_incident/serveur/affiche.php", true); // true for

		xmlHttp.onreadystatechange = function() 
		{ 
			if (xmlHttp.readyState == 4 || xmlHttp.status == 200)
			{
				//console.log(xmlHttp.responseText)
				printData(xmlHttp.responseText)
			}else{
				console.log("erreuuur")
				alert("Errrrrrrrreur")
			}			
		}
		xmlHttp.send(null);
	}

	function sendData() {
		// Récupérer les valeurs des champs de formulaire
		
		const NumeroDeTicket = document.getElementById("NumeroDeTicket").value;
		const SN = document.getElementById("SN").value;
		const Equipement = document.getElementById("Equipement").value;
        const Model = document.getElementById("Model").value;
        const NaturePane = document.getElementById("NaturePane").value;
        const Utilisateur = document.getElementById("Utilisateur").value;
        const DateOuverture = document.getElementById("DateOuverture").value;
        const DateAffectation = document.getElementById("DateAffectation").value;
        const CodeCloture = document.getElementById("CodeCloture").value;
        const Remarque = document.getElementById("Remarque").value;
				
		const TicketFE = document.getElementById("TicketFE").value;
 
        const DateResolution = document.getElementById("DateResolution").value;
        const NatureResolution = document.getElementById("NatureResolution").value;
       
         
	  
		// Stocker les valeurs dans un objet JavaScript
		const data = {
          NumeroDeTicket: NumeroDeTicket,
          SN: SN,
          Equipement: Equipement,
          Model: Model,
          NaturePane: NaturePane,
          Utilisateur: Utilisateur,
          DateOuverture: DateOuverture,
          DateAffectation: DateAffectation,
          CodeCloture: CodeCloture,
          Remarque: Remarque,
		  TicketFE: TicketFE,
        
          DateResolution: DateResolution,
          NatureResolution: NatureResolution
		};
	  
		// Convertir l'objet JavaScript en chaîne JSON
		const jsonData = JSON.stringify(data);
	  
		// Envoyer les données à votre script PHP via XHR
		const xhr = new XMLHttpRequest();
		xhr.open("POST", "http://localhost/Gestion_incident/serveur/insert.php");
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.onload = function() {
		  if (xhr.status === 200 && xhr.readyState == 4) {
			alert("ticket ajouter");
		  } else {
			alert("Erreur lors de l'ajout du ticket");
		  }
		};
		xhr.send(jsonData);
	}
	function insererfour() {
		// Récupérer les valeurs des champs de formulaire
		
		const TicketFE = document.getElementById("TicketFE").value;
		const Too = document.getElementById("Too").value;
		const CC = document.getElementById("CC").value;
        const DateResolution = document.getElementById("DateResolution").value;
        const NatureResolution = document.getElementById("NatureResolution").value;
        const messagee = document.getElementById("messagee").value;

		// Stocker les valeurs dans un objet JavaScript
		const data = {
          TicketFE: TicketFE,
          Too: Too,
          CC: CC,
          DateResolution: DateResolution,
          NatureResolution: NatureResolution,
          messagee: messagee 
		};
	  
		// Convertir l'objet JavaScript en chaîne JSON
		const jsonData = JSON.stringify(data);
	  
		// Envoyer les données à votre script PHP via XHR
		const xhr = new XMLHttpRequest();
		xhr.open("POST", "http://localhost/Gestion_incident/serveur/insertfour.php");
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.onload = function() {
		  if (xhr.status === 200 && xhr.readyState == 4) {
			alert("vous avez contacter fournisseur");
		  } else {
			alert("Erreur lorsque vous devez contacter le four");
		  }
		};
		xhr.send(jsonData);
	}
	function CheckData() {
		var identifiant = $("#identifiant").val();
		var motdepasse = $("#motdepasse").val();
	  
		var xmlHttp = new XMLHttpRequest();
	  
		xmlHttp.open("GET", 'http://localhost/Gestion_incident/serveur/Check.php?identifiant=' + identifiant + '&motdepasse=' + motdepasse, true);
		xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xmlHttp.send("identifiant=" + identifiant + "&motdepasse=" + motdepasse);
	  
		xmlHttp.onreadystatechange = function() { 
		  if (xmlHttp.readyState == 4 || xmlHttp.status == 200){
			if(xmlHttp.status == 200){
			  if(xmlHttp.responseText == 'true'){
				window.location.href = '/gestion_incident/client/html/user/';
			  } else {
				window.location.href = '/Gestion_incident/login.html';
				
			  }
			}
		  }
		}
	}
	function affichefour(data)
	{
		const obj = JSON.parse(data);
	
		var table = '<table width: 90% class="table table-hover table-dark">\
		<tr>\
		<th>Fournseur</th> \
		<th>TicketFE</th> \
		<th>DateDeclaration</th> \
		<th>DateResolution</th> \
		<th>NatureResolution</th> \
		</tr>';
	
		for(var i = 0; i < obj.length; i++)
		{		
			table += "<tr><td>" +  obj[i].nom  + "</td><td>" +  obj[i].TicketFE  + "</td><td>" + obj[i].DateDeclaration  + "</td><td>" + obj[i].DateResolution +"</td>\
			<td>"+ obj[i].NatureResolution +  
			"</tr>"
		}
		table += '</table>' ;
	
		document.getElementById('tablefour').innerHTML = table;
		$idd =obj[i].NumeroDeTicket ;
	}
	function getdatafou()
{
	var xmlHttp = new XMLHttpRequest();
		//xmlHttp.open("GET", "ss.json", true); // true for 
		xmlHttp.open("GET", "http://localhost/gestion_incident/serveur/affiche.php", true); // true for

		xmlHttp.onreadystatechange = function() 
		{ 
			if (xmlHttp.readyState == 4 || xmlHttp.status == 200)
			{
				//console.log(xmlHttp.responseText)
				affichefour(xmlHttp.responseText)
			}else{
				console.log("erreuuur")
				alert("Errrrrrrrreur")
			}			
		}
		xmlHttp.send(null);
	}
	function SearchData(){
		var NumeroDeTicket = document.getElementById("NumeroDeTicket").value;
		var xmlHttp = new XMLHttpRequest();
		if(NumeroDeTicket==''){
		  xmlHttp.open("GET", "http://localhost/gestion_incident/serveur/affiche.php", true);
		  xmlHttp.onreadystatechange = function() {
			if (xmlHttp.readyState == 4 || xmlHttp.status == 200) {
			  var a = 'table';
			  printData(xmlHttp.responseText , a)
				}else{
					alert("erreur");
				}			
			}
		}else{
		  xmlHttp.open("GET", "http://localhost/gestion_incident/serveur/searchdata.php?NumeroDeTicket="+NumeroDeTicket+'', true);
		  xmlHttp.onreadystatechange = function() {
			if (xmlHttp.readyState == 4 || xmlHttp.status == 200) {
			  if (xmlHttp.readyState == 4){
				if(xmlHttp.responseText == 'false'){
				  alert('not found');
				}else{
				  var a = 'search';
				  printData(xmlHttp.responseText , a)
				}
			  }
				}else{
					alert("erreur");
				}			
			}
		}
		
		  xmlHttp.send(null);
	  }
	  function newcmd(){
		$('#NumeroDeTicket').val('');
		$('#SN').val('');
		$('#Equipement').val('');
		$('#Model').val('');
		$('#NaturePane').val('');
		$('#Utilisateur').val('');
		$('#DateOuverture').val('');
		$('#DateAffectation').val('');
		$('#DateCloture').val('');
		$('#TicketFE').val('');
		$('#DateResolution').val('');
		$('#NatureResolution').val('');
		$('#Remarque').val('');
		$('#zone2').text('');
		$('#zone3').text('');
		$('#zone4').text('');
		$('#zone5').text('');
	  }
	  
  function changeTo(){
    var input = document.getElementById('Too');
    input.value = document.getElementById('emailto').value;
  }

  function changeCC(){
    var input = document.getElementById('CC');
    input.value = document.getElementById('emailcc').value;
  }
  function addCloture(){
	var valeur = false;
	var NumeroDeTicket = document.getElementById("NumeroDeTicket").value;
	var DateDeclaration = document.getElementById("zone2").textContent;
	  var xmlHttp = new XMLHttpRequest();
	  xmlHttp.open("POST", "http://localhost/gestion_incident/serveur/clotureData.php", true);
	  xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	  xmlHttp.send('NumeroDeTicket=' + NumeroDeTicket +"&DateDeclaration=" + DateDeclaration)
	  xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState == 4 || xmlHttp.status == 200){
		  window.location.href = 'http://localhost/Gestion_incident/client/html/user/index.html';
			  }else{
		  alert("erreur");
			  }
		  }
  }
  
  function deleteRow() {
	var NumeroDeTicket = document.getElementById("NumeroDeTicket").value;
	
	// Création de l'objet XHR
	var xhr = new XMLHttpRequest();
	
	// Gestionnaire d'événement pour la réponse reçue
	xhr.onload = function() {
	  if (xhr.status === 200) {
		// Suppression de la ligne de la table
		var table = document.getElementById("mytable");
		var rows = table.getElementsByTagName("tr");
		
		for (var i = 0; i < rows.length; i++) {
		  var currentRow = rows[i];
		  var cell = currentRow.getElementsByTagName("td")[0];
		  
		  if (cell.innerHTML === NumeroDeTicket) {
			table.deleteRow(i);
			break;
		  }
		}
	  } else {
		console.log("Erreur lors de la suppression du ticket.");
		alert("Erreur lors de la suppression du ticket.");
	  }
	};
	
	// Préparation de la requête HTTP POST
	xhr.open("POST", "http://localhost/gestion_incident/serveur/del.php", true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
	// Envoi de la requête avec le numéro de ticket en paramètre
	xhr.send("NumeroDeTicket=" + encodeURIComponent(NumeroDeTicket));
  }
  function EditData(){
	var valeur = true;
	var NumeroDeTicket = document.getElementById("NumeroDeTicket").value;
			var SN = document.getElementById("SN").value;
			var Equipement = document.getElementById("Equipement").value;
		var Model = document.getElementById("Model").value;
			var NaturePane = document.getElementById("NaturePane").value;
			var Utilisateur = document.getElementById("Utilisateur").value;
		var DateOuverture = document.getElementById("DateOuverture").value;
			var DateAffectation = document.getElementById("DateAffectation").value;
			var CodeCloture = document.getElementById("CodeCloture").value;
		var Remarque = document.getElementById("Remarque").value;
		var DateDeclaration = new Date().toJSON().slice(0, 10);
		var TicketFE = document.getElementById("TicketFE").value;
			var DateResolution = document.getElementById("DateResolution").value;
			var NatureResolution = document.getElementById("NatureResolution").value;
	  var xmlHttp = new XMLHttpRequest();
	  xmlHttp.open("POST", "http://localhost/gestion_incident/serveur/EditeData.php", true);
		  xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	  xmlHttp.send("NumeroDeTicket=" + NumeroDeTicket + "&SN=" + SN + "&Equipement=" + Equipement + "&Model=" + Model + "&NaturePane=" + NaturePane + "&Utilisateur=" + Utilisateur + "&DateOuverture=" + DateOuverture + "&DateAffectation=" + DateAffectation + "&CodeCloture=" + CodeCloture + "&Remarque=" + Remarque + "&DateDeclaration=" + DateDeclaration + "&TicketFE=" + TicketFE + "&DateResolution=" + DateResolution + "&NatureResolution=" + NatureResolution);
	  xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState == 4 || xmlHttp.status == 200){
		  window.location.href = 'index.html';
			  }else{
		  alert("erreur");
			  }
		  }
  }
  function checkifexist(){
	var NumeroDeTicket = document.getElementById("NumeroDeTicket").value;
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open("POST", "http://localhost/gestion_incident/serveur/checknmb.php", true);
	  xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlHttp.send("NumeroDeTicket=" + NumeroDeTicket);
	xmlHttp.onreadystatechange = function() { 
	  if (xmlHttp.readyState == 4 || xmlHttp.status == 200){
		if (xmlHttp.readyState == 4){
		  if(xmlHttp.responseText == 'true'){
			EditData();
		  } else if(xmlHttp.responseText == 'false') {
			add();
		  }
		}
	  }
	}
  }
  function add(){
                
	sendData();
}
  
 
  
  
