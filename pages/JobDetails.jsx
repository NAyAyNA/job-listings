import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useJobContext } from '../context/JobContext';

export default function JobDetails() {
  const { id } = useParams();
  const { selectedJob, setSelectedJob } = useJobContext();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => setSelectedJob(response.data))
      .catch((error) => console.error('Error fetching job details:', error));
  }, [id, setSelectedJob]);

  if (!selectedJob) return <p>Loading ...</p>;

  return (
    <div className="details">
      <h1>{selectedJob.title}</h1>
      <p style={{color:"white"}}>{selectedJob.body}</p>
      <Link to="/apply" state={{ job: selectedJob }} className="apply-btn">Apply Now &#8594;</Link>
    </div>
  );
}
