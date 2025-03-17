import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DarkModeProvider } from "./components/DarkModeContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Rentals from "./pages/Rentals";
import Testimonials from "./pages/Testimonials";
import Support from "./pages/Support";
import Contact from "./pages/Contact";
import More from "./pages/More";
import Settings from "./pages/Settings";
import SavedListings from "./pages/SavedListings";
import PostProperty from "./pages/Postproperty"; // Correct casing

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <Navbar />
        <div className="pt-16">
          <Routes>
            <Route path="/postproperty" element={<PostProperty />} />
            <Route path="/new_login" element={<iframe
              src="/new_login.html"
              title="New Login"
              width="100%"
              height="800px" // Adjust height as needed
            />} /> {/* Correctly rendering new_login.html */}




            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/rentals" element={<Rentals />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/support" element={<Support />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/more" element={<More />} />
            <Route path="/savedlistings" element={<SavedListings />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
