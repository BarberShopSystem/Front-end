import AboutUs from "../shared/components/AboutUs/AboutUs.tsx";
import Banner from "../shared/components/Banner/Banner.tsx";
import InfoSection from "../shared/components/InfoSection/InfoSection.tsx";
import Navbar from "../shared/components/Navbar/Navbar.tsx";
import OurService from "../shared/components/OurServices/OurService.tsx";
import SecondaryBanner from "../shared/components/SecondaryBanner/SecondaryBanner.tsx";

function LandingPage() {

    return (
    <>
        <Navbar/>
        <Banner/>
        <InfoSection/>
        <OurService/>
        <SecondaryBanner/>
        <AboutUs/>
    </>
    );
}

export default LandingPage;