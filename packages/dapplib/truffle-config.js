require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enter flat sugar fan rival snow comic hunt cover army gas'; 
let testAccounts = [
"0x85e9dfcfe9b99ff655878c7b60bf1eeecadbec42839b388aecc667ab1525b7c1",
"0x4c672173781c9c1917cad96a5220c5904cb0f0d9868520967bdb291313160715",
"0x6e8e6aeb6e042e2c08d32ffe37cb0d6bc44ce7a6a52910637d02a2f107c300db",
"0x404bf8b973ce0b7970e0c0cb4f91bf5023060d504b47b081d460d425960195cb",
"0x5dd1193d6923ce61408cc844556ad8e513ac1462332298a80391f31fb98287b7",
"0x14efbaea7636f6e5d6c9be7f666d88e0716eca02cff42de231398def91d8e95a",
"0x75d038918d43fa682550d563f9a6d6ed9197ab4616f555a53701127f252cefa0",
"0xafb90cb0f5945bc80b045a80c4a74cbe38871ef7189f002f8b44ffc5dbd1f0ae",
"0x054117c7b7e08ed0ce4e8fdc45788feb03d6fcca54f71201df41563c18ab39f5",
"0xb0e45f566f683913a3996c668f0fd6eecf6f402b76950613507f5f43bc44dc7d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
