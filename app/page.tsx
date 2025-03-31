"use client";

import type React from "react";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  // State for header visibility
  const [showHeader, setShowHeader] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Refs for scroll navigation
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const collectionsRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Get hero section height
      const heroHeight = heroRef.current?.offsetHeight || 0;

      // Show header when scrolled past hero section
      if (window.scrollY > heroHeight - 100) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <main className="relative">
      {/* Navigation - Only shown after scrolling past hero */}
      <AnimatePresence>
        {showHeader && (
          <motion.nav
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={headerVariants}
            className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm"
          >
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <div className="flex items-center">
                <Image
                  src="/images/presh-logo.png"
                  alt="Preshy's Place Logo"
                  width={120}
                  height={80}
                  className="mr-2"
                />
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-6">
                <button
                  onClick={() => scrollToSection(aboutRef)}
                  className="text-burgundy-900 hover:text-burgundy-600 transition"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection(collectionsRef)}
                  className="text-burgundy-900 hover:text-burgundy-600 transition"
                >
                  Collections
                </button>
                <button
                  onClick={() => scrollToSection(servicesRef)}
                  className="text-burgundy-900 hover:text-burgundy-600 transition"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection(testimonialsRef)}
                  className="text-burgundy-900 hover:text-burgundy-600 transition"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => scrollToSection(contactRef)}
                  className="text-burgundy-900 hover:text-burgundy-600 transition"
                >
                  Contact
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-burgundy-900"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="md:hidden bg-white border-t"
                >
                  <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                    <button
                      onClick={() => scrollToSection(aboutRef)}
                      className="text-burgundy-900 hover:text-burgundy-600 transition py-2"
                    >
                      About
                    </button>
                    <button
                      onClick={() => scrollToSection(collectionsRef)}
                      className="text-burgundy-900 hover:text-burgundy-600 transition py-2"
                    >
                      Collections
                    </button>
                    <button
                      onClick={() => scrollToSection(servicesRef)}
                      className="text-burgundy-900 hover:text-burgundy-600 transition py-2"
                    >
                      Services
                    </button>
                    <button
                      onClick={() => scrollToSection(testimonialsRef)}
                      className="text-burgundy-900 hover:text-burgundy-600 transition py-2"
                    >
                      Testimonials
                    </button>
                    <button
                      onClick={() => scrollToSection(contactRef)}
                      className="text-burgundy-900 hover:text-burgundy-600 transition py-2"
                    >
                      Contact
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/presh-hero.jpg"
            // src="/placeholder.svg?height=1080&width=1920"
            alt="Nigerian Fashion"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              PRESHY&apos;S PLACE
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Exquisite African fashion that celebrates heritage and modern
              style
            </p>
            <Button
              size="lg"
              className="bg-burgundy-600 hover:bg-burgundy-700 text-white"
              onClick={() => scrollToSection(collectionsRef)}
            >
              View Collection
            </Button>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <ChevronDown
            className="h-8 w-8 text-white cursor-pointer"
            onClick={() => scrollToSection(aboutRef)}
          />
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 bg-burgundy-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp} className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-burgundy-900 mb-6">
                About Presh
              </h2>
              <p className="text-lg text-burgundy-800 mb-4">
                With over a decade of experience in fashion design, Presh has
                established herself as a leading voice in contemporary African
                fashion. Her designs blend traditional Nigerian textiles and
                techniques with modern silhouettes.
              </p>
              <p className="text-lg text-burgundy-800 mb-6">
                Preshy&apos;s mission is to celebrate the rich cultural heritage
                of African fashion while creating pieces that empower women to
                feel confident and beautiful in their everyday lives.
              </p>
              <div className="flex space-x-4">
                <Link href="https://instagram.com" target="_blank">
                  <Instagram className="h-6 w-6 text-burgundy-700 hover:text-burgundy-500 transition" />
                </Link>
                <Link href="https://facebook.com" target="_blank">
                  <Facebook className="h-6 w-6 text-burgundy-700 hover:text-burgundy-500 transition" />
                </Link>
                <Link href="https://twitter.com" target="_blank">
                  <Twitter className="h-6 w-6 text-burgundy-700 hover:text-burgundy-500 transition" />
                </Link>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="order-1 md:order-2">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Presh - Fashion Designer"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Collections Section */}
      <section ref={collectionsRef} className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-burgundy-900 mb-4">
              Featured Collections
            </h2>
            <p className="text-lg text-burgundy-700 max-w-2xl mx-auto">
              Explore our latest designs that blend traditional African
              aesthetics with contemporary fashion trends.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              "col1.jpg",
              "col2.jpg",
              "col3.jpg",
              "col4.jpg",
              "col5.jpg",
              "col6.jpg",
            ].map((item) => (
              <motion.div
                key={item}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-xl">
                  <Image
                    // src={`/placeholder.svg?height=800&width=600&text=Collection ${item}`}
                    src={`/${item}`}
                    alt={`Fashion Collection ${item}`}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white">
                        Collection {item}
                      </h3>
                      <p className="text-white/80">
                        Traditional meets contemporary
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Button className="bg-burgundy-600 hover:bg-burgundy-700 text-white">
              View Full Lookbook
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-burgundy-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              From custom designs to ready-to-wear collections, we offer a range
              of services to meet your fashion needs.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={fadeInUp}
              className="bg-burgundy-800 rounded-lg p-8 shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">Custom Designs</h3>
              <p className="mb-4">
                Work directly with Presh to create a unique piece tailored to
                your style, body type, and occasion.
              </p>
              <ul className="space-y-2 mb-6">
                <li>Personal consultation</li>
                <li>Custom measurements</li>
                <li>Fabric selection</li>
                <li>Multiple fittings</li>
              </ul>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-burgundy-900"
              >
                Learn More
              </Button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-burgundy-800 rounded-lg p-8 shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">Ready-to-Wear</h3>
              <p className="mb-4">
                Shop our seasonal collections featuring versatile pieces that
                celebrate African fashion.
              </p>
              <ul className="space-y-2 mb-6">
                <li>Seasonal collections</li>
                <li>Limited editions</li>
                <li>Size-inclusive options</li>
                <li>Worldwide shipping</li>
              </ul>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-burgundy-900"
              >
                Shop Now
              </Button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-burgundy-800 rounded-lg p-8 shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">Styling Services</h3>
              <p className="mb-4">
                Get professional styling advice to create a wardrobe that
                reflects your personal style.
              </p>
              <ul className="space-y-2 mb-6">
                <li>Personal styling</li>
                <li>Wardrobe consultation</li>
                <li>Event styling</li>
                <li>Fashion workshops</li>
              </ul>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-burgundy-900"
              >
                Book Session
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 bg-burgundy-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-burgundy-900 mb-4">
              Client Testimonials
            </h2>
            <p className="text-lg text-burgundy-700 max-w-2xl mx-auto">
              Hear what our clients have to say about their experience with
              Preshy&apos;s Place.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Amara Johnson",
                image: "tes1.jpg",
                role: "Wedding Client",
                quote:
                  "Presh created the most beautiful wedding dress that perfectly blended my Nigerian heritage with modern elegance. I felt absolutely stunning on my special day!",
              },
              {
                name: "Adedokun Funke",
                image: "tes2.png",
                role: "Regular Client",
                quote:
                  "I've been wearing Presh's designs for years. Her attention to detail and understanding of what flatters different body types is unmatched. Her pieces always make me feel confident.",
              },
              {
                name: "Lolade Bakare",
                image: "tes3.jpg",
                role: "Styling Client",
                quote:
                  "The styling session with Presh transformed my wardrobe. She helped me incorporate beautiful African pieces into my everyday style in ways I never would have thought of.",
              },
            ].map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                        <Image
                          src={`/${testimonial.image}`}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-burgundy-900">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-burgundy-700">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="italic text-burgundy-800">
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-burgundy-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-burgundy-700 max-w-2xl mx-auto">
              Have questions or want to schedule a consultation? Reach out to
              us.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-burgundy-900 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-burgundy-300 rounded-md focus:outline-none focus:ring-2 focus:ring-burgundy-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-burgundy-900 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-burgundy-300 rounded-md focus:outline-none focus:ring-2 focus:ring-burgundy-500"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-burgundy-900 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-burgundy-300 rounded-md focus:outline-none focus:ring-2 focus:ring-burgundy-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-burgundy-900 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-burgundy-300 rounded-md focus:outline-none focus:ring-2 focus:ring-burgundy-500"
                  ></textarea>
                </div>
                <Button className="w-full bg-burgundy-600 hover:bg-burgundy-700 text-white">
                  Send Message
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-bold text-burgundy-900 mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-burgundy-700 mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-burgundy-700">
                        preshplace1759@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-burgundy-700 mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-burgundy-700">
                        09074846488, 07032930271
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-burgundy-700 mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Studio Address</p>
                      <p className="text-burgundy-700">
                        Habibu street,Oluseyi Eleyele
                        <br />
                        Ibadan, Nigeria
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-burgundy-900 mb-4">
                  Studio Hours
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-burgundy-900 mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <Link
                    href="https://instagram.com"
                    target="_blank"
                    className="h-10 w-10 rounded-full bg-burgundy-100 flex items-center justify-center hover:bg-burgundy-200 transition"
                  >
                    <Instagram className="h-5 w-5 text-burgundy-700" />
                  </Link>
                  <Link
                    href="https://facebook.com"
                    target="_blank"
                    className="h-10 w-10 rounded-full bg-burgundy-100 flex items-center justify-center hover:bg-burgundy-200 transition"
                  >
                    <Facebook className="h-5 w-5 text-burgundy-700" />
                  </Link>
                  <Link
                    href="https://twitter.com"
                    target="_blank"
                    className="h-10 w-10 rounded-full bg-burgundy-100 flex items-center justify-center hover:bg-burgundy-200 transition"
                  >
                    <Twitter className="h-5 w-5 text-burgundy-700" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-burgundy-900 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Image
                  src="/images/presh-logo.png"
                  alt="Preshy's Place Logo"
                  width={100}
                  height={60}
                />
              </div>
              <p className="text-white/80">
                Celebrating African fashion through timeless designs and
                contemporary styles.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection(aboutRef)}
                    className="text-white/80 hover:text-white transition"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(collectionsRef)}
                    className="text-white/80 hover:text-white transition"
                  >
                    Collections
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(servicesRef)}
                    className="text-white/80 hover:text-white transition"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(testimonialsRef)}
                    className="text-white/80 hover:text-white transition"
                  >
                    Testimonials
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-white/80 hover:text-white transition"
                  >
                    Custom Designs
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/80 hover:text-white transition"
                  >
                    Ready-to-Wear
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/80 hover:text-white transition"
                  >
                    Styling Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/80 hover:text-white transition"
                  >
                    Fashion Workshops
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>preshplace1759@gmail.com</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>0907 484 6488, 0703 293 0271</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Habibu street,Oluseyi Eleyele, Ibadan.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              &copy; {new Date().getFullYear()} Preshy&apos;s Place. All rights
              reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-white/60 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white/60 hover:text-white text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
