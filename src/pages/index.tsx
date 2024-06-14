import Banner from "../shared/components/Banner/Banner.tsx";
import InfoSection from "../shared/components/InfoSection/InfoSection.tsx";
import Navbar from "../shared/components/Navbar/Navbar.tsx";
import OurService from "../shared/components/OurServices/OurService.tsx";

function LandingPage() {

    return (
    <>
        <Navbar/>
        <Banner/>
        <InfoSection/>
        <OurService/>
    </>
    );
}

export default LandingPage;