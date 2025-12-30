import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Send, CheckCircle } from "lucide-react";

const destinations = [
  "Goa, India",
  "Kerala, India",
  "Thailand",
  "Bali, Indonesia",
  "Maldives",
  "Dubai, UAE",
  "Singapore",
  "Europe Tour",
  "Other",
];

const EnquiryForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    destination: "",
    travelDate: "",
    travelers: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const res = await fetch("http://localhost:5000/api/enquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) throw new Error("Failed");

    toast({
      title: "Enquiry Submitted!",
      description: "Our travel expert will contact you within 24 hours.",
    });

    setIsSubmitted(true);

    setFormData({
      fullName: "",
      phone: "",
      email: "",
      destination: "",
      travelDate: "",
      travelers: "",
      message: "",
    });
  } catch (err) {
    toast({
      title: "Submission Failed",
      description: "Please try again.",
      variant: "destructive",
    });
  } finally {
    // 🔥 THIS IS NON-NEGOTIABLE
    setIsSubmitting(false);
  }
};


  if (isSubmitted) {
    return (
      <section id="enquiry" className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-card rounded-3xl p-12 shadow-card">
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
                <CheckCircle className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-primary mb-4">
                Thank You!
              </h3>
              <p className="text-muted-foreground">
                Your travel enquiry has been received. Our travel expert will get in touch with you within 24 hours to plan your perfect trip.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="enquiry" className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Start Your Journey
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-2 mb-4">
              Get Your Travel Plan
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Fill out the form below and our travel experts will craft the perfect itinerary for you.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-6 md:p-10 shadow-card">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label htmlFor="fullName" className="text-sm font-medium text-foreground">
                  Full Name *
                </label>
                <Input
                  id="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                  className="h-12 rounded-xl"
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Phone Number *
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="h-12 rounded-xl"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email Address *
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12 rounded-xl"
                />
              </div>

              {/* Destination */}
              <div className="space-y-2">
                <label htmlFor="destination" className="text-sm font-medium text-foreground">
                  Destination Interested In *
                </label>
                <Select
                  value={formData.destination}
                  onValueChange={(value) => setFormData({ ...formData, destination: value })}
                  required
                >
                  <SelectTrigger className="h-12 rounded-xl">
                    <SelectValue placeholder="Select destination" />
                  </SelectTrigger>
                  <SelectContent className="bg-card">
                    {destinations.map((dest) => (
                      <SelectItem key={dest} value={dest}>
                        {dest}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Travel Date */}
              <div className="space-y-2">
                <label htmlFor="travelDate" className="text-sm font-medium text-foreground">
                  Preferred Travel Date *
                </label>
                <Input
                  id="travelDate"
                  type="date"
                  value={formData.travelDate}
                  onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                  required
                  className="h-12 rounded-xl"
                />
              </div>

              {/* Number of Travelers */}
              <div className="space-y-2">
                <label htmlFor="travelers" className="text-sm font-medium text-foreground">
                  Number of Travelers *
                </label>
                <Input
                  id="travelers"
                  type="number"
                  min="1"
                  placeholder="2"
                  value={formData.travelers}
                  onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                  required
                  className="h-12 rounded-xl"
                />
              </div>

              {/* Message */}
              <div className="md:col-span-2 space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Additional Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your dream trip, preferences, or any special requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[120px] rounded-xl resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 text-center">
              <Button
                type="submit"
                variant="accent"
                size="lg"
                disabled={isSubmitting}
                className="min-w-[200px]"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin h-5 w-5 border-2 border-accent-foreground border-t-transparent rounded-full" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Get My Travel Plan
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
