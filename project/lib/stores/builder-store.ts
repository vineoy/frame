"use client";

import { create } from "zustand";
import { ElementData, PreviewDeviceType } from "@/lib/types";
import { nanoid } from "nanoid";
import { templateData } from "@/lib/data/templates";

interface BuilderState {
  elements: ElementData[];
  selectedElement: ElementData | null;
  previewMode: boolean;
  previewDeviceType: PreviewDeviceType;
  
  // Actions
  addElement: (type: string) => string;
  updateElement: (id: string, updates: Partial<ElementData>) => void;
  removeElement: (id: string) => void;
  selectElement: (id: string | null) => void;
  setPreviewMode: (active: boolean) => void;
  setPreviewDeviceType: (type: PreviewDeviceType) => void;
  loadTemplate: (templateId: string) => void;
}

const defaultElementContent = {
  heading: "This is a heading",
  paragraph: "This is a paragraph of text. Click to edit this content from the properties panel.",
  button: "Click me",
  link: "Click here",
  image: "",
};

export const useBuilderStore = create<BuilderState>((set) => ({
  elements: [],
  selectedElement: null,
  previewMode: false,
  previewDeviceType: "desktop",
  
  addElement: (type) => {
    const id = nanoid(6);
    const newElement: ElementData = {
      id,
      type,
      content: defaultElementContent[type as keyof typeof defaultElementContent] || "",
      styles: {},
    };
    
    set((state) => ({
      elements: [...state.elements, newElement],
    }));
    
    return id;
  },
  
  updateElement: (id, updates) => {
    set((state) => ({
      elements: state.elements.map((element) => 
        element.id === id 
          ? { ...element, ...updates, styles: { ...element.styles, ...updates.styles } } 
          : element
      ),
      selectedElement: state.selectedElement?.id === id 
        ? { ...state.selectedElement, ...updates, styles: { ...state.selectedElement.styles, ...updates.styles } } 
        : state.selectedElement,
    }));
  },
  
  removeElement: (id) => {
    set((state) => ({
      elements: state.elements.filter((element) => element.id !== id),
      selectedElement: state.selectedElement?.id === id ? null : state.selectedElement,
    }));
  },
  
  selectElement: (id) => {
    set((state) => ({
      selectedElement: id ? state.elements.find((element) => element.id === id) || null : null,
    }));
  },
  
  setPreviewMode: (active) => {
    set(() => ({
      previewMode: active,
      selectedElement: null,
    }));
  },
  
  setPreviewDeviceType: (type) => {
    set(() => ({
      previewDeviceType: type,
    }));
  },

  loadTemplate: (templateId) => {
    const template = templateData.find((t) => t.id === templateId);
    if (template) {
      const elements = template.elements.map((element) => ({
        ...element,
        id: nanoid(6), // Generate new IDs for the elements
      }));
      set(() => ({
        elements,
        selectedElement: null,
      }));
    }
  },
}));