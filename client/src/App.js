import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Dashboard />} />
				</Routes>
			</BrowserRouter>
		</div>
    
  );
}

export default App;
