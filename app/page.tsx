'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ChefHat, 
  Leaf, 
  Clock, 
  Heart,
  ArrowRight,
  Star,
  Quote,
  MapPin,
} from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CartDrawer } from '@/components/cart-drawer';
import { ProductCard } from '@/components/product-card';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { Button } from '@/components/ui/button';
import { products, testimonials, galleryItems, categories, formatPrice } from '@/lib/data';

const featuredProducts = products.filter((p) => p.isPopular).slice(0, 4);
const featuredTestimonials = testimonials.slice(0, 4);
const featuredGallery = galleryItems.slice(0, 6);

const features = [
  {
    icon: ChefHat,
    title: 'Expert Bakers',
    description: 'Our skilled bakers craft each creation with passion and precision',
  },
  {
    icon: Leaf,
    title: 'Fresh Ingredients',
    description: 'We use only the finest, freshest locally-sourced ingredients',
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'Your orders delivered fresh and on time, every time',
  },
  {
    icon: Heart,
    title: 'Made with Love',
    description: 'Every cake and pastry is baked with care and attention to detail',
  },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-cake.jpg"
              alt="Beautiful cake"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-2 text-primary font-medium mb-4">
                  <MapPin className="h-4 w-4" />
                  Tanke, Ilorin, Kwara State
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance"
              >
                Sweet Moments, <br />
                <span className="text-primary">Baked Fresh</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed"
              >
                {"O'Rich Cakes & Pastries creates delicious, beautifully crafted cakes and pastries for all your special occasions. From birthday celebrations to dream weddings."}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <Button size="lg" asChild className="gap-2">
                  <Link href="/menu">
                    Order Now
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/custom-orders">
                    Customize Your Cake
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-10 flex items-center gap-8"
              >
                <div>
                  <p className="text-3xl font-bold text-foreground">500+</p>
                  <p className="text-sm text-muted-foreground">Happy Customers</p>
                </div>
                <div className="h-10 w-px bg-border" />
                <div>
                  <p className="text-3xl font-bold text-foreground">5</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="h-10 w-px bg-border" />
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground">
                Explore Our Menu
              </h2>
              <p className="mt-4 text-muted-foreground">
                From celebration cakes to everyday treats, we have something delicious for every occasion
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link
                    href={`/menu?category=${category.id}`}
                    className="group block relative aspect-[4/5] rounded-xl overflow-hidden"
                  >
                    <Image
                      src={category.id === 'birthday-cakes' ? '/images/products/chocolate-cake.jpg' :
                           category.id === 'wedding-cakes' ? '/images/products/wedding-white.jpg' :
                           category.id === 'cupcakes' ? '/images/products/cupcake-assorted.jpg' :
                           category.id === 'pastries' ? '/images/products/meat-pie.jpg' :
                           '/images/products/small-chops.jpg'}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-serif text-lg font-semibold">{category.name}</h3>
                      <p className="text-sm opacity-80 mt-1">{category.description}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground">
                  Popular Treats
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Our most-loved creations, baked fresh daily
                </p>
              </div>
              <Button variant="outline" asChild className="hidden sm:flex gap-2">
                <Link href="/menu">
                  View All
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="mt-8 text-center sm:hidden">
              <Button variant="outline" asChild className="gap-2">
                <Link href="/menu">
                  View All Products
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground">
                Why Choose {"O'Rich"}?
              </h2>
              <p className="mt-4 text-muted-foreground">
                {"We're committed to making your celebrations sweeter with quality, freshness, and love"}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-card p-6 rounded-xl border text-center group hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <feature.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground">
                What Our Customers Say
              </h2>
              <p className="mt-4 text-muted-foreground">
                {"Don't just take our word for it - hear from our happy customers"}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-card p-6 rounded-xl border relative"
                >
                  <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground leading-relaxed mb-4">
                    {`"${testimonial.text}"`}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-primary">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.occasion}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground">
                  Our Creations
                </h2>
                <p className="mt-2 text-muted-foreground">
                  A glimpse of our delicious masterpieces
                </p>
              </div>
              <Button variant="outline" asChild className="hidden sm:flex gap-2">
                <Link href="/gallery">
                  View Gallery
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {featuredGallery.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative aspect-square rounded-xl overflow-hidden group"
                >
                  <Image
                    src={index < 3 ? `/images/gallery/${['wedding-1', 'birthday-1', 'cupcakes-1'][index]}.jpg` : '/images/products/chocolate-cake.jpg'}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-center p-4">
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm opacity-80">{item.occasion}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center sm:hidden">
              <Button variant="outline" asChild className="gap-2">
                <Link href="/gallery">
                  View Full Gallery
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold">
              Ready to Make Your Celebration Sweet?
            </h2>
            <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
              {"Whether it's a birthday, wedding, or just a craving for something delicious, we're here to make it happen."}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild className="gap-2">
                <Link href="/menu">
                  Browse Menu
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="/custom-orders">
                  Custom Order
                </Link>
              </Button>
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
