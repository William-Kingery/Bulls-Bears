import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login'
import './App.scss';

function App() {
  return (
    <div className="app">
			<BrowserRouter>
				<Routes>
					{/* <Route path="/" element={<Home />} /> */}
					<Route path="/login" element={<Login />} />
				</Routes>
			</BrowserRouter>
		</div>
    
  );
}

export default App;
