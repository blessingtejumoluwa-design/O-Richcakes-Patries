'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Check,
  MessageCircle,
} from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CartDrawer } from '@/components/cart-drawer';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    content: '9, Shalom House, Oke Odo, Tanke, Ilorin, Kwara State, Nigeria',
    link: 'https://maps.google.com/?q=9+Shalom+House+Oke+Odo+Tanke+Ilorin',
  },
  {
    icon: Phone,
    title: 'Call / WhatsApp',
    content: '08108180906',
    link: 'tel:08108180906',
  },
  {
    icon: Mail,
    title: 'Email Us',
    content: 'orichcakes@gmail.com',
    link: 'mailto:orichcakes@gmail.com',
  },
  {
    icon: Clock,
    title: 'Opening Hours',
    content: 'Monday - Sunday: 7:00 AM - 6:00 PM',
    link: null,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative h-64 lg:h-80 flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/about-bakery.jpg"
              alt="Contact us"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-4xl lg:text-5xl font-bold"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-3 text-lg opacity-90 max-w-xl mx-auto"
            >
              {"We'd love to hear from you. Get in touch!"}
            </motion.p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-20 relative z-10">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card p-6 rounded-xl border shadow-lg"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{info.content}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-12 lg:py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>

                {isSubmitted ? (
                  <div className="bg-card p-8 rounded-xl border text-center">
                    <div className="w-16 h-16 bg-fresh/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="h-8 w-8 text-fresh" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {"Thank you for reaching out. We'll get back to you within 24 hours."}
                    </p>
                    <Button onClick={() => setIsSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 bg-card p-6 lg:p-8 rounded-xl border">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name *</Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="08012345678"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="your@email.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        placeholder="What is this about?"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message *</Label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Type your message here..."
                        rows={5}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full gap-2"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin">
                            <svg className="h-4 w-4" viewBox="0 0 24 24">
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                                fill="none"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                          </span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}

                {/* Quick Contact */}
                <div className="mt-6 p-4 bg-primary/10 rounded-lg flex items-center gap-4">
                  <MessageCircle className="h-8 w-8 text-primary flex-shrink-0" />
                  <div className="flex-1">
                    <p className="font-medium text-foreground">Prefer WhatsApp?</p>
                    <p className="text-sm text-muted-foreground">
                      Chat with us directly for faster responses
                    </p>
                  </div>
                  <a
                    href="https://wa.me/2348108180906?text=Hello%20O'Rich%20Cakes!%20I%20have%20a%20question."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white">
                      WhatsApp
                    </Button>
                  </a>
                </div>
              </motion.div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-6">
                  Find Us
                </h2>
                <div className="bg-card rounded-xl border overflow-hidden h-[400px] lg:h-[500px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.123456789!2d4.5833!3d8.4833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sIlorin%2C%20Kwara%20State%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="O'Rich Cakes Location"
                  />
                </div>

                <div className="mt-6 p-4 bg-card rounded-lg border">
                  <h3 className="font-semibold text-foreground mb-2">Directions</h3>
                  <p className="text-sm text-muted-foreground">
                    {"We're located at Oke Odo, Tanke, Ilorin. Look for Shalom House – we're at number 9. If you're coming from the University of Ilorin, we're just a few minutes away. Call us if you need directions!"}
                  </p>
                  <a
                    href="https://maps.google.com/?q=Tanke+Ilorin+Kwara+State"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-medium mt-3 hover:underline"
                  >
                    <MapPin className="h-4 w-4" />
                    Get Directions on Google Maps
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground text-center mb-10">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: 'Do you deliver outside Ilorin?',
                    a: 'Currently, we deliver within Ilorin and its environs. For locations outside Ilorin, please contact us to discuss pickup options or special arrangements.',
                  },
                  {
                    q: 'How much advance notice do you need for orders?',
                    a: 'For standard items, we recommend at least 24-48 hours. Custom cakes need at least 3 days, and wedding cakes require a minimum of 2 weeks notice.',
                  },
                  {
                    q: 'Do you offer tastings for wedding cakes?',
                    a: 'Yes! We offer complimentary tastings for confirmed wedding orders. Please book an appointment in advance.',
                  },
                  {
                    q: 'What payment methods do you accept?',
                    a: 'We accept bank transfers, card payments, and cash on delivery for orders within Ilorin. A 50% deposit is required for custom orders.',
                  },
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card p-6 rounded-xl border"
                  >
                    <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                    <p className="text-sm text-muted-foreground">{faq.a}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CartDrawer />
      <WhatsAppButton />
    </>
  );
}
