//El método push inserta un nuevo elemento en el tope de la pila.
//El método pop elimina el elemento indicado por el tope de la pila. 

class stack<T> {
  private vector: T[] = []

  push(x: T){
    this.vector.push(x)
  }

  pop(): T | undefined{
    if (this.vector.length > 0){
      return this.vector.pop()
    }else{
      return undefined
    } 
  }
  
}

//tipo número
let stack1: stack<number>
stack1 = new stack<number>
stack1.push(20)
stack1.push(42)
stack1.push(30)
stack1.push(1)
console.log(stack1.pop())

//tipo texto
let stack2: stack<string>
stack2 = new stack<string>
stack2.push("manzana")
stack2.push("pera")
stack2.push("naranja")
console.log(stack2.pop())

//tipo booleano
let stack3: stack<boolean>
stack3 = new stack<boolean>()
stack3.push(true)
stack3.push(false)
stack3.push(true)
console.log(stack3.pop())

