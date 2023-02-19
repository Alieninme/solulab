import React from 'react';
import "./navbar.css";
import {Link } from "react-router-dom";
import { TbActivity, TbPlus, TbUser, TbFolder, TbFileUpload, TbReport, TbSettings, TbLogout   } from 'react-icons/tb'


export default function Navbar() {


  return (
        <div className='nav'>
            <ul className='navList'>
            <Link to={"/"} className='navListItem'>
                <li className='navListItem'>
                <TbActivity />
                </li>
                </Link>
                
                <Link to={"/add"} className='navListItem'>
                <li className='navListItem'>
                <TbPlus />
                    <p>NEW</p>
                </li>
                </Link>
                
                <Link to={"/patient"} className='navListItem'>
                <li className='navListItem'>
                <TbUser />
                    <p>PATIENT</p>
                </li>
                </Link>

                <Link to={"/folder"} className='navListItem'>
                <li className='navListItem'>
                <TbFolder />
                    <p>FOLDER</p>
                </li>
                </Link>

                <Link to={"/upload"} className='navListItem'>
                <li className='navListItem'>
                <TbFileUpload />
                    <p>UPLOAD</p>
                </li>
                </Link>

                <Link className='navListItem' to={"/report"}>
                <li className='navListItem'>
                <TbReport />
                    <p>REPORT</p>
                </li>
                </Link>

                <Link to={"/settings"} className='navListItem'>
                <li className='navListItem'>
                <TbSettings />
                    <p>SETTINGS</p>
                </li>
                </Link>

                <Link to={"/logout"} className='navListItem'>
                <li className='navListItem'>
                <TbLogout />
                    <p>LOGOUT</p>
                </li>
                </Link>
            </ul>
        </div>
  )
}
