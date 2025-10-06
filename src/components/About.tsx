import { Shield, Target, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">About Clean Pest Control</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground mb-8 text-center">
            Clean Pest Control offers reliable, eco-friendly pest control services in Pune. Our expert team ensures safe and long-lasting protection from pests using advanced methods and approved products.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="p-6 text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Safe & Certified</h3>
              <p className="text-sm text-muted-foreground">
                Using only approved, eco-friendly products
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Our Mission</h3>
              <p className="text-sm text-muted-foreground">
                Creating cleaner, safer, pest-free living spaces
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Expert Team</h3>
              <p className="text-sm text-muted-foreground">
                Experienced professionals you can trust
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
