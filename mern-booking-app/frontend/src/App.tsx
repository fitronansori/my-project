import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <h1>Home</h1>
            </Layout>
          }
        />
        <Route
          path="/sign-in"
          element={
            <Layout>
              <h1>Sign In</h1>
            </Layout>
          }
        />

        <Route
          path="/register"
          element={
            <Layout>
              <h1>Register</h1>
            </Layout>
          }
        />
        <Route path="*" element={<h1>adsasas</h1>} />
      </Routes>
    </Router>
  );
};
export default App;
