import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarBackground from "@/components/StarBackground";
import Navbar from "@/components/Navbar";
import JarvisAssistant from "@/components/JarvisAssistant";
import CustomCursor from "@/components/CustomCursor";
import SplashScreen from "@/components/SplashScreen";
import ConsoleCleaner from "@/components/ConsoleCleaner";

const inter = Inter({ subsets: ["latin"], preload: false });

export const metadata: Metadata = {
  title: "Saurabh Anand | Full Stack Developer & AI Enthusiast",
  description: "Futuristic 3D portfolio of Saurabh Anand, a passionate Frontend Developer, QA Associate, and AI enthusiast. Explore my featured projects like Smart AI Health Predictor and Velora E-Commerce.",
  keywords: ["Saurabh Anand", "Saurabh Anand Portfolio", "Full Stack Developer", "Next.js", "React", "AI", "Frontend Developer", "Web Developer", "Software Engineer"],
  authors: [{ name: "Saurabh Anand" }],
  creator: "Saurabh Anand",
  openGraph: {
    title: "Saurabh Anand | Futuristic Portfolio",
    description: "Premium 3D portfolio of Saurabh Anand. Explore projects, skills, and experience.",
    siteName: "Saurabh Anand Portfolio",
    images: [
      {
        url: "/projects/health-ai.png", 
        width: 1200,
        height: 630,
        alt: "Saurabh Anand Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saurabh Anand | Futuristic Portfolio",
    description: "Premium 3D portfolio of Saurabh Anand. Explore projects, skills, and experience.",
    images: ["/projects/health-ai.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black overflow-x-hidden`}>
        <ConsoleCleaner />
        <SplashScreen />
        <CustomCursor />
        <StarBackground />
        <Navbar />
        {children}
        <JarvisAssistant />
      </body>
    </html>
  );
}
