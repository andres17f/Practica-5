"use strict";

//Constructor de objeto VideoSystem
var VideoSystem = (function () {
	//usamos un singlenton para instanciarlo una sola vez.
	var instantiated; 

	function init() {

		function VideoSystem(){

			if (!(this instanceof VideoSystem)) 
				throw new InvalidAccessConstructorException();

			var _name = name; 
			var _users = []; 
			var _productions = [];
			var _categories = []; 
			var _actors = []; 
			var _directors = [];

			//Declaracion de getter y setter nombre del sistema
			Object.defineProperty(this, 'name', {
				get:function(){
					return _name;
				},
				set:function(value){
					value = typeof name !== 'undefined' ? value : "";
					if (value === "" || value === 'undefined'){
						throw new new EmptyValueException("name");
					}else{
						_name = value;
					}
				}		
			});

			//Iterador que recorre las categorias del sistema.
			Object.defineProperty(this, 'categories', {
				get:function(){
				    var nextIndex = 0;		    
				    return {
				       next: function(){
						   return nextIndex < _categories.length ?
				               {value: _categories[nextIndex++].category, done: false} :
				               {done: true};
				       }
				    }
				}	
            });	

			//Obtiene la posicion de un objeto en el array.
			this.indexOfCategory = function(category){
                
                function compareCategories(arrayCategory) {
				  return (arrayCategory.category.name === category.name)
				}
				return _categories.findIndex(compareCategories);		
			}

			//Metodo añadir categoría.
			this.addCategory = function(category){
                
                if(!(category instanceof Category)){
					throw new InvalidParamException("Category");
                }
                
				if (category == null) {
					throw new NullInvalidException("category");
                }
                
				var search = this.indexOfCategory(category); 	
				if (search === -1){
					_categories.push({category: category, productions: []});
				} else{
					throw new CategoryExistException("category");
				}
				return _categories.length;
			};

			//Metodo eliminar categoría.
			this.removeCategory = function(category){
                
                if (!(category instanceof Category)) { 
					throw new InvalidParamException("Category");
                }
                
				if (category == null) {
					throw new NullInvalidException("category");
				}	
				var position = this.indexOfCategory(category); 	
				if (position !== -1){
					_categories.splice(position, 1);			
				} else{
					throw new CategoryNotExistsException("category");
				}	
				return _categories.length;
			};
            
            //Iterador que reccore los usuarios del sistema.
			Object.defineProperty(this, 'users', {
				get:function(){
					var nextIndex = 0;		    
					return {
					next: function(){
						return nextIndex < _users.length ?
							{value: _users[nextIndex++], done: false} :
							{done: true};
					}
					}
				}	
			});

            //Obtiene la posicion de un usuario en el array.
            this.indexOfUser = function(user){
				function compareUsers(arrayUser) {
				  return (arrayUser.userName === user.userName)
				}
				return _users.findIndex(compareUsers);		
			}
            
            //Obtiene la posicion de un email en el array.
			this.indexOfEmail = function(user){
				function compareUsers(arrayUser) {
				return (arrayUser.email === user.email)
				}
				return _users.findIndex(compareUsers);		
			}
            
            //Metodo añadir usuario
			this.addUser = function(user){
                
                if(!(user instanceof User)){
					throw new InvalidParamException("User");
                }
                
				if (user == null) {
					throw new NullInvalidException("user");
                }
                
				var userex = this.indexOfUser(user); 
				var emailex = this.indexOfEmail(user);
				if ( userex === -1){
					if (emailex === -1) {
						_users.push(user);
					}else{
						throw new EmailExistException("email");
					}
				} else{
					throw new UsernameExistException("userName");
				}
				return _users.length;
			};

			//Metodo de eliminar usuario
			this.removeUser = function(user){
				if (!(user instanceof User)) { 
					throw new InvalidParamException("User");
                }
                
				if (user == null) {
					throw new NullInvalidException("User");
				}	

				var search = this.indexOfUser(user);	
				if (search !== -1){
					_users.splice(search, 1);			
				} else{
					throw new UsernameNotExistException("User");
				}	
				return _users.length;
            };
            
			//Iterador que recorre las producciones del sistema
			Object.defineProperty(this, 'productions', {
				get:function(){
					var nextIndex = 0;		    
					return {
					next: function(){
						return nextIndex < _productions.length ?
							{value: _productions[nextIndex++], done: false} :
							{done: true};
					}
					}
				}	
			});

			//Obtiene la posicion del objeto en el array.
			this.indexOfProduction = function(production){
				function compareProduction(arrayProduction) {
				  return (arrayProduction.title === production.title)
				}
				return _productions.findIndex(compareProduction);		
			}

			//Metodo de añadir una produccion.
			this.addProduction = function(production){
                
                if(!(production instanceof Production)){
					throw new InvalidParamException("Production");
				}
                
                if (production == null) {
					throw new NullParamException("production");
				}
                
                var search = this.indexOfProduction(production); 
				if (search === -1){
					_productions.push(production);
				} else{
					throw new ProductionExistsException("production");
				}
				return _productions.length;
			};

			//Metodo de eliminar una produccion.
			this.removeProduction = function(production){
                
                if(!(production instanceof Production)){
					throw new InvalidParamException("Production");
				}
                
                if (production == null) {
					throw new NullParamException("production");
				}	
                
                var search = this.indexOfProduction(production);
				if (search !== -1){
					_productions.splice(search, 1);			
				} else{
					throw new ProductionNotExistsException("production");
				}	
				return _productions.length;
            };
            
			//Iterador que recorre los actores del sistema
			Object.defineProperty(this, 'actors', {
				get:function(){
					var nextIndex = 0;		    
					return {
					next: function(){
						return nextIndex < _actors.length ?
							{value: _actors[nextIndex++].actor, done: false} :
							{done: true};
					}
					}
				}	
			});

            //Obtiene la posicion del objeto en el array.
			this.indexOfActor = function(actor){
				function compareActors(arrayActor) {
				  return (arrayActor.actor.name === actor.name || arrayActor.actor.lastName1 === actor.lastName1)
				}
				return _actors.findIndex(compareActors);		
			}
            
            //Metodo de añadir actor.
			this.addActor = function(actor){
                
                if(!(actor instanceof Person)){
					throw new InvalidParamException("Person");
				}
                
                if (actor == null) {
					throw new NullParamException("actor");
				}
                
                var search = this.indexOfActor(actor); 
				if (search === -1){ 
                    _actors.push({ actor: actor, productions: [] });
				} else{
					throw new ActorExistsException("name");
				}
				return _actors.length;
			};

			//Metodo de eliminar un actor.
			this.removeActor = function(actor){
                
                if(!(actor instanceof Person)){
					throw new InvalidParamException("Person");
				}
                
                if (actor == null) {
					throw new NullParamException("actor");
				}
                
                var search = this.indexOfActor(actor);
				if (search !== -1){
					_actors.splice(search, 1);			
				} else{
					throw new ActorNotExistsException("actor");
				}
				return _actors.length;
			};

			//Iterador que recorre los directores del sistema
			Object.defineProperty(this, 'directors', {
				get:function(){
					var nextIndex = 0;		    
					return {
					next: function(){
						return nextIndex < _directors.length ?
							{value: _directors[nextIndex++].director, done: false} :
							{done: true};
					}
					}
				}	
			});
            
            //Obtiene la posicion del objeto en el array
            this.indexOfDirector = function(director){
				function compareDirectors(arrayDirector) {
					return (arrayDirector.director.name === director.name)
				  }
				  return _directors.findIndex(compareDirectors);		
			}
			
			this.indexOfProduction = function(production){
				function compareProduction(arrayProduction) {
				  return (arrayProduction.title === production.title)
				}
				return _productions.findIndex(compareProduction);		
			}

			//Metodo de añadir un director.
			this.addDirector = function(director){
				if(!(director instanceof Person)){
					throw new InvalidParamException("Person");
				}
				if (director == null) {
					throw new NullParamException("director");
				}
				var search = this.indexOfDirector(director); 
				if (search === -1){
					_directors.push({director: director, productions: []});
				} else{
					throw new DirectorExistException("director");
				}
				return _directors.length;
			};
			
			//Metodo de eliminar director.
            this.removeDirector = function(director){
                
                if(!(director instanceof Person)){
					throw new InvalidParamException("Person");
				}
                
                if (director == null) {
					throw new NullParamException("director");
				}
                
                var search = this.indexOfDirector(director); 
				if (search !== -1){
					_directors.splice(search, 1);
				} else{
					throw new DirectorNotExistException("director");
				}
				return _directors.length;
			};		
			
			//Este metodo nos permite buscar la produccion en los distintos arrays
			function getPositionPro(production, categoryProduction){
				if (!(production instanceof Production)) { 
					throw new InvalidParamException("production");
				}		

				function compareElements(element) {
				return (element.production.title === production.title)
				}
				
				return categoryProduction.findIndex(compareElements);		
			}

			//Metodo para asignar producciones a las categorias
			this.assignCategory = function (category, production) {
                if (category === null) {
					throw new NullInvalidException("category");
				}
				if (production === null) {
					throw new NullInvalidException("production");
				}

				if (!(category instanceof Category)) { 
					throw new InvalidParamException("category");
				}

				if (!(production instanceof Production)) { 
					throw new InvalidParamException("production");
				}
                
                var categoryPosition = this.indexOfCategory(category);
                if (categoryPosition === -1) {
                    categoryPosition = this.addCategory(category);
                }
                
                var productionPosition = this.indexOfProduction(production);
                if (productionPosition === -1) {
                    productionPosition = this.addProduction(production);
                }
        
                var posProduction = getPositionPro(production, _categories[categoryPosition].productions);
                if (posProduction === -1) {
                    _categories[categoryPosition].productions.push({production: production});
                } else {
                    throw new ProductionAlreadyAssignException(category);
                }
                return _categories[categoryPosition].productions.length;
			}
			
			//Metodo para desasignar producciones a las categorias
			this.deassignCategory = function (category, production) {
                if (category === null) {
					throw new NullInvalidException("category");
				}
				if (production === null) {
					throw new NullInvalidException("production");
				}

				if (!(category instanceof Category)) { 
					throw new InvalidParamException("category");
				}

				if (!(production instanceof Production)) { 
					throw new InvalidParamException("production");
				}

				var categoryPosition = this.indexOfCategory(category);
                if (categoryPosition === -1) {
                    throw new CategoryNotExistException("category");
                }
                
                var productionPosition = getPositionPro(production, _categories[categoryPosition].productions);
                if (productionPosition !== -1) {
                    _categories[categoryPosition].productions.splice(productionPosition, 1);
                } else {
                    throw new ProductionNotAssign(production);
                }
                return _categories[categoryPosition].productions.length;
			}

// EL METODO DE ASIGNAR Y DESASIGNAR PRODUCCIONES A LOS DIRECTORES NO ME FUNCIONAN
//******************************************************************************
			
			//Metodo para asignar producciones a los directores
			this.assignDirector = function (director, production) {
                if (director === null) {
					throw new NullInvalidException("director");
				}
				if (production === null) {
					throw new NullInvalidException("production");
				}

				if (!(director instanceof Person)) { 
					throw new InvalidParamException("director");
				}

				if (!(production instanceof Production)) { 
					throw new InvalidParamException("production");
				}
                
                var directorPosition = this.indexOfDirector(director);
                if (directorPosition === -1) {
                    directorPosition = this.addDirector(director);
                }

                var productionPosition = this.indexOfProduction(production);
                if (productionPosition === -1) {
                    productionPosition = this.addProduction(production);
                }

                var posProduction = getPositionPro(production, _directors[directorPosition].productions);
                if (posProduction === -1) {
                    _directors[directorPosition].productions.push({production: production});
                } else {
                    throw new ProductionAlreadyAssignException(production);
                }
                return _directors[directorPosition].productions.length;
			}

			//Metodo para desasignar producciones a los directores
			this.deassignDirector = function (director, production) {
                if (director === null) {
					throw new NullInvalidException("director");
				}
				if (production === null) {
					throw new NullInvalidException("production");
				}

				if (!(director instanceof Person)) { 
					throw new InvalidParamException("director");
				}

				if (!(production instanceof Production)) { 
					throw new InvalidParamException("production");
				}

				var directorPosition = this.indexOfCategory(director);
                if (directorPosition === -1) {
                    throw new DirectorNotExistException("director");
                }
                
                var productionPosition = getPositionPro(production, _categories[categoryPosition].productions);
                if (productionPosition !== -1) {
                    _categories[categoryPosition].productions.splice(productionPosition, 1);
                } else {
                    throw new ProductionNotAssign(production);
                }
                return _categories[categoryPosition].productions.length;
			}

			//Metodo para asignar producciones a los actores
			this.assignActor = function (actor, production) {
                if (actor === null) {
					throw new NullInvalidException("actor");
				}
				if (production === null) {
					throw new NullInvalidException("production");
				}

				if (!(actor instanceof Person)) { 
					throw new InvalidParamException("actor");
				}

				if (!(production instanceof Production)) { 
					throw new InvalidParamException("production");
				}
                
                var actorPosition = this.indexOfActor(actor);
                if (actorPosition === -1) {
                    actorPosition = this.addActor(actor);
                }
                
                var productionPosition = this.indexOfProduction(production);
                if (productionPosition === -1) {
                    productionPosition = this.addProduction(production);
                }
        
                var posProduction = getPositionPro(production, _actors[actorPosition].productions);
                if (posProduction === -1) {
                    _actors[actorPosition].productions.push({production: production, character: "a", main: false});
                } else {
                    throw new ProductionAlreadyAssignException(production);
                }
                return _actors[actorPosition].productions.length;
			}

			//Metodo para desasignar producciones a los actores
			this.deassignActor = function (actor, production) {
                if (actor === null) {
					throw new NullInvalidException("actor");
				}
				if (production === null) {
					throw new NullInvalidException("production");
				}

				if (!(actor instanceof Person)) { 
					throw new InvalidParamException("actor");
				}

				if (!(production instanceof Production)) { 
					throw new InvalidParamException("production");
				}

				var actorPosition = this.indexOfActor(actor);
                if (actorPosition === -1) {
                    throw new ActorNotExistException("actor");
                }
                
                var posProduction = getPositionPro(production, _actors[actorPosition].productions);
                if (posProduction !== -1) {
                    _actors[actorPosition].productions.splice(posProduction, 1);
                } else {
                    throw new ProductionNotAssign(production);
                }
                return _actors[actorPosition].productions.length;
			}

			//Funcion que nos relaciona una produccion con sus actores y personajes
			this.getCast = function(production){
				if (production == null) {
					throw new NullInvalidException("production");
				}			
				
				var productionPosition = this.indexOfProduction(production); 	
				if (productionPosition === -1) {throw new ProductionNotExistsException();}
				var nextActor = 0;
				var nextProduction = 0;
			    return {
					next: function(){
						var actor = null;
						var papel = null;
						var principal = null;
						while (nextActor < _actors.length && actor === null){
							if (nextProduction < _actors[nextActor].productions.length && _actors[nextActor].productions[nextProduction].production.title === production.title){
								actor = _actors[nextActor].actor;
								papel = _actors[nextActor].productions[nextProduction].character;
								principal = _actors[nextActor].productions[nextProduction].main;
							}
							nextProduction++;
							if (nextProduction >= _actors[nextActor].productions.length){
								nextProduction = 0;
								nextActor++;
							}
						}
						if (actor !== null && papel !== null && principal !== null){
							return {value: actor, papel: papel, principal: principal, done: false}
						}
						if (nextActor >= _actors.length) return {done: true};
					}
				}
			};

			//Iterador con las producciones de un director
			this.getProductionsDirector = function(director){
				
				if (!(director instanceof Person)) { 
					throw new InvalidParamException("director");
				}

                var directorPosition = this.indexOfDirector(director);
                if (directorPosition === -1) throw new DirectorNotExistException(director);
                var nextIndex = 0;
                return {
                    next: function(){
                        return nextIndex < _directors[directorPosition].productions.length ?
                            {value: _directors[directorPosition].productions[nextIndex++].production, done: false} :
                            {done: true};
                    }
                }
			}
			
			//Iterador con las producciones de un actor
			this.getProductionsActor = function(actor){
				
				if (!(actor instanceof Person)) { 
					throw new InvalidParamException("actor");
				}

                var actorPosition = this.indexOfActor(actor);
                if (actorPosition === -1) throw new ActorNotExistException(actor);
                var nextIndex = 0;
                return {
                    next: function(){
                        return nextIndex < _actors[actorPosition].productions.length ?
                            {value: _actors[actorPosition].productions[nextIndex++].production, done: false} :
                            {done: true};
                    }
                }
			}
			
			//Iterador con las producciones de un categoria
			this.getProductionsCategory = function(category){
				
				if (!(category instanceof Category)) {
                    throw new InvalidParamException(category);
                }

                var categoryPosition = this.indexOfCategory(category);
                if (categoryPosition === -1) throw new CategoryNotExistException(category);
                var nextIndex = 0;
                return {
                    next: function(){
                        return nextIndex < _categories[categoryPosition].productions.length ?
                            {value: _categories[categoryPosition].productions[nextIndex++].production, done: false} :
                            {done: true};
                    }
                }
            }

		}
		VideoSystem.prototype = {}; 
		VideoSystem.prototype.constructor = VideoSystem;

		//Devolvemos el objeto para que sea una instancia única.
		var video = new VideoSystem();
		return video;
	}
	return {

		getInstance: function () { 
			if (!instantiated) { 
				instantiated = init();
			}
			return instantiated; 
		}
	};
})();
