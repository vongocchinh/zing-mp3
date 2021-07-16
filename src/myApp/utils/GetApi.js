import axios from 'axios';

const  getApi = async (adPoint,method,body)=>{
    return await axios({
                method: method,
                url: 'https://api.apify.com/v2/key-value-stores/EJ3Ppyr2t73Ifit64/records/LATEST?fbclid=IwAR3gIhrmOGUuK0w3H427ekEvYdoi1nPg8sqjudOwvUIftqaENxVR_37XGn0'+adPoint,
                data: body
            }).catch(erro=>{
                console.log(erro);
            });
};

export default getApi;