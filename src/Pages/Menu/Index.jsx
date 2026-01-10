import React from 'react'
import MenuNavbar from './MenuNavbar'
import Menu from '../../Components/Menu'
import TemporaryDrawer from '../../Components/TemporaryDrawer'
import MenuHeader from './MenuHeader'
import Contact from '../../Components/Contact'
import MenuFooter from './MenuFooter'
export default function Menu2() {
  return (
    <>
    <MenuNavbar/>
    <Menu/>
    <TemporaryDrawer/>
    <MenuHeader/>
    <Contact/>
    <MenuFooter/>
    </>
  )
}
