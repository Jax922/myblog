import React from 'react'
import MePhoto from '../assets/img/me.png'
import { Link } from 'react-router-dom'

import "../styles/dist/resume.css"

export default function Resume() {
  return (
    <div className="cv">
        
        <div className='cv-header'>
            <div className="photo-me">
                <img src={MePhoto} alt="" />
                <div className='say-hi-left hi-font'>
                    <span>
                        He
                    </span>
                </div>
            </div>
            <div className="intro-cv">
                <div>
                   <div className='say-hi-right hi-font'>
                        <span>llo</span>
                   </div>
                    <h1 className="myname hi-font">I am Dong She</h1>
                    <div className="intro-words">
                        <p>
                        A Master’s student at the University of Copenhagen, undertaking Computer Science courses. I am looking for a student job or internship role. Please review my CV &#128071;.
                        </p>
                        <div className="go-to-cv">
                            <Link to='/reviewcv' className="go-to-cv-btn" target="_blank">Review CV</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="cv-content" name="cv-content">

        </div>
    </div>
  )
}
