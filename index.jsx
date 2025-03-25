// App.jsx
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { JobProvider } from './context/JobContext';
import Homepage from './pages/Homepage';
import JobDetails from './pages/JobDetails';
import JobApplication from './pages/JobApplication';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Success from './pages/Success';

export default function App() {
  return (
    <JobProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
          <Route path="/apply" element={<JobApplication />} />
          <Route path="/success" element={<Success />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </JobProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)