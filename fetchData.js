const axios = require('axios');

async function fetchAllData(contractAddress) {
    let allData = [];
    let nextPageParams = '';
    let baseUrl = `https://api.scan.pulsechain.com/api/v2/tokens/${contractAddress}/holders`;

    while (nextPageParams !== null) {
        try {
            const response = await axios.get(`${baseUrl}${nextPageParams}`);
            const data = response.data;

            allData = allData.concat(data.items);
            nextPageParams = data.next_page_params ? 
                `?address_hash=${data.next_page_params.address_hash}&items_count=${data.next_page_params.items_count}&value=${data.next_page_params.value}` : 
                null;

        } catch (error) {
            console.error('Error fetching data:', error);
            break;
        }
    }

    return allData;
}

module.exports = fetchAllData;
