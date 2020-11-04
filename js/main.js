const fs = require('fs');

// define a function to handle the form inputs upon submission
function createPoint() {
  // define the form inputs
  const type = document.getElementById("pointType").value;
  const lat = document.getElementById("lat").value;
  const long = document.getElementById("long").value;
  const location = document.getElementById("location").value;
  const name = document.getElementById("name").value;
  const popup = document.getElementById("popupContent").value;
  const startYear = document.getElementById("startYear").value;
  const endYear = document.getElementById("endYear").value;
  const episcopalName = document.getElementById("episcopalName").value;
  const episcopalInfo = document.getElementById("episcopalInfo").value;

  // This needs browserify to implement
  //const json2csv = require('json2csv');
  const newLine = "\r\n";

  const fields = ['town', 'episcopal_church',	'episcopal_church_info', 'event',	'type',	'more_info', 'long', 'lat',	'start_year',	'end_year'];
  const appendThis = [{
    'town': location,
    'episcopal_church': episcopalName,
    'episcopal_church_info': episcopalInfo,
    'event': name,
    'type': type,
    'more_info': popup,
    'long': long,
    'lat': lat,
    'start_year': startYear,
    'end_year': endYear
  }];

  const toCsv = {
    data: appendThis,
    fields: fields,
    hasCSVColumnTitle: true
  };

  fs.stat('data/user-inputs.csv', function (err, stat) {
    if (err == null) {
      console.log('File exists');

      // write the actual data and end with new line
      const csv = json2csv(toCsv) + newLine;

      fs.appendFile('data/user-inputs.csv', csv, function (err) {
        if (err) throw err;
        console.log('The data to append was appended to file!');
      });
    } else {
      // write the headers and new line
      console.log('New file, just writing headers');
      fields = (fields + newLine);

      fs.writeFile('data/user-inputs.csv', fields, function (err) {
        if (err) throw err;
        console.log('file saved');
      });
    }
  });

  console.log(type + ", " + lat + ", " + long + ", " + location + ", " + name + ", " + popup + ", " + startYear + ", " + endYear + ", " + episcopalName + ", " + episcopalInfo);
};
