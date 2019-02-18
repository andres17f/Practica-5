//Lo primero es crear una funcion initiPopulate para crear todos los datos que carga el videoSystem
function initPopulate(){
	
	//Se crean los Person
	try {
		var persona1 = new Person("Shinkai","Makoto",new Date(1973,02,09),"","Img/Shinkai_Makoto.jpg");
		var persona2 = new Person("Martin","Campbell",new Date(1943,10,24),"","Img/Martin_Campbell.jpg");
		var persona3 = new Person("James","Cameron",new Date(1954,08,16),"","Img/James_Cameron.jpg");
		var persona4 = new Person("Todd", "Phillips",new Date(1970,12,20),"","Img/Todd_Phillips.jpg");
		var persona5 = new Person("Pete", "Docter",new Date(1968,10,09),"","Img/Pete_Docter.jpg");
		var persona6 = new Person("Chris", "Columbus", new Date(1958,09,10),"","Img/Chris_Columbus.jpg");
		var persona7 = new Person("Andy", "Muschietti", new Date(1973,08,26),"","Img/Andy_Muschietti.jpg");
		var persona8 = new Person("Kenji","Nagasaki",new Date(1979,02,12),"","Img/Kenji_Nagasaki.jpg");
		var persona9 = new Person("Vanesa","Romero",new Date(1978,06,04),"Torres","Img/Vanesa_Romero.jpg");
		var persona10 = new Person("Eva Maria","Isanta",new Date(1971,06,19),"Foncuberta","Img/Eva_Maria_Isanta.jpg");
		var persona11 = new Person("Katheryn","Winnick",new Date(1977,12,17),"","Img/Katheryn_Winnick.jpg");
		var persona12 = new Person("Jessalyn","Gilsig",new Date(1971,11,30),"","Img/Jessalyn_Gilsig.jpg");
	} catch (error) {
		console.log("" + error);
	}
    //Se crean los Category
	try {
		var category1 = new Category("Anime" , "Genero que representa los dibujos animados de procedencia japonesa.");
		var category2 = new Category("Accion" , "Es un género cinematográfico en el que prima la espectacularidad de las imágenes por medio de efectos especiales de estilo clásico");
		var category3 = new Category("Ciencia ficcion" , "Es un género cuyos contenidos se encuentran basados en supuestos logros científicos o técnicos que podrían lograrse en el futuro.");
		var category4 = new Category("Comedia" , "La comedia es un genero que presenta una mayoría de escenas y situaciones humorísticas o festivas, que buscan entretener al público y generar risas, con finales que suelen ser felices.");
		var category5 = new Category("Infantil","Es un genero destinado a un público de corta edad, adaptado a sus intereses y a su nivel de comprensión");
		var category6 = new Category("Fantasia", "Es un genero que se caracteriza por contener algún elemento de fantasía, por tenue que sea.");
		var category7 = new Category("Terror" , "Es un genero que se caracteriza por su voluntad de provocar en el espectador sensaciones de pavor, terror, miedo, disgusto, repugnancia, horror, incomodidad o preocupación.");
		
	} catch (error) {
		console.log("" + error);
	}
	//Se crean los Movie
    try {
		var movie1 = new Movie("Your name (Kimi no Na wa)",new Date(2016,08,26),"Japonesa","La “historia de milagros y amor” gira en torno a Mitsuha y Taki.","/img/YourName.jpg",null,null);
		var movie2 = new Movie("Casino Royale",new Date(2006,05,20),"Inglesa" ," La trama aborda los comienzos de James Bond como espía secreto, justo después de haber obtenido su licencia para matar. Tras prevenir un ataque terrorista en el Aeropuerto Internacional de Miami","/img/CasinoRoyale.jpg",null,null);
		var movie3 = new Movie("Avatar",new Date(2009,02,15),"Americana","Ambientada en el año 2154 los acontecimientos que narra se desarrollan en Pandora","/img/Avatar.jpg",null,coordenadas1);
		var movie4 = new Movie("Resacon en las Vegas",new Date(2009,06,05),"Americana","Doug Billings va a casarse con Tracy. Doug realizará una despedida de soltero en Las Vegas con sus amigos.","/img/Resacon.jpg",null,null);
		var movie5 = new Movie("Up",new Date(2009,05,29),"Americana","La película comienza mostrando la vida de Carl Fredricksen, un niño que un día volviendo del cine conoce a una alocada niña, Ellie, que acabaría siendo su esposa.","/img/Up.jpg",null,null);
		var movie6 = new Movie("Harry Potter y la piedra filosofal",new Date(2001,01,18),"Inglesa","Se describen las aventuras del joven aprendiz de magia y hechicería Harry Potter y sus amigos Hermione Granger y Ron Weasley, en su primer año en Hogwarts. ","/img/HarryPotter.jpg",null,coordenadas2);
		var movie7 = new Movie("It",new Date(2017,09,09),"Americana","La película cuenta la historia de siete niños en Derry, Maine, que son aterrorizados por un ser epónimo, solo para hacer frente a sus propios demonios personales en el proceso.","/img/It.jpg",null,null);
    } catch (error) {
        console.log("" + error);
	}
	//Se crean los Serie
	try {
		var serie1 = new Serie("Boku No Hero Academia","Japonesa",new Date(2016,04,03),"La historia tiene lugar en un mundo donde el 80% de la población ha desarrollado superpoderes, surgiendo así héroes y villanos, tal como en los cómics","/img/BokuNoHero.jpg",[season1]);
		var serie2 = new Serie("La que se avecina","Española",new Date(2007,04,22),"La serie narra las aventuras y problemas cotidianos de una peculiar comunidad de vecinos de «alto standing» de la urbanizaciónn Mirador de Montepinar, un edificio ubicado en Madrid.","/img/LQSA.jpg",[season1,season2,season3]);
		var serie3 = new Serie("Vikings","Canadiense",new Date(2013,03,03),"Vikings es una serie que está basada en las leyendas sobre el vikingo Ragnar Lodbrok, uno de los héroes más famosos de la cultura nórdica que saqueó Northumbria, Francia y Bretaña.","/img/Vikings.jpg",[season1,season2]);

	} catch (error) {
		console.log("" + error);
    }
    //Se crean los Resource
	try {
		var recurso1 = new Resource("120","https://recurso1.com",["Español","Ingles"],["Español","Ingles"]);
		var recurso2 = new Resource("90","https://recurso2.com",["Español"],);
		var recurso3 = new Resource("60","https://recurso3.com",["Español"],["Español","Ingles"]);
		var recurso4 = new Resource("30","https://recurso4.com",["Español","Japones"],["Español","Japones"]);
	} catch (error) {
		console.log("" + error);
	}
    
	//Se crean los User
	try {
		var user1 = new User("usuario1","usuario1@gmail.com","usuario1");
		var user2 = new User("usuario2","usuario2@gmail.com","usuario2");
		var user3 = new User("usuario3","usuario3@gmail.com","usuario3");
		var user4 = new User("usuario4","usuario4@gmail.com","usuario4");
	} catch (error) {
		console.log("" + error);
	}
	//Se crean los Season
	try {
		var season1 = new Season("Temporada 1",["Episodio 1","Episodio 2","Episodio 3"]);
		var season2 = new Season("Temporada 2",["Episodio 1","Episodio 2",]);
		var season3 = new Season("Temporada 3",["Episodio 1",]);
        
	} catch (error) {
		console.log("" + error);
	}
    //Se crean los Coordinate
	try {
		var coordenadas1 = new Coordinate("29.326815","110.462510");
		var coordenadas2 = new Coordinate("51.691841","0.417538");
	} catch (error) {
		console.log("" + error);
	}
	
	//Creamos VideoSystem
	try {
		var video = VideoSystem.getInstance();
	} catch (error) {
		console.log("" + error);
	}

	//Añadimos las categorias 
	try {
		video.addCategory(category1);
		video.addCategory(category2);
		video.addCategory(category3);
		video.addCategory(category4);
		video.addCategory(category5);
		video.addCategory(category6);
		video.addCategory(category7);

	} catch (error) {
		console.log("" + error);
	}

	//Añadimos las producciones
	try {
		video.addProduction(movie1);
		video.addProduction(movie2);
		video.addProduction(movie3);
		video.addProduction(movie4);
		video.addProduction(movie5);
		video.addProduction(movie6);
		video.addProduction(movie7);
		video.addProduction(serie1);
		video.addProduction(serie2);
		video.addProduction(serie3);

	} catch (error) {
		console.log("" + error);
	}

	//Añadimos los actores
	try {
		video.addActor(persona9);
		video.addActor(persona10);
		video.addActor(persona11);
		video.addActor(persona12);
	} catch (error) {
		console.log("" + error);
	}

	//Añadimos los directores
	try {
		video.addDirector(persona1);
		video.addDirector(persona2);
		video.addDirector(persona3);
		video.addDirector(persona4);
		video.addDirector(persona5);
		video.addDirector(persona6);
		video.addDirector(persona7);
		video.addDirector(persona8);
	} catch (error) {
		console.log("" + error);
	}

	//Asociamos las categorias y las producciones
	try {
		video.assignCategory(category1,movie1);
		video.assignCategory(category1,serie1);
		video.assignCategory(category2,movie2);
		video.assignCategory(category2,serie3);
		video.assignCategory(category3,movie3);
		video.assignCategory(category4,movie4);
		video.assignCategory(category4,serie2);
		video.assignCategory(category5,movie5);
		video.assignCategory(category6,movie6);
		video.assignCategory(category7,movie7);
	} catch (error) {
		console.log("" + error);
	}

	//Asociamos los actores y las producciones
	try {
		video.assignActor(persona9,serie2);
		video.assignActor(persona9,movie2);
		video.assignActor(persona10,serie2);
		video.assignActor(persona11,serie3);
		video.assignActor(persona12,serie3);
	} catch (error) {
		console.log("" + error);
	}
}

