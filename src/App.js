import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';

function App() {
    return (
        <>
            <Header />
            <div className="wrapper">
                <Sidebar />
                <div className="main-content">
                    <Home />
                </div>
            </div>
        </>
    );
}

export default App;
