const { ethers } = require('ethers');

async function main() {
  const provider = new ethers.providers.JsonRpcProvider('https://polygon-mainnet.infura.io/v3/e9dd05d61b7b44f29658158337322ca6');

  const walletPrivateKey = 'xxx';

  const safeFactoryAddress = '0xa6B71E26C5e0845f74c812102Ca7114b6a896AB2';

  const safeFactoryABI = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract GnosisSafeProxy","name":"proxy","type":"address"},{"indexed":false,"internalType":"address","name":"singleton","type":"address"}],"name":"ProxyCreation","type":"event"},{"inputs":[{"internalType":"address","name":"_singleton","type":"address"},{"internalType":"bytes","name":"initializer","type":"bytes"},{"internalType":"uint256","name":"saltNonce","type":"uint256"}],"name":"calculateCreateProxyWithNonceAddress","outputs":[{"internalType":"contract GnosisSafeProxy","name":"proxy","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"singleton","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"createProxy","outputs":[{"internalType":"contract GnosisSafeProxy","name":"proxy","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_singleton","type":"address"},{"internalType":"bytes","name":"initializer","type":"bytes"},{"internalType":"uint256","name":"saltNonce","type":"uint256"},{"internalType":"contract IProxyCreationCallback","name":"callback","type":"address"}],"name":"createProxyWithCallback","outputs":[{"internalType":"contract GnosisSafeProxy","name":"proxy","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_singleton","type":"address"},{"internalType":"bytes","name":"initializer","type":"bytes"},{"internalType":"uint256","name":"saltNonce","type":"uint256"}],"name":"createProxyWithNonce","outputs":[{"internalType":"contract GnosisSafeProxy","name":"proxy","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"proxyCreationCode","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"proxyRuntimeCode","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"pure","type":"function"}];

  const wallet = new ethers.Wallet(walletPrivateKey, provider);
  const safeFactory = new ethers.Contract(safeFactoryAddress, safeFactoryABI, wallet);

  async function deployGnosisSafe() {
    const owners = [
      '0x0CbE121B2008d9571618B1b7e1017caC7B404319'
    ];
    const initializer = 0xb63e800d0000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000140000000000000000000000000f48f2b2d2a534e402487b3ee7c18c33aec0fe5e400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000003e8c686f499c877d8f4afb1215b6f0935796b9860000000000000000000000000000000000000000000000000000000000000000;
    const saltNonce = 1675895311922;
    const _singleton = 	0x3E5c63644E683549055b9Be8653de26E0B4CD36E;

    const createProxyTx = await safeFactory.createProxyWithNonce(_singleton, initializer, saltNonce);

    const receipt = await createProxyTx.wait();
    const safeProxyAddress = receipt.events[0].args.proxy;

    console.log('Gnosis Safe deployed at:', safeProxyAddress);

    return safeProxyAddress;
  }

  try {
    const safeProxyAddress = await deployGnosisSafe();

  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
