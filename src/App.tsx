import { Route, Routes } from "react-router-dom";
import Home from "./Screens/Home";
import Layout from "./Layout/Layout";
import About from "./Screens/About";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
