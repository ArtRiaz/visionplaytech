import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './components/Header/Header.jsx';
import Cover from './components/Cover/Cover.jsx';
import Projects from './components/Projects/Projects.jsx';
import About from './components/About/About.jsx';
import Goals from './components/Goals/Goals.jsx';
import MyForm from './components/MyForm/MyForm.jsx';
import Footer from './components/Footer/Footer.jsx';
import Policy from './components/Policy/Policy.jsx'; 

const theme = createTheme({
	typography: {
		fontFamily: '"FMTS", "Roboto", "Helvetica", "Arial", sans-serif',
	},
});


function App() {

	return (
		<Router>
			<ThemeProvider theme={theme}>
					<Header />
					<div className='main'>
						<Routes>
							<Route
								path='/'
								element={
									<>
										<Cover />
										<Projects />
										<About />
										<Goals />
										<MyForm />
									</>
								}
							/>
							<Route path='/policy' element={<Policy />} />
						</Routes>
					</div>
					<Footer />
			</ThemeProvider>
		</Router>
	);
}

export default App;
