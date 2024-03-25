import Banner from "../Banner/Banner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import JobCategories from "../JobCategories/JobCategories";

const Home = () => {
    return (
        <div>
            <Banner />
            <JobCategories />
            <FeaturedJobs />
        </div>
    );
};

export default Home;