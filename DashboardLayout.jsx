import { Outlet, NavLink } from "react-router-dom";
import {
    Box, Drawer, List, ListItem, ListItemButton,
    ListItemIcon, ListItemText, Toolbar
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
const drawerWidth = 240;
function DashboardLayout() {
    const menuItems = [
        {
            text: "Overview", icon: <DashboardIcon />,
            path: "/dashboard"
        },
        {
            text: "Profile", icon: <PersonIcon />,
            path: "/dashboard/profile"
        },
        {
            text: "Settings", icon: <SettingsIcon />,
            path: "/dashboard/settings"
        },
    ];
    return (
        <Box sx={{ display: "flex" }}>
            <Drawer variant="permanent" sx={{
                width: drawerWidth,
                '& .MuiDrawer-paper': {
                    width: drawerWidth, boxSizing: 'border-box'
                },
            }}>
                <Toolbar />
                <List>
                    {menuItems.map(item => (
                        <ListItem key={item.text} disablePadding>
                            <ListItemButton component={NavLink} to={item.path}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box component="main" sx={{
                flexGrow: 1, p: 3, ml: `${drawerWidth}px`
            }}>
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
}
export default DashboardLayout;
import { Navigate } from "react-router-dom";
export function ProtectedRoute({ children }) {
    const token = localStorage.getItem("token");
    if (!token) return <Navigate to="/login" replace />;
    return children;
}