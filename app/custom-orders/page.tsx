'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Upload, 
  Calendar, 
  Cake, 
  Palette, 
  Truck, 
  DollarSign,
  Check,
  AlertCircle,
  Sparkles,
} from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CartDrawer } from '@/components/cart-drawer';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

const cakeFlavors = [
  'Vanilla',
  'Chocolate',
  'Red Velvet',
  'Strawberry',
  'Lemon',
  'Carrot',
  'Coconut',
  'Coffee/Mocha',
  'Fruit Mix',
  'Banana',
];

const cakeSizes = [
  '6 inches (4-8 servings)',
  '8 inches (10-14 servings)',
  '10 inches (18-25 servings)',
  '12 inches (30-40 servings)',
  '2-tier (40-60 servings)',
  '3-tier (60-100 servings)',
  '4-tier (100+ servings)',
  'Cupcakes (12 pieces)',
  'Cupcakes (24 pieces)',
  'Custom size',
];

const occasions = [
  'Birthday',
  'Wedding',
  'Anniversary',
  'Graduation',
  'Baby Shower',
  'Engagement',
  'Corporate Event',
  'Religious Celebration',
  'Valentine\'s Day',
  'Other',
];

const budgetRanges = [
  'Under ₦10,000',
  '₦10,000 - ₦20,000',
  '₦20,000 - ₦35,000',
  '₦35,000 - ₦50,000',
  '₦50,000 - ₦80,000',
  '₦80,000 - ₦120,000',
  'Above ₦120,000',
];

const features = [
  {
    icon: Cake,
    title: 'Premium Quality',
    description: 'Fresh ingredients and expert craftsmanship',
  },
  {
    icon: Palette,
    title: 'Custom Designs',
    description: 'Any theme, color, or style you can imagine',
  },
  {
    icon: Truck,
    title: 'Safe Delivery',
    description: 'Careful handling and timely delivery',
  },
];

