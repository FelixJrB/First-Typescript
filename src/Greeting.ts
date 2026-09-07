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

  public greet(): string {
    return `Hello, ${this.name}`;
  }
}