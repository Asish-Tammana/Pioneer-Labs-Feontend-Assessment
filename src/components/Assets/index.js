import { React, useState } from 'react'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar';
import Web3 from 'web3';
import './index.css'


const Asserts = () => {

  const [isConnected, setisConnected] = useState(false);
  const [errorMessage, seterrorMessage] = useState('');

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        if (accounts.length > 0) {
          setisConnected(true)
          seterrorMessage('')
        }
      } else {
        setisConnected(false)
        seterrorMessage('MetaMask extension not detected.')
      }
    } catch (error) {
      setisConnected(false)
      seterrorMessage(error.message)
    }
  };

  return (
    <div className='main-container'>
      <Sidebar />
      <div className='w-full min-h-screen'>
        <Navbar />
        <div className='asserts-container'>

          <img className='w-2/5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png" alt="metamask logo" />
          <button className='connection-btn' onClick={connectWallet}>Connect to Metamask</button>
          {isConnected && <p className='text-green-600'>Wallet connected successfully!</p>}
          {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
        </div>
      </div>

    </div>
  )
}

export default Asserts