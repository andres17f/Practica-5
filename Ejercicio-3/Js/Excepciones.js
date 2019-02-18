//Excepción base para ir creando el resto de excepciones.
function BaseException() {
}
BaseException.prototype = new Error(); //Herencia del objeto Error.
BaseException.prototype.constructor = BaseException; //Definimos el constructor
//Sobrescribimos el método toString para personalizarlos
BaseException.prototype.toString = function(){
	// note that name and message are properties of Error
	return this.name + ": " + this.message;
};

//Excepciones de validación de parámetros. Reutilizables en todas las clases
function ParameterValidationException() {
	this.name = "ParameterValidationException";
	this.message = "Error: Parameter Validation Exception.";
}
ParameterValidationException.prototype = new BaseException(); //Heredamos de BaseException
ParameterValidationException.prototype.constructor = ParameterValidationException;

//Excepción personalizada para indicar valores vacios.
function EmptyValueException(param) {
	this.name = "EmptyValueException";
	this.message = "Error: The parameter " + param + " can't be empty.";
}
EmptyValueException.prototype = new ParameterValidationException(); //Heredamos de ParameterValidationException
EmptyValueException.prototype.constructor = EmptyValueException;

//Excepción de valor inválido
function InvalidValueException(param, value) {
	this.name = "InvalidValueException";
	this.message = "Error: The paramenter " + param + " has an invalid value. (" + param + ": " + value + ")";
}
InvalidValueException.prototype = new ParameterValidationException(); //Heredamos de ParameterValidationException
InvalidValueException.prototype.constructor = InvalidValueException;

//Excepción acceso inválido a constructor
function InvalidAccessConstructorException() {
	this.name = "InvalidAccessConstructorException";
	this.message = "Constructor can’t be called as a function.";
}
InvalidAccessConstructorException.prototype = new BaseException(); 
InvalidAccessConstructorException.prototype.constructor = InvalidAccessConstructorException;

//Excepción acceso inválido a constructor
function UninstantiatedObjectException(param) {
	this.name = "UninstantiatedObjectException";
	this.message = "You can't instantiate a " + param + " object";
}
UninstantiatedObjectException.prototype = new BaseException(); 
UninstantiatedObjectException.prototype.constructor = UninstantiatedObjectException;

//Excepción intento de instacia clase abstracta
function AbstractClassException(classValue) {
	this.name = "AbstractClassException";
	this.message = classValue + " is a abstract class.";
}
AbstractClassException.prototype = new BaseException(); 
AbstractClassException.prototype.constructor = AbstractClassException;

//Excepciones escritas por mi. control del system.

//Excepcion nulo invalido
function NullInvalidException(classValue) {
	this.name = "NullInvalidException";
	this.message = classValue + " Value null is invalid.";
}
NullInvalidException.prototype = new BaseException(); 
NullInvalidException.prototype.constructor = NullInvalidException;

//Excepcion categoria existente
function CategoryExistException(classValue) {
	this.name = "CategoryExistException";
	this.message = classValue + " Category already exist.";
}
CategoryExistException.prototype = new BaseException(); 
CategoryExistException.prototype.constructor = CategoryExistException;

//Excepcion de parametro invalido.
function InvalidParamException(classValue) {
	this.name = "InvalidParamException";
	this.message = classValue + "param invalid.";
}
InvalidParamException.prototype = new BaseException();
InvalidParamException.prototype.constructor = InvalidParamException;

//Excepcion categoria no existente
function CategoryNotExistException(classValue) {
	this.name = "CategoryNotExistException";
	this.message = classValue + " Category not exist.";
}
CategoryNotExistException.prototype = new BaseException(); 
CategoryNotExistException.prototype.constructor = CategoryNotExistException;

//Excepcion nombre de usuario existente
function UsernameExistException(classValue) {
	this.name = "UsernameExistException";
	this.message = classValue + " Username already exist.";
}
UsernameExistException.prototype = new BaseException(); 
UsernameExistException.prototype.constructor = UsernameExistException;

//Excepcion nombre de usuario no existente
function UsernameNotExistException(classValue) {
	this.name = "UsernameNotExistException";
	this.message = classValue + " Username not exist.";
}
UsernameNotExistException.prototype = new BaseException(); 
UsernameNotExistException.prototype.constructor = CategoryNotExistException;

//Excepcion email existente
function EmailExistException(classValue) {
	this.name = "EmailExistException";
	this.message = classValue + " Email already exist.";
}
EmailExistException.prototype = new BaseException(); 
EmailExistException.prototype.constructor = EmailExistException;

//Excepcion produccion existente
function ProductionExistException(classValue) {
	this.name = "ProductionExistException";
	this.message = classValue + " Production already exist.";
}
ProductionExistException.prototype = new BaseException(); 
ProductionExistException.prototype.constructor = ProductionExistException;

//Excepcion produccion no existente
function ProductionNotExistException(classValue) {
	this.name = "ProductionNotExistException";
	this.message = classValue + " Production not exist.";
}
ProductionNotExistException.prototype = new BaseException(); 
ProductionNotExistException.prototype.constructor = ProductionNotExistException;

//Excepcion actor existente
function ActorExistException(classValue) {
	this.name = "ActorExistException";
	this.message = classValue + " Actor already exist.";
}
ActorExistException.prototype = new BaseException(); 
ActorExistException.prototype.constructor = ActorExistException;

//Excepcion actor no existente
function ActorNotExistException(classValue) {
	this.name = "ActorNotExistException";
	this.message = classValue + " Actor not exist.";
}
ActorNotExistException.prototype = new BaseException(); 
ActorNotExistException.prototype.constructor = ActorNotExistException;

//Excepcion director existente
function DirectorExistException(classValue) {
	this.name = "DirectorExistException";
	this.message = classValue + " Director already exist.";
}
DirectorExistException.prototype = new BaseException(); 
DirectorExistException.prototype.constructor = DirectorExistException;

//Excepcion director no existente
function DirectorNotExistException(classValue) {
	this.name = "DirectorNotExistException";
	this.message = classValue + " Director not exist.";
}
DirectorNotExistException.prototype = new BaseException(); 
DirectorNotExistException.prototype.constructor = DirectorNotExistException;

//Excepcion de produccion ya asignada a la categoria o director
function ProductionAlreadyAssignException(classValue) {
	this.name = "ProductionAlreadyAssignException";
	this.message = classValue + " Production already asign.";
}
ProductionAlreadyAssignException.prototype = new BaseException(); 
ProductionAlreadyAssignException.prototype.constructor = ProductionAlreadyAssignException;

//Excepcion produccion no asignada
function ProductionNotAssign(classValue) {
	this.name = "ProductionNotAssign";
	this.message = classValue + " Production not assign.";
}
ProductionNotAssign.prototype = new BaseException(); 
ProductionNotAssign.prototype.constructor = ProductionNotAssign;
