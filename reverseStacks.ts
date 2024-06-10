class reverseStack<T> {
  private stack: T[] = []

  push(x: T) {
    this.stack.push(x)
  }

  pop(): T | undefined{
    if (this.stack.length > 0){
      return this.stack.pop()
    }else{
      return undefined
    } 
  }

  isEmpty(): boolean {
    return this.stack.length === 0;
} 
}

//se crea una función para invertir una lista de elementos usando una pila
function reverseList<T>(elements: T[]): T[] {
  // se crea una instancia de reverseStack para almacenar los elementos de la lista
  const stack = new reverseStack<T>();

  // se agrega cada elemento de la lista a la pila
  for (const item of elements) {
    stack.push(item);
  }

  // se crea una nueva lista para almacenar los elementos invertidos
  const reversedList: T[] = [];

  // se saca cada elemento para agregarlo a la lista invertida
  while (!stack.isEmpty()) {
    reversedList.push(stack.pop()!);
  }

  // se devuelve la lista invertida
  return reversedList;
}


const original = [1, 2, 3, 4, 5];
const reversed = reverseList(original);
console.log(original); 
console.log(reversed);