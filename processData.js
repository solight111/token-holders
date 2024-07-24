function processData(data, multiplier) {
    return data.map(item => ({
        address: item.address.hash,
        max_allowable: parseFloat(item.value) * multiplier
    }));
}

module.exports = processData;
