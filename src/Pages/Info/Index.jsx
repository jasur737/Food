import React from 'react'
import TemporaryDrawer from '../../Components/TemporaryDrawer'
import Menu from '../../Components/Menu'
import InfoNavbar from './InfoNavbar'
import InfoHeader from './InfoHeader'
import Contact from '../../Components/Contact'
import MenuFooter from '../Menu/MenuFooter'
export default function Info() {
  return (
    <>
    <TemporaryDrawer/>
    <Menu/>
    <InfoNavbar/>
    <InfoHeader/>
    <Contact/>
    <MenuFooter/>
    </>
  )
}
