import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Akash JT Thor",
    review: "Excellent service! The team handled the pest issue professionally and ensured complete cleanliness after the job.",
  },
  {
    name: "Rahul Kadam",
    review: "Very satisfied with the quick response and effective treatment. Highly recommend their pest control services.",
  },
  {
    name: "Sahil Rathord",
    review: "Great experience! The staff was polite, punctual, and did a thorough inspection before starting the work.",
  },
  {
    name: "Gaurav Maskhe",
    review: "Impressive results within a short time. Their eco-friendly methods really make a difference.",
  },
  {
    name: "Sunil Vayal",
    review: "Reliable and affordable service. I haven't seen a single pest since their visit — truly worth it!",
  },
  {
    name: "Pradnya Thakre",
    review: "Professional team with excellent customer support. They explained every step clearly and delivered great results.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Real feedback from satisfied customers across Pune
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "{testimonial.review}"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">Verified Customer</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
