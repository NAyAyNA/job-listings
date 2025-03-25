import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useJobContext } from '../context/JobContext';

export default function Homepage() {
  const { jobs, setJobs } = useJobContext();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            setJobs(response.data);
        })
        .catch((error) => console.error('Error fetching jobs:', error));
    }, [setJobs]);
    

  return (
    <div>
        <Link to={"/about"} className="about">About</Link>
        <h1 className="">Job Listings</h1>
        {jobs.map((job) => (
            <Link to={`/jobs/${job.id}`} key={job.id} className="job">
                {job.title}
            </Link>
        ))}
    </div>
  );
}
