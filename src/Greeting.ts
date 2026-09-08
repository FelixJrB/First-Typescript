import chalk from 'chalk';

export default class Greeting {
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