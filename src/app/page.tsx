"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import BlogCardTwo from '@/components/sections/blog/BlogCardTwo';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import ContactText from '@/components/sections/contact/ContactText';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Facebook, Instagram, Twitter, Sparkles } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="elastic-effect"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="mediumLarge"
      sizing="mediumLargeSizeMediumTitles"
      background="floatingGradient"
      cardStyle="gradient-radial"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="solid"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Guddu Urban Lounge"
          navItems={[
            { name: "Experience", id: "experience" },
            { name: "Menu", id: "menu" },
            { name: "Ambiance", id: "ambiance" },
            { name: "Reviews", id: "reviews" }
          ]}
          button={{
            text: "Reserve Your Table",            href: "#reservation"
          }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardTestimonial
          title="Urban Dining Redefined at Guddu Lounge"
          description="Experience elevated cuisine and vibrant ambiance in the heart of the city. Reserve your table today for an unforgettable evening."
          tag="Upscale Casual Dining"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Reserve Your Table",              href: "#reservation"
            },
            {
              text: "Explore Menu",              href: "#menu"
            }
          ]}
          buttonAnimation="slide-up"
          testimonials={[
            {
              name: "Priya Sharma",              handle: "@priya_dines",              testimonial: "The perfect spot for our anniversary dinner. Exquisite food, impeccable service, and an atmosphere that felt truly special.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-professional-businesswoman-indoors_23-2148824826.jpg",              imageAlt: "Priya Sharma"
            },
            {
              name: "Arjun Mehta",              handle: "@arjun_foodie",              testimonial: "Best culinary experience in the city. Every dish was a masterpiece, and the cocktails are absolutely divine.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/closeup-handsome-young-office-worker-glasses-suit-smiling-camera-looking-happy-white_1258-173667.jpg",              imageAlt: "Arjun Mehta"
            }
          ]}
          testimonialRotationInterval={5000}
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
          mediaAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/restaurant-hall-with-round-square-tables-some-chairs-plants_140725-8033.jpg"
          imageAlt="Guddu Urban Lounge elegant dining interior"
        />
      </div>

      <div id="about" data-section="about">
        <InlineImageSplitTextAbout
          heading={[
            {
              type: "text",              content: "Crafting Culinary Excellence Since Day One"
            },
            {
              type: "image",              src: "http://img.b2bpic.net/free-photo/black-chef-modern-kitchen-adding-herbs-leaves-dish-stove_482257-127688.jpg",              alt: "Expert culinary preparation at Guddu Lounge"
            }
          ]}
          buttons={[
            {
              text: "Our Story",              href: "#story"
            }
          ]}
          buttonAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="experience" data-section="experience">
        <FeatureCardTwelve
          title="Why Choose Guddu Urban Lounge"
          description="From our signature cocktails to intimate private spaces, every detail is crafted for an unforgettable dining experience."
          tag="The Experience"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          textboxLayout="default"
          features={[
            {
              id: "cocktails",              label: "Craft Beverages",              title: "Signature Cocktails & Premium Wines",              items: [
                "Expertly crafted cocktails by award-winning mixologists",                "Curated wine selection from around the world",                "Seasonal drink specials and house favorites",                "Professional bartending with artistic presentations"
              ]
            },
            {
              id: "ambiance",              label: "Atmosphere",              title: "Sophisticated Ambiance",              items: [
                "Warm mood lighting and elegant interior design",                "Contemporary furnishings and premium seating",                "Curated background music and ambient sound",                "Perfect setting for any occasion"
              ]
            },
            {
              id: "private",              label: "Events",              title: "Private Dining & Events",              items: [
                "Exclusive private dining rooms for special occasions",                "Corporate event hosting and catering services",                "Customizable menus for groups and celebrations",                "Professional event coordination team"
              ]
            }
          ]}
          animationType="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardFour
          title="Menu Highlights"
          description="Explore our carefully curated selection of elevated dishes featuring fresh ingredients and innovative techniques."
          tag="Culinary Excellence"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          textboxLayout="default"
          products={[
            {
              id: "dish-1",              name: "Pan-Seared Branzino",              price: "₹850",              variant: "With seasonal vegetables & citrus beurre blanc",              imageSrc: "http://img.b2bpic.net/free-photo/top-view-little-cookie-pastries-inside-plate-light-table-cake-biscuit-sugar-sweet-pastry-bake_140725-24490.jpg",              imageAlt: "Pan-seared branzino with vegetables"
            },
            {
              id: "dish-2",              name: "Herb-Crusted Lamb Chops",              price: "₹1200",              variant: "Served with mint chimichurri & roasted potatoes",              imageSrc: "http://img.b2bpic.net/free-photo/top-view-little-cookie-pastries-inside-plate-light-table-cake-biscuit-sugar-sweet-pastry-bake_140725-24490.jpg",              imageAlt: "Herb-crusted lamb chops"
            },
            {
              id: "dish-3",              name: "Mushroom Risotto",              price: "₹650",              variant: "With truffle oil & parmesan crisps",              imageSrc: "http://img.b2bpic.net/free-photo/top-view-little-cookie-pastries-inside-plate-light-table-cake-biscuit-sugar-sweet-pastry-bake_140725-24490.jpg",              imageAlt: "Creamy mushroom risotto"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          carouselMode="buttons"
          animationType="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="ambiance" data-section="ambiance">
        <BlogCardTwo
          title="Experience the Ambiance"
          description="Discover the carefully curated spaces that make Guddu Urban Lounge the city's premier dining destination."
          tag="Visual Gallery"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          textboxLayout="default"
          blogs={[
            {
              id: "gallery-1",              category: "Interior Design",              title: "Main Dining Hall",              excerpt: "Elegant interior with modern furnishings, warm ambient lighting, and spacious seating arrangements.",              imageSrc: "http://img.b2bpic.net/free-photo/event-hall-wooden-table-with-rustic-chairs_114579-2233.jpg",              imageAlt: "Main dining hall",              authorName: "Guddu Lounge",              authorAvatar: "http://img.b2bpic.net/free-photo/portrait-professional-businesswoman-indoors_23-2148824826.jpg",              date: "Signature Space"
            },
            {
              id: "gallery-2",              category: "Bar Experience",              title: "Craft Cocktail Bar",              excerpt: "Premium bar featuring skilled mixologists, curated spirits, and artistic cocktail presentations.",              imageSrc: "http://img.b2bpic.net/free-photo/full-shot-senior-woman-talking-phone_23-2149357069.jpg",              imageAlt: "Craft cocktail bar",              authorName: "Guddu Lounge",              authorAvatar: "http://img.b2bpic.net/free-photo/closeup-handsome-young-office-worker-glasses-suit-smiling-camera-looking-happy-white_1258-173667.jpg",              date: "Mixology Hub"
            },
            {
              id: "gallery-3",              category: "Private Dining",              title: "Private Event Spaces",              excerpt: "Exclusive rooms perfect for intimate gatherings, corporate events, and special celebrations.",              imageSrc: "http://img.b2bpic.net/free-photo/event-hall-wooden-table-with-rustic-chairs_114579-2233.jpg",              imageAlt: "Private dining room",              authorName: "Guddu Lounge",              authorAvatar: "http://img.b2bpic.net/free-photo/portrait-young-business-lady_1163-3171.jpg",              date: "Event Ready"
            }
          ]}
          carouselMode="buttons"
          animationType="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          title="What Our Guests Say"
          description="Real experiences from diners who have celebrated life's moments at Guddu Urban Lounge."
          tag="Customer Reviews"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          textboxLayout="default"
          testimonials={[
            {
              id: "review-1",              name: "Priya Sharma",              date: "Anniversary Dinner",              title: "Perfect for Special Occasions",              quote: "The perfect spot for our anniversary dinner. Exquisite food, impeccable service, and an atmosphere that felt truly special.",              tag: "Anniversary",              avatarSrc: "http://img.b2bpic.net/free-photo/portrait-professional-businesswoman-indoors_23-2148824826.jpg",              avatarAlt: "Priya Sharma"
            },
            {
              id: "review-2",              name: "Arjun Mehta",              date: "Business Lunch",              title: "Best Culinary Experience",              quote: "Best culinary experience in the city. Every dish was a masterpiece, and the cocktails are absolutely divine.",              tag: "Foodie",              avatarSrc: "http://img.b2bpic.net/free-photo/closeup-handsome-young-office-worker-glasses-suit-smiling-camera-looking-happy-white_1258-173667.jpg",              avatarAlt: "Arjun Mehta"
            },
            {
              id: "review-3",              name: "Neha Patel",              date: "Date Night",              title: "Romantic & Elegant",              quote: "We loved every moment here. The ambiance is romantic, the staff is incredibly attentive, and the food is absolutely delicious.",              tag: "Date Night",              avatarSrc: "http://img.b2bpic.net/free-photo/portrait-young-business-lady_1163-3171.jpg",              avatarAlt: "Neha Patel"
            },
            {
              id: "review-4",              name: "Vikram Singh",              date: "Corporate Event",              title: "Excellent Event Venue",              quote: "Hosted our corporate event here and it was flawless. Professional team, fantastic ambiance, and amazing food. Highly recommended!",              tag: "Corporate",              avatarSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1602.jpg",              avatarAlt: "Vikram Singh"
            },
            {
              id: "review-5",              name: "Anjali Gupta",              date: "Casual Dining",              title: "Worth Every Visit",              quote: "Whether it's a casual dinner or a special celebration, Guddu never disappoints. Quality food, great service, and wonderful atmosphere.",              tag: "Regular",              avatarSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-woman-home_23-2149122066.jpg",              avatarAlt: "Anjali Gupta"
            },
            {
              id: "review-6",              name: "Rohit Desai",              date: "Private Party",              title: "Private Dining Excellence",              quote: "Our private party was exceptional. The dedicated team took care of every detail, and our guests couldn't stop talking about it.",              tag: "Private Event",              avatarSrc: "http://img.b2bpic.net/free-photo/man-smiling-with-arms-crossed_1187-3243.jpg",              avatarAlt: "Rohit Desai"
            }
          ]}
          useInvertedBackground={false}
        />
      </div>

      <div id="reservation" data-section="reservation">
        <ContactText
          text="Ready to experience urban dining redefined? Reserve your table at Guddu Urban Lounge today and create unforgettable memories."
          background={{ variant: "sparkles-gradient" }}
          buttons={[
            {
              text: "Reserve Now",              href: "tel:+919876543210"
            },
            {
              text: "Inquire About Events",              href: "mailto:events@guddulounge.com"
            }
          ]}
          useInvertedBackground={false}
          animationType="entrance-slide"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="Guddu Urban Lounge"
          copyrightText="© 2025 Guddu Urban Lounge. All rights reserved."
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/guddulounge",              ariaLabel: "Follow us on Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com/guddulounge",              ariaLabel: "Follow us on Facebook"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/guddulounge",              ariaLabel: "Follow us on Twitter"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}