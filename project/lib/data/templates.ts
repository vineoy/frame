import { WebsiteTemplate } from "@/lib/types";

export const templateData: WebsiteTemplate[] = [
  {
    id: "modern-agency",
    name: "Modern Agency",
    category: "Business",
    thumbnail: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
    elements: [
      {
        id: "header-1",
        type: "heading",
        content: "We Create Digital Experiences",
        styles: {
          level: "h1",
          fontSize: 64,
          textAlign: "center",
          padding: "large",
          fontFamily: "sans"
        }
      },
      {
        id: "subheader-1",
        type: "paragraph",
        content: "Award-winning digital agency crafting innovative solutions for forward-thinking brands",
        styles: {
          fontSize: 24,
          textAlign: "center",
          padding: "medium",
          color: "#666666"
        }
      }
    ]
  },
  {
    id: "minimal-portfolio",
    name: "Minimal Portfolio",
    category: "Portfolio",
    thumbnail: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    elements: [
      {
        id: "intro-heading",
        type: "heading",
        content: "John Doe — Designer & Developer",
        styles: {
          level: "h1",
          fontSize: 48,
          padding: "large",
          fontFamily: "mono"
        }
      },
      {
        id: "portfolio-grid",
        type: "grid",
        content: "",
        styles: {
          padding: "large",
          className: "grid-cols-2 gap-8"
        }
      }
    ]
  },
  {
    id: "startup-landing",
    name: "Startup Landing",
    category: "Marketing",
    thumbnail: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    elements: [
      {
        id: "hero-heading",
        type: "heading",
        content: "Launch Your Next Big Idea",
        styles: {
          level: "h1",
          fontSize: 72,
          textAlign: "center",
          padding: "large",
          fontFamily: "sans"
        }
      },
      {
        id: "cta-button",
        type: "button",
        content: "Get Started",
        styles: {
          padding: "medium",
          backgroundColor: "#2563eb",
          className: "text-white font-bold"
        }
      }
    ]
  },
  {
    id: "restaurant-site",
    name: "Restaurant Website",
    category: "Food & Beverage",
    thumbnail: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
    elements: [
      {
        id: "restaurant-hero",
        type: "heading",
        content: "Authentic Italian Cuisine",
        styles: {
          level: "h1",
          fontSize: 56,
          textAlign: "center",
          padding: "large",
          fontFamily: "serif"
        }
      },
      {
        id: "menu-section",
        type: "container",
        content: "Our Menu",
        styles: {
          padding: "large",
          backgroundColor: "#f8f8f8",
          className: "rounded-lg"
        }
      }
    ]
  },
  {
    id: "blog-magazine",
    name: "Blog Magazine",
    category: "Publishing",
    thumbnail: "https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg",
    elements: [
      {
        id: "blog-header",
        type: "heading",
        content: "The Daily Read",
        styles: {
          level: "h1",
          fontSize: 40,
          padding: "medium",
          fontFamily: "serif"
        }
      },
      {
        id: "featured-post",
        type: "container",
        content: "",
        styles: {
          padding: "large",
          className: "grid grid-cols-2 gap-8"
        }
      }
    ]
  }
];