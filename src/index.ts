import Web3 from 'web3';
import { performance } from 'perf_hooks';

const web3 = new Web3('https://rpc.goerli.arbitrum.gateway.fm');

const getGasPrice = async () => {
  const gasPrices = [];

  console.log('start getting gasPrice...');

  for (let i = 0; i < 10; i += 1) {
    const gasPrice = await web3.eth.getGasPrice();

    gasPrices.push(gasPrice);
  }

  return gasPrices;
};

const startTime = performance.now();

getGasPrice().then(data => {
  console.log('gasPrices', data);

  const endTime = performance.now();
  const duration = endTime - startTime;

  console.log(startTime / 1000, `sec -- start time`);
  console.log(endTime / 1000, `sec -- end time`);
  console.log(duration / 1000, `sec -- execution time`);
});
