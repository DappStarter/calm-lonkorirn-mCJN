require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave food shoulder rescue pumpkin unusual harvest nature metal gauge'; 
let testAccounts = [
"0xe107f439a15250a1920cebba200ceb6d685d528f240eaa12eeeb46de8ba1e528",
"0x1c09c68e0d210a20f084cfd59c643c0a90a0e171242965ec5c5d5d77a0dd7d89",
"0xe9f68429396cf67b3ec1a6da7b0240c61c2c78c56f5ef65dcb77c5cf0b44d4a8",
"0xdb41d0b39d66a41493c1f5dc32bd638505e03ab675d4cb4fdf79c74470c84b48",
"0x3aff53880782ffeed801b972b6f24a2d5d110577a276b5a39b3f90eaa0a7f557",
"0xd1fcfa5374b6fb7a2f4b849415be854379d3ac7becc48decff1892420532a18a",
"0x341ae82b23b143ca55ed4574b8fea7a51790df1d1bddcf92948bfb677b4e4b2b",
"0xbe05e6dad7886badeb01e154778e836a32512de265f58dbf01d2de854fb16c64",
"0xddbfd76557b49c8ceb37d38f7b8432645e45f80430777c0ec1241b6377a8b5ad",
"0xfd6d7f2f0bb13bf6a43a7c7bf99ff74d83d7197935ae21d53d80e31719ef911f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

