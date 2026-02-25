import { Routes, Route } from "react-router-dom";
import { Typography } from "@mui/material";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TasksPage from "./pages/TasksPage";

function NotFound() {
  return (
    <Typography variant="h4" sx={{ p: 4, textAlign: "center" }}>
      404 - Page Not Found
    </Typography>
  );
}

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>
    
    </Layout>

  );
}
export default App;    


