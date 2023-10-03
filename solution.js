const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
} 

class Stack {
  constructor () {
    this.top = null
  }
  push (data) {
    //create the Node stack
    let newBox = new Node (data)
    //each new data is at the top
    newBox.next = this.top
    //assigns the new top value to the node stack
    this.top = newBox
  }
  pop () {
    let usedBox = this.top //  peaches oranges
    this.top = this.top.next //oranges
    return usedBox //peaches
  }
  size () {
    let bodies = 0
    let box = this.top
    while(box){
      bodies += 1
      //why does box.next work but this.top.next cause the while loop to be infinite?
      box = box.next
    }
    return bodies
  }
  isEmpty() {
    return !this.top 
  }
  peek (){
    //peek just return the top item (sneak peek of whats to come)
    return this.top
  }
  findMin () {
    let min = Infinity
    let newBox = this.top
    while(newBox){
      if(newBox.data < min){
        min = newBox.data
      }
      newBox = newBox.next
    }
    return min
  }
}

//QUEUE

class Queue {
  constructor(){
    this.first = null
    this.last = null
    this.size = 0
    //the highest value in the queue
    this.max = -Infinity
  }

  enqueue (data) {
    let mschfDrop = new Node(data)
    if(this.size === 0){
      this.first = mschfDrop
      this.last = this.first
    } else {
      this.last.next = mschfDrop
      this.last = mschfDrop 
    }
    this.size += 1
    if(data > this.max){
      this.max = data
    }
  }
  
  dequeue () {
    if(this.size === 0){return null} 

    let done = this.first.data
    this.first = this.first.next
    
    this.size -= 1

    return done
    // if(done > this.max){
    //   this.max = done
    // } 
  }

  count () {
    return this.size
  }

  isEmpty() {
    return !this.size
  }

  peek() {
    return this.first
  }

  getLast () {
    return this.last
  }
  
  findMax() {
    return this.max
  }

}

module.exports = {
  Node,
  Queue,
  Stack,
};
