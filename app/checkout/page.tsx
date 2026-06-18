'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ShoppingBag, 
  Plus, 
  Minus, 
  Trash2, 
  CreditCard,
  Truck,
  MapPin,
  Check,
  AlertCircle,
} from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CartDrawer } from '@/components/cart-drawer';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useCartStore } from '@/lib/store';
import { formatPrice } from '@/lib/data';

export default function CheckoutPage() {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCartStore();
  const [step, setStep] = useState(1);
  const [deliveryMethod, setDeliveryMethod] = useState('delivery');
  const [paymentMethod, setPaymentMethod] = useState('transfer');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  });

  const subtotal = getTotalPrice();
  const deliveryFee = deliveryMethod === 'delivery' ? 1500 : 0;
  const total = subtotal + deliveryFee;

  const handlePlaceOrder = async () => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setOrderComplete(true);
    clearCart();
  };

  if (orderComplete) {
    return (
      <>
        <Header />
        <main className="min-h-screen py-16">
          <div className="container mx-auto px-4 max-w-md text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-20 h-20 bg-fresh/20 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Check className="h-10 w-10 text-fresh" />
            </motion.div>
            <h1 className="font-serif text-3xl font-bold text-foreground mb-4">
              Order Placed Successfully!
            </h1>
            <p className="text-muted-foreground mb-6">
              {"Thank you for your order. We've received your request and will contact you shortly via WhatsApp to confirm the details and payment."}
            </p>
            <div className="bg-muted/50 rounded-lg p-4 mb-6 text-left">
              <h3 className="font-semibold text-foreground mb-2">What happens next?</h3>
              <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                <li>{"We'll call or message you to confirm your order"}</li>
                <li>Make payment via bank transfer or pay on delivery</li>
                <li>{"We'll prepare your fresh treats"}</li>
                <li>Pick up or receive your delivery</li>
              </ol>
            </div>
            <div className="space-y-3">
              <Button asChild className="w-full">
                <Link href="/menu">Continue Shopping</Link>
              </Button>
              <a
                href={`https://wa.me/2348108180906?text=Hello%20O'Rich%20Cakes!%20I%20just%20placed%20an%20order%20and%20would%20like%20to%20confirm.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full gap-2">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Contact Us on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (items.length === 0) {
    return (
      <>
        <Header />
        <main className="min-h-screen py-16">
          <div className="container mx-auto px-4 max-w-md text-center">
            <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
            <h1 className="font-serif text-2xl font-bold text-foreground mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-muted-foreground mb-6">
              Add some delicious treats to your cart to continue checkout.
            </p>
            <Button asChild>
              <Link href="/menu">Browse Menu</Link>
            </Button>
          </div>
        </main>
        <Footer />
        <CartDrawer />
        <WhatsAppButton />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Continue Shopping
          </Link>

          <h1 className="font-serif text-3xl font-bold text-foreground mb-8">
            Checkout
          </h1>

          {/* Progress Steps */}
          <div className="flex items-center gap-4 mb-8">
            {[
              { num: 1, label: 'Cart' },
              { num: 2, label: 'Details' },
              { num: 3, label: 'Payment' },
            ].map((s, i) => (
              <div key={s.num} className="flex items-center">
                <button
                  onClick={() => s.num <= step && setStep(s.num)}
                  className={`flex items-center gap-2 ${
                    s.num <= step ? 'cursor-pointer' : 'cursor-not-allowed'
                  }`}
                  disabled={s.num > step}
                >
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      s.num <= step
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {s.num < step ? <Check className="h-4 w-4" /> : s.num}
                  </span>
                  <span
                    className={`hidden sm:block text-sm font-medium ${
                      s.num <= step ? 'text-foreground' : 'text-muted-foreground'
                    }`}
                  >
                    {s.label}
                  </span>
                </button>
                {i < 2 && (
                  <div
                    className={`w-8 sm:w-16 h-0.5 mx-2 ${
                      s.num < step ? 'bg-primary' : 'bg-muted'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Step 1: Cart Items */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <h2 className="font-semibold text-lg text-foreground">
                    Review Your Order
                  </h2>
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="bg-card p-4 rounded-xl border flex gap-4"
                    >
                      <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-foreground">{item.name}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-1">
                          {item.description}
                        </p>
                        <p className="text-primary font-semibold mt-1">
                          {formatPrice(item.price)}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-muted transition-colors"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="font-medium w-8 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-muted transition-colors"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-destructive hover:text-destructive/80 transition-colors"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  <Button onClick={() => setStep(2)} className="w-full" size="lg">
                    Continue to Details
                  </Button>
                </motion.div>
              )}

              {/* Step 2: Details */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="bg-card p-6 rounded-xl border">
                    <h2 className="font-semibold text-lg text-foreground mb-4">
                      Contact Information
                    </h2>
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            placeholder="Your name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone / WhatsApp *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                            placeholder="08012345678"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email (Optional)</Label>
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

                  <div className="bg-card p-6 rounded-xl border">
                    <h2 className="font-semibold text-lg text-foreground mb-4">
                      Delivery Method
                    </h2>
                    <RadioGroup
                      value={deliveryMethod}
                      onValueChange={setDeliveryMethod}
                      className="space-y-3"
                    >
                      <div className={`flex items-start gap-3 p-4 rounded-lg border ${deliveryMethod === 'delivery' ? 'border-primary bg-primary/5' : ''}`}>
                        <RadioGroupItem value="delivery" id="delivery" className="mt-1" />
                        <label htmlFor="delivery" className="flex-1 cursor-pointer">
                          <div className="flex items-center gap-2">
                            <Truck className="h-5 w-5 text-primary" />
                            <span className="font-medium">Delivery (Ilorin)</span>
                            <span className="text-sm text-primary ml-auto">
                              {formatPrice(1500)}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {"We'll deliver to your address within Ilorin"}
                          </p>
                        </label>
                      </div>
                      <div className={`flex items-start gap-3 p-4 rounded-lg border ${deliveryMethod === 'pickup' ? 'border-primary bg-primary/5' : ''}`}>
                        <RadioGroupItem value="pickup" id="pickup" className="mt-1" />
                        <label htmlFor="pickup" className="flex-1 cursor-pointer">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-5 w-5 text-primary" />
                            <span className="font-medium">Pickup</span>
                            <span className="text-sm text-fresh ml-auto">Free</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            Pick up at Tanke, Ilorin (7 AM - 6 PM)
                          </p>
                        </label>
                      </div>
                    </RadioGroup>

                    {deliveryMethod === 'delivery' && (
                      <div className="mt-4 space-y-2">
                        <Label htmlFor="address">Delivery Address *</Label>
                        <Textarea
                          id="address"
                          value={formData.address}
                          onChange={(e) =>
                            setFormData({ ...formData, address: e.target.value })
                          }
                          placeholder="Enter your full delivery address"
                          rows={3}
                          required
                        />
                      </div>
                    )}
                  </div>

                  <div className="bg-card p-6 rounded-xl border">
                    <h2 className="font-semibold text-lg text-foreground mb-4">
                      Special Instructions (Optional)
                    </h2>
                    <Textarea
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      placeholder="Any special requests or notes for your order..."
                      rows={3}
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline" onClick={() => setStep(1)}>
                      Back
                    </Button>
                    <Button
                      onClick={() => setStep(3)}
                      className="flex-1"
                      disabled={
                        !formData.name ||
                        !formData.phone ||
                        (deliveryMethod === 'delivery' && !formData.address)
                      }
                    >
                      Continue to Payment
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Payment */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="bg-card p-6 rounded-xl border">
                    <h2 className="font-semibold text-lg text-foreground mb-4">
                      Payment Method
                    </h2>
                    <RadioGroup
                      value={paymentMethod}
                      onValueChange={setPaymentMethod}
                      className="space-y-3"
                    >
                      <div className={`flex items-start gap-3 p-4 rounded-lg border ${paymentMethod === 'transfer' ? 'border-primary bg-primary/5' : ''}`}>
                        <RadioGroupItem value="transfer" id="transfer" className="mt-1" />
                        <label htmlFor="transfer" className="flex-1 cursor-pointer">
                          <div className="flex items-center gap-2">
                            <CreditCard className="h-5 w-5 text-primary" />
                            <span className="font-medium">Bank Transfer</span>
                            <span className="text-xs bg-fresh/20 text-fresh px-2 py-0.5 rounded-full ml-auto">
                              Recommended
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            Pay via bank transfer after placing order
                          </p>
                        </label>
                      </div>
                      <div className={`flex items-start gap-3 p-4 rounded-lg border ${paymentMethod === 'pod' ? 'border-primary bg-primary/5' : ''}`}>
                        <RadioGroupItem value="pod" id="pod" className="mt-1" />
                        <label htmlFor="pod" className="flex-1 cursor-pointer">
                          <div className="flex items-center gap-2">
                            <Truck className="h-5 w-5 text-primary" />
                            <span className="font-medium">Pay on Delivery</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            Pay cash when you receive your order (Ilorin only)
                          </p>
                        </label>
                      </div>
                    </RadioGroup>

                    {paymentMethod === 'transfer' && (
                      <div className="mt-4 p-4 bg-muted rounded-lg">
                        <p className="text-sm font-medium text-foreground mb-2">
                          Bank Details:
                        </p>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <p>Bank: First Bank</p>
                          <p>Account Name: {"O'Rich Cakes & Pastries"}</p>
                          <p>Account Number: 1234567890</p>
                        </div>
                        <p className="text-xs text-muted-foreground mt-3">
                          Send proof of payment via WhatsApp after transfer
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-3 p-4 bg-primary/10 rounded-lg">
                    <AlertCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground">
                      By placing this order, you agree to our terms of service. 
                      {"We'll"} contact you via WhatsApp to confirm your order and payment.
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline" onClick={() => setStep(2)}>
                      Back
                    </Button>
                    <Button
                      onClick={handlePlaceOrder}
                      className="flex-1"
                      size="lg"
                      disabled={isSubmitting}
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
                          Processing...
                        </>
                      ) : (
                        'Place Order'
                      )}
                    </Button>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card p-6 rounded-xl border sticky top-24">
                <h2 className="font-semibold text-lg text-foreground mb-4">
                  Order Summary
                </h2>
                <div className="space-y-3 mb-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {item.name} x{item.quantity}
                      </span>
                      <span className="text-foreground">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Delivery</span>
                    <span className="text-foreground">
                      {deliveryMethod === 'delivery' ? formatPrice(deliveryFee) : 'Free'}
                    </span>
                  </div>
                  <div className="flex justify-between text-lg font-semibold pt-2 border-t">
                    <span className="text-foreground">Total</span>
                    <span className="text-primary">{formatPrice(total)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <CartDrawer />
      <WhatsAppButton />
    </>
  );
}
