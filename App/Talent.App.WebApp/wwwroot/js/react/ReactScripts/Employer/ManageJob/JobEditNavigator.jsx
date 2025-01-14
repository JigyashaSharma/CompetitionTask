import React from 'react';
import { useNavigate } from 'react-router-dom';
import DisplayJobs from './DisplayJobs.jsx';

const JobEditNavigator = ( props ) => {
    const navigate = useNavigate(); // Get navigate function using useNavigate hook

    const handleEditClick = (jobId) => {
        if (jobId) {
            // Navigate to createJob page with jobId as a URL parameter
            navigate(`/EditJob/${jobId}`);
        } else {
            TalentUtil.notification.show("Edit Job Id Missing", "error", null, null);
        }
    };

    const handleCopyClick = (jobId) => {
        if (jobId) {
            navigate(`/PostJob/${jobId}`);
        } else {
            TalentUtil.notification.show("Copy Job Id Missing", "error", null, null);
        }
        
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