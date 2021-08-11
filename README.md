![JacobEM](https://jacobem.com/assets/media/JacobEM.png)


# Omeka Title Desc Extractor

Omeka Title and Desc Extractor is a node.js application for retrieving all the titles and descriptions from an Omeka website.

This application uses the [Omeka API](https://omeka.org/s/docs/developer/api/) to get all the *titles* and *descriptions* from every item, which is then organised in alphabetical order (by title).


![Version: 1.1.0](https://img.shields.io/badge/Version-1.1.0-00e0a7)

![License: MIT](https://img.shields.io/badge/License-MIT-776bff)

## Documentation

### How to install

#### Download

Go to the [GitHub Page](https://github.com/yakowa/Omeka-Title-Desc-Extractor) and click the green `Code` button, then navigate to the `Download ZIP` button. This will download the application in a compressed folder. Simply right-click this folder and select `Extract All`.

#### Clone The Repository

If you have [Git](https://git-scm.com/) you may use Git Bash to clone the repository.

Simply run:
```bash
git clone https://github.com/yakowa/Omeka-Title-Desc-Extractor
```


### How to run

**Note:** Please see the [Dependecies](#dependecies) before reading the following!

Simply run the `RUN.bat` script (right-click, then Open), this will open your terminal executing the script on Node.JS.

Alternatively, you can simply run
```bash
node OSHE.js
```

### How to use

You will be prompted to input your Omeka site's items API URL. Example: https://example.com/api/items/

The program will then sort by title, alphabetically, and in ascending order.

The program will then create a file named 'Resulting CSV.txt' with every title and description, in CSV (comma separated values)

### Dependecies

* You must have [Node.JS](https://nodejs.org/) installed on your computer for this application to run.

Once Node.JS is installed please run the `INSTALL.bat` script (right-click, then Open), this will open your terminal and install the dependencies. Once done you may close your terminal.

Alternatively, you can simply run
```bash
npm install
```