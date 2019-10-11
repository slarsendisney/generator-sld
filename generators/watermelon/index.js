var Generator = require("yeoman-generator");
var repo = "https://github.com/slarsendisney/gatsby-watermelon.git";

module.exports = class extends Generator {
  initializing() {
    this.composeWith(require.resolve("../common"));
  }
  gitInit() {
    this.log("🍉 Cloning the repository...");
    this.spawnCommandSync("git", ["remote", "add", "origin", repo]);
  }
};
