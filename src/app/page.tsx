"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Award,
  CheckCircle,
  Star,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Hammer,
  Home,
  Layers,
  Grid3X3,
  CloudLightning,
  Droplets,
  FileCheck,
  DollarSign,
  Users,
  ThumbsUp,
  HardHat,
  Wrench,
  BadgeCheck,
  CircleDollarSign,
  CreditCard,
  Banknote,
  Send,
  Facebook,
  Instagram,
  Linkedin,
  ChevronDown,
  Mountain,
} from "lucide-react";

/* ─────────────────────── NAVBAR ─────────────────────── */
function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Why Us", href: "#why-us" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Financing", href: "#financing" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/95 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <Mountain className="w-8 h-8 text-amber-500 group-hover:text-amber-400 transition-colors" />
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold text-white tracking-tight">
                SummitRoof
              </span>
              <span className="text-[10px] font-semibold tracking-[0.3em] text-amber-500 uppercase">
                Pro
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-amber-500 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+13035550199"
              className="flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-semibold">(303) 555-0199</span>
            </a>
            <a
              href="#contact"
              className="bg-amber-500 hover:bg-amber-600 text-gray-950 px-6 py-2.5 rounded-lg font-bold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/25"
            >
              Free Inspection
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-gray-300 hover:text-amber-500 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-gray-950/98 backdrop-blur-md border-t border-gray-800">
          <div className="px-4 py-6 space-y-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-gray-300 hover:text-amber-500 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-800 space-y-3">
              <a
                href="tel:+13035550199"
                className="flex items-center gap-2 text-amber-500"
              >
                <Phone className="w-4 h-4" />
                <span className="font-semibold">(303) 555-0199</span>
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block text-center bg-amber-500 hover:bg-amber-600 text-gray-950 px-6 py-3 rounded-lg font-bold transition-all"
              >
                Free Inspection
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

/* ─────────────────────── HERO ─────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gray-950">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-950/90 to-gray-950" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-amber-500/5 to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-orange-500/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-amber-500" />
              <span className="text-amber-500 text-sm font-semibold">
                Denver&apos;s Most Trusted Roofer
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] mb-6">
              Protect Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                Home
              </span>{" "}
              From The Top
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-xl leading-relaxed">
              Expert roofing solutions built to withstand Colorado&apos;s
              toughest weather. From hailstorms to heavy snow, we&apos;ve got
              you covered.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-gray-950 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/25 animate-pulse-glow"
              >
                Get Free Inspection
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+13035550199"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-700 hover:border-amber-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                (303) 555-0199
              </a>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "25+", label: "Years Experience" },
                { value: "5,000+", label: "Roofs Completed" },
                { value: "4.9", label: "Star Rating" },
              ].map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-black text-amber-500">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Feature card */}
          <div className="hidden lg:block animate-slide-in-right">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl blur-sm opacity-30" />
              <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-8 space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center">
                    <HardHat className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Complete Roofing Services
                    </h3>
                    <p className="text-sm text-gray-500">
                      Residential & Commercial
                    </p>
                  </div>
                </div>

                {[
                  "Free Comprehensive Inspection",
                  "Storm Damage Assessment",
                  "Insurance Claim Assistance",
                  "Lifetime Workmanship Warranty",
                  "Financing Options Available",
                  "Licensed & Fully Insured",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span className="text-gray-300 text-sm font-medium">
                      {item}
                    </span>
                  </div>
                ))}

                <div className="pt-4 border-t border-gray-800">
                  <a
                    href="#contact"
                    className="block text-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-gray-950 py-3 rounded-xl font-bold transition-all duration-300"
                  >
                    Schedule Your Free Estimate
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-600" />
      </div>
    </section>
  );
}

