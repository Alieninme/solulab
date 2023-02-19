import React from 'react';
import "./navbar.css"
import { TbActivity, TbPlus, TbUser, TbFolder, TbFileUpload, TbReport, TbSettings, TbLogout   } from 'react-icons/tb'


export default function Navbar() {


  return (
        <div className='nav'>
            <ul className='navList'>
                <li className='navListItem'>
                <TbActivity />
                </li>
                <li className='navListItem'>
                <TbPlus />
                    <p>NEW</p>
                </li>
                <li className='navListItem'>
                <TbUser   />
                    <p>PATIENT</p>
                </li>
                <li className='navListItem'>
                <TbFolder />
                    <p>FOLDER</p>
                </li>
                <li className='navListItem'>
                <TbFileUpload />
                    <p>UPLOAD</p>
                </li>
                <li className='navListItem'>
                <TbReport />
                    <p>REPORT</p>
                </li>
                <li className='navListItem'>
                <TbSettings  />
                    <p>SETTING</p>
                </li>
                <li className='navListItem'>
                <TbLogout />
                    <p>LOGOUT</p>
                </li>
            </ul>
        </div>
  )
}
