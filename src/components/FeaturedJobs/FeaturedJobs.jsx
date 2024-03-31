import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            <div className="text-center">
                <h2 className="text-5xl">Featured Jobs: {jobs.length}</h2>
                <p>
                    Explore thousands of job opportunities with all the information you need. Its your future.
                </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={`text-center ${dataLength === jobs.length ? 'hidden' : ''}`}>
                <button
                    onClick={() => setDataLength(jobs.length)}
                    className="btn btn-primary"
                >
                    See All Jobs
                </button>
            </div>
        </div>
    );
};

export default FeaturedJobs;

/*
import React, { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);
    const [showAll, setShowAll] = useState(false);
    const [buttonText, setButtonText] = useState('See All Jobs');

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    const handleButtonClick = () => {
        setShowAll(!showAll);
        setButtonText(showAll ? 'See All Jobs' : 'See Less');
        setDataLength(showAll ? 4 : jobs.length);
    };

    return (
        <div>
            <div className="text-center">
                <h2 className="text-5xl">Featured Jobs: {jobs.length}</h2>
                <p>
                    Explore thousands of job opportunities with all the information you need. Its your future.
                </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className="text-center">
                <button
                    onClick={handleButtonClick}
                    className="btn btn-primary"
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default FeaturedJobs;

import React, { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [showAllJobs, setShowAllJobs] = useState(false);
  const [initialJobsToShow] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const handleToggleShowAllJobs = () => {
    setShowAllJobs((prevState) => !prevState);
  };

  const jobsToDisplay = showAllJobs ? jobs : jobs.slice(0, initialJobsToShow);

  return (
    <div>
      <div className="text-center">
        <h2 className="text-5xl">Featured Jobs: {jobs.length}</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. It's your future.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {jobsToDisplay.map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={handleToggleShowAllJobs}
          className="btn btn-primary"
        >
          {showAllJobs ? "Show Less" : "Show All"}
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
*/