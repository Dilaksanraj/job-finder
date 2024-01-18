// Import the necessary components from react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/home/home';
import Job from './components/jobs/jobs';


// Use the Router and Routes components
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/job" element={<Job />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
