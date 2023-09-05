import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import CalculateIcon from "@mui/icons-material/Calculate";

const drawerWidth = 180;

export const SideBar = () => {
  return (
    <Box sx={{ position: "fixed" }}>
      {/* <CssBaseline /> */}
      {/* <AppBar */}
      {/*   position="fixed" */}
      {/*   sx={{ width: drawerWidth, alignItems: "center", display: "flex" }} */}
      {/* ></AppBar> */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          <ListItem key={"Claculator"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CalculateIcon />
              </ListItemIcon>
              <ListItemText primary={"Calculator"} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
};