//Ahora Crearemos una funcion que nos mostrara la pagina de inicio
function showHomePage(){

	menuPopulate();

	var show = document.getElementById("Nombre");
	show.innerHTML = "Categorias";

	var contentP = document.getElementById("principal");

	while (contentP.firstChild) {
	contentP.removeChild(contentP.firstChild);
	}

	var video = VideoSystem.getInstance();
	var categories = video.categories;
	var category = categories.next();
	while (category.done !== true){

		var colum = document.createElement("div");
		colum.setAttribute("class","col-6 col-md-4 mb-4");
		var content = document.createElement("div");
		content.setAttribute("class","card");
		var image = document.createElement("img");
		image.setAttribute("class","card-img-top");

		image.setAttribute("src","img/"+category.value.name+".jpg");
		image.setAttribute("alt",category.value.name);

		var body = document.createElement("div");
		body.setAttribute("class","card-body");
		var paragraph = document.createElement("p");
		paragraph.setAttribute("class","card-text");
		var text = document.createTextNode(category.value.description);
		paragraph.appendChild(text);

		var button = document.createElement("button");
		button.setAttribute("class","btn btn-primary");
		button.setAttribute("id","buttonC");
		button.setAttribute("type","button");
		button.setAttribute("value",category.value.name);
		var textB = document.createTextNode(category.value.name);
		button.appendChild(textB);
		
		contentP.appendChild(colum);
		colum.appendChild(content);
		content.appendChild(body);
		body.appendChild(image);
		body.appendChild(paragraph);
		body.appendChild(button);

		button.addEventListener("click",showProductionsC);

		category = categories.next();
	}
}

