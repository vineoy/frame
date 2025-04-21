"use client";

import { ElementData } from "@/lib/types";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useBuilderStore } from "@/lib/stores/builder-store";
import { X } from "lucide-react";
import { fontFamilyOptions, alignmentOptions, paddingOptions } from "@/lib/constants";

interface PropertiesPanelProps {
  selectedElement: ElementData | null;
}

export function PropertiesPanel({ selectedElement }: PropertiesPanelProps) {
  const { updateElement, removeElement } = useBuilderStore();
  const [localContent, setLocalContent] = useState(selectedElement?.content || "");
  
  const handleContentChange = (value: string) => {
    setLocalContent(value);
    if (selectedElement) {
      updateElement(selectedElement.id, { content: value });
    }
  };
  
  const handleStyleChange = (property: string, value: any) => {
    if (selectedElement) {
      updateElement(selectedElement.id, {
        styles: {
          ...selectedElement.styles,
          [property]: value,
        },
      });
    }
  };
  
  const handleRemove = () => {
    if (selectedElement) {
      removeElement(selectedElement.id);
    }
  };

  if (!selectedElement) {
    return (
      <div className="w-72 border-l bg-card flex flex-col h-full p-4">
        <div className="text-center text-muted-foreground py-8">
          <p>Select an element to edit its properties</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-72 border-l bg-card flex flex-col h-full">
      <div className="flex items-center justify-between border-b p-4">
        <h3 className="font-medium">{selectedElement.type} Properties</h3>
        <Button
          variant="ghost"
          size="icon"
          className="h-7 w-7 text-muted-foreground"
          onClick={handleRemove}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
      
      <Tabs defaultValue="content" className="flex-1">
        <TabsList className="grid grid-cols-3 h-10 px-4 pt-2">
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="style">Style</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>
        
        <ScrollArea className="flex-1">
          <TabsContent value="content" className="p-4 space-y-4">
            {selectedElement.type === "heading" && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="text-content">Heading Text</Label>
                  <Input
                    id="text-content"
                    value={localContent}
                    onChange={(e) => handleContentChange(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="heading-level">Heading Level</Label>
                  <Select
                    value={selectedElement.styles?.level || "h2"}
                    onValueChange={(value) => handleStyleChange("level", value)}
                  >
                    <SelectTrigger id="heading-level">
                      <SelectValue placeholder="Select heading level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="h1">H1</SelectItem>
                      <SelectItem value="h2">H2</SelectItem>
                      <SelectItem value="h3">H3</SelectItem>
                      <SelectItem value="h4">H4</SelectItem>
                      <SelectItem value="h5">H5</SelectItem>
                      <SelectItem value="h6">H6</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </>
            )}
            
            {selectedElement.type === "paragraph" && (
              <div className="space-y-2">
                <Label htmlFor="paragraph-content">Paragraph Text</Label>
                <textarea
                  id="paragraph-content"
                  className="w-full min-h-[100px] rounded-md border border-input bg-transparent px-3 py-2 text-sm"
                  value={localContent}
                  onChange={(e) => handleContentChange(e.target.value)}
                />
              </div>
            )}
            
            {selectedElement.type === "button" && (
              <div className="space-y-2">
                <Label htmlFor="button-text">Button Text</Label>
                <Input
                  id="button-text"
                  value={localContent}
                  onChange={(e) => handleContentChange(e.target.value)}
                />
              </div>
            )}
            
            {selectedElement.type === "image" && (
              <div className="space-y-2">
                <Label htmlFor="image-url">Image URL</Label>
                <Input
                  id="image-url"
                  value={selectedElement.styles?.src || ""}
                  onChange={(e) => handleStyleChange("src", e.target.value)}
                  placeholder="https://example.com/image.jpg"
                />
                <div className="py-2">
                  <Label htmlFor="image-alt">Alt Text</Label>
                  <Input
                    id="image-alt"
                    value={selectedElement.styles?.alt || ""}
                    onChange={(e) => handleStyleChange("alt", e.target.value)}
                    placeholder="Image description"
                  />
                </div>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="style" className="p-4 pb-10 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="font-family">Font Family</Label>
              <Select
                value={selectedElement.styles?.fontFamily || "default"}
                onValueChange={(value) => handleStyleChange("fontFamily", value)}
              >
                <SelectTrigger id="font-family">
                  <SelectValue placeholder="Select font" />
                </SelectTrigger>
                <SelectContent>
                  {fontFamilyOptions.map((font) => (
                    <SelectItem key={font.value} value={font.value}>
                      {font.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="font-size">Font Size: {selectedElement.styles?.fontSize || 16}px</Label>
              <Slider
                id="font-size"
                min={8}
                max={72}
                step={1}
                defaultValue={[selectedElement.styles?.fontSize || 16]}
                onValueChange={(value) => handleStyleChange("fontSize", value[0])}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="text-align">Text Alignment</Label>
              <Select
                value={selectedElement.styles?.textAlign || "left"}
                onValueChange={(value) => handleStyleChange("textAlign", value)}
              >
                <SelectTrigger id="text-align">
                  <SelectValue placeholder="Select alignment" />
                </SelectTrigger>
                <SelectContent>
                  {alignmentOptions.map((align) => (
                    <SelectItem key={align.value} value={align.value}>
                      {align.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="padding">Padding</Label>
              <Select
                value={selectedElement.styles?.padding || "default"}
                onValueChange={(value) => handleStyleChange("padding", value)}
              >
                <SelectTrigger id="padding">
                  <SelectValue placeholder="Select padding" />
                </SelectTrigger>
                <SelectContent>
                  {paddingOptions.map((padding) => (
                    <SelectItem key={padding.value} value={padding.value}>
                      {padding.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="text-color">Text Color</Label>
              <div className="flex gap-2">
                <div className="border rounded-md p-1 flex-1">
                  <Input
                    id="text-color"
                    type="color"
                    value={selectedElement.styles?.color || "#000000"}
                    onChange={(e) => handleStyleChange("color", e.target.value)}
                    className="w-full h-8"
                  />
                </div>
                <Input
                  value={selectedElement.styles?.color || "#000000"}
                  onChange={(e) => handleStyleChange("color", e.target.value)}
                  className="w-1/2"
                  placeholder="#000000"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="bg-color">Background Color</Label>
              <div className="flex gap-2">
                <div className="border rounded-md p-1 flex-1">
                  <Input
                    id="bg-color"
                    type="color"
                    value={selectedElement.styles?.backgroundColor || "#ffffff"}
                    onChange={(e) => handleStyleChange("backgroundColor", e.target.value)}
                    className="w-full h-8"
                  />
                </div>
                <Input
                  value={selectedElement.styles?.backgroundColor || "#ffffff"}
                  onChange={(e) => handleStyleChange("backgroundColor", e.target.value)}
                  className="w-1/2"
                  placeholder="#ffffff"
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="advanced" className="p-4 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="element-id">Element ID</Label>
              <Input
                id="element-id"
                value={selectedElement.styles?.id || ""}
                onChange={(e) => handleStyleChange("id", e.target.value)}
                placeholder="element-id"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="element-class">Custom Classes</Label>
              <Input
                id="element-class"
                value={selectedElement.styles?.className || ""}
                onChange={(e) => handleStyleChange("className", e.target.value)}
                placeholder="custom-class-1 custom-class-2"
              />
            </div>
            
            {(selectedElement.type === "button" || selectedElement.type === "link") && (
              <div className="space-y-2">
                <Label htmlFor="href-link">Link URL</Label>
                <Input
                  id="href-link"
                  value={selectedElement.styles?.href || "#"}
                  onChange={(e) => handleStyleChange("href", e.target.value)}
                  placeholder="https://example.com"
                />
              </div>
            )}
          </TabsContent>
        </ScrollArea>
      </Tabs>
    </div>
  );
}