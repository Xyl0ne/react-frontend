// components/Layout.jsx
import { Box, Container, Typography } from "@mui/material";
import Navbar from "./Navbar";
function Layout({ children }) {
    return (
        <Box sx={{
            display: 'flex', flexDirection: 'column',
            minHeight: '100vh'
        }}>
            <Navbar />
            <Container maxWidth="lg" sx={{ flex: 1, py: 4 }}>
                {children}
            </Container>
            <Box component="footer" sx={{
                bgcolor: 'grey.900', color: 'white',
                py: 3, textAlign: 'center'
            }}>
                <Typography variant="body2">
                    © 2026 My App. All rights reserved.
                </Typography>
            </Box>
        </Box>
    );
}
export default Layout;