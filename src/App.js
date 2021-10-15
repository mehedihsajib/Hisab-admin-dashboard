import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import NewUser from './components/NewUser';
import ProductList from './components/ProductList';
import Sidebar from './components/Sidebar';
import UserList from './components/UserList';
import Home from './pages/Home';
import Product from './pages/Product';
import User from './pages/User';

function App() {
    return (
        <>
            <Router>
                <Header />
                <div className="wrapper">
                    <Sidebar />
                    <div className="main-content">
                        <Switch>
                            <Route path="/users">
                                <UserList />
                            </Route>
                            <Route path="/user/:userId">
                                <User />
                            </Route>
                            <Route path="/products">
                                <ProductList />
                            </Route>
                            <Route path="/product/:productId">
                                <Product />
                            </Route>
                            <Route path="/newUser">
                                <NewUser />
                            </Route>
                            <Route exact path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        </>
    );
}

export default App;
