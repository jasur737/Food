import Contact from "../../Components/Contact";
import TemporaryDrawer from "../../Components/TemporaryDrawer";
import Delivery from "./Delivery";
import Header from "./Header";
import HomeFooter from "./HomeFooter";
import Menu from "../../Components/Menu"
import Menu1 from "./Menu"
import Navbar from "./Navbar";
import Restourant from "./Restourant";

export default function Home() {
  return (
    <>
    <TemporaryDrawer/>
    <Navbar/>
    <Header/>
    <Restourant/>
    <Menu1/>
    <Delivery/>
    <Contact/>
    <HomeFooter/>
    <Menu/>
    </>
  )
}
