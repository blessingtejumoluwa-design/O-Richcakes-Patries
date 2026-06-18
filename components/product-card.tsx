'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShoppingBag, Plus } from 'lucide-react';
import type { Product } from '@/lib/types';
import { formatPrice } from '@/lib/data';
import { useCartStore } from '@/lib/store';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group bg-card rounded-xl overflow-hidden border shadow-sm hover:shadow-lg transition-shadow"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {product.isPopular && (
            <span className="bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-full">
              Popular
            </span>
          )}
          {product.isNew && (
            <span className="bg-fresh text-fresh-foreground text-xs font-medium px-2 py-1 rounded-full">
              New
            </span>
          )}
        </div>
        {/* Quick Add Button */}
        <button
          onClick={handleAddToCart}
          className="absolute top-3 right-3 w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-primary-foreground"
          aria-label={`Add ${product.name} to cart`}
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-foreground line-clamp-1">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold text-primary">
            {formatPrice(product.price)}
          </span>
          <Button
            size="sm"
            onClick={handleAddToCart}
            className="gap-2"
          >
            <ShoppingBag className="h-4 w-4" />
            Add
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