export default function CustomOrdersPage() {
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    size: '',
    theme: '',
    occasion: '',
    dateNeeded: '',
    delivery: 'pickup',
    budget: '',
    notes: '',
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFlavorToggle = (flavor: string) => {
    setSelectedFlavors((prev) =>
      prev.includes(flavor)
        ? prev.filter((f) => f !== flavor)
        : [...prev, flavor]
    );
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center py-16">
          <div className="container mx-auto px-4 max-w-md text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-20 h-20 bg-fresh/20 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Check className="h-10 w-10 text-fresh" />
            </motion.div>
            <h1 className="font-serif text-3xl font-bold text-foreground mb-4">
              Order Request Submitted!
            </h1>
            <p className="text-muted-foreground mb-6">
              {"Thank you for your custom order request. We'll review your requirements and get back to you within 24 hours via WhatsApp or email."}
            </p>
            <div className="space-y-3">
              <Button asChild className="w-full">
                <a href="/">Back to Home</a>
              </Button>
              <a
                href="https://wa.me/2348108180906?text=Hello%20O'Rich%20Cakes!%20I%20just%20submitted%20a%20custom%20order%20request."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full gap-2">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat with Us
                </Button>
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative h-64 lg:h-80 flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/products/wedding-white.jpg"
              alt="Custom cake orders"
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
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Bring Your Vision to Life</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl lg:text-5xl font-bold"
            >
              Custom Orders
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-3 text-lg opacity-90 max-w-xl mx-auto"
            >
              Tell us your dream cake and {"we'll"} make it a delicious reality
            </motion.p>
          </div>
        </section>

        {/* Features */}
        <section className="py-8 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-card rounded-lg border"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground">
                  Custom Cake Inquiry Form
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Fill out the form below and {"we'll"} contact you within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Information */}
                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="font-semibold text-lg text-foreground mb-4">
                    Contact Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone / WhatsApp *</Label>
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
                    <div className="space-y-2 md:col-span-2">
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
                  </div>
                </div>

                {/* Cake Details */}
                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="font-semibold text-lg text-foreground mb-4">
                    Cake Details
                  </h3>
                  <div className="space-y-6">
                    {/* Flavors */}
                    <div className="space-y-3">
                      <Label>Cake Flavor(s) * (Select up to 3)</Label>
                      <div className="flex flex-wrap gap-2">
                        {cakeFlavors.map((flavor) => (
                          <button
                            key={flavor}
                            type="button"
                            onClick={() => handleFlavorToggle(flavor)}
                            disabled={
                              selectedFlavors.length >= 3 &&
                              !selectedFlavors.includes(flavor)
                            }
                            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                              selectedFlavors.includes(flavor)
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-muted text-muted-foreground hover:bg-muted/80 disabled:opacity-50 disabled:cursor-not-allowed'
                            }`}
                          >
                            {flavor}
                            {selectedFlavors.includes(flavor) && (
                              <Check className="inline-block h-3 w-3 ml-1" />
                            )}
                          </button>
                        ))}
                      </div>
                      {selectedFlavors.length > 0 && (
                        <p className="text-sm text-muted-foreground">
                          Selected: {selectedFlavors.join(', ')}
                        </p>
                      )}
                    </div>

                    {/* Size */}
                    <div className="space-y-2">
                      <Label htmlFor="size">Size / Servings *</Label>
                      <Select
                        value={formData.size}
                        onValueChange={(value) =>
                          setFormData({ ...formData, size: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          {cakeSizes.map((size) => (
                            <SelectItem key={size} value={size}>
                              {size}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Theme/Design */}
                    <div className="space-y-2">
                      <Label htmlFor="theme">Theme / Design Description *</Label>
                      <Textarea
                        id="theme"
                        required
                        value={formData.theme}
                        onChange={(e) =>
                          setFormData({ ...formData, theme: e.target.value })
                        }
                        placeholder="Describe your desired design, colors, decorations, text to be written, etc."
                        rows={3}
                      />
                    </div>

                    {/* Reference Image */}
                    <div className="space-y-2">
                      <Label>Reference Image (Optional)</Label>
                      <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-primary transition-colors">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                          id="reference-image"
                        />
                        <label
                          htmlFor="reference-image"
                          className="cursor-pointer"
                        >
                          {imagePreview ? (
                            <div className="relative w-32 h-32 mx-auto rounded-lg overflow-hidden">
                              <Image
                                src={imagePreview}
                                alt="Reference preview"
                                fill
                                className="object-cover"
                              />
                            </div>
                          ) : (
                            <>
                              <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                              <p className="text-sm text-muted-foreground">
                                Click to upload a reference image
                              </p>
                            </>
                          )}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Occasion & Date */}
                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="font-semibold text-lg text-foreground mb-4">
                    Occasion & Delivery
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="occasion">Occasion *</Label>
                      <Select
                        value={formData.occasion}
                        onValueChange={(value) =>
                          setFormData({ ...formData, occasion: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select occasion" />
                        </SelectTrigger>
                        <SelectContent>
                          {occasions.map((occasion) => (
                            <SelectItem key={occasion} value={occasion}>
                              {occasion}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="date">Date Needed *</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="date"
                          type="date"
                          required
                          value={formData.dateNeeded}
                          onChange={(e) =>
                            setFormData({ ...formData, dateNeeded: e.target.value })
                          }
                          className="pl-9"
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Delivery Option *</Label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="delivery"
                            value="pickup"
                            checked={formData.delivery === 'pickup'}
                            onChange={(e) =>
                              setFormData({ ...formData, delivery: e.target.value })
                            }
                            className="text-primary focus:ring-primary"
                          />
                          <span>Pickup</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="delivery"
                            value="delivery"
                            checked={formData.delivery === 'delivery'}
                            onChange={(e) =>
                              setFormData({ ...formData, delivery: e.target.value })
                            }
                            className="text-primary focus:ring-primary"
                          />
                          <span>Delivery (Ilorin)</span>
                        </label>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range *</Label>
                      <Select
                        value={formData.budget}
                        onValueChange={(value) =>
                          setFormData({ ...formData, budget: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((range) => (
                            <SelectItem key={range} value={range}>
                              {range}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="font-semibold text-lg text-foreground mb-4">
                    Additional Notes
                  </h3>
                  <Textarea
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    placeholder="Any allergies, dietary restrictions, special requests, or other information we should know..."
                    rows={4}
                  />
                </div>

                {/* Notice */}
                <div className="flex gap-3 p-4 bg-primary/10 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-foreground">
                    <p className="font-medium mb-1">Please Note:</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Custom orders require at least 3 days advance notice</li>
                      <li>Wedding cakes need at least 2 weeks notice</li>
                      <li>A 50% deposit is required to confirm your order</li>
                      <li>Prices may vary based on design complexity</li>
                    </ul>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting || selectedFlavors.length === 0}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">
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
                      Submitting...
                    </>
                  ) : (
                    'Submit Custom Order Request'
                  )}
                </Button>
              </form>
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
