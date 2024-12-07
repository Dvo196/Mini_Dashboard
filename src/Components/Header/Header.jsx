import Navibar from "../NaviBar/Navibar"
import {
    MDBIcon,
    MDBCollapse,
    MDBRipple,
    MDBListGroup,
    MDBListGroupItem
  } from 'mdb-react-ui-kit';
import dashboard_icon from "../../Images/dashboard_icon.png"
import shops_icon from "../../Images/shops_icon.png"
import account_icon from "../../Images/account_icon.png"
import settings_icon from "../../Images/settings_icon.png"
import chat_icon from "../../Images/chat_icon.png"
import FAQ_icon from "../../Images/FAQ_icon.png"
import React, { useState } from 'react';
import "./header.css"

function Header() {
    const [showShow, setShowShow] = useState(false);

    const toggleShow = () => setShowShow(!showShow);
  
    return(
        <>
        <MDBCollapse show={showShow} tag="nav" className="d-lg-block bg-white sidebar">
        <div className="position-sticky">
        <MDBListGroup flush className="mx-3 mt-4">
        <MDBRipple rippleTag='span'>
        <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded rounded'>
        <MDBIcon fas icon="tachometer-alt me-3" />
        
        <img className='me-2' width='24' src={dashboard_icon} alt="dashboard_icon" />
        <span className='me-5'>Dashboard</span>
        </MDBListGroupItem>
        </MDBRipple>
        
        <MDBRipple rippleTag='span'>
        <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded rounded'>
        <MDBIcon fas icon="tachometer-alt me-3" />
                <span className='Orders_pack'>
                <img className='me-2' src={shops_icon} alt="shops_icon" />
                <span className='me-5'>Orders</span>
                </span>
                </MDBListGroupItem>
                </MDBRipple>
                
                <MDBRipple rippleTag='span'>
                <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded'>
                <MDBIcon fas icon="lock me-3" />
                <span className='account_pack'>
                <img width='24' className='me-2' src={account_icon} alt="account_icon" />
                <span className='me-5'>Account</span>
                </span>
                
                </MDBListGroupItem>
                </MDBRipple>
                
                <MDBRipple rippleTag='span'>
                <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded'>
                <MDBIcon fas icon="chart-line me-3" />
                <span className='settings_pack'>
                <img width="24" className='me-2' src={settings_icon} alt="settings-icon" />
                <span className='me-5'>Settings</span>
                </span>
              </MDBListGroupItem>
              </MDBRipple>
              
              <span id='Support' className="mx-4 mt-2 text-secondary">Support</span>
              
              <MDBRipple rippleTag='span'>
              <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded'>
              <MDBIcon far icon="chart-bar me-3" />
              <span className='chat_pack'>
              <img width='24' className='me-2' src={chat_icon} alt="chat_icon" />
              <span className='Chat me-5'>Chat</span>
                </span>
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag='span'>
            <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded'>
                <MDBIcon fas icon="globe me-3" />
                <span className='FAQ_pack'>
                <img width='24' className='me-2' src={FAQ_icon} alt="FAQ_icon" />
                <span className='chat me-5'>FAQ</span>
                </span>
                </MDBListGroupItem>
                </MDBRipple>
                
                
                </MDBListGroup>
                </div>
            </MDBCollapse>
            <Navibar/>
        </>
    )
}
export default Header