import React, { useState } from 'react';
import "./Navibar.css"
import userAvatar from "../../Images/userAvatar.png"
import newImage from "../../Images/new.png"
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBDropdown,
  MDBCollapse,
  MDBInput,
} from 'mdb-react-ui-kit';
export default function App() {
  const [showShow, setShowShow] = useState(false);

  const toggleShow = () => setShowShow(!showShow);

  return (
    <>
      <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarNav className="d-flex flex-row align-items-center w-auto">
            <MDBNavbarBrand href='#'>
              <img
                src='https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp'
                height='30'
                alt=''
                loading='lazy'
              />
            </MDBNavbarBrand>

            <MDBCollapse className='ms-5' navbar>
              <MDBNavbarItem className="d-flex align-items-center ms-5">
                <MDBInput  className='ms-5' id='form1' type='text' />
                <MDBIcon fas icon="search mx-2" />
              </MDBNavbarItem>
            </MDBCollapse>
          </MDBNavbarNav>
          <MDBNavbarNav className="d-flex flex-row justify-content-end w-auto">
            <MDBNavbarItem className='me-3 me-lg-0 d-flex align-items-center'>
              <MDBDropdown>
                <img className='' src={newImage} height="22" alt="kolokol" />
                        <span  className='line mx-4'></span>
                    <span >Matt Appleyard</span>
                  <img className='mx-4' src={userAvatar} width="40" height="40" alt="userAvatar" />
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}