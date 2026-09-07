class Greeting {
  private name: string;

  constructor(name: string){
    this.name = name;
  }
  
  get personName(): string {
    return this.name;
  }

  set personName(name: string) {
    this.name = name;
  }

  public say(): string {
    return `Hello, ${this.name}`;
  }
}

const greeting = new Greeting('Felix');
console.log(greeting.say());