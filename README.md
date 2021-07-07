![JacobEM](https://jacobem.com/assets/media/JacobEM.png)


# Omeka Title Desc Extractor

Omeka Title and Desc Extractor is a node.js application for retrieving all the titles and descriptions from an Omeka website.
This application uses the Omeka API to get all items which it then formats into a custom JSON object. This object is then searched through and then all duplicates are discarded.


![Version: 1.0.0](https://img.shields.io/badge/Version-1.0.0-00e0a7)

![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC--BY--SA-776bff)
## Documentation

### How to run

Simply run the `run.bat` script, this will open your terminal execuing the script on Node.JS.

Alternatively, you can simply run
```bash
node app.js
```

**Note:** Please see the [Dependecies](#dependecies).

### How to use

You will be prompted to input your Omeka site's items API URL. Example: https://example.com/api/items/

The program will then sort by title, alphabetically, and in ascending order.

The program will then create a file named 'Resulting CSV.txt' with every title and description, CSV (comma separated values)

### Dependecies

* You must have Node.JS installed.

Once Node.JS is installed please run the following to install the necessary dependecies.
```bash
npm install
```
