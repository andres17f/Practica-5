"use strict";

//Objeto para crear una persona.
function Person(name, lastName1, born, lastName2 = null, picture = null) {

	if (!(this instanceof Person)) {
		throw new InvalidAccessConstructorException();}

	name = typeof name !== 'undefined' ? name : "";
	if (name === ""){ throw new EmptyValueException("name");}
    lastName1 = typeof lastName1 !== 'undefined' ? lastName1 : "";
	if (lastName1 === ""){ throw new EmptyValueException("lastName1");}
	born = typeof Date !== 'undefined' ? born : "";
	if (born === ""){ throw new InvalidValueException("born", born);}
	
    var _name = name;
    var _lastName1 = lastName1;
    var _lastName2 = lastName2;
    var _born = born;
    var _picture = picture;

	Object.defineProperty(this, 'name', {
		get:function(){
			return _name;
		},
		set:function(value){
			value = typeof name !== 'undefined' ? value : "";
		    if (value === ""){
                throw new EmptyValueException("name");
            }else{
                _name = value;
            }
        }		
    });
	
	Object.defineProperty(this, 'lastName1', {
		get:function(){
			return _lastName1;
		},
		set:function(value){
			value = typeof lastName1 !== 'undefined' ? value : "";
		    if (value === ""){
                throw new EmptyValueException("lastName1");
            }else{
                _lastName1 = value;
            }
        }		
    });

	Object.defineProperty(this, 'lastName2', {
		get:function(){
			return _lastName2;
		},
		set:function(value){
			value = typeof lastName2 !== 'undefined' ? value : "";
		    if (value === ""){
                throw new EmptyValueException("lastName2");
            }else{
                _lastName2 = value;
            }
        }		
	});
	
	Object.defineProperty(this, 'born', {
		get:function(){
			return _born;
		},
		set:function(value){
			value = typeof Date !== 'undefined' ? value : "";
		    if (value === ""){
                throw new InvalidValueException("born", born);
            }else{
                _born = value;
            }
        }		
    });

	Object.defineProperty(this, 'picture', {
		get:function(){
			return _picture;
		},
		set:function(value){
			value = typeof picture !== 'undefined' ? value : "";
		    if (value === ""){
                throw new EmptyValueException("picture");
            }else{
                _picture = value;
            }
        }		
	});
	
}
Person.prototype = {};
Person.prototype.constructor = Person;
Person.prototype.toString = function(){
	return "Nombre: " + this.name + " Apellido1: " + this.lastName1 + " Apellido2: " 
	+ this.lastName2 + " Nacimiento: "+ this.born + " Imagen: "+ this.picture;
};

//Objeto para crear una categoria.
function Category(name, description = " ") {

	if (!(this instanceof Category)) {
		throw new InvalidAccessConstructorException();}
	
	name = typeof name !== 'undefined' ? name : "";
	if (name === ""){ throw new EmptyValueException("name");}

    var _name = name;
	var _description = description;
	
	Object.defineProperty(this, 'name', {
		get:function(){
			return _name;
		},
		set:function(value){
			value = typeof name !== 'undefined' ? value : "";
		    if (value === ""){
                throw new EmptyValueException("name");
            }else{
                _name = value;
            }
        }		
    });
	
	Object.defineProperty(this, 'description', {
		get:function(){
			return _description;
		},
		set:function(value){
			value = typeof description !== 'undefined' ? value : "";
		    if (value === ""){
                throw new EmptyValueException("description");
            }else{
                _description = value;
            }
        }		
	});
	
}
Category.prototype = {};
Category.prototype.constructor = Category;
Category.prototype.toString = function(){
	return "Nombre: " + this.name + " Descripcion: "+ this.description;
};

//Objeto para crear un recurso.
function Resource(duration, link, audios = null, subtitles = null){

	if (!(this instanceof Resource)) {
		throw new InvalidAccessConstructorException();}

	duration = typeof duration !== 'undefined' ? duration : "";
	if (duration === ""){ throw new EmptyValueException("duration");}
	link = typeof link !== 'undefined' ? link : "";
	if (link === 'undefined' || link === '') throw new EmptyValueException("link");
	if (/^(http|https)\:\/\/[a-z0-9\.-]+\.[a-z]{2,4}/.test (link) !== true){		
		throw new InvalidValueException("link", link);}

    var _duration = duration;
	var _link = link;
	var _audios = audios || [];
	var _subtitles = subtitles || [];

	Object.defineProperty(this, 'duration', {
		get:function(){
			return _duration;
		},
		set:function(value){
			value = typeof duration !== 'undefined' ? value : "";
		    if (value === ""){
                throw new EmptyValueException("duration");
            }else{
                _duration = value;
            }
        }		
	});
	
	Object.defineProperty(this, 'link', {
		get:function(){
			return _link;
		},
		set:function(value){
			value = typeof link !== 'undefined' ? value : "";
		    if (value === ""){
                throw new EmptyValueException("link");
            }else{
                _link = value;
            }
        }		
	});

	Object.defineProperty(this, 'audios', {
		get:function(){
			return _audios;
		},
		set:function(value){
			value = typeof audios !== 'undefined' ? value : "";
		    if (value === ""){
                throw new EmptyValueException("audios");
            }else{
                _audios = value;
            }
        }		
	});

	Object.defineProperty(this, 'subtitles', {
		get:function(){
			return _subtitles;
		},
		set:function(value){
			value = typeof subtitles !== 'undefined' ? value : "";
		    if (value === ""){
                throw new EmptyValueException("subtitles");
            }else{
                _subtitles = value;
            }
        }		
	});

}
Resource.prototype = {};
Resource.prototype.constructor = Resource;
Resource.prototype.toString = function(){
	return "Duracion: " + this.duration + " Link: " + this.link + " Audio: " + this.audios 
	+ " Subtitulos: " + this.subtitles;
};

