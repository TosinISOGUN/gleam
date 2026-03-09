import { Shield, Heart, Users, Target, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import aboutImage from "@/assets/about-team.jpg";
import { SERVICE_AREAS } from "@/lib/constants";

const values = [
  { icon: Shield, title: "Trust & Reliability", desc: "We show up on time, every time. Your space and belongings are safe with us." },
  { icon: Heart, title: "Passion for Clean", desc: "We genuinely love what we do, and it shows in the quality of our work." },
  { icon: Users, title: "Client-First", desc: "Your satisfaction drives every decision we make. We listen, adapt, and deliver." },
  { icon: Target, title: "Attention to Detail", desc: "No corner left untouched. We clean with precision and thoroughness." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="max-w-2xl">
              <span className="text-primary font-body font-semibold text-sm tracking-wider uppercase">
                About Us
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
                The Story Behind the <span className="text-primary">Sparkle</span>
              </h1>
              <p className="text-muted-foreground font-body text-lg leading-relaxed">
                Gleam Cleaning Co. was founded with a simple belief — everyone deserves a clean, healthy space. Based in Ibadan, Oyo State, we've been helping homes and offices shine since our founding.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <img
                src={aboutImage}
                alt="Gleam cleaning team"
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                From a Small Team to Ibadan's Trusted Cleaners
              </h2>
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p>
                  What started as a small team with big dreams has grown into one of Ibadan's most trusted cleaning services. We understood early on that a clean environment isn't just about aesthetics — it's about health, productivity, and peace of mind.
                </p>
                <p>
                  Every member of our team is carefully trained, vetted, and equipped with professional-grade, eco-friendly cleaning products. We take pride in our work and treat every space as if it were our own.
                </p>
                <p>
                  Whether it's a cozy apartment in Bodija, a busy office in Ring Road, or a large family home in Jericho — we bring the same level of dedication and attention to detail to every job.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-primary">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-primary-foreground/70 font-body font-semibold text-sm tracking-wider uppercase">
                Our Reach
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mt-3">
                Areas We Serve in Ibadan
              </h2>
              <p className="text-primary-foreground/70 font-body mt-4 max-w-xl mx-auto">
                We proudly serve homes and offices across all major areas in Ibadan, Oyo State.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {SERVICE_AREAS.map((area, i) => (
              <AnimatedSection key={area} delay={i * 0.05}>
                <div className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-xl px-5 py-4 hover:bg-primary-foreground/15 transition-colors">
                  <MapPin className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-primary-foreground font-body text-sm font-medium">
                    {area}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <p className="text-center text-primary-foreground/50 font-body text-xs mt-8 uppercase tracking-wider">
              Don't see your area? Contact us — we likely cover it too!
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-primary font-body font-semibold text-sm tracking-wider uppercase">
                Our Values
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
                What Drives Us
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <v.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {v.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