//Funcion que mostrara el menu navegable
function menuPopulate(){

	var menu = document.getElementById("menu");

	while (menu.firstChild) {
		menu.removeChild(menu.firstChild);
		}

	var array = ["Categorias","Producciones","Actores","Directores"];
	var arrayHref = [showHomePage,showProductions,showActors,ShowDirectors];

	var ul = document.createElement("ul");
	ul.setAttribute("class","nav nav-tabs");

	for (var cont=0 ; cont< 4; cont++) {
		
		var li = document.createElement("li");
		li.setAttribute("class","nav-item btn");
		var a = document.createElement("a");
		a.setAttribute("class","nav-link");
		li.addEventListener("click",arrayHref[cont]);
		var text = document.createTextNode(array[cont]);
		a.appendChild(text);

		menu.appendChild(ul);
		ul.appendChild(li);
		li.appendChild(a);
	}

}

//Funcion que mostrara las producciones a partir de una categoria.
function showProductionsC(){

	menuPopulate();
	
	var cat = this.value;
	var show = document.getElementById("Nombre");
	show.innerHTML = "Producciones de "+cat;

	var contentP = document.getElementById("principal");

	while (contentP.firstChild) {
	contentP.removeChild(contentP.firstChild);
	}

	//Se tienen que poner las producciones de una categoria en concreto.
	var search = false;
	video = VideoSystem.getInstance();
	var categories = video.categories;
	var category = categories.next();
	while ((category.done !== true) && (!search)){

		if (category.value.name == this.value) {
			
			//comienza el iterador de las categorias del boton seleccionado
			var productions = video.getProductionsCategory(category.value);
			var production = productions.next();
			while (production.done !== true){

				var colum = document.createElement("div");
				colum.setAttribute("class","col-6 col-md-4 mb-4");
				var content = document.createElement("div");
				content.setAttribute("class","card");
				var image = document.createElement("img");
				image.setAttribute("class","card-img-top");

				image.setAttribute("src","img/"+production.value.title+".jpg");
				image.setAttribute("alt",production.value.title);

				var body = document.createElement("div");
				body.setAttribute("class","card-body");
				var paragraph = document.createElement("p");
				paragraph.setAttribute("class","card-text");
				var text = document.createTextNode(production.value.title);
				paragraph.appendChild(text);

				var button = document.createElement("button");
				button.setAttribute("class","btn btn-primary");
				button.setAttribute("id","buttonC");
				button.setAttribute("type","button");
				button.setAttribute("value",production.value.title);
				var textB = document.createTextNode("Ver Produccion");
				button.appendChild(textB);
				
				contentP.appendChild(colum);
				colum.appendChild(content);
				content.appendChild(body);
				body.appendChild(image);
				body.appendChild(paragraph);
				body.appendChild(button);

				button.addEventListener("click",showProductionAlone);
				
				production = productions.next();
			}

			search = true;
		}
		
		category = categories.next();
	}
}

