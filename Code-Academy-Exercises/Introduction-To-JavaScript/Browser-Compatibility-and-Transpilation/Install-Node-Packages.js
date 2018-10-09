/* We use the npm install command to install new Node packages locally. The install command creates
a folder called node_modules and copies the package files to it. The install command also installs
all of the dependencies for the given package. The babel-cli package includes command line Babel
tools, and the babel-preset-env package has the code that maps any JavaScript feature, ES6 and
above (ES6+), to ES5. The -D flag instructs npm to add each package to a property called
devDependencies in package.json. Once the project's dependencies are listed in devDependencies,
other developers can run your project without installing each package separately. Instead, they can
simply run npm install — it instructs npm to look inside package.json and download all of the packages
listed in devDependencies.

$ npm init
$ npm install babel-cli -D
$ npm install babel-preset-env -D

*/
