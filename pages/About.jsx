import { useState } from "react";
import { Snackbar, Alert, Button } from "@mui/material";
function MyComponent() {
    const [snackbar, setSnackbar] = useState({
        open: false, message: '', severity: 'success'
    });
    const showNotification = (message, severity = 'success') => {
        setSnackbar({ open: true, message, severity });
    };
    const handleSave = () => {
        // ... save logic
        showNotification("Saved successfully!");
    };
    return (
        <>
            <Button onClick={handleSave} variant="contained">
                Save
            </Button>
            <Snackbar
                open={snackbar.open}
                autoHideDuration={4000}
                onClose={() => setSnackbar({
                    ...snackbar,
                    open: false
                })}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                }}
            >
                <Alert severity={snackbar.severity}
                    variant="filled">
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </>
    );
       }export default MyComponent;