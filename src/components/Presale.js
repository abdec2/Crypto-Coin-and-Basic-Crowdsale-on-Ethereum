import { ethers } from 'ethers';
import { useContext, useRef } from 'react';
import Web3Modal from 'web3modal';
import { GlobalContext } from '../context/GlobalContext';

import CROWDSALE_ABI from './../artifacts/contracts/AABTCrowdsale.sol/AABTCrowdsale.json';
const crowdsaleAddress = "0x7e664e8Ee00a559Dda84cD0e34322E6dD0210848";
function Presale() {
    const {account} = useContext(GlobalContext);
    // const [ethPrice, setEthPrice] = useState();

    // const changeEth = (e) => {
    //     const eth = e.target.value;
    //     console.log(eth);
        
    // }

    const ethPrice = useRef(null);

    const buyToken = async (e) => {
        e.preventDefault();
        if (!window.ethereum) {
            alert('Please install MetaMask');
            return
        }
        if(!account) {
            alert('Please connnect wallet');
            return;
        }
        const web3modal = new Web3Modal();
        const instance = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(instance);
        const signer = provider.getSigner();
        const contract =  new ethers.Contract(crowdsaleAddress, CROWDSALE_ABI.abi, signer);
        const price = ethers.utils.parseEther(ethPrice.current.value);
        
        const transaction = await contract.buyTokens(account, {value: price.toString()});
        await transaction.wait();

        alert('purchase done');
    }

  return (
    <div className="mt-11 p-7 flex items-center flex-col md:flex-row justify-evenly border border-white border-opacity-20 rounded-3xl shadow-xl ">
        <div className="text-center md:text-left">
            <h1 className="text-5xl font-bold" >PRESALE</h1>
            <p className="text-lg">For Progress, Investment & Success</p>
        </div>
        <div className="my-10 border p-10 rounded-xl border-white border-opacity-30  ">
            <form onSubmit={buyToken}>
                <div className="my-3">
                    <label className="text-lg">Enter Eth</label>
                    <input ref={ethPrice} type="text" className="w-full h-12 rounded-lg p-2 text-xl focus:outline-none mt-1 bg-white bg-opacity-30" required />
                </div>
                <div className="my-3">
                    <label className="text-lg">Rate</label>
                    <input className="w-full h-12 rounded-lg p-2 text-xl focus:outline-none mt-1" type="text" value="0.00000180" disabled/>
                </div>

                <div className="mt-10">
                    <button className="w-full py-4 px-4 bg-yellow-500 hover:bg-yellow-300 rounded-full text-xl font-bold">BUY</button>
                </div>
            </form>
        </div>
    </div>
  );
}

export default Presale;
