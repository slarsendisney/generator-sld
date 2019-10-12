var Generator = require("yeoman-generator");

module.exports = class extends Generator {
  async initializing() {
    const answers = await this.prompt([
      {
        type: "list",
        name: "generator",
        message: "Which boilerplate would you like to use?",
        choices: [
          {
            name: "🍈 GatsbyJS + Redux",
            value: "melon"
          },
          {
            name: "🍉 GatsbyJS + Redux + Express + Socket.io",
            value: "watermelon"
          },
          {
            name: "🥭 GatsbyJS + Markdown",
            value: "mango"
          },
          {
            name: "🍐 GatsbyJS + Express",
            value: "pear"
          }
        ]
      }
    ]);
    this.composeWith(require.resolve(`../${answers.generator}`));
  }
};
