import chalk from 'chalk'

/**
 * A class that represents a greeting message.
 */
export default class Greeting {
  private preface: string
  private name: string
  private phrase: string

  /**
   * Constructor for the Greeting class.
   *
   * @param {string} name - The name of the person to greet.
   * @param {string} preface - The preface of the greeting message.
   * @param {string} phrase - The phrase of the greeting message.
   */
  constructor(name: string, preface: string, phrase: string){
    this.name = name
    this.preface = preface
    this.phrase = phrase
  }
  
  /**
   * Gets the name of the person.
   *
   * @returns {string} The name of the person.
   */
  get personName(): string {
    return this.name
  }

  /**
   * Sets the name of the person.
   *
   * @param {string} name - The name of the person.
   */
  set personName(name: string) {
    this.name = name
  }

  /**
   * Says the greeting.
   *
   * @returns {string} The greeting message.
   */
  public say(): string {
    return chalk.blue(this.name) + ' ' + chalk.bold(this.phrase) + ' ' + chalk.underline(this.preface)
  }
}