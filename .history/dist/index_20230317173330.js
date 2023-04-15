// 创建发布者类
class Publisher {
    constructor() {
      this.subscribers = [];
    }
  
    // 添加订阅者
    subscribe(subscriber) {
      this.subscribers.push(subscriber);
    }
  
    // 移除订阅者
    unsubscribe(subscriber) {
      this.subscribers = this.subscribers.filter((sub) => sub !== subscriber);
    }
  
    // 通知所有订阅者
    notify(data) {
      this.subscribers.forEach((subscriber) => subscriber.update(data));
    }
  }
  
  // 创建订阅者类
  class Subscriber {
    constructor(name) {
      this.name = name;
    }
  
    // 更新方法，用于接收发布者通知
    update(data) {
      console.log(`${this.name} received data: ${data}`);
    }
  }
  
  // 示例：创建发布者和订阅者，然后进行发布订阅操作
  const publisher = new Publisher();
  const subscriber1 = new Subscriber("Subscriber 1");
  const subscriber2 = new Subscriber("Subscriber 2");
  
  publisher.subscribe(subscriber1);
  publisher.subscribe(subscriber2);
  
  publisher.notify("发布订阅者模式");