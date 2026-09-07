import chalk from 'chalk';

class Greeting {
  private preface: string;
  private name: string;
  private phrase: string;

  constructor(name: string, preface: string, phrase: string){
    this.name = name;
    this.preface = preface;
    this.phrase = phrase;
  }
  
  get personName(): string {
    return this.name;
  }

  set personName(name: string) {
    this.name = name;
  }

  public say(): string {
    return chalk.blue(this.name) + '' + chalk.bold(this.phrase) + '' + chalk.underline(this.preface);
  }
}

const preface = 'Welcome my friend, Im currently testing Typescript';
console.log(chalk.underline(preface))
console.log()


const forewords = new Greeting('','', chalk.overline`As you read, Im testing Typescript, this is a simple test file`);
console.log(forewords.say());
console.log()

const phrase = ''
const greeting = new Greeting('', phrase,`This is tricky and challeging but also fun.`);
console.log(greeting.say());
console.log()

const words = new Greeting('Felix:', phrase, ` Hi, First time in Typescript.`)
console.log(words.say());