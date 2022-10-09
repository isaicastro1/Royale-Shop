import Home from "./routes/home/home";
import { Route, Routes, Outlet } from "react-router-dom";

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const Navigation = () => {
  return (
    <div>
      <div>
        <h1>I am the nav bar</h1>
      </div>
      <Outlet />
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
