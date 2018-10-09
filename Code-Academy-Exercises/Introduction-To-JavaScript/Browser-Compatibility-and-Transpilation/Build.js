/*
Now, we need to call "build" from the command line to transpile and write ES5 code to a directory called lib.
From the command line, we type:
npm run build
The command above runs the build script in package.json. Babel writes the ES5 code to a file named main.js
 (it's always the same name as the original file), inside of a folder called lib. The npm run build
 command will transpile all JavaScript files inside of the src folder. This is helpful as you build larger
 JavaScript projects — regardless of the number of JavaScript files, you only need to run one command
 (npm run build) to transpile all of your code.


Review:
npm init — A terminal command that creates a package.json file.
package.json — A file that contains information about a JavaScript project.
npm install — A command that installs Node packages.
babel-cli — A Node package that contains command line tools for Babel.
babel-preset-env — A Node package that contains ES6+ to ES5 syntax mapping information.
.babelrc — A file that specifies the version of the JavaScript source code.
"build" script — A package.json script that you use to tranpsile ES6+ code to ES5.
npm run build — A command that runs the build script and transpiles ES6+ code to ES5.
For future reference, here is a list of the steps needed to set up a project for transpilation:

Initialize your project using npm init and create a directory called src
all babel dependencies by running
npm install babel-cli -D
npm install babel-preset-env -D
Create a .babelrc file inside your project and add the following code inside it:
{
  "presets": ["env"]
}
Add the following script to your scripts object in package.json:
"build": "babel src -d lib"
Run npm run build whenever you want to transpile your code from your src to lib directories.
