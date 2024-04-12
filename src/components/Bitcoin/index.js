import { React, useState, useEffect } from 'react'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import EuroRoundedIcon from '@mui/icons-material/EuroRounded';
import CurrencyPoundRoundedIcon from '@mui/icons-material/CurrencyPoundRounded';
import './index.css'

const Bitcoin = () => {

  const [bitcoinData, setbitcoinData] = useState([]);

  const getBitcoinData = async () => {

    const url = "https://api.coindesk.com/v1/bpi/currentprice.json"

    const response = await fetch(url)
    if (response.ok) {
      const responseData = await response.json()
      const { bpi } = responseData
      bpi.EUR.symbol = <EuroRoundedIcon />
      bpi.USD.symbol = <AttachMoneyRoundedIcon />
      bpi.GBP.symbol = <CurrencyPoundRoundedIcon />
      const bpiList = [bpi.EUR, bpi.USD, bpi.GBP]
      setbitcoinData(bpiList)
    }
  }

  useEffect(() => {
    getBitcoinData()
  }, [])

  return (
    <div className='main-container'>
      <Sidebar />
      <div className='w-full min-h-screen'>
        <Navbar />
        <div className='bitcoin-container'>
          <h1 className='bitcoin-container-title'>Bitcoin Statistics</h1>
          <div className='currency-cards-container'>
            {
              bitcoinData.map(each => <div key={each.code} className='currency-card'>
                <h1 className='card-title'>{each.description}</h1>
                <span>{each.symbol} {each.rate}</span>
                <p className='float-rate'>Float Rate: {each.rate_float}</p>
              </div>)
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default Bitcoin
