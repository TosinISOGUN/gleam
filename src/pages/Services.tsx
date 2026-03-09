import { Home, Building2, Sparkles, ArrowUpDown, Clock, Paintbrush, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { WHATSAPP_LINK } from "@/lib/constants";

const services = [
  {
    icon: Home,
    title: "Home Cleaning",
    desc: "Regular or one-time cleaning for your home. We handle kitchens, bathrooms, living rooms, bedrooms — every room gets the Gleam treatment.",
    features: ["Dusting & wiping all surfaces", "Floor mopping & vacuuming", "Kitchen & bathroom sanitization", "Bed making & room tidying"],
  },
  {
    icon: Building2,
    title: "Office Cleaning",
    desc: "Keep your workplace clean and professional. A tidy office boosts productivity and leaves a great impression on clients.",
    features: ["Desk & workstation cleaning", "Restroom sanitization", "Floor care & maintenance", "Trash removal & recycling"],
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    desc: "An intensive, top-to-bottom clean for spaces that need extra love. Perfect for seasonal refreshes or special occasions.",
    features: ["Behind & under furniture", "Window & blind cleaning", "Appliance deep clean", "Grout & tile scrubbing"],
  },
  {
    icon: ArrowUpDown,
    title: "Move-in / Move-out Cleaning",
    desc: "Moving? Let us make sure your old place is spotless for the next tenant, or your new home is fresh and ready.",
    features: ["Full property cleaning", "Cabinet & closet wiping", "Wall spot cleaning", "Final inspection walkthrough"],
  },
  {
    icon: Clock,
    title: "Recurring Cleaning Plans",
    desc: "Set it and forget it. Choose weekly, bi-weekly, or monthly plans and enjoy a consistently clean space.",
    features: ["Flexible scheduling", "Consistent cleaning team", "Priority booking", "Discounted rates"],
  },
  {
    icon: Paintbrush,
    title: "Post-Construction Cleaning",
    desc: "Just finished renovating? We'll clear the dust, debris, and mess so you can enjoy your refreshed space.",
    features: ["Debris & dust removal", "Surface polishing", "Window cleaning", "Final detail inspection"],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="max-w-2xl">
              <span className="text-primary font-body font-semibold text-sm tracking-wider uppercase">
                Our Services
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
                Cleaning Solutions for Every <span className="text-primary">Space</span>
              </h1>
              <p className="text-muted-foreground font-body text-lg leading-relaxed">
                From homes to offices, we offer a full range of professional cleaning services across all major areas in Ibadan — Bodija, Jericho, Oluyole, Akobo, and beyond.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services - Alternating Sections */}
      <section>
        {services.map((service, i) => (
          <div
            key={service.title}
            className={i % 2 === 0 ? "bg-background" : "bg-secondary"}
          >
            <div className="max-w-7xl mx-auto px-6 py-16 md:px-12 lg:px-24 lg:py-20">
              <AnimatedSection delay={0.1}>
                <div className={`flex flex-col md:flex-row items-start gap-10 ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground font-body leading-relaxed mb-6 max-w-lg">
                      {service.desc}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm font-body text-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Need a Custom Cleaning Plan?
            </h2>
            <p className="text-primary-foreground/80 font-body text-lg mb-8">
              We're happy to create a tailored package that fits your needs and budget.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 rounded-lg font-semibold font-body text-base hover:opacity-90 transition-opacity"
            >
              Get a Quote <ArrowRight className="w-4 h-4" />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
