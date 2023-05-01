
//León, Serpiente, Nutria, Koala

function IniciarSesion() {
    var user = document.getElementById("usuario").value;
    var pass = document.getElementById("contraseña").value;
	if (user=="" || pass=="") {
		alert("ingresa el usuario y la contraseña, por favor")
	}else{
		localStorage.setItem("usuario", user);
		localStorage.setItem("contraseña", pass);
		window.location= "html/list.html";
	}

    if (user == "Mateo" && pass == "1234") {
        alert("Usted es Administrador");       
    }
}

  
const animales = ["Perro", "Gato", "Elefante", "Cebra", "Jirafa", "Loro", 
				"León", "Tigre", "Oso", "Hipopótamo", "Rinoceronte", "Camello","Chango","Asno", 
				"Jabalí", "Cocodrilo", "Canguro", "Puma", "Pantera", "Rana", "Araña","Escorpión",
				"Tortuga", "Pez", "Murciélago", "Mariposa", "Aguila", "Búho", "Colibrí", 
				"Cuervo", "Pavo Real", "Cisne", "Pinguino", "Foca", "Conejo", "Ratón", 
				"Castor", "Oso Hormiguero", "Ornitorrinco", "Cator", "Mapache", "Chimpancé",
				"Gorila", "Panda", "Leopardo", "Hiena", "Jaguar", "Iguana", "Gecko","Lagartija", 
				"Ratón Canguro", "Lemur", "Perezoso", "Ardilla", "Mofeta", "Topo","Mono", 
				"Puerco Espin", "Zorro", "Oveja", "Lince", "Zorrillo", "Erizo","Rata",
				"Calamar","Delfin","Ballena","Tortuga","León Marino","Medusa","Pulpo","Pez Globo","Almeja","Cangrejo",
				"Tiburón","Estrella de mar","Caballito de mar","Piraña","Atún","Salmón","Orca","Caracol","Sapo","Rana",
				"Gusano","Búfalo","Ganso","Anaconda","Vaca","Armadillo","Pato","Gallo","Gallina","Venado",
				"Caimán","Lobo","Oso polar","Hipopotamo","Hormiga","Cucaracha","Mosquito","Cabra","Grillo","Tigrillo"];


function animal() {
	var nombre = localStorage.getItem("usuario");
    var numero = localStorage.getItem("contraseña");
    //alert(user + " " + pass);
	//let numero = prompt('Ingresa un número del 1 al 100');
	//const nombre = "Serpiente"

	const lista = document.getElementById('lista');
	let leonesInsertados = 0;
	if (numero < 1 || numero > 100 || isNaN(numero)) {
		alert('Por favor ingresa un número válido entre 1 y 60');			
	}
	lista.innerHTML = '';
	for (let i = 1; i <= 100; i++) {
		if (i == numero && leonesInsertados == 0) {
			const li = document.createElement('li');
			li.innerHTML = i + '. '+nombre;
			lista.appendChild(li);
			leonesInsertados++;
		} else {
			const li = document.createElement('li');
			li.innerHTML = i + '. ' + animales[Math.floor(Math.random() * animales.length)];
			lista.appendChild(li);
		}
	}	
	
}


