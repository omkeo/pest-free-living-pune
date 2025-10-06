import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingPlans = [
  { type: "1 RK", price: "699" },
  { type: "1 BHK", price: "899" },
  { type: "2 BHK", price: "999" },
  { type: "3 BHK", price: "1299" },
  { type: "4 BHK", price: "1499" },
];

const Pricing = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Affordable Pest Control Plans</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Choose a plan that fits your home and enjoy complete protection all year round
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-xl transition-all hover:scale-105"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-2">{plan.type}</h3>
                <div className="text-4xl font-bold text-primary mb-1">
                  ₹{plan.price}
                </div>
                <p className="text-sm text-muted-foreground">per month</p>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-center text-sm">
                  <Check className="h-4 w-4 text-secondary mr-2" />
                  <span>Full Coverage</span>
                </div>
                <div className="flex items-center justify-center text-sm">
                  <Check className="h-4 w-4 text-secondary mr-2" />
                  <span>Eco-Friendly</span>
                </div>
                <div className="flex items-center justify-center text-sm">
                  <Check className="h-4 w-4 text-secondary mr-2" />
                  <span>24/7 Support</span>
                </div>
              </div>
              <Button onClick={scrollToContact} className="w-full">
                Choose Plan
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
