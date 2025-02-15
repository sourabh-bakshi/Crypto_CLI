const CryptoAPI = require('../library/crypto-API');
const colors = require('colors');
const inquirer = require('inquirer').default;
const isRequired = require('../utils/validation')

const check = {
    async price(cmd){
        
        try {
            const input = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'crypto',
                    message: 'Enter a valid crypto currency symbol'.bgBlue,
                    validate: isRequired
                },
                {
                    type: 'input',
                    name: 'curr',
                    message: 'Enter a valid currency for price'.bgBlue,
                    validate: isRequired
                },
            ]);
    
            
            const api = new CryptoAPI();
            const priceResult = await api.getPriceData(input.crypto, input.curr);
            if(priceResult){
                console.log(priceResult)
            }
            
        } catch (error) {
            console.log(error.message.bgRed);
        }
    }
}

module.exports = check;