//Funcion que mostrara las producciones desde el menu
function showProductions(){

	menuPopulate();
	
	var show = document.getElementById("Nombre");
	show.innerHTML = "Producciones";

	var contentP = document.getElementById("principal");

	while (contentP.firstChild) {
	contentP.removeChild(contentP.firstChild);
	}

	video = VideoSystem.getInstance();
	
	var productions = video.productions;
	var production = productions.next();
	while (production.done !== true){

		var colum = document.createElement("div");
		colum.setAttribute("class","col-6 col-md-4 mb-4");
		var content = document.createElement("div");
		content.setAttribute("class","card");
		var image = document.createElement("img");
		image.setAttribute("class","card-img-top");

		image.setAttribute("src","img/"+production.value.title+".jpg");
		image.setAttribute("alt",production.value.title);

		var body = document.createElement("div");
		body.setAttribute("class","card-body");
		var paragraph = document.createElement("p");
		paragraph.setAttribute("class","card-text");
		var text = document.createTextNode(production.value.title);
		paragraph.appendChild(text);

		var button = document.createElement("button");
		button.setAttribute("class","btn btn-primary");
		button.setAttribute("id","buttonC");
		button.setAttribute("type","button");
		button.setAttribute("value",production.value.title);
		var textB = document.createTextNode("Ver Produccion");
		button.appendChild(textB);
				
		contentP.appendChild(colum);
		colum.appendChild(content);
		content.appendChild(body);
		body.appendChild(image);
		body.appendChild(paragraph);
		body.appendChild(button);

		button.addEventListener("click",showProductionAlone);
				
		production = productions.next();
	}
}

