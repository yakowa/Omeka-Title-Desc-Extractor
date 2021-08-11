// Omeka Title Desc Extractor

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

// Sync user input...
readline.question('\n\nWhat is the URL to your Omeka API (items)?\nExample: https://example.com/api/items/\n>>> ', url => {
    // Close the user input (query)
    readline.close();

	console.log('\nPLEASE WAIT • Loading data from API...');
	var xhttp = new XMLHttpRequest();
	xhttp.addEventListener('load', function() { if (this.readyState == 4 && this.status == 200) {
		if (typeof callBackFunc === 'function') { callBackFunc(xhttp.responseText); }
		}
		else { console.error('\nERROR • Failed loading data from API.'); }
	});

	xhttp.open("GET", url, true);
	xhttp.send();
});



// Main logic - ran when data from the database is returned
function callBackFunc(rawData) {
	console.log('PLEASE WAIT • Formatting data from API...');
	let subjects = [];
	let db = JSON.parse(rawData);

	// For every item in the returned database...
	for (let i = 0; i < db.length; i++) {
		const element = db[i];
		let elementTexts = element['element_texts'];
		var elementId = element['id'];

        var title;
        var desc;
        // let title = element['element_texts'][0]['text']
        // let desc = element['element_texts'][2]['text']


        // For every item in its element_texts subdirectory...
		for (let j = 0; j < elementTexts.length; j++) {
			const elementName = elementTexts[j]['element']['name'];
			const elementData = elementTexts[j]['text'];
			// If it is a subject...
			if (elementName == 'Title') {
                title = elementData;
			}
            else if (elementName == 'Description') {
                desc = elementData;
            }
		}
        subjects.push(
            {
                'title': title,
                'desc': desc
            }
        );
	}
	// Done the formatting logic
	console.log('SUCCESS!');


    subjects.sort(function(a, b) {
        var keyA = a.title;
        var keyB = b.title;
        // Compare the 2 dates
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
    });

    // console.log(subjects)
      
// 	// Converting to CSV
	let subjectsCSV = "";

	for (let i = 0; i < subjects.length; i++) {
		const element = subjects[i];
		if (!(subjectsCSV.length == 0)) {
            subjectsCSV += `, title: ${element.title}, desc: ${element.desc}`;
		}
		else {
            subjectsCSV += `title: ${element.title}, desc: ${element.desc}`;
        }
	}


    const fs = require('fs')


    fs.writeFile('Resulting CSV.txt', subjectsCSV, err => {
        if (err) {
            console.error(err);
            return
        }
        //file written successfully
    });

	// console.log("SUCCESS!\n\n", subjectsCSV);
	console.warn("\n\n\n\nCreated by https://JacobEM.com");
}