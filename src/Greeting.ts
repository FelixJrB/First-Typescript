class Greeting {
  public name: string;

  constructor(name: string){
    this.name = name;
  }
  
  get PersonName(): string {
    return this.name;
  }

  set personName(name: string) {
    this.name = name;
  }

  public greet(): string {
    return `Hello, ${this.name}`;
  }
}