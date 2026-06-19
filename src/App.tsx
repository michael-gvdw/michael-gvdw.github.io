import { Route, Routes } from "react-router";

import { PageShell } from "./components/layout/PageShell";

// import { PageShell } from "./components/layout/PageShell";
import HomePage from "./pages/HomePage";
import CvPage from "./pages/CvPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";

import './App.css'

function App() {
    return (
        <PageShell>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/cv" element={<CvPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            </Routes>
        </PageShell>
    )
}

export default App
