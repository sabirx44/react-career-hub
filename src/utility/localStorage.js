// Function to retrieve stored job applications from localStorage
const getStoredJobApplications = () => {
    // Retrieve job applications from localStorage
    const storedJobApplications = localStorage.getItem('job-applications');
    
    // Check if there are any stored job applications
    if (storedJobApplications) {
        // Parse the stored data from JSON format
        return JSON.parse(storedJobApplications);
    }
    
    // If no data is found, return an empty array
    return [];
}

// Function to save a new job application
const saveJobApplication = id => {
    // Retrieve existing job applications
    const storedJobApplications = getStoredJobApplications();
    
    // Check if the provided id already exists in the stored applications
    const exists = storedJobApplications.includes(id);
    
    // If the id doesn't exist, add it to the stored applications
    if (!exists) {
        storedJobApplications.push(id);
        
        // Update the localStorage with the updated applications
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplications));
    }
}

// Export the functions to be used in other parts of the code
export { getStoredJobApplications, saveJobApplication };