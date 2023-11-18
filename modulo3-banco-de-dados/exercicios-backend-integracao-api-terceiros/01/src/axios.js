const axios = require('axios');

const instanciaAxios = axios.create({
    baseURL: "https://companyenrichment.abstractapi.com/v1",
    params: {
        api_key: "ba0c2f7f2ff848678663b609328cafff"
    }
});

module.exports = instanciaAxios;