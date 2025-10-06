import { Button } from "@/components/ui/button";
import { Phone, FileText, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-pest-control.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional pest control service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 text-secondary font-semibold rounded-full">
            Clean & Healthy Living Spaces
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Your Trusted Partner in{" "}
            <span className="text-primary">Pest-Free Living</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Clean Pest Control provides safe, effective, and affordable pest management solutions across Pune.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" onClick={scrollToContact} className="bg-primary hover:bg-primary/90 shadow-lg">
              <Calendar className="mr-2 h-5 w-5" />
              Book a Service
            </Button>
            <Button size="lg" variant="outline" onClick={scrollToContact} className="shadow-lg">
              <FileText className="mr-2 h-5 w-5" />
              Get a Free Quote
            </Button>
            <Button size="lg" className="bg-accent hover:bg-accent/90 shadow-lg">
              <Phone className="mr-2 h-5 w-5" />
              8055337009
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
