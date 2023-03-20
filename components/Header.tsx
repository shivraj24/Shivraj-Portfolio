import React from 'react'
import { SocialIcon } from 'react-social-icons'
type Props = {}

export default function Header({}: Props) {
  return (
    <header>
        <div>
        <SocialIcon url="https://linkedin.com/"
        fgColor='gray'
        bgColor='transparent' /> 
        <SocialIcon url="https://github.com/"
        fgColor='gray'
        bgColor='transparent' /> 
        </div>
        <div>
            <SocialIcon
            className='cursor-pointer'
            network='email'
            fgColor='gray'
            bgColor='transparent'
            />
            <p className='uppercase'>Get In Touch</p>
        </div>
    </header>
  )
}