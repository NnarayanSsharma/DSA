// LinkedList
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }
    append(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            return
        }
        let current = this.head
        while(current.next){
            current = current.next
        }
        current.next = newNode
    }
    prepend(value){
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
    }
    delete(value){
        if(!this.head) return
        if(this.head.value === value){
            this.head = this.head.next
            return
        }
        let current = this.head
        while(current.next && current.next.value !== value){
            current = current.next
        }

        if(current.next){
            current.next = current.next.next
        }
    }
    reverse(){
        let prev = null
        let current = this.head
        while(current){
            let nextNode = current.next
            current.next = prev;
            prev = current
            current = nextNode
        }
        this.head = prev
    }
    print(){
        let current = this.head
        const values = []
        while(current){
            values.push(current.value)
            current = current.next
        }
        console.log(values.join(" -> "))
    }
}

const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);
list.prepend(5)
list.reverse();
// list.delete(30)

list.print();