var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('f9beb4d9'),
  addressVersion: 0x00,
  privKeyVersion: 128,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('000009f7e55e9e3b4781e22bd87a7cfa4acada9e4340d43ca738bf4e9fb8f5ce'),
    merkle_root: hex('a626e591b4583a9cdfa3f8c7ffa90628c745dc01b411825544209fce3bdba4d2'),
    height: 0,
    nonce: 369858,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1415384723,
    bits: 507510783,
  },
  dnsSeeds: [
  ],
  defaultClientPort: 9253
};

// 以下コミュニティから拝借。hash値逆だったり諸々違った
exports.livenet = {
    name: 'livenet',
    magic: hex('daa5bef9'),
    addressVersion: 81,
    privKeyVersion: 128,
    P2SHVersion: 5,
    hkeyPublicVersion: 0x0488b21e,
    hkeyPrivateVersion: 0x0488ade4,
    genesisBlock: {
        hash: hex('CEF5B89F4EBF38A73CD440439EDACA4AFA7C7AD82BE281473B9E5EE5F7090000'),
        merkle_root: hex('D2A4DB3BCE9F2044558211B401DC45C72806A9FFC7F8A3DF9C3A58B491E526A6'),
        height: 0,
        nonce: 369858,
        version: 1,
        prev_hash: buffertools.fill(new Buffer(32), 0),
        timestamp: 1415384723,
        bits: 507510783,  // 0x1e3fffff
    },
    dnsSeeds: [
    ],
    defaultClientPort: 9253
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  defaultClientPort: 18333
};
