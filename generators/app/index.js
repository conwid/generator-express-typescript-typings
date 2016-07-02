'use strict';
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');

module.exports = yeoman.Base.extend({
  prompting: function () {
     // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the mind-blowing ' + chalk.red('generator-express-typescript-typeings') + ' generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'vsCode',
      message: 'Would you like to add Visual Studio Code support to your project?',
      default: true
    }];

    return this.prompt(prompts).then(function (props) {      
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('*'),
      this.destinationRoot()
  );
  

    var destFolderName=this.destinationRoot().split(path.sep).pop();

    var pkg = this.fs.readJSON(this.destinationPath('package.json'), {});  
    pkg.name=destFolderName;
    this.fs.writeJSON(this.destinationPath('package.json'), pkg);
  
    var typings = this.fs.readJSON(this.destinationPath('typings.json'), {});  
    typings.name=destFolderName;
    this.fs.writeJSON(this.destinationPath('typings.json'), typings);

    this.fs.copy(
      this.templatePath('.*'),
      this.destinationRoot()
    );
    if (this.props.vsCode) {
        this.fs.copy(
        this.templatePath('.vscode/*'),
        this.destinationPath('.vscode')
      );
    }            
    this.fs.copy(
      this.templatePath('bin/*'),
      this.destinationPath('bin')
    );    
    mkdirp.sync('public/');
    mkdirp.sync('public/images');
    mkdirp.sync('public/javascript');
    mkdirp.sync('public/stylesheets');    
    this.fs.copy(
      this.templatePath('routes/*'),
      this.destinationPath('routes')
    );      
    this.fs.copy(
      this.templatePath('views/*'),
      this.destinationPath('views')
    );  
  },

  install: function () {
    this.installDependencies({bower: false});
    this.spawnCommand('typings',['install']);
  }
});
