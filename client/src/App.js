import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from './pages/Login/Login';
import Signup from "./pages/Signup/Signup";
import News from "./pages/News/News";
import './App.scss';

function App() {
   return (
      <div className="app">
			<BrowserRouter>
				<Routes>
               		<Route path="/home" element={<Home />} />
					<Route path="/" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/news" element={<News />} />
				</Routes>
			</BrowserRouter>
		</div>
    
  );
}

export default App;
