
String.prototype.repetify =
 function(numero){ 
    var repeticiones = '';
    var cadena = this;
    var i= 1;
    if(numero < 0) { 
    return "ERROR"; }
     else if( numero === 0){ 
        return "" } 
            else{ for (var i = 0; i <= numero; i++) { 
            repeticiones += cadena;
            }
        return repeticiones; } } 

            console.log('hola'.repeatify(3));



            function shape(type, getType, getPerimeter) {
                this.type: type;
                this.getType: getType;
                this.getPerimeter: getPerimeter;

            }
            function Triangle(){
                typpe:triangle;
                a;
                b;
                c;
                Triangle.prototype.shape
            }