//Objeto abstracto Production que heradara a Movie y Serie
(function(){ 

	var abstractCreateLock = false; 

	function Production(title, publication, nationality = null, synopsis = null, image = null){

		if(abstractCreateLock){throw new AbstractClassException("Production");}		

		title = typeof title !== 'undefined' ? title : "";
		if (title === ""){ throw new EmptyValueException("title");}
        publication = typeof Date !== 'undefined' ? publication : "";
        if (publication === ""){ throw new InvalidValueException("publication", publication);}
		
        var _title = title; 
        var _nationality = nationality;
        var _publication = publication;
        var _synopsis = synopsis;
        var _image = image;

		Object.defineProperty(this, 'title', {
			get:function(){
				return _title;
			},
			set:function(value){
				value = typeof title !== 'undefined' ? value : "";
		        if (value === ""){
                    throw new EmptyValueException("title");
                }else{
                    _title = value;
                }
			}		
		});

		Object.defineProperty(this, 'nationality', {
			get:function(){
				return _nationality;
			},
			set:function(value){
				value = typeof nationality !== 'undefined' ? value : "";
		        if (value === ""){
                    throw new EmptyValueException("nationality");
                }else{
                    _nationality = value;
                }
			}		
		});

		Object.defineProperty(this, 'publication', {
			get:function(){
				return _publication;
			},
			set:function(value){
				value = typeof Date !== 'undefined' ? value : "";
		        if (value === ""){
                    throw new InvalidValueException("publication", publication);
                }else{
                    _publication = value;
                }
			}		
		});

		Object.defineProperty(this, 'synopsis', {
			get:function(){
				return _synopsis;
			},
			set:function(value){
				value = typeof synopsis !== 'undefined' ? value : "";
		        if (value === ""){
                    throw new EmptyValueException("sypnosis");
                }else{
                    _synopsis = value;
                }
			}		
		});

		Object.defineProperty(this, 'image', {
			get:function(){
				return _image;
			},
			set:function(value){
				value = typeof image !== 'undefined' ? value : "";
		        if (value === ""){
                    throw new EmptyValueException("image");
                }else{
                    _image = value;
                }
			}		
		});

	}
	Production.prototype = {}; 
	Production.prototype.constructor = Production;
	Production.prototype.toString = function(){
		return "Titulo: " + this.title + " Nacionalidad: " + this.nationality + " Publicacion: " + 
		this.publication + " Sipnosis: " + this.synopsis + " Imagen: " + this.image;
	}

	//Objeto subclase Movie.
	function Movie(title, nationality, publication, synopsis, image, resource = null, locations = null){
		
		abstractCreateLock = false;
		Production.call(this,title, nationality, publication, synopsis, image, resource, locations);
		abstractCreateLock = true;

		if (!(this instanceof Movie)) {
			throw new InvalidAccessConstructorException();}

		var _resource = resource;
		var _locations = locations;

		Object.defineProperty(this, 'resource', {
			get:function(){
				return _resource;
			},
			set:function(value){
				value = typeof Resource !== 'undefined' ? value : "";
		        if (value === ""){
                    throw new InvalidValueException("resource", resource);
                }else{
                    _resource = value;
                }
			}		
        });		
        
        Object.defineProperty(this, 'locations', {
			get:function(){
				return _locations;
			},
			set:function(value){
				value = typeof Coordinate !== 'undefined' ? value : "";
		        if (value === ""){
                    throw new InvalidValueException("locations", locations);
                }else{
                    _locations = value;
                }
			}		
		});	
    }
	Movie.prototype = Object.create(Production.prototype); 
	Movie.prototype.constructor = Movie;
	Movie.prototype.toString = function(){
		return Production.prototype.toString.call(this) + " Recurso: " + this.resource +
		" Coordenadas: " + this.locations;
	}
	
	//Objeto subclase Movie.
	function Serie(title, nationality, publication, synopsis, image, seasons = null){

		abstractCreateLock = false;
		Production.call(this, title, nationality, publication, synopsis, image, seasons);	
		abstractCreateLock = true;

		if (!(this instanceof Serie)) {
			throw new InvalidAccessConstructorException();}

		var _seasons = seasons || [];

		Object.defineProperty(this, 'season', {
			get:function(){
				return _seasons;
			},
			set:function(value){
				value = typeof Season !== 'undefined' ? value : "";
		        if (value === ""){
                    throw new InvalidValueException("season", season);
                }else{
                    _seasons = value;
                }
			}		
        });		
    }
	Serie.prototype = Object.create(Production.prototype); 
	Serie.prototype.constructor = Serie;
	Serie.prototype.toString = function(){
		return Production.prototype.toString.call(this) + " Temporadas: " + this.season;
	}

	abstractCreateLock = true;

	window.Production = Production; 
	window.Movie = Movie; 
	window.Serie = Serie;  
})();

