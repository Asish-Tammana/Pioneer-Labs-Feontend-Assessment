import { React, useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
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

const Navbar = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
    <div className='navbar-container'>
      <h1 className='nav-title'><span className='text-orange-400'>Hello!</span> Here is the Asish's dashboard 👋</h1>
      <div className='hamburger'>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <MenuRoundedIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >

          {sidebarItemsList.map(each => {

            const activeClass = each.tabId === activeTab && 'active-tab';

            return (
              <MenuItem>
                <Link key={each.tabId} to={each.to} onClick={updateActiveTab}>
                  <div className={`sidebar-item-container ${activeClass}`}>

                    <span>{each.icon}</span>
                    <h1 className='sidebar-item-name'>{each.display}</h1>
                  </div>
                </Link>
              </MenuItem>

            )
          })}
          {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem> */}
        </Menu>
      </div>
    </div>
  )
}

export default Navbar