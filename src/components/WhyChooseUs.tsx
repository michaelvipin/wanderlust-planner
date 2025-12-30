import { CheckCircle, Shield, MapPin, Headphones } from "lucide-react";

const reasons = [
  {
    icon: CheckCircle,
    title: "Personalized Itineraries",
    description: "Every trip is designed specifically for you, matching your interests and travel style perfectly.",
  },
  {
    icon: Shield,
    title: "Transparent Pricing",
    description: "No hidden fees or surprise costs. What we quote is what you pay, guaranteed.",
  },
  {
    icon: MapPin,
    title: "Local Travel Experts",
    description: "Our team has firsthand experience at every destination, ensuring authentic recommendations.",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description: "We're always available during your trip, ensuring peace of mind wherever you go.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Trusted by Travelers
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Why Choose Us
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            We're committed to making your travel dreams come true with exceptional service and attention to detail.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="text-center p-6 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <reason.icon className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-display text-lg font-bold mb-3">
                {reason.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
