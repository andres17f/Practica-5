//Aqui comprobaremos todas las funciones.

function testVideoStreaming(){
    
    console.log ("-----Test de VydeoSystem-----");
    console.log ("-----Creamos varios Objetos-----");
    
    var persona1 = new Person ("Andres", "Ruiz", "1995", "Cortes");
    var persona2 = new Person ("Alba", "Cuevas", "1998", " ", );
    var persona3 = new Person ("Sandra", "Sanchez", "1990");
    var persona4 = new Person ("Leonardo", "Dicaprio", "1878");
    var categoria1 = new Category ("Terror");
    var categoria2 = new Category ("Accion","Peliculas de disparos");
    var categoria3 = new Category ("Fantasia", " ");
    var resource1 = new Resource ("120", "https://www.resource1.com", " ", "ingles");
    var resource2 = new Resource ("132", "https://www.resource2.com", "español, ingles");
    var resource3 = new Resource ("93", "https://www.resource3.com", "aleman");
    /*var production1 = new Production ("castelvania", new Date(2003,06,02));*/ //No se puede instanciar es abstracta
    var movie1 = new Movie("Harry Potter",new Date(2000,14,02),"Inglesa","Fantasia",null,"","");
    var movie2 = new Movie("Fast And Furious",new Date(2006,31,06),"Americana","Accion"," ","","");
    var movie3 = new Movie("Fryday 13th",new Date(2018,25,10),"Americana","Terror","","","");
    var serie1 = new Serie("Narcos",new Date(2016,19,04),"Americana","Accion",null,"temporada 1, temporada2");
    var serie2 = new Serie("13 Reasons Why",new Date(2006,31,06),"Americana","Drama"," ","temporada 1");
    var serie3 = new Serie("Stranger Things",new Date(2018,25,10),"Americana","Fantasia", null ,"");
    var season1 = new Season ("temporada1");
    var season2 = new Season ("temporada2");
    var user1 = new User ("Felipe", "pipes@gmail.com", "banana95");
    var user2 = new User ("Santiago", "santi@gmail.com", "manzana95");
    var user3 = new User ("Andrea", "andrea@gmail.com", "pera95");
    var coordenada1 = new Coordinate ("10.34.54", "34.25.65");
    var coordenada2 = new Coordinate ("104.82.43", "64.213.09");

    console.log ("-----Enseñamos lo valores de los objetos creados-----");
    console.log ("Valores de persona1: " + persona1.toString());
    console.log ("Valores de persona2: " + persona2.toString());
    console.log ("Valores de persona3: " + persona3.toString());
    console.log ("Valores de persona4: " + persona4.toString());
    console.log ("Categoria 1: " + categoria1.toString());
    console.log ("Categoria 2: " + categoria2.toString());
    console.log ("Categoria 3: " + categoria3.toString());
    console.log ("Recurso 1: " + resource1.toString());
    console.log ("Recurso 2: " + resource2.toString());
    console.log ("Recurso 3: " + resource3.toString());
    console.log ("Pelicula 1: " + movie1.toString());
    console.log ("Pelicula 2: " + movie2.toString());
    console.log ("Pelicula 3: " + movie3.toString());
    console.log ("Serie 1: " + serie1.toString());
    console.log ("Serie 2: " + serie2.toString())
    console.log ("Serie 3: " + serie3.toString())
    console.log ("Season 1: " + season1.toString());
    console.log ("Season 2: " + season2.toString());
    console.log ("User 1: " + user1.toString());
    console.log ("User 2: " + user2.toString());
    console.log ("User 3: " + user3.toString());
    console.log ("Coordenada 1: " + coordenada1.toString());
    console.log ("Coordenada 2: " + coordenada2.toString());
    
    console.log ("-----Creamos el objeto VideoSystem y probamos sus metodos-----");
    
    var video = VideoSystem.getInstance();
    video.name = "Online video";
    console.log ("Nombre del Sistema de video: " + video.name);
    console.log ("-----Añadimos las categorias y las mostramos-----");
    video.addCategory(categoria1);
    video.addCategory(categoria2);
    video.addCategory(categoria3);
    var categorias = video.categories;
	var categoria = categorias.next();
	while (categoria.done !== true){
		console.log ("" + categoria.value);
		categoria = categorias.next();
    }
    console.log ("-----Eliminamos una categoria y las mostramos-----");
    video.removeCategory(categoria3);
    var categorias = video.categories;
	var categoria = categorias.next();
	while (categoria.done !== true){
		console.log ("" + categoria.value);
		categoria = categorias.next();
    }
    console.log ("-----Añadimos los usuarios y los mostramos-----");
    video.addUser(user1);
    video.addUser(user2);
    video.addUser(user3);
    var usuarios = video.users;
	var usuario = usuarios.next();
	while (usuario.done !== true){
		console.log ("" + usuario.value);
		usuario = usuarios.next();
    }
    console.log ("-----Borramos un usuario y los mostramos-----");
    video.removeUser(user1);
    var usuarios = video.users;
	var usuario = usuarios.next();
	while (usuario.done !== true){
		console.log ("" + usuario.value);
		usuario = usuarios.next();
    }
    console.log ("-----Añadimos las producciones y las mostramos-----");
    video.addProduction(movie1);
    video.addProduction(movie2);
    video.addProduction(movie3);
    video.addProduction(serie1);
    video.addProduction(serie2);
    video.addProduction(serie3);
    var producciones = video.productions;
	var produccion = producciones.next();
	while (produccion.done !== true){
		console.log ("" + produccion.value);
		produccion = producciones.next();
    }
    console.log ("-----Eliminamos alguna produccion y las mostramos-----");
    video.removeProduction(movie1);
    video.removeProduction(serie2);
    var producciones = video.productions;
	var produccion = producciones.next();
	while (produccion.done !== true){
		console.log ("" + produccion.value);
		produccion = producciones.next();
    }
    console.log ("-----Añadimos los actores y los mostramos-----");
    video.addActor(persona1);
    video.addActor(persona3);
    var actores = video.actors;
	var actor = actores.next();
	while (actor.done !== true){
		console.log ("" + actor.value);
		actor = actores.next();
	}
    console.log ("-----Eliminamos algun actor y los mostramos-----");
    video.removeActor(persona3);
    var actores = video.actors;
	var actor = actores.next();
	while (actor.done !== true){
		console.log ("" + actor.value);
		actor = actores.next();
    }
    console.log ("-----Añadimos los directores y los mostramos-----");
    video.addDirector(persona2);
    video.addDirector(persona4);
    var directores = video.directors;
	var director = directores.next();
	while (director.done !== true){
		console.log ("" + director.value);
		director = directores.next();
	}
    console.log ("-----Eliminamos algun director y los mostramos-----");
    video.removeDirector(persona2);
    var directores = video.directors;
	var director = directores.next();
	while (director.done !== true){
		console.log ("" + director.value);
		director = directores.next();
    }
    console.log ("-----Asignamos dos producciones a una categoria-----");
    console.log (video.assignCategory(categoria1,movie1));
    console.log (video.assignCategory(categoria1,movie2));

    console.log ("-----Desasignamos una produccion a una categoria-----");
    console.log (video.deassignCategory(categoria1,movie1));

    console.log ("-----Asignamos dos producciones a un director-----");
    // Este metodo no funciona y no entiendo porque
    //console.log (video.assignDirector(persona2,serie2));
    //console.log (video.assignDirector(persona1,movie3));
    
    console.log ("-----Asignamos dos producciones a un actor-----");
    console.log (video.assignActor(persona1,serie2));
    console.log (video.assignActor(persona1,serie3));

    console.log ("-----Desasignamos una produccion a un actor-----");
    console.log (video.deassignActor(persona1,serie2));

    console.log ("-----Probamos los getCast creados-----");
    console.log (video.getProductionsActor(persona1));
    console.log (video.getProductionsCategory(categoria1));
    //console.log (video.getProductionsDirector(persona2));
    //EN EL METODO DE AÑADIR DIRECTORES ESTA EL FALLO
    console.log ("En el metodo de añadir directores esta el fallo");
}
window.onload = testVideoStreaming;