//Funcion que mostrara los actores desde el menu
function showActors(){

	menuPopulate();
	
	var show = document.getElementById("Nombre");
	show.innerHTML = "Actores";

	var contentP = document.getElementById("principal");

	while (contentP.firstChild) {
	contentP.removeChild(contentP.firstChild);
	}

	var video = VideoSystem.getInstance();
	var actors = video.actors;
	var actor = actors.next();
	while (actor.done !== true){

		var colum = document.createElement("div");
		colum.setAttribute("class","col-6 col-md-4 mb-4");
		var content = document.createElement("div");
		content.setAttribute("class","card");
		var image = document.createElement("img");
		image.setAttribute("class","card-img-top");
		image.setAttribute("src",actor.value.picture);
		image.setAttribute("alt",actor.value.name);

		var body = document.createElement("div");
		body.setAttribute("class","card-body");
		var paragraph = document.createElement("p");
		paragraph.setAttribute("class","card-text");
		var text = document.createTextNode(actor.value.name+" "+actor.value.lastName1);
		paragraph.appendChild(text);

		var button = document.createElement("button");
		button.setAttribute("class","btn btn-primary");
		button.setAttribute("id","buttonC");
		button.setAttribute("type","button");
		button.setAttribute("value",actor.value.name);
		var textB = document.createTextNode("Biografia");
		button.appendChild(textB);
		
		contentP.appendChild(colum);
		colum.appendChild(content);
		content.appendChild(body);
		body.appendChild(image);
		body.appendChild(paragraph);
		body.appendChild(button);

		button.addEventListener("click",showActorAlone);

		actor = actors.next();
	}
}

//Funcion que mostrara los directores
function ShowDirectors() {

	menuPopulate();
	
	var show = document.getElementById("Nombre");
	show.innerHTML = "Directores";

	var contentP = document.getElementById("principal");

	while (contentP.firstChild) {
	contentP.removeChild(contentP.firstChild);
	}

	var video = VideoSystem.getInstance();
	var directors = video.directors;
	var director = directors.next();
	while (director.done !== true){

		var colum = document.createElement("div");
		colum.setAttribute("class","col-6 col-md-4 mb-4");
		var content = document.createElement("div");
		content.setAttribute("class","card");
		var image = document.createElement("img");
		image.setAttribute("class","card-img-top");

		image.setAttribute("src",director.value.picture);
		image.setAttribute("alt",director.value.name);

		var body = document.createElement("div");
		body.setAttribute("class","card-body");
		var paragraph = document.createElement("p");
		paragraph.setAttribute("class","card-text");
		var text = document.createTextNode(director.value.name+" "+director.value.lastName1);
		paragraph.appendChild(text);

		var button = document.createElement("button");
		button.setAttribute("class","btn btn-primary");
		button.setAttribute("id","buttonC");
		button.setAttribute("type","button");
		button.setAttribute("value",director.value.name);
		var textB = document.createTextNode("Biografia");
		button.appendChild(textB);
		
		contentP.appendChild(colum);
		colum.appendChild(content);
		content.appendChild(body);
		body.appendChild(image);
		body.appendChild(paragraph);
		body.appendChild(button);

		button.addEventListener("click",showDirectorAlone);

		director = directors.next();
	}
}

