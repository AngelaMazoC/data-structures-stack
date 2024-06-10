var reverseStack = /** @class */ (function () {
    function reverseStack() {
        this.stack = [];
    }
    reverseStack.prototype.push = function (x) {
        this.stack.push(x);
    };
    reverseStack.prototype.pop = function () {
        if (this.stack.length > 0) {
            return this.stack.pop();
        }
        else {
            return undefined;
        }
    };
    reverseStack.prototype.isEmpty = function () {
        return this.stack.length === 0;
    };
    return reverseStack;
}());
//se crea una función para invertir una lista de elementos usando una pila
function reverseList(elements) {
    // se crea una instancia de reverseStack para almacenar los elementos de la lista
    var stack = new reverseStack();
    // se agrega cada elemento de la lista a la pila
    for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
        var item = elements_1[_i];
        stack.push(item);
    }
    // se crea una nueva lista para almacenar los elementos invertidos
    var reversedList = [];
    // se saca cada elemento para agregarlo a la lista invertida
    while (!stack.isEmpty()) {
        reversedList.push(stack.pop());
    }
    // se devuelve la lista invertida
    return reversedList;
}
var original = [1, 2, 3, 4, 5];
var reversed = reverseList(original);
console.log(original);
console.log(reversed);
