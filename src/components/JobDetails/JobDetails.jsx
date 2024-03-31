import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt); 
    
    const handleApplyJob = () => {
        saveJobApplication(idInt);
        toast.success('You have applied successfully!');
    }

    return (
        <div>
            <div className="grid gap-6 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2 className="text-4xl">Details coming here</h2>
                    <h2>Job Details of: {job.job_title}</h2>
                </div>
                <div className="border">
                    <h2 className="text-2xl">Side thing</h2>
                    <button onClick={handleApplyJob} className="btn btn-primary">Apply Now</button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default JobDetails;