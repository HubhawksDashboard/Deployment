import './App.css';
import LandingPage from './landingpage';
import ResponsiveAppBar from './components/menu'
import Services from './components/Services';
import About from './components/About';
import  Editing  from './Dashboard_author/Editing';
import Appl from './components/stepper';
import Contact from './components/contact';
import Home from './components/signup';
import Signin from './components/signin';
import Signup from './components/signup';
import { useEffect, useState } from "react";
import Blog from './components/Blog';
import Partnerus from './components/Partnerus';
import { Route, Routes ,Navigate} from 'react-router-dom';
import Dashboard_au from './Dashboard_author/Dashboard_author';
import CoverDesigning from './Dashboard_author/CoverDesigning';
import Translation from './Dashboard_author/Translation';
import GhostWriting from './Dashboard_author/GhostWriting';
import AmazonAds from './Dashboard_author/AmazonAds';
import BookReviews from './Dashboard_author/BookReviews';
import BookTrailer from './Dashboard_author/BookTrailer';
import BookStore from './Dashboard_author/BookStore';
import Blog1 from './components/Blog1';
import Blog3 from './components/Blog3';
import Blog2 from './components/Blog2';
import Blog4 from './components/Blog4';
import Faq from './Dashboard_author/Faq'
function App() {
	const user = localStorage.getItem("token");
	const [use, setUser] = useState(null);

	useEffect(() => {
	  const getUser = () => {
		fetch("https://localhost:8080/auth/login/success", {
		  method: "GET",
		  credentials: "include",
		  headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			"Access-Control-Allow-Credentials": true,
		  },
		})
		  .then((response) => {
			if (response.status === 200) return response.json();
			throw new Error("authentication has been failed!");
		  })
		  .then((resObject) => {
			setUser(resObject.user);
		  })
		  .catch((err) => {
			console.log(err);
		  });
	  };
	  getUser();
	}, []);
	console.log(JSON.stringify(use));
  return (
	  <div className="App">
		  <Routes>
		  {user && <Route path="/r" exact element={<Dashboard_au />} /> }
			  <Route path='/' element={<LandingPage />} />
			  <Route path='Home' element={<LandingPage />} />
			  <Route path='Services' element={<Services />} />
			  <Route path='Sign in' element={use?<Signin />:<Signin />} />
			  <Route path='Blog' element={<Blog />} />
			  <Route path='About' element={<About />} />
			  <Route path='Signup' element={<Signup />} />
			  <Route path='Contact' element={<Contact />} />
			  <Route path='Partnerus' element={<Partnerus />} />
			  <Route path='dashboard_au' element={<Dashboard_au />} />
			  <Route path="Editing" element={<Editing />} />
			  <Route path="CoverDesigning" element={<CoverDesigning />} />
			  <Route path="Translation" element={<Translation />} />
			  <Route path="GhostWriting" element={<GhostWriting />} />
			  <Route path="AmazonAds" element={<AmazonAds />} />
			  <Route path="BookReviews" element={<BookReviews />} />
			  <Route path="BookTrailer" element={<BookTrailer />} />
			  <Route path="BookStore" element={<BookStore />} />
			  <Route path="blog1" element={<Blog1 />} />
			  <Route path="blog3" element={<Blog3 />} />
			  <Route path="blog2" element={<Blog2 />} />
			  <Route path="blog4" element={<Blog4 />} />
			  <Route path="Faq" element={<Faq/>}/>
 		</Routes> 
		  
		 
    </div>
  );
}

export default App;
