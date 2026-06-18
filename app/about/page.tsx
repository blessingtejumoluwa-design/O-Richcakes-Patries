'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Leaf, 
  Shield, 
  Users, 
  Award,
  Clock,
  MapPin,
  ArrowRight,
} from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CartDrawer } from '@/components/cart-drawer';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { Button } from '@/components/ui/button';

const values = [
  {
    icon: Leaf,
    title: 'Fresh Ingredients',
    description: 'We source the finest, freshest ingredients locally to ensure every bite is delicious and wholesome.',
  },
  {
    icon: Shield,
    title: 'Strict Hygiene',
    description: 'Our bakery maintains the highest hygiene standards. Your health and safety are our top priorities.',
  },
  {
    icon: Heart,
    title: 'Passion for Baking',
    description: 'Every cake we make is crafted with love and passion, bringing joy to your celebrations.',
  },
  {
    icon: Users,
    title: 'Customer Satisfaction',
    description: "Your happiness is our success. We go above and beyond to exceed your expectations.",
  },
];

const milestones = [
  { year: '2019', title: 'Founded', description: 'Started as a home bakery with a dream' },
  { year: '2020', title: 'First Shop', description: 'Opened our first shop in Tanke, Ilorin' },
  { year: '2022', title: '500+ Orders', description: 'Celebrated serving 500+ happy customers' },
  { year: '2024', title: 'Growing Strong', description: 'Expanding our menu and team' },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative h-64 lg:h-80 flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/about-bakery.jpg"
              alt="Our bakery"
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
              About Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-3 text-lg opacity-90 max-w-xl mx-auto"
            >
              The story behind {"O'Rich"} Cakes & Pastries
            </motion.p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/about-bakery.jpg"
                    alt="Our bakery interior"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg hidden md:block">
                  <p className="text-3xl font-bold">5+</p>
                  <p className="text-sm">Years of Excellence</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Our Sweet Story
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    {"O'Rich Cakes & Pastries was born from a simple passion – the love for baking and the joy of seeing smiles on people's faces when they taste something truly delicious."}
                  </p>
                  <p>
                    What started as a home kitchen experiment in 2019 has grown into one of {"Ilorin's"} most beloved bakeries. Our founder believed that every celebration deserves a cake {"that's"} not just beautiful, but also incredibly tasty.
                  </p>
                  <p>
                    Today, we continue that mission with every cake we bake, every pastry we craft, and every order we deliver. {"We're"} proud to be part of your special moments – from intimate birthday gatherings to grand wedding celebrations.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-foreground">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Tanke, Ilorin</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>7 AM - 6 PM Daily</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground">
                What We Stand For
              </h2>
              <p className="mt-4 text-muted-foreground">
                Our core values guide everything we do, from ingredient selection to customer service
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card p-6 rounded-xl border text-center"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground">
                Our Journey
              </h2>
              <p className="mt-4 text-muted-foreground">
                From humble beginnings to becoming a trusted name in Ilorin
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" />

                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative flex items-center gap-6 mb-8 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} hidden md:block`}>
                      <div className={`bg-card p-6 rounded-xl border inline-block ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                        <span className="text-primary font-bold text-xl">{milestone.year}</span>
                        <h3 className="font-semibold text-foreground mt-1">{milestone.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{milestone.description}</p>
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-4 h-4 bg-primary rounded-full" />
                    </div>

                    <div className="flex-1 md:hidden">
                      <div className="bg-card p-4 rounded-xl border">
                        <span className="text-primary font-bold">{milestone.year}</span>
                        <h3 className="font-semibold text-foreground mt-1">{milestone.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{milestone.description}</p>
                      </div>
                    </div>

                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Promise Section */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Award className="h-12 w-12 mx-auto mb-6 opacity-80" />
              <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-6">
                Our Promise to You
              </h2>
              <p className="text-lg opacity-90 leading-relaxed mb-8">
                {"Every cake that leaves our bakery carries our commitment to quality. We promise to use only the freshest ingredients, maintain the highest standards of hygiene, deliver on time, and most importantly – make your celebrations sweeter and more memorable."}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="secondary" asChild className="gap-2">
                  <Link href="/menu">
                    Explore Our Menu
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  asChild
                >
                  <Link href="/contact">
                    Contact Us
                  </Link>
                </Button>
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
