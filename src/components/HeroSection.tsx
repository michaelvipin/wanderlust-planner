import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-beach.mp4";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
    <div className="absolute inset-0 overflow-hidden">
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
</div>

        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom pt-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-card mb-6 animate-fade-up">
            Plan Less.
            <br />
            <span className="text-secondary">Travel More.</span>
          </h1>
          <p className="text-lg md:text-xl text-card/90 mb-8 max-w-xl animate-fade-up animation-delay-100">
            Customized travel plans for families, couples & groups. Let us handle the details while you create memories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-200">
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("enquiry")}
            >
              Enquire Now
            </Button>
            <Button
              variant="heroOutline"
              size="lg"
              onClick={() => scrollToSection("plans")}
            >
              View Current Plans
            </Button>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default HeroSection;
