import React from 'react';
import { useNavigate } from 'react-router-dom';
import DisplayJobs from './DisplayJobs.jsx';

const JobEditNavigator = ( props ) => {
    const navigate = useNavigate(); // Get navigate function using useNavigate hook

    const handleEditClick = (jobId) => {
        // Navigate to createJob page with jobId as a URL parameter
        navigate(`/EditJob/${jobId}`);
    };

    const handleCopyClick = (jobId) => {
        navigate(`/PostJob/${jobId}`);
    };

    return <DisplayJobs
        paginatedJobs={props.paginatedJobs}
        activePage={props.activePage}
        jobsPerPage={props.jobsPerPage}
        totalJobs={props.totalJobs}
        handleActivePageChange={props.handleActivePageChange}
        handleClosejob={props.handleClosejob}
        handleCopyClick={handleCopyClick}
        handleEditClick={handleEditClick} />; // Pass navigate as prop to class component
};

export default JobEditNavigator;