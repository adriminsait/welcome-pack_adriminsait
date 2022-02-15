import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from 'react-router-dom';

import {
  FormikAbstraction,
  FormikBasicPage,
  FormikComponents,
  FormikYupPage,
  RegisterPage,
} from '../pages'

import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/register" className="nav-active">Register Page</NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" className="nav-active">Formik Basic</NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" className="nav-active">Formik Yup</NavLink>
            </li>
            <li>
              <NavLink to="/formik-components" className="nav-active">Formik Components</NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstractation" className="nav-active">Formik Abstractation</NavLink>
            </li>
            <li>
              <NavLink to="/users" className="nav-active">Users</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/formik-basic">
            <FormikBasicPage />
          </Route>
          <Route path="/formik-yup">
            <FormikYupPage />
          </Route>
          <Route path="/formik-components">
            <FormikComponents />
          </Route>
          <Route path="/formik-abstractation">
            <FormikAbstraction />
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}