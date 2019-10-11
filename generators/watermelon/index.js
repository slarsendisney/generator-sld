var Generator = require("yeoman-generator");
var repo = "https://github.com/slarsendisney/gatsby-watermelon.git";

module.exports = class extends Generator {
  gitInit() {
    this.log("🍉 Cloning the repository...");
    this.spawnCommandSync("git", ["init", "."]);
    this.spawnCommandSync("git", ["remote", "add", "origin", repo]);
    this.spawnCommandSync("git", ["pull", "origin", "master"]);
  }

  removeRemote() {
    this.spawnCommandSync("rm", ["-rf", ".git"]);
  }

  install() {
    this.log("🍉  Installing dependancies...");
    this.npmInstall();
  }

  end() {
    this.spawnCommandSync("npm", ["start"]);
  }
};
