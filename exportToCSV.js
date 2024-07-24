const createCsvWriter = require('csv-writer').createObjectCsvWriter;

async function exportToCSV(data) {
    const csvWriter = createCsvWriter({
        path: 'output.csv',
        header: [
            { id: 'address', title: 'Address' },
            { id: 'max_allowable', title: 'Max-Allowable' }
        ]
    });

    try {
        await csvWriter.writeRecords(data);
        console.log('Data written to CSV file successfully.');
    } catch (error) {
        console.error('Error writing to CSV file:', error);
    }
}

module.exports = exportToCSV;
