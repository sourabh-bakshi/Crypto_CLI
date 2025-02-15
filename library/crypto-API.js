const axios = require('axios');
const colors = require('colors');

class CryptoAPI{
    constructor(){
        this.baseUrl = 'https://api.coingecko.com/api/v3';
    }
    
    async getPriceData(coinSymbol, currOption){
        try {
            
          const coinList = await axios.get(`${this.baseUrl}/coins/list`);
          const coin = coinList.data.filter(obj => obj.symbol.toLowerCase() === coinSymbol.toLowerCase());
          
          if(coin.length == 0)
          {
            throw new Error('Coin Symbol Not Found');
          }
          
          const allIds = coin.map(el => el.id).join(',');
          const res = await axios.get(`${this.baseUrl}/simple/price?ids=${allIds}&vs_currencies=${currOption}`);

          return res.data;
        } catch (error) {
            console.log(error.message.bgRed);            
        }

    }
}

module.exports = CryptoAPI;