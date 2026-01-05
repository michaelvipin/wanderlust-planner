import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TravelPlans from "@/components/TravelPlans";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Wanderra&Co | Plan Less. Travel More. - Custom Travel Planning</title>
        <meta
          name="description"
          content="Discover personalized travel plans for families, couples & groups. Expert trip planning, honeymoon packages, group tours, and corporate travel services. Book your dream vacation today!"
        />
        <meta name="keywords" content="travel planning, custom trips, Goa, Kerala, Thailand, honeymoon packages, group tours, travel agency" />
        <link rel="canonical" href="https://wanderlusttravels.com" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <TravelPlans />
          <Services />
          <WhyChooseUs />
          <EnquiryForm />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
