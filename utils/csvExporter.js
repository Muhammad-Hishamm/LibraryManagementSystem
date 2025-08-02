const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

exports.exportToCSV = (filename, data, res) => {
  const csvWriter = createCsvWriter({
    path: filename,
    header: Object.keys(data[0]).map(key => ({ id: key, title: key }))
  });

  csvWriter.writeRecords(data).then(() => {
    res.download(filename);
  });
};
