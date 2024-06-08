//El método push inserta un nuevo elemento en el tope de la pila.
//El método pop elimina el elemento indicado por el tope de la pila. 
var stack = /** @class */ (function () {
    function stack() {
        this.vector = [];
    }
    stack.prototype.push = function (x) {
        this.vector.push(x);
    };
    stack.prototype.pop = function () {
        if (this.vector.length > 0) {
            return this.vector.pop();
        }
        else {
            return undefined;
        }
    };
    return stack;
}());
//tipo número
var stack1;
stack1 = new stack;
stack1.push(20);
stack1.push(42);
stack1.push(30);
stack1.push(1);
console.log(stack1.pop());
//tipo texto
var stack2;
stack2 = new stack;
stack2.push("manzana");
stack2.push("pera");
stack2.push("naranja");
console.log(stack2.pop());
//tipo booleano
var stack3;
stack3 = new stack();
stack3.push(true);
stack3.push(false);
stack3.push(true);
console.log(stack3.pop());
