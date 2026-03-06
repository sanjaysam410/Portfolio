import { Outfit as OutfitFont, Ovo as OvoFont } from "next/font/google";
import "./globals.css";

const outfit = OutfitFont({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const ovo = OvoFont({
  subsets: ["latin"],
  weight: ["400"],
});


export const metadata = {
  title: "Sanjay Samala - Software Developer & AI Engineer",
  description: "Software Developer and AI Engineer specializing in Generative AI, Agentic RAG, Computer Vision, and LLM architectures. Explore my portfolio showcasing Python, LangGraph, and modern AI projects.",
  keywords: ["Software Developer", "AI Engineer", "Generative AI", "Agentic RAG", "LangGraph", "Python", "Computer Vision", "LLMs"],
  authors: [{ name: "Sanjay Samala" }],
  creator: "Sanjay Samala",
  openGraph: {
    type: "website",
    url: "https://sanjaysamala.dev",
    title: "Sanjay Samala - Software Developer & AI Engineer",
    description: "Software Developer and AI Engineer specializing in Generative AI, Agentic RAG, Computer Vision, and LLM architectures. Explore my portfolio showcasing Python, LangGraph, and modern AI projects.",
    siteName: "Sanjay's Portfolio",
    images: [
      {
        url: "https://sanjaysamala.dev/profile-img.png",
        width: 1200,
        height: 630,
        alt: "Sanjay Samala Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanjay Samala - Software Developer & AI Engineer",
    description: "Software Developer and AI Engineer specializing in Generative AI, Agentic RAG, and Computer Vision.",
    images: ["https://sanjaysamala.dev/profile-img.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
