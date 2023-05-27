import Layout from "./components/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import CreateStudy from "./pages/CreateStudy";
import CreateDrug from "./pages/CreateDrug";
import CreateParticipant from "./pages/CreateParticipant";
import Login from "./pages/Login";
import Dashboard from './pages/Dashboard';

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/page-one">
                    <PageOne />
                </Route>
                <Route path="/page-two">
                    <PageTwo />
                </Route>
                <Route path="/page-three">
                    <PageThree />
                </Route>
                <Route path="/createstudy">
                    <CreateStudy />
                </Route>
                <Route path="/Dashboard" component={Dashboard} />
                <Route path="/Login">
                    <Login />
                </Route>
                <Route path="/createdrug">
                    <CreateDrug />
                </Route>
                <Route path="/createparticipant">
                    <CreateParticipant />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App
