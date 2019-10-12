var Generator = require("yeoman-generator");

module.exports = class extends Generator {
  initializing() {
    this.spawnCommandSync("git", ["init", "."]);
  }
  writing() {
    this.spawnCommandSync("git", ["pull", "origin", "master"]);
    this.spawnCommandSync("rm", ["-rf", ".git"]);
  }
  install() {
    this.npmInstall();
  }
  end() {
    this.spawnCommandSync("npm", ["start"]);
  }
};
