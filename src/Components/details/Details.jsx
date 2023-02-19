import React, { useState } from 'react';
import "./details.css"
import { data } from '../../dummyData';
import { RiFileListLine } from "react-icons/ri";

export default function Details() {
   
const document = data.documents;
const appointment = data.appointments;

  return (
    <div className='mainContainer'>
       <div className='userinfoContainer'>
        <div className='userinfo'>
            <img src={data.profilepic} alt="" />
            <div><h4>{data.username}</h4>
            <a href="email" >{data.email}</a></div> 
            <ul >
                <li>15 <span>Past</span></li>
                <div className='line'></div>
                <li>{data.appointments.length} <span>Upcoming</span></li>
            </ul>  
        </div>
        <button>Send Message</button>
        </div>
        <form className='userform'>
            <div className='formsingle'>
                <label htmlFor="">Gender</label>
                <input className="inputs" value={data.gender} readOnly={true}/>
            </div>
            <div className='formsingle'>
                <label htmlFor="">Birthday</label>
                <input className="inputs" value={data.birthday} readOnly={true}/>
            </div>
            <div className='formsingle'>
                <label htmlFor="">Phone Number</label>
                <input className="inputs" value={data.phonenumber} readOnly={true} />
            </div>
            <div className='formsingle'>
                <label htmlFor="">Registered Date</label>
                <input className="inputs" value={data.regdate} readOnly={true}/>
            </div>
            <div className='formsingle'>
                <label htmlFor="">Street Address</label>
                <input className="inputs" value={data.address.Street} readOnly={true} />
            </div>
            <div className='formsingle'>
                <label htmlFor="">City</label>
                <input className="inputs" value={data.address.City} readOnly={true}/>
            </div>
            <div className='formsingle'>
                <label htmlFor="">Zip Code</label>
                <input className="inputs" value={data.address.Zipcode} readOnly={true} />
            </div>
            <div className='formsingle'>
                <label htmlFor="">Member Status</label>
                <input className="inputs" value={data.status} readOnly={true} />
            </div>
        </form>
        <div className='fileList'>
           <h5>Files/Documents</h5>
            {document.map((item) => (
                <li key={item.id}><RiFileListLine style={{marginRight:"15px"}}/>{item.name}</li>
            ))
            }
        </div>
        <div className='po'>
            <div >
                <ul className='appointmentLinks'>
                    <li>Upcoming Appointments</li>
                    <li>Past Appointments</li>
                    <li>Medical Records</li>
                </ul>
            </div>
             <div className='appointmentsData'>
                <section>
                    <button>Root Canal Treatment</button>
                    <button>Show Previous Treatments</button>
                </section>
                {
                    appointment.map((item) =>(
                        <div key={item.id} className="appointmentList">
                            <ul>
                                <li><lable style={{fontSize: "18px", color:"black", fontWeight:"700"}}>{item.date}</lable><span style={{fontSize: "12px", color:"#6B6B6B"}} >{item.time}</span></li>
                                <div className='line'></div>
                                <li><lable>Treatment</lable>{item.Treatment}</li>
                                <div className='line'></div>
                            </ul>
                            <ul>
                                <li><lable>Dentist</lable>{item.Dentist}</li>
                                <li><lable>Nurse</lable>{item.Nurse}</li>
                                <li style={{fontSize: "12px", color:"blue", cursor:"pointer"}}><RiFileListLine/>Note</li>
                            </ul>
                        </div>
                    ))
                }
             </div>
        </div>
    </div>
  )
}
