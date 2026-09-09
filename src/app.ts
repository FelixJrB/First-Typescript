import Greeting from './Greeting.js'
import chalk from 'chalk'
import Box from './box.js'
import readline from 'readline/promises'

/**
 * The main application file.
 * Where the application starts and runs.
 */
console.log((chalk.blueBright)(Box.textBox('Typescript')))

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const name = await rl.question(chalk.green('What is your name? '))
rl.close()

const preface = 'Welcome my friend, Im currently testing Typescript'
console.log(chalk.underline(preface))
console.log()

const forewords = new Greeting('','', chalk.overline`As you read, Im testing Typescript, this is a simple test file`)
console.log(forewords.say())
console.log()

const phrase = ''
const greeting = new Greeting('', phrase,'This is tricky and challeging but also fun.')
console.log(greeting.say())
console.log()

const words = new Greeting(name, phrase, ' Hi, First time in' + chalk.blueBright` Typescript.`)
console.log(words.say())