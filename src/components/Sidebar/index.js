import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';

import './index.css'


const sidebarItemsList = [
  {
    display: 'Dashboard',
    icon: <DashboardRoundedIcon />,
    to: '/',
    tabId: 'DASHBOARD',
  },
  {
    display: 'Bitcoin',
    icon: <CurrencyBitcoinIcon />,
    to: '/btc',
    tabId: 'BITCOIN',
  },
  {
    display: 'Asserts',
    icon: <AccountBalanceWalletRoundedIcon />,
    to: '/asserts',
    tabId: 'ASSERTS',
  }

]

const Sidebar = () => {

  const [activeTab, setactiveTab] = useState();

  const updateActiveTab = () => {

    const path = window.location.pathname;

    switch (path) {
      case "/":
        setactiveTab(sidebarItemsList[0].tabId)
        break;
      case "/btc":
        setactiveTab(sidebarItemsList[1].tabId)
        break;
      case "/asserts":
        setactiveTab(sidebarItemsList[2].tabId)
        break;
      default:
        return null
    }


  }

  useEffect(() => {
    updateActiveTab()
  }, [])

  return (
    <div className='sidebar-container'>
      <div>
        <Link to="/">
        <img className='website-logo' src="https://res.cloudinary.com/dyglzqdrl/image/upload/v1712830281/Untitled_1_inpnwi.png" alt="logo" />
        </Link>
        <div className='sidebar-search-container'>
          <SearchIcon />
          <input type='text' placeholder='Search' className='sidebar-search-input' />
        </div>


        {sidebarItemsList.map(each => {

          const activeClass = each.tabId === activeTab && 'active-tab';

          return (
            <Link key={each.tabId} to={each.to}  onClick={updateActiveTab}>
              <div className={`sidebar-item-container ${activeClass}`}>

                <span>{each.icon}</span>
                <h1 className='sidebar-item-name'>{each.display}</h1>
              </div>
            </Link>
          )
        })}

        

      </div>
      <div className='sidebar-item-container'>
        <h1>Asish Tammana</h1>
      </div>
    </div>
  )
}

export default Sidebar