//Funcion que muestra a un solo actor con su informacion.
function showActorAlone(){

	menuPopulate();

	var show = document.getElementById("Nombre");
	show.innerHTML = "Actores";

	var contentP = document.getElementById("principal");

	while (contentP.firstChild) {
	contentP.removeChild(contentP.firstChild);
	}

	var search = false;
	var video = VideoSystem.getInstance();
	var actors = video.actors;
	var actor = actors.next();
	while ((actor.done !== true) && (!search)){

		if (actor.value.name == this.value) {
			
			var content = document.createElement("div");
			content.setAttribute("class", "d-flex")
			var image = document.createElement("img");

			image.setAttribute("src",actor.value.picture);
			image.setAttribute("alt",actor.value.name);
			image.setAttribute("style","max-heigth:150px;");
			image.setAttribute("class", "border border-info");

			var info = document.createElement("div");
			info.setAttribute("class", "ml-3");

			var title1 = document.createElement("h6");
			var text1 = document.createTextNode("Nombre:");
			title1.appendChild(text1);
			var name = document.createElement("p");
			var textN = document.createTextNode(actor.value.name);
			name.appendChild(textN);

			var title2 = document.createElement("h6");
			var text2 = document.createTextNode("Apellido:");
			title2.appendChild(text2);
			var surname = document.createElement("p");
			var textS = document.createTextNode(actor.value.lastName1);
			surname.appendChild(textS);

			var title3 = document.createElement("h6");
			var text3 = document.createTextNode("Fecha de nacimiento:");
			title3.appendChild(text3);
			var date = document.createElement("p");
			var textD = document.createTextNode(actor.value.born);
			date.appendChild(textD);

			var button = document.createElement("button");
			button.setAttribute("class","btn btn-primary");
			button.setAttribute("id","buttonC");
			button.setAttribute("type","button");
			button.setAttribute("value",actor.value.name);
			var textB = document.createTextNode("Atras");
			button.appendChild(textB);

			var title4 = document.createElement("h6");
			var text4 = document.createTextNode("Producciones:");
			title4.appendChild(text4);
				
			contentP.appendChild(content);
			contentP.appendChild(info);
			content.appendChild(image);
			info.appendChild(title1);
			info.appendChild(name);
			info.appendChild(title2);
			info.appendChild(surname);
			info.appendChild(title3);
			info.appendChild(date);
			info.appendChild(title4);

			var prod =document.createElement("div");
			prod.setAttribute("class","d-flex");
			info.appendChild(prod);

			var productions = video.getProductionsActor(actor.value);
			var production = productions.next();
			while (production.done !== true){
				
				var divI = document.createElement("div");
				divI.setAttribute("class", "mr-2 text-center");

				var image2 = document.createElement("img");
				image2.setAttribute("src","img/"+production.value.title+".jpg");
				image2.setAttribute("alt",production.value.title);
				image2.setAttribute("style", "height: 80px");
				image2.setAttribute("class","d-block mb-1");

				var b1 = document.createElement ("button");
				b1.setAttribute("class","btn btn-default btn-sm mb-1");
				b1.setAttribute("id","buttonP");
				b1.setAttribute("type","button");
				b1.setAttribute("value",production.value.title);
				var textBt = document.createTextNode(production.value.title);
				b1.appendChild(textBt);

				b1.addEventListener("click",showProductionAlone);

				prod.appendChild(divI);
				divI.appendChild(image2);
				divI.appendChild(b1);
				production = productions.next();
			}

			info.appendChild(button);
			button.addEventListener("click",showActors);

			search = true;

		}

		actor = actors.next();
		

	}
}

