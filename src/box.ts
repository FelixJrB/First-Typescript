/**
 * A class that represents a box with text.
 */
export default class Box {
  /**
   * Creates a text box with the given text.
   *
   * @param {string} text - The text to be displayed inside the box.
   * @returns {string} A string representation of the text box.
   */
  static textBox (text: string ): string {
    const line = '*'.repeat(text.length + 2)
    return `╔${line}╗\n║ ${text} ║\n╚${line}╝`
  };
}