'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CartDrawer } from '@/components/cart-drawer';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { Button } from '@/components/ui/button';
import { galleryItems } from '@/lib/data';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'wedding', name: 'Weddings' },
  { id: 'birthday', name: 'Birthdays' },
  { id: 'cupcakes', name: 'Cupcakes' },
  { id: 'pastries', name: 'Pastries' },
  { id: 'other', name: 'Special Events' },
];

// Map gallery items to images
const galleryImages = [
  { id: 'g1', src: '/images/gallery/wedding-1.jpg', title: 'Royal White Wedding Cake', category: 'wedding', occasion: 'Traditional Wedding' },
  { id: 'g2', src: '/images/gallery/birthday-1.jpg', title: 'Princess Castle Cake', category: 'birthday', occasion: '5th Birthday Party' },
  { id: 'g3', src: '/images/gallery/cupcakes-1.jpg', title: 'Elegant Cupcake Tower', category: 'cupcakes', occasion: 'Engagement Party' },
  { id: 'g4', src: '/images/products/chocolate-cake.jpg', title: 'Chocolate Dream Cake', category: 'birthday', occasion: 'Adult Birthday' },
  { id: 'g5', src: '/images/products/red-velvet.jpg', title: 'Red Velvet Elegance', category: 'wedding', occasion: 'Anniversary' },
  { id: 'g6', src: '/images/products/vanilla-cake.jpg', title: 'Classic Vanilla Beauty', category: 'birthday', occasion: 'Sweet 16' },
  { id: 'g7', src: '/images/products/small-chops.jpg', title: 'Small Chops Spread', category: 'pastries', occasion: 'Corporate Event' },
  { id: 'g8', src: '/images/products/meat-pie.jpg', title: 'Fresh Meat Pies', category: 'pastries', occasion: 'Office Party' },
  { id: 'g9', src: '/images/products/wedding-white.jpg', title: '3-Tier Wedding Masterpiece', category: 'wedding', occasion: 'Church Wedding' },
  { id: 'g10', src: '/images/products/cupcake-assorted.jpg', title: 'Assorted Cupcakes', category: 'cupcakes', occasion: 'Baby Shower' },
  { id: 'g11', src: '/images/hero-cake.jpg', title: 'Premium Celebration Cake', category: 'other', occasion: 'Graduation' },
  { id: 'g12', src: '/images/about-bakery.jpg', title: 'Our Bakery Setup', category: 'other', occasion: 'Behind the Scenes' },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = '';
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === filteredImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative h-64 lg:h-80 flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/gallery/wedding-1.jpg"
              alt="Our gallery"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4"
            >
              <Camera className="h-4 w-4" />
              <span className="text-sm font-medium">Our Portfolio</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl lg:text-5xl font-bold"
            >
              Gallery
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-3 text-lg opacity-90 max-w-xl mx-auto"
            >
              Browse through our delicious creations and get inspired
            </motion.p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <motion.div
              layout
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              <AnimatePresence mode="popLayout">
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                    onClick={() => openLightbox(index)}
                  >
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-center p-4">
                        <p className="font-semibold text-sm">{image.title}</p>
                        <p className="text-xs opacity-80 mt-1">{image.occasion}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredImages.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground">No images found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-3">
              Love What You See?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              {"Let us create something beautiful for your special occasion. We'd love to add your celebration to our gallery!"}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <a href="/custom-orders">Order Custom Cake</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/menu">Browse Menu</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
              aria-label="Close lightbox"
            >
              <X className="h-8 w-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 text-white hover:text-primary transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-10 w-10" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 text-white hover:text-primary transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-10 w-10" />
            </button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl max-h-[80vh] w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-square max-h-[70vh] w-full">
                <Image
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-center mt-4 text-white">
                <h3 className="font-serif text-xl font-semibold">
                  {filteredImages[selectedImage].title}
                </h3>
                <p className="text-white/70 mt-1">
                  {filteredImages[selectedImage].occasion}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <CartDrawer />
      <WhatsAppButton />
    </>
  );
}