//funcion que muestra a un solo director con su informacion
function showDirectorAlone(){

	menuPopulate();

	var show = document.getElementById("Nombre");
	show.innerHTML = "Actores";

	var contentP = document.getElementById("principal");

	while (contentP.firstChild) {
	contentP.removeChild(contentP.firstChild);
	}

	var search = false;
	var video = VideoSystem.getInstance();
	var directors = video.directors;
	var director = directors.next();
	while ((director.done !== true) && (!search)){

		if (director.value.name == this.value) {
			
			var content = document.createElement("div");
			content.setAttribute("class", "d-flex")
			var image = document.createElement("img");

			image.setAttribute("src",director.value.picture);
			image.setAttribute("alt",director.value.name);
			image.setAttribute("syle","max-heigth:300px;");
			image.setAttribute("class", "border border-info");

			var info = document.createElement("div");
			info.setAttribute("class", "ml-3");

			var title1 = document.createElement("h6");
			var text1 = document.createTextNode("Nombre:");
			title1.appendChild(text1);
			var name = document.createElement("p");
			var textN = document.createTextNode(director.value.name);
			name.appendChild(textN);

			var title2 = document.createElement("h6");
			var text2 = document.createTextNode("Apellido:");
			title2.appendChild(text2);
			var surname = document.createElement("p");
			var textS = document.createTextNode(director.value.lastName1);
			surname.appendChild(textS);

			var title3 = document.createElement("h6");
			var text3 = document.createTextNode("Fecha de nacimiento:");
			title3.appendChild(text3);
			var date = document.createElement("p");
			var textD = document.createTextNode(director.value.born);
			date.appendChild(textD);

			var button = document.createElement("button");
			button.setAttribute("class","btn btn-primary");
			button.setAttribute("id","buttonC");
			button.setAttribute("type","button");
			button.setAttribute("value",director.value.name);
			var textB = document.createTextNode("Atras");
			button.appendChild(textB);
				
			contentP.appendChild(content);
			contentP.appendChild(info);
			content.appendChild(image);
			info.appendChild(title1);
			info.appendChild(name);
			info.appendChild(title2);
			info.appendChild(surname);
			info.appendChild(title3);
			info.appendChild(date);
			info.appendChild(button);

			button.addEventListener("click",ShowDirectors);

			search = true;

		}

		director = directors.next();

	}
}

//funcion que muestra los datos de una produccion.
function showProductionAlone(){

	menuPopulate();

	var show = document.getElementById("Nombre");
	show.innerHTML = "Produccion";

	var contentP = document.getElementById("principal");

	while (contentP.firstChild) {
	contentP.removeChild(contentP.firstChild);
	}

	var search = false;
	var video = VideoSystem.getInstance();
	var productions = video.productions;
	var production = productions.next();
	while ((production.done !== true) && (!search)){

		if (production.value.title == this.value) {
			
			var content = document.createElement("div");
			content.setAttribute("class", "d-flex");
			var image = document.createElement("img");

			image.setAttribute("src","img/"+production.value.title+".jpg");
			image.setAttribute("alt",production.value.title);
			image.setAttribute("syle","max-heigth:300px;");
			image.setAttribute("class", "border border-info");

			var info = document.createElement("div");
			info.setAttribute("class", "ml-3");

			var title1 = document.createElement("h6");
			var text1 = document.createTextNode("Titulo:");
			title1.appendChild(text1);
			var name = document.createElement("p");
			var textN = document.createTextNode(production.value.title);
			name.appendChild(textN);

			var title2 = document.createElement("h6");
			var text2 = document.createTextNode("Nacionalidad:");
			title2.appendChild(text2);
			var nationality = document.createElement("p");
			var textNa = document.createTextNode(production.value.nationality);
			nationality.appendChild(textNa);

			
			var title3 = document.createElement("h6");
			title3.setAttribute("class", "mt-2")
			var text3 = document.createTextNode("Publicacion:");
			title3.appendChild(text3);
			var publication = document.createElement("p");
			var textP = document.createTextNode(production.value.publication);
			publication.appendChild(textP);

			var title4 = document.createElement("h6");
			title4.setAttribute("class", "mt-2")
			var text4 = document.createTextNode("Sinopsis:");
			title4.appendChild(text4);
			var synopsis = document.createElement("p");
			var textP = document.createTextNode(production.value.synopsis);
			synopsis.appendChild(textP);

			var title5 = document.createElement("h6");
			title5.setAttribute("class", "mt-2")
			var text5 = document.createTextNode("Actores:");
			title5.appendChild(text5);

			contentP.appendChild(content);
			contentP.appendChild(info);
			content.appendChild(image);
			info.appendChild(title1);
			info.appendChild(name);
			info.appendChild(title2);
			info.appendChild(textNa);
			info.appendChild(title3);
			info.appendChild(publication);
			info.appendChild(title4);
			info.appendChild(synopsis);
			info.appendChild(title5);


			search = true;

		}

		production = productions.next();

	}
	
}

//Funcion que invoca todas las funciones necesarias.
function init(){
	initPopulate();
	showHomePage();
}

window.onload = init;