//Objeto para crear una temporada.
function Season(title, episodes = null){
	
	if (!(this instanceof Season)) {
		throw new InvalidAccessConstructorException();}
	
	title = typeof title !== 'undefined' ? title : "";
	if (title === ""){ throw new EmptyValueException("title");}

    var _title = title;
    var _episodes = episodes || [];

	Object.defineProperty(this, 'title', {
		get:function(){
			return _title;
		},
		set:function(value){
			value = typeof title !== 'undefined' ? value : "";
			if (value === ""){
				throw new EmptyValueException("title");
			}else{
				_title = value;
			}
		}		
	});		

	Object.defineProperty(this, 'episodes', {
		get:function(){
			return _episodes;
		},
		set:function(value){
			value = typeof episodes !== 'undefined' ? value : "";
			if (value === ""){
				throw new EmptyValueException("episodes");
			}else{
				_episodes = { title: String, episode: Resource, scenarios: [Location] };
			}
		}		
	});	
}
Season.prototype = {};
Season.prototype.constructor = Season;
Season.prototype.toString = function(){
	return "Title: " + this.title + " Episodios: " + this.episodes;
};

//Objeto para crear un usuario.
function User(username, email, password) {

	if (!(this instanceof User)) {
		throw new InvalidAccessConstructorException();}
	
	username = typeof username !== 'undefined' ? username : "";
	if (username === ""){ throw new EmptyValueException("username");}
    if (email === 'undefined' || email === '') throw new EmptyValueException("email");	
	if (/^[a-zA-Z][a-zA-Z0-9_\-]*(\.[a-zA-Z0-9_\-]*)*[a-zA-Z0-9]\@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test (email) !== true)
		throw new InvalidValueException("email", email);
    password = typeof password !== 'undefined' ? password : "";
    if (password === ""){ throw new EmptyValueException("password");}

    var _username = username;
    var _email = email;
    var _password = password;

	Object.defineProperty(this, 'userName', {
		get:function(){
			return _username;
		},
		set:function(value){
			value = typeof username !== 'undefined' ? value : "";
		    if (uvalue === ""){
                throw new Error("No puedes dejar el nombre vacio");
            }else{
                _username = value;
            }
        }		
    });
	
	Object.defineProperty(this, 'email', {
		get:function(){
			return _email;
		},
		set:function(value){
			value = typeof email !== 'undefined' ? value : "";
		    if (value === ""){
                throw new Error("No puedes dejar el mail vacio");
            }else{
                _email = value;
            }
        }		
    });

	Object.defineProperty(this, 'password', {
		get:function(){
			return _password;
		},
		set:function(value){
			value = typeof password !== 'undefined' ? value : "";
		    if (value === ""){
                throw new Error("No puedes dejar la contraseña vacia");
            }else{
                _password = value;
            }
        }		
	});
}
User.prototype = {};
User.prototype.constructor = User;
User.prototype.toString = function(){
	return "Nombre Usuario: " + this.userName + ". Email: "+ this.email + ". Pass: " + this.password;
};

//Objeto para crear unas coordenadas.
function Coordinate(latitude, longitude) {

	if (!(this instanceof Coordinate)) {
		throw new InvalidAccessConstructorException();}

	latitude = typeof latitude !== 'undefined' ? latitude : "";
	if (latitude === ""){ throw new EmptyValueException("latitude");}
    longitude = typeof longitude !== 'undefined' ? longitude : "";
    if (longitude === ""){ throw new EmptyValueException("longitude");}
    
    var _latitude = latitude;
    var _longitude = longitude;

	Object.defineProperty(this, 'latitude', {
		get:function(){
			return _latitude;
		},
		set:function(value){
			value = typeof latitude !== 'undefined' ? value : "";
		    if (value === ""){
                throw new EmptyValueException("latitude");
            }else{
                _latitude = value;
            }
        }		
    });
	
	Object.defineProperty(this, 'longitude', {
		get:function(){
			return _longitude;
		},
		set:function(value){
			value = typeof longitude !== 'undefined' ? value : "";
		    if (value === ""){
                throw new EmptyValueException("longitude");
            }else{
                _longitude = value;
            }
        }		
    });
}
Coordinate.prototype = {};
Coordinate.prototype.constructor = Coordinate;
Coordinate.prototype.toString = function(){
	return "Latitude: " + this.latitude + ". Longitud: "+ this.longitude;
};

