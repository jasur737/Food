import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 1730, color: "white", }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List sx={{fontSize: 48}} className="flex flex-col items-center bg-[#333333] h-225">
        <div className="pt-4">
          <img src="/src/assets/logo.png" alt="" />
        </div>

        <Button sx={{marginTop: 2, marginBottom: "150px"}} onClick={toggleDrawer(false)}><img src="/src/assets/exit.svg" alt="" /></Button>
        {["Меню", "Доставка", "Оплата"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton sx={{justifyContent: "center",}}>
              <ListItemText primary={text} primaryTypographyProps={{ textAlign: "center", fontSize: "48px", fontWeight: "700", }} />
            </ListItemButton>
          </ListItem>
        ))}
        <Button sx={{backgroundColor: "#B59571", color: "white", paddingBlock: "20px", paddingInline: "40px", fontSize: "24px", fontWeight: "700", marginTop: "60px"}}>Бронь столика</Button>
        <div className="flex pt-[150px] gap-2">
          <img src="/src/assets/YT.svg" alt="" />
          <img src="/src/assets/W.svg" alt="" />
          <img src="/src/assets/Telegram.svg" alt="" />
        </div>
      </List>
      {/* <Divider /> */}
      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <div className="absolute left-3 top-28 z-10">
      <Button onClick={toggleDrawer(true)}>
        {" "}
        <img src="/src/assets/menu.svg" alt="" />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
