import "./App.css";
import HomePageComponent from "./components/homepage/homepage";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpcomingEvents from "./components/upcomingEvents/upcomingEvents";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageComponent />}></Route>
        <Route path="/upcomingEvents" element={<UpcomingEvents />}></Route>
        <Route path="/previousEvents" element={<HomePageComponent />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
