import { Compass, Users, Heart, Briefcase, Building } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Customized Trip Planning",
    description: "Tailored itineraries designed around your preferences, budget, and travel style.",
  },
  {
    icon: Users,
    title: "Group Tours",
    description: "Join our curated group trips and make new friends while exploring amazing destinations.",
  },
  {
    icon: Heart,
    title: "Honeymoon Packages",
    description: "Romantic getaways crafted for couples to celebrate love in stunning locations.",
  },
  {
    icon: Briefcase,
    title: "Corporate Travel Planning",
    description: "Seamless business travel arrangements and team retreat organization.",
  },
  {
    icon: Building,
    title: "Hotel & Transport Booking",
    description: "Best deals on accommodations and hassle-free transportation arrangements.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-muted">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-2 mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From planning to booking, we handle every aspect of your journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
                <service.icon className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
