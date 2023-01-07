import React from 'react'
import cv from '../assets/Dong She.pdf'

export default function ReviewCV() {
  return (
    <div>
         <embed src={cv} type="application/pdf" width="100%" height={2000}/>
    </div>
  )
}
