import { useParams } from "react-router-dom";
import { Typography, Box } from "@mui/material";
function UserProfile() {
    const { userId } = useParams();
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4">
                User Profile: {userId}
            </Typography>
        </Box>
    );
}
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
export function LoginPage() {
    const navigate = useNavigate();
    const handleLogin = async () => {
        const success = await loginUser();
        if (success) navigate("/dashboard");
    };
    return (
        <Button variant="contained" onClick={handleLogin}>
            Login
        </Button>
    );
   } export default UserProfile;