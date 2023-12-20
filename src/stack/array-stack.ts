import { Stack } from "./types";

/**
 *  * 栈结构是一个受限的线性结构, 其特点是先进后出
 * 其常见的操作有:
 * 1. push(element) 入栈,添加一个新元素到栈顶位置
 * 2. pop() 出栈,移除栈顶元素,同时返回被移除的元素
 * 3. peek() 返回栈顶元素,不对栈内做任何修改(不会移除栈顶元素,仅返回该元素)
 * 4. isEmpty() 如果栈内没有任何元素则返回true 否则返回false
 * 5. size() 返回栈内的元素个数,也就是栈的长度与数组的length方法类似
 */

/**
 * 利用数组实现栈结构
 */
class ArrayStack<T = any> implements Stack<T> {
  private data: T[] = [];
  constructor(data: T[] = []) {
    this.data = data;
  }
  push(element: T) {
    this.data.push(element);
  }
  pop() {
    return this.data.pop();
  }
  peek() {
    return this.data[this.data.length - 1];
  }
  isEmpty() {
    return !this.size();
  }
  size() {
    return this.data.length;
  }
}

// --------------------- test case
const stack = new ArrayStack();

stack.push("aaa");
stack.push("bbb");
console.log(stack.size());
stack.push("ccc");

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);
console.log(stack.isEmpty());
export {};
