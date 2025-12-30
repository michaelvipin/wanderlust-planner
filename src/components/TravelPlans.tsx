import { Button } from "@/components/ui/button";
import { Clock, MapPin } from "lucide-react";
import goaImage from "@/assets/goa-destination.jpg";
import keralaImage from "@/assets/kerala-destination.jpg";
import thailandImage from "@/assets/thailand-destination.jpg";

const plans = [
  {
    id: 1,
    title: "Goa Getaway",
    location: "Goa, India",
    duration: "4 Days / 3 Nights",
    price: "₹12,999",
    image: goaImage,
    description: "Beach parties, water sports, and Portuguese heritage",
  },
  {
    id: 2,
    title: "Kerala Backwaters",
    location: "Kerala, India",
    duration: "5 Days / 4 Nights",
    price: "₹18,499",
    image: keralaImage,
    description: "Houseboat cruises, Ayurveda, and lush landscapes",
  },
  {
    id: 3,
    title: "Thailand Explorer",
    location: "Bangkok & Phuket",
    duration: "6 Days / 5 Nights",
    price: "₹32,999",
    image: thailandImage,
    description: "Island hopping, Thai cuisine, and vibrant nightlife",
  },
];

const TravelPlans = () => {
  const scrollToEnquiry = () => {
    const element = document.getElementById("enquiry");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="plans" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Popular Destinations
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-2 mb-4">
            Current Travel Plans
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our handpicked destinations with all-inclusive packages designed for unforgettable experiences.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <article
              key={plan.id}
              className="card-travel group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={plan.image}
                  alt={plan.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  From {plan.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                  <MapPin className="h-4 w-4" />
                  {plan.location}
                </div>
                <h3 className="font-display text-xl font-bold text-primary mb-2">
                  {plan.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {plan.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-foreground/70">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{plan.duration}</span>
                  </div>
                  <Button variant="interest" size="sm" onClick={scrollToEnquiry}>
                    I'm Interested
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelPlans;
