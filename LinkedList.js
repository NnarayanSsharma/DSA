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

// Reverse LinkedList
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// var reverseList = function(head) {
//     let prev = null
//     let current = head
//     while(current){
//         let nextNode = current.next
//         current.next = prev
//         prev = current
//         current = nextNode
//     }
//     head = prev
//     return head
// };

// console.log(reverseList([1,2,3,4,5]))
// console.log(reverseList([1,2]))
// console.log(reverseList([]))

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

const list1 = new LinkedList([1,2,4])
const list2 = new LinkedList([1,3,4])

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let head = new ListNode(-1)
    let current = head
    while(list1 && list2){
        if(list1.val < list2.val){
            current.next = list1
            list1 = list1.next
        }else{
            current.next = list2
            list2 = list2.next
        }
        current = current.next
    }
    current.next = list1 || list2

    return head.next
    
};

console.log(mergeTwoLists(list1, list2))


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// Optimal Solution — Floyd’s Cycle Detection (Tortoise & Hare Algorithm)
// slow move 1 step, fast move 2 step if it meet means circle
var hasCycle = function(head) {
    if(!head || !head.next) return false
    let slow = head
    let fast = head

    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
        if(slow === fast){
            return true
        }
    }
    return false
};
