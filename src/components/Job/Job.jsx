
import PropTypes from 'prop-types';

const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, salary } = job;
    return (
        <div className="card card-compact bg-base-100 border">
            <figure className="p-4"><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <p>{remote_or_onsite}</p>
                <div className="inline-flex justify-between items-center" >
                    <div className="inline-flex items-center gap-2"><img src="/src/assets/icons/location2.png" /><span>{location}</span></div>
                    <div className="inline-flex items-center gap-2"><img src="/src/assets/icons/money2.png" /><span>{salary}</span></div>
                </div>
                <div className="card-actions justify-start">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

// Define prop types for the Job component
Job.propTypes = {
    job: PropTypes.shape({
        logo: PropTypes.string.isRequired,
        job_title: PropTypes.string.isRequired,
        company_name: PropTypes.string.isRequired,
        remote_or_onsite: PropTypes.string.isRequired, // Assuming remote_or_onsite is a string, adjust if it's not
        location: PropTypes.string.isRequired,
        salary: PropTypes.string.isRequired // Assuming salary is a string, adjust if it's not
    }).isRequired
};

export default Job;