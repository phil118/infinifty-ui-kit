# InfiniftyUiKit

InfiniftyUiKit is the base components for building out the frontend applications

-----

## Getting started

### Install Global Dependencies
  * [Node.js](http://nodejs.org)
  * [bower](http://bower.io): `[sudo] npm install bower -g`
  * [grunt.js](http://gruntjs.com): `[sudo] npm install -g grunt-cli`

### Install Local Dependencies
  * cd to project folder
  * run `[sudo] npm install` (first time users)
  * run `grunt sprites` (to build svg sprite files)
  * run `grunt` (to watch and compile sass files)

### Run examples
To see examples make sure running on server for icons to work correctly `python -m SimpleHTTPServer`

### What's in the download?
The download includes Infinifty's CSS, ~~Normalize CSS as a reset, ~~ a favicon set, icon set including logo and an index.html as a starting point with examples

```
infinifty/
├── index.html
├── examples/
├── scss/
│   └── infinifty.scss
├── images/
|   └── favicons 
│   └── icons
|   └── logo.svg
├── package.json
├── Gruntfile.js
└── README.md
```

## Using
Anything needed for development should be found in root dist folder after running grunt script.