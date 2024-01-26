import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Contact, Home, Members, Rush, NotFound } from './pages';

export const Navigation = () => {
    return (
        <Router> 
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/rush" element={<Rush />} />
                <Route path="/members" element={<Members />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}