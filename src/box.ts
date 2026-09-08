 export default class Box {
  static textBox (text: string ): string {
    const line = '*'.repeat(text.length + 2);
  return `╔${line}╗\n║ ${text} ║\n╚${line}╝`;
  };
}