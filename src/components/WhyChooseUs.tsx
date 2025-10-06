import { Shield, Leaf, DollarSign, Zap, Building2, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Certified & Experienced Team",
    description: "Trained professionals with industry certifications",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly & Safe Chemicals",
    description: "Using only approved, environment-friendly products",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Transparent pricing with no hidden costs",
  },
  {
    icon: Zap,
    title: "Fast & Effective Results",
    description: "Quick response time with lasting solutions",
  },
  {
    icon: Building2,
    title: "Residential & Commercial",
    description: "Complete pest control for homes and businesses",
  },
  {
    icon: Phone,
    title: "24x7 Support Availability",
    description: "Always here when you need us most",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the difference with our professional pest control services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                <feature.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
