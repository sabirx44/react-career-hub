import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import JobCategories from "../JobCategories/JobCategories";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>CareerHub | Home</title>
            </Helmet>
            <Banner />
            <JobCategories />
            <FeaturedJobs />
        </div>
    );
};

export default Home;