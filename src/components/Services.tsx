import { Card } from "@/components/ui/card";
import antsImage from "@/assets/service-ants.jpg";
import bedbugsImage from "@/assets/service-bedbugs.jpg";
import cockroachImage from "@/assets/service-cockroach.jpg";
import rodentImage from "@/assets/service-rodent.jpg";
import termiteImage from "@/assets/service-termite.jpg";
import waspsImage from "@/assets/service-wasps.jpg";
import { Bug, BedDouble, Shield, Rat, Home, Flower2 } from "lucide-react";

const services = [
  {
    title: "Ant Exterminators",
    description: "Complete ant colony elimination with long-lasting protection",
    image: antsImage,
    icon: Bug,
  },
  {
    title: "Bed Bug Exterminators",
    description: "Thorough bedroom treatment and mattress disinfection",
    image: bedbugsImage,
    icon: BedDouble,
  },
  {
    title: "Cockroach Control",
    description: "Effective treatment for insects, mosquitoes, and termites",
    image: cockroachImage,
    icon: Shield,
  },
  {
    title: "Rodent Exterminators",
    description: "Safe and humane rodent removal and prevention",
    image: rodentImage,
    icon: Rat,
  },
  {
    title: "Termite Exterminators",
    description: "Advanced termite treatment and wood protection",
    image: termiteImage,
    icon: Home,
  },
  {
    title: "Bees, Wasps & Hornets",
    description: "Professional nest removal and outdoor pest control",
    image: waspsImage,
    icon: Flower2,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive pest control solutions for every type of infestation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
