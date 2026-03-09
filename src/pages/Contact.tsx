import { useState } from "react";
import { MapPin, Phone, Mail, Send, Clock, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, WHATSAPP_LINK, WORKING_HOURS_WEEKDAYS, WORKING_HOURS_SATURDAY } from "@/lib/constants";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent! We'll get back to you shortly.");
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    }, 1500);
  };

  return (
    <Layout>
      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="max-w-2xl">
              <span className="text-primary font-body font-semibold text-sm tracking-wider uppercase">
                Contact Us
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
                Let's Make Your Space <span className="text-primary">Gleam</span>
              </h1>
              <p className="text-muted-foreground font-body text-lg leading-relaxed">
                Ready to book a cleaning or have questions? Fill out the form below or reach out directly. We'd love to hear from you.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <AnimatedSection className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-body text-sm font-medium text-foreground mb-2">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                      placeholder="Your name"
                      maxLength={100}
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-foreground mb-2">
                      Email Address <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                      placeholder="you@example.com"
                      maxLength={255}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-body text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                      placeholder={CONTACT_PHONE_DISPLAY}
                      maxLength={20}
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-foreground mb-2">
                      Service Needed
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                    >
                      <option value="">Select a service</option>
                      <option value="home">Home Cleaning</option>
                      <option value="office">Office Cleaning</option>
                      <option value="deep">Deep Cleaning</option>
                      <option value="move">Move-in/Move-out</option>
                      <option value="recurring">Recurring Plan</option>
                      <option value="post-construction">Post-Construction</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-body text-sm font-medium text-foreground mb-2">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow resize-none"
                    placeholder="Tell us about your space and what you need..."
                    maxLength={1000}
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold font-body text-base hover:opacity-90 transition-opacity flex items-center gap-2 disabled:opacity-50"
                >
                  {sending ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection delay={0.2} className="lg:col-span-2">
              <div className="glass-card p-8 space-y-8">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Get in Touch
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-foreground text-sm">Location</h4>
                      <p className="text-muted-foreground font-body text-sm mt-1">
                        Ibadan, Oyo State, Nigeria
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-foreground text-sm">Phone</h4>
                      <p className="text-muted-foreground font-body text-sm mt-1">
                        {CONTACT_PHONE_DISPLAY}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-foreground text-sm">WhatsApp</h4>
                      <a 
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-body text-sm mt-1 block font-medium"
                      >
                        Chat with us now
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-foreground text-sm">Email</h4>
                      <p className="text-muted-foreground font-body text-sm mt-1">
                        {CONTACT_EMAIL}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-foreground text-sm">Working Hours</h4>
                      <p className="text-muted-foreground font-body text-sm mt-1">
                        {WORKING_HOURS_WEEKDAYS}
                        <br />
                        {WORKING_HOURS_SATURDAY}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
