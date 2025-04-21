export interface ElementData {
  id: string;
  type: string;
  content: string;
  styles?: Record<string, any>;
  children?: ElementData[];
}

export type PreviewDeviceType = "mobile" | "tablet" | "desktop";

export interface ElementTemplate {
  id: string;
  type: string;
  name: string;
  icon: React.ReactNode;
}

export interface WebsiteTemplate {
  id: string;
  name: string;
  category: string;
  thumbnail: string;
  elements: ElementData[];
}