import { Outfit as OutfitFont, Ovo as OvoFont } from "next/font/google";
import "./globals.css";

const outfit = OutfitFont({
  subsets: ["latin"],
  weight:["400","500","600","700"]
});

const ovo = OvoFont({
  subsets: ["latin"],
  weight: ["400"],
});


export const metadata = {
  title: "Sanjay Samala - Full Stack Developer & AI Engineer",
  description: "Full Stack Developer specializing in AI, Cloud Computing, and Deep Learning. Explore my portfolio showcasing React, Next.js, Node.js, and Python projects.",
  keywords: ["Full Stack Developer", "AI Engineer", "Cloud Computing", "React", "Next.js", "Python", "Machine Learning"],
  authors: [{ name: "Sanjay Samala" }],
  creator: "Sanjay Samala",
  openGraph: {
    type: "website",
    url: "https://sanjaysamala.dev",
    title: "Sanjay Samala - Full Stack Developer & AI Engineer",
    description: "Full Stack Developer specializing in AI, Cloud Computing, and Deep Learning. Explore my portfolio showcasing React, Next.js, Node.js, and Python projects.",
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
    title: "Sanjay Samala - Full Stack Developer & AI Engineer",
    description: "Full Stack Developer specializing in AI, Cloud Computing, and Deep Learning.",
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