/* ─────────────────────── SERVICES ─────────────────────── */
function Services() {
  const services = [
    {
      icon: Home,
      title: "Shingle Roofing",
      desc: "Premium architectural shingles with superior wind and impact resistance. Multiple styles and colors available.",
    },
    {
      icon: Layers,
      title: "Metal Roofing",
      desc: "Durable standing seam and metal panel systems. 50+ year lifespan with excellent energy efficiency.",
    },
    {
      icon: Grid3X3,
      title: "Flat Roofing",
      desc: "Commercial-grade TPO, EPDM, and modified bitumen systems for flat and low-slope applications.",
    },
    {
      icon: Hammer,
      title: "Tile Roofing",
      desc: "Elegant concrete and clay tile installation. Classic aesthetics with unmatched durability.",
    },
    {
      icon: CloudLightning,
      title: "Storm Damage",
      desc: "Emergency response and full restoration after hail, wind, and storm damage. We handle insurance claims.",
    },
    {
      icon: Droplets,
      title: "Gutter Systems",
      desc: "Seamless gutter installation, guards, and downspout systems to protect your foundation.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-950 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-semibold text-sm tracking-widest uppercase">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 mb-4">
            Our Roofing Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            From residential repairs to complete commercial installations, we
            deliver quality craftsmanship on every project.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/5"
            >
              <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
                <service.icon className="w-7 h-7 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {service.desc}
              </p>
              <div className="mt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-amber-500 hover:text-amber-400 font-semibold text-sm transition-colors group/link"
                >
                  Learn More
                  <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── GALLERY (Before/After) ─────────────────────── */
function Gallery() {
  const projects = [
    {
      before: "Severely damaged shingles with multiple leaks and missing tabs from hail storm",
      after: "Brand new GAF Timberline HDZ architectural shingles in Charcoal",
      type: "Storm Damage Repair",
      location: "Arvada, CO",
    },
    {
      before: "Aging 20-year-old cedar shake roof showing extensive deterioration",
      after: "Premium standing seam metal roof in Matte Black with snow guards",
      type: "Metal Roof Upgrade",
      location: "Lakewood, CO",
    },
    {
      before: "Flat commercial roof with ponding water and membrane failure",
      after: "New TPO single-ply membrane with proper drainage system",
      type: "Commercial Flat Roof",
      location: "Denver, CO",
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-semibold text-sm tracking-widest uppercase">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 mb-4">
            Before & After Gallery
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            See the transformations we deliver for homeowners across the Denver
            metro area.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-gray-950 border border-gray-800 rounded-2xl overflow-hidden hover:border-amber-500/30 transition-all duration-300 group"
            >
              {/* Before */}
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center p-6">
                  <div className="text-center">
                    <Wrench className="w-10 h-10 text-gray-500 mx-auto mb-3" />
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.before}
                    </p>
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-red-500/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Before
                </div>
              </div>

              {/* Arrow divider */}
              <div className="flex justify-center -my-4 relative z-10">
                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-gray-950 rotate-90" />
                </div>
              </div>

              {/* After */}
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center p-6">
                  <div className="text-center">
                    <BadgeCheck className="w-10 h-10 text-amber-500 mx-auto mb-3" />
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.after}
                    </p>
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-emerald-500/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  After
                </div>
              </div>

              {/* Info */}
              <div className="p-6 border-t border-gray-800">
                <h3 className="text-lg font-bold text-white mb-1">
                  {project.type}
                </h3>
                <div className="flex items-center gap-1 text-gray-500 text-sm">
                  <MapPin className="w-3 h-3" />
                  {project.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── WHY CHOOSE US ─────────────────────── */
function WhyChooseUs() {
  const reasons = [
    {
      icon: Shield,
      title: "Industry-Leading Warranties",
      desc: "Lifetime workmanship warranty plus manufacturer warranties up to 50 years. Your investment is protected.",
      highlight: "Lifetime Guarantee",
    },
    {
      icon: Award,
      title: "Licensed & Certified",
      desc: "Fully licensed Colorado roofing contractor. GAF Master Elite certified — top 2% of roofers nationwide.",
      highlight: "Top 2% Nationwide",
    },
    {
      icon: FileCheck,
      title: "Insurance Claims Experts",
      desc: "We navigate the entire insurance claims process for you. From documentation to negotiation, we maximize your coverage.",
      highlight: "Full Claims Support",
    },
    {
      icon: Users,
      title: "Experienced Crews",
      desc: "Our crews average 15+ years of roofing experience. No subcontractors — every job is done by our trained professionals.",
      highlight: "15+ Years Average",
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-gray-950 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="text-amber-500 font-semibold text-sm tracking-widest uppercase">
              The SummitRoof Difference
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 mb-6">
              Why Denver Homeowners Choose Us
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              With over 25 years serving the Front Range, we&apos;ve built our
              reputation on quality workmanship, honest pricing, and
              standing behind every job we do.
            </p>

            <div className="grid gap-4">
              {[
                "BBB A+ Rated Business",
                "GAF Master Elite Contractor",
                "0% Financing Available",
                "24/7 Emergency Response",
                "Free Drone Inspections",
                "Colorado Hail Specialists",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <span className="text-gray-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((reason, i) => (
              <div
                key={i}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-amber-500/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors">
                  <reason.icon className="w-6 h-6 text-amber-500" />
                </div>
                <div className="text-[10px] font-bold text-amber-500 uppercase tracking-widest mb-2">
                  {reason.highlight}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── TESTIMONIALS ─────────────────────── */
function Testimonials() {
  const reviews = [
    {
      name: "Mike Johnson",
      location: "Thornton, CO",
      rating: 5,
      text: "After the hailstorm destroyed our roof, SummitRoof Pro handled everything from the insurance claim to the final install. Brand new roof in 3 days. Couldn&apos;t be happier.",
      service: "Storm Damage Repair",
    },
    {
      name: "Sarah & David Chen",
      location: "Arvada, CO",
      rating: 5,
      text: "We got 5 quotes and SummitRoof Pro was the most professional by far. Fair pricing, no pressure tactics, and the quality of work is outstanding. Our neighbors are jealous.",
      service: "Shingle Replacement",
    },
    {
      name: "Robert Martinez",
      location: "Lakewood, CO",
      rating: 5,
      text: "Had a commercial flat roof that needed complete replacement. Their crew was efficient, clean, and the new TPO system is performing flawlessly. Highly recommend.",
      service: "Commercial Flat Roof",
    },
    {
      name: "Jennifer Walsh",
      location: "Westminster, CO",
      rating: 5,
      text: "The metal roof they installed looks incredible and the energy savings have been noticeable immediately. Professional crew, on time, under budget. These guys are the real deal.",
      service: "Metal Roof Installation",
    },
    {
      name: "Tom & Lisa Nguyen",
      location: "Aurora, CO",
      rating: 5,
      text: "From the free inspection to the financing options, everything was seamless. Our new roof came with a lifetime warranty and the cleanup was spotless. A+ experience all around.",
      service: "Full Roof Replacement",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-semibold text-sm tracking-widest uppercase">
            Customer Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 mb-4">
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center gap-2 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-current" />
            ))}
            <span className="text-white font-bold ml-2">4.9/5</span>
            <span className="text-gray-400">from 500+ reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((review, i) => (
            <div
              key={i}
              className="bg-gray-950 border border-gray-800 rounded-2xl p-8 hover:border-amber-500/30 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-5 h-5 text-amber-500 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="border-t border-gray-800 pt-4">
                <div className="font-bold text-white">{review.name}</div>
                <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                  <MapPin className="w-3 h-3" />
                  {review.location}
                  <span className="text-amber-500/60">|</span>
                  {review.service}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {reviews.slice(3).map((review, i) => (
            <div
              key={i}
              className="bg-gray-950 border border-gray-800 rounded-2xl p-8 hover:border-amber-500/30 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-5 h-5 text-amber-500 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="border-t border-gray-800 pt-4">
                <div className="font-bold text-white">{review.name}</div>
                <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                  <MapPin className="w-3 h-3" />
                  {review.location}
                  <span className="text-amber-500/60">|</span>
                  {review.service}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── FREE INSPECTION CTA ─────────────────────── */
function InspectionCTA() {
  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden">
      <div className="section-divider mb-24" />
      {/* Background accent */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-b from-gray-900 to-gray-950 border border-gray-800 rounded-3xl p-12 sm:p-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

          <div className="w-20 h-20 bg-amber-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <ThumbsUp className="w-10 h-10 text-amber-500" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Free Roof Inspection
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-4">
            Not sure about the condition of your roof? We&apos;ll send a
            certified inspector to evaluate your roof at no cost, no
            obligation.
          </p>
          <p className="text-gray-500 text-sm max-w-lg mx-auto mb-8">
            Includes drone photography, detailed written report, and honest
            recommendations. We&apos;ll never push a sale — just the facts.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-gray-950 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/25"
            >
              Schedule Free Inspection
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+13035550199"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-amber-500 font-semibold transition-colors"
            >
              <Phone className="w-5 h-5" />
              Or Call (303) 555-0199
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 mt-10 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-500/60" />
              Same-Day Availability
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-amber-500/60" />
              100% Free
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── FINANCING ─────────────────────── */
function Financing() {
  const options = [
    {
      icon: CircleDollarSign,
      title: "0% Interest",
      subtitle: "for 12 Months",
      desc: "No interest if paid in full within 12 months. Perfect for planned roof replacements.",
    },
    {
      icon: CreditCard,
      title: "Low Monthly",
      subtitle: "Payments",
      desc: "Affordable monthly payments starting as low as $89/month with approved credit.",
    },
    {
      icon: Banknote,
      title: "Insurance",
      subtitle: "Claims Help",
      desc: "We work directly with your insurance company. Many customers pay only their deductible.",
    },
  ];

  return (
    <section id="financing" className="py-24 bg-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-semibold text-sm tracking-widest uppercase">
            Flexible Payment Options
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 mb-4">
            Financing That Works For You
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Don&apos;t let budget stop you from protecting your home. We offer
            multiple financing options to fit every situation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {options.map((option, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                i === 0
                  ? "bg-gradient-to-b from-amber-500/10 to-gray-950 border-2 border-amber-500/40"
                  : "bg-gray-950 border border-gray-800 hover:border-amber-500/30"
              }`}
            >
              {i === 0 && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-gray-950 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6">
                <option.icon className="w-7 h-7 text-amber-500" />
              </div>
              <h3 className="text-2xl font-black text-white">{option.title}</h3>
              <p className="text-amber-500 font-semibold mb-4">
                {option.subtitle}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {option.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm">
            Subject to credit approval. Terms and conditions apply. Contact us
            for full details.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── CONTACT FORM ─────────────────────── */
function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-gray-950 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <div>
            <span className="text-amber-500 font-semibold text-sm tracking-widest uppercase">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 mb-6">
              Ready To Protect Your Home?
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Fill out the form and we&apos;ll contact you within 1 hour during
              business hours. Or reach us directly below.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  label: "Call Us",
                  value: "(303) 555-0199",
                  href: "tel:+13035550199",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "info@summitroofpro.com",
                  href: "mailto:info@summitroofpro.com",
                },
                {
                  icon: MapPin,
                  label: "Service Area",
                  value: "Denver Metro & Front Range, CO",
                  href: "#",
                },
                {
                  icon: Clock,
                  label: "Hours",
                  value: "Mon-Sat: 7AM-7PM | Emergency: 24/7",
                  href: "#",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                    <item.icon className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm">{item.label}</div>
                    <div className="text-white font-semibold group-hover:text-amber-500 transition-colors">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-2xl blur-sm" />
              <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-emerald-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-gray-400">
                      We&apos;ll contact you within 1 hour. Check your phone!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full bg-gray-950 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition-colors"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full bg-gray-950 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition-colors"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full bg-gray-950 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition-colors"
                        placeholder="(303) 555-0123"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full bg-gray-950 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Service Needed
                      </label>
                      <select
                        required
                        className="w-full bg-gray-950 border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option>Free Roof Inspection</option>
                        <option>Shingle Roofing</option>
                        <option>Metal Roofing</option>
                        <option>Flat Roofing</option>
                        <option>Tile Roofing</option>
                        <option>Storm Damage / Insurance</option>
                        <option>Gutter Installation</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        className="w-full bg-gray-950 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition-colors resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-amber-500 hover:bg-amber-600 text-gray-950 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>

                    <p className="text-gray-600 text-xs text-center">
                      By submitting, you agree to receive communications from
                      SummitRoof Pro. We respect your privacy.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── FOOTER ─────────────────────── */
function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <Mountain className="w-8 h-8 text-amber-500" />
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-bold text-white tracking-tight">
                  SummitRoof
                </span>
                <span className="text-[10px] font-semibold tracking-[0.3em] text-amber-500 uppercase">
                  Pro
                </span>
              </div>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Denver&apos;s premier roofing contractor. Protecting homes and
              businesses across the Front Range since 1999.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-amber-500 hover:bg-gray-700 transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2">
              {[
                "Shingle Roofing",
                "Metal Roofing",
                "Flat Roofing",
                "Tile Roofing",
                "Storm Damage",
                "Gutter Systems",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-gray-500 hover:text-amber-500 text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Service Areas
            </h4>
            <ul className="space-y-2">
              {[
                "Denver",
                "Aurora",
                "Lakewood",
                "Arvada",
                "Westminster",
                "Thornton",
                "Centennial",
                "Boulder",
              ].map((city) => (
                <li key={city}>
                  <span className="text-gray-500 text-sm">{city}, CO</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+13035550199"
                className="flex items-center gap-2 text-gray-500 hover:text-amber-500 text-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                (303) 555-0199
              </a>
              <a
                href="mailto:info@summitroofpro.com"
                className="flex items-center gap-2 text-gray-500 hover:text-amber-500 text-sm transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@summitroofpro.com
              </a>
              <div className="flex items-start gap-2 text-gray-500 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  1250 Summit Blvd, Suite 200
                  <br />
                  Denver, CO 80202
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Clock className="w-4 h-4" />
                Mon-Sat: 7AM-7PM
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-gray-600">
              <span>
                Colorado Contractor License #CR-2024-51873
              </span>
              <span className="hidden md:inline">|</span>
              <span>Fully Insured — $2M General Liability</span>
              <span className="hidden md:inline">|</span>
              <span>Workers Compensation Coverage</span>
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-600">
              <a href="#" className="hover:text-gray-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
          <div className="text-center mt-6 text-xs text-gray-700">
            &copy; {new Date().getFullYear()} SummitRoof Pro. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────── PAGE ─────────────────────── */
export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <WhyChooseUs />
      <Testimonials />
      <InspectionCTA />
      <Financing />
      <Contact />
      <Footer />
    </>
  );
}
