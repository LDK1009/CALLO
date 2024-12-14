import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

type Anchor = "top" | "left" | "bottom" | "right";

export default function Sidebar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSecondOpen, setIsSecondOpen] = React.useState()

  const list = (anchor: Anchor) => (
    <Box sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : "30vw" }} role="presentation">
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding onClick={() => setIsOpen(false)}>
            <ListItemButton>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding onClick={() => setIsOpen(false)}>
            <ListItemButton>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        <Button onClick={() => setIsOpen(true)}>사이드바 버튼</Button>
        <SwipeableDrawer anchor={"left"} open={isOpen} onClose={() => setIsOpen(false)} onOpen={() => setIsOpen(true)}>
          {list("left")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
