
"use client"

import Banner from "@/components/Banner";
import Category from "@/components/Category";
import DiscountSection from "@/components/DiscountSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MiniBanner from "@/components/MiniBanner";
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import ProductShowcase from "@/components/ProductShowcase";
import Image from "next/image";




import { useEffect, useState } from 'react';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay before showing the content
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen text-gray-200">
      <div className="container mx-auto">
       
        
        <Navbar />
        <HeroSection />
        <ProductShowcase />
        <Category />
        <ProductGrid />
        <Banner />
        <DiscountSection  />
        <MiniBanner />
        <Footer />
      
        
      </div>
    
      
    </div>
  );
};



export default HomePage;
