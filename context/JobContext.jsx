import React, { useState, createContext, useContext } from 'react';

const JobContext = createContext();

export function JobProvider({ children }) {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <JobContext.Provider value={{ jobs, setJobs, selectedJob, setSelectedJob }}>
      {children}
    </JobContext.Provider>
  );
}

export function useJobContext() {
  return useContext(JobContext);
}
