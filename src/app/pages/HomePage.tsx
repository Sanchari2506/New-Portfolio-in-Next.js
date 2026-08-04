import { useEffect } from "react";
import { useLocation } from "react-router";
import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { TrustedBrands } from "../components/TrustedBrands";
import { Services } from "../components/Services";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { CaseStudies } from "../components/CaseStudies";
import { Experience } from "../components/Experience";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Seo, defaultSeo } from "../components/Seo";

export function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    return () => window.clearTimeout(timer);
  }, [hash]);

  return (
    <>
      <Seo
        canonicalPath="/"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Sanchari Rakshit",
            jobTitle: "Shopify Developer",
            url: window.location.origin,
            image: defaultSeo.image,
            email: "mailto:sanchari.shopify@gmail.com",
            telephone: "+916290398828",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Kolkata",
              addressCountry: "IN",
            },
            sameAs: [
              "https://github.com/sanchari2506",
              "https://www.linkedin.com/in/sanchari-rakshit-524a82192",
            ],
            knowsAbout: [
              "Shopify development",
              "Liquid theme development",
              "Shopify apps",
              "Checkout UI extensions",
              "Ecommerce performance optimization",
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Sanchari Rakshit Shopify Development",
            url: window.location.origin,
            areaServed: "Worldwide",
            serviceType: [
              "Custom Shopify theme development",
              "Shopify app development",
              "Shopify Plus consulting",
              "Checkout extension development",
            ],
          },
        ]}
      />
      <Nav />
      <main id="main-content">
        <Hero />
        <TrustedBrands />
        <Services />
        <Skills />
        <Projects />
        <CaseStudies />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
