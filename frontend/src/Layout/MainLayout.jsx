import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div className="app-shell">
            <Navbar />
            <main className="container">
                <Outlet />
            </main>
            <footer className="footer" style={{ textAlign: 'center', padding: '2rem 0', marginTop: 'auto', borderTop: '1px solid #eee' }}>
                <p>&copy; 2026 GadgetHub. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default MainLayout;
