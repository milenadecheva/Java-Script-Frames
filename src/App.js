import { Container, Row } from 'react-bootstrap';
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import Songs from "./pages/Songs";
import Conserts from "./pages/Conserts";
import {ThemeProvider} from "./ThemeContext";
import Favorites from "./pages/Favorites";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const routes = [
  {
    path: '/',
    component: <Home/>,
    exact: true,
  },
  {
    path: '/songs',
    component: <Songs/>,
  },
  {
    path: 'conserts',
    component: <Conserts/>,
  },
  {
    path: 'favorites',
    component: <Favorites/>,
  }
]

function App() {

  const getRoutes = () => {
    return routes.map((route, index) => {
      return <Route 
        key={index}
        exact={route.exact}
        path={route.path}
        element={route.component}
        />
    })
  }

  return (
    <ThemeProvider>
      <Router>
        <NavBar/>
        <Container>
          <Row className="mt-5">
            <Routes>
              {getRoutes()}
            </Routes>
          </Row>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
