/**
 * 队列与栈一样也是一个受限的线性结构
 * 队列中常见的操作有：
 * enqueue(element) ：向队列尾部添加一个（或多个）新的项。
 * dequeue()：移除队列的第一（即排在队列最前面的）项，并返回被移除的元素。
 * front/peek()：返回队列中第一个元素   最先被添加，也将是最先被移除的元素。
 * 队列不做任何变动（不移除元素，只返回元素信息——与Stack类的peek方法非
 * 常类似）。
 * isEmpty() 判断队列是否为空，返回布尔值
 * size() 返回队列包含元素的个数（长度）与数组的length类似
 */

/**
 * 基于数组实现队列
 */
class ArrayQueue {
  private data: any[] = [];
  constructor(data: any[] = []) {
    this.data = data;
  }
  enqueue(element: any) {
    this.data.push(element);
  }

  dequeue() {
    return this.data.shift();
  }
  peek() {
    return this.data[0];
  }
  isEmpty() {
    return !this.data.length;
  }
  size() {
    return this.data.length;
  }
}

// -------------- test case
const queue = new ArrayQueue();
queue.enqueue("aaa");
queue.enqueue("bbb");
queue.enqueue("ccc");
console.log(queue.dequeue());
console.log(queue.size());
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.isEmpty());
console.log(queue.dequeue());
console.log(queue.isEmpty());
