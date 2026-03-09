import { Link } from "react-router-dom";
import { Sparkles, MapPin, Phone, Mail } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, WHATSAPP_LINK, WORKING_HOURS_WEEKDAYS, WORKING_HOURS_SATURDAY } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-accent" />
              <span className="font-display text-xl font-bold">
                Gleam<span className="text-accent">.</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Professional cleaning services in Ibadan, Oyo State. Making your spaces sparkle since day one.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {[
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/faq", label: "FAQ" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-primary-foreground/70 text-sm hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Services</h4>
            <div className="flex flex-col gap-3">
              {["Home Cleaning", "Office Cleaning", "Deep Cleaning", "Move-in/Move-out"].map((s) => (
                <span key={s} className="text-primary-foreground/70 text-sm">{s}</span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span>Ibadan, Oyo State, Nigeria</span>
              </div>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>{CONTACT_PHONE_DISPLAY}</span>
              </a>
              <a 
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span>{CONTACT_EMAIL}</span>
              </a>
              <div className="flex items-start gap-2 text-sm text-primary-foreground/70 pt-2 border-t border-primary-foreground/10">
                <div className="flex flex-col gap-1">
                  <p className="text-[10px] uppercase tracking-wider text-accent font-semibold">Working Hours</p>
                  <p className="text-xs">{WORKING_HOURS_WEEKDAYS}</p>
                  <p className="text-xs">{WORKING_HOURS_SATURDAY}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Gleam Cleaning Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
