import Banner from "../../Components/Banner/Banner";
import Brand from "../../Components/Brand/Brand";
import Categories from "../../Components/Categories/Categories";
import Client from "../../Components/Client/Client";
import Product from "../../Components/Product/Product";
import Recent from "../../Components/Recent/Recent";
import Delivery from "../../Components/Delivery/Delivery";
import Features from "../../Components/Features/Features";

const Home = () => {
    return (
        <div className="w-full  bg-[#f9fafb]"> {/* Light background for overall page */}

            {/* Banner */}
            <section className="w-full bg-[#f0f2f3] py-16 sm:py-20 md:py-24 lg:py-32 rounded-b-3xl">
                <div className="max-w-screen-xl mx-auto px-6 md:px-8">
                    <Banner />
                </div>
            </section>

            {/* Delivery */}
            <section className="w-full py-12 sm:py-14 bg-white shadow-lg rounded-lg mb-10">
                <div className="max-w-screen-xl mx-auto px-6 md:px-8">
                    <Delivery />
                </div>
            </section>

            {/* Brand */}
            <section className="w-full py-12 sm:py-14 bg-[#f9fafb]">
                <div className="max-w-screen-xl mx-auto px-6 md:px-8">
                    <Brand />
                </div>
            </section>

            {/* Features */}
            <section className="w-full py-16 sm:py-20 bg-white shadow-lg rounded-lg mb-10">
                <div className="max-w-screen-xl mx-auto px-6 md:px-8">
                    <Features />
                </div>
            </section>

            {/* Categories */}
            <section className="w-full py-16 sm:py-20 bg-[#f9fafb]">
                <div className="max-w-screen-xl mx-auto px-6 md:px-8">
                    <Categories />
                </div>
            </section>

            {/* Products */}
            <section className="w-full py-16 sm:py-20 bg-white shadow-lg rounded-lg mb-10">
                <div className="max-w-screen-xl mx-auto px-6 md:px-8">
                    <Product />
                </div>
            </section>

            {/* Client Testimonials */}
            <section className="w-full bg-[#f0f2f3] py-16 sm:py-20">
                <div className="max-w-screen-xl mx-auto px-6 md:px-8">
                    <Client />
                </div>
            </section>

            {/* Recently Added */}
            <section className="w-full py-16 sm:py-20 bg-white shadow-lg rounded-lg mb-16">
                <div className="max-w-screen-xl mx-auto px-6 md:px-8">
                    <Recent />
                </div>
            </section>

        </div>
    );
};

export default Home;
