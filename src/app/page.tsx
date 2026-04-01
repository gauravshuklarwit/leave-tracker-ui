import styles from "./page.module.css";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { AppShowcase } from "@/components/landing/AppShowcase";
import { Features } from "@/components/landing/Features";
import { Teams } from "@/components/landing/Teams";
import { Pricing } from "@/components/landing/Pricing";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Hero />
      <AppShowcase />
      <Features />
      <Teams />
      <Pricing />
      <Footer />
    </div>
  );
}
