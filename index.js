const inquirer = require('inquirer');
const fetchAllData = require('./fetchData');
const processData = require('./processData');
const exportToCSV = require('./exportToCSV');

async function main() {
    const inquirer = await import('inquirer');

    const answers = await inquirer.default.prompt([
        {
            type: 'input',
            name: 'contractAddress',
            message: 'Enter the contract address:'
        },
        {
            type: 'input',
            name: 'multiplier',
            message: 'Enter the multiplier:',
            validate: value => isNaN(value) ? 'Please enter a valid number' : true
        }
    ]);

    const { contractAddress, multiplier } = answers;

    console.log('Fetching data...');
    const data = await fetchAllData(contractAddress);
    console.log('Processing data...');
    const processedData = processData(data, parseFloat(multiplier));
    console.log('Exporting data to CSV...');
    await exportToCSV(processedData);
    console.log('Done.');
}

main();

