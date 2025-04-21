import { ElementData } from "@/lib/types";
import { cn } from "@/lib/utils";

export function renderElementByType(element: ElementData) {
  const { type, content, styles = {} } = element;
  
  const baseStyle = {
    fontSize: styles.fontSize ? `${styles.fontSize}px` : undefined,
    fontFamily: getFontFamily(styles.fontFamily),
    textAlign: styles.textAlign as any,
    color: styles.color,
    backgroundColor: styles.backgroundColor,
  };

  const paddingClass = getPaddingClass(styles.padding);
  
  switch (type) {
    case "heading":
      const HeadingTag = (styles.level || "h2") as any;
      return (
        <HeadingTag 
          className={cn(paddingClass, styles.className)}
          id={styles.id}
          style={baseStyle}
        >
          {content || "Heading Text"}
        </HeadingTag>
      );
      
    case "paragraph":
      return (
        <p 
          className={cn(paddingClass, styles.className)}
          id={styles.id}
          style={baseStyle}
        >
          {content || "Paragraph text goes here. Edit this text from the properties panel."}
        </p>
      );
      
    case "image":
      return (
        <img 
          src={styles.src || "https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg"}
          alt={styles.alt || "Image"}
          className={cn("w-full", paddingClass, styles.className)}
          id={styles.id}
          style={{
            borderRadius: styles.borderRadius,
            aspectRatio: styles.aspectRatio || "16/9",
            objectFit: "cover",
          }}
        />
      );
      
    case "button":
      return (
        <button 
          className={cn(
            "px-4 py-2 rounded-md bg-blue-600 text-white",
            paddingClass,
            styles.className
          )}
          id={styles.id}
          style={baseStyle}
        >
          {content || "Button Text"}
        </button>
      );
      
    case "link":
      return (
        <a 
          href={styles.href || "#"}
          className={cn("text-blue-600 underline", paddingClass, styles.className)}
          id={styles.id}
          style={baseStyle}
        >
          {content || "Link Text"}
        </a>
      );
      
    case "spacer":
      return (
        <div 
          className={cn("w-full", styles.className)}
          id={styles.id}
          style={{ height: `${styles.height || 40}px` }}
        ></div>
      );
      
    case "divider":
      return (
        <hr 
          className={cn("w-full border-t border-gray-200", paddingClass, styles.className)}
          id={styles.id}
          style={{ borderColor: styles.color }}
        />
      );
      
    case "container":
      return (
        <div 
          className={cn("w-full", paddingClass, styles.className)}
          id={styles.id}
          style={{
            ...baseStyle,
            borderRadius: styles.borderRadius,
            border: styles.border,
          }}
        >
          {content || "Container content"}
        </div>
      );
      
    default:
      return (
        <div className="p-4 border border-dashed border-gray-300 text-center text-gray-500">
          Unknown element type: {type}
        </div>
      );
  }
}

function getFontFamily(fontFamily: string | undefined) {
  switch (fontFamily) {
    case "sans":
      return "ui-sans-serif, system-ui, sans-serif";
    case "serif":
      return "ui-serif, Georgia, serif";
    case "mono":
      return "ui-monospace, monospace";
    default:
      return undefined;
  }
}

function getPaddingClass(padding: string | undefined) {
  switch (padding) {
    case "none":
      return "p-0";
    case "small":
      return "p-2";
    case "medium":
      return "p-4";
    case "large":
      return "p-8";
    default:
      return "p-0";
  }
}