import TemporaryDrawer from "../../Components/TemporaryDrawer";
import Delivery from "./Delivery";
import Header from "./Header";
import Menu1 from "./Menu";

import Navbar from "./Navbar";
import Restourant from "./Restourant";

export default function Home() {
  return (
    <>
    <TemporaryDrawer/>
    <Navbar/>
    <Header/>
    <Restourant/>
    <Delivery/>
    <Menu1/>
    </>
  )
}
