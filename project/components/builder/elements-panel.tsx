"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useDraggable } from "@dnd-kit/core";
import { cn } from "@/lib/utils";
import {
  Search,
  Type,
  Image,
  Square,
  LayoutGrid,
  Columns,
  ListOrdered,
  Shapes,
  AlignLeft,
  File,
  FileText,
  Layers,
  Palette,
  PenLine,
  ShoppingBag,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { templateData } from "@/lib/data/templates";
import { elementData } from "@/lib/data/elements";
import { useBuilderStore } from "@/lib/stores/builder-store";

interface ElementsPanelProps {
  activeDragId: string | null;
}

export function ElementsPanel({ activeDragId }: ElementsPanelProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const { loadTemplate } = useBuilderStore();
  
  return (
    <div className="w-64 border-r bg-card flex flex-col h-full overflow-hidden">
      <Tabs defaultValue="elements" className="flex flex-col h-full">
        <TabsList className="grid grid-cols-3 h-10 rounded-none border-b">
          <TabsTrigger value="elements">Elements</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="pages">Pages</TabsTrigger>
        </TabsList>
        
        <div className="p-3 border-b">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <TabsContent value="elements" className="flex-1 m-0 p-0">
          <ScrollArea className="h-full">
            <Accordion type="multiple" defaultValue={["basic", "layout"]}>
              <AccordionItem value="basic">
                <AccordionTrigger className="px-4">Basic Elements</AccordionTrigger>
                <AccordionContent className="pt-1 pb-3">
                  <div className="grid grid-cols-2 gap-2 px-4">
                    {elementData.basic
                      .filter(item => 
                        item.name.toLowerCase().includes(searchTerm.toLowerCase())
                      )
                      .map((element) => (
                        <DraggableElement
                          key={element.id}
                          id={`${element.type}-${element.id}`}
                          name={element.name}
                          icon={element.icon}
                          isActive={activeDragId === `${element.type}-${element.id}`}
                        />
                      ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="layout">
                <AccordionTrigger className="px-4">Layout</AccordionTrigger>
                <AccordionContent className="pt-1 pb-3">
                  <div className="grid grid-cols-2 gap-2 px-4">
                    {elementData.layout
                      .filter(item => 
                        item.name.toLowerCase().includes(searchTerm.toLowerCase())
                      )
                      .map((element) => (
                        <DraggableElement
                          key={element.id}
                          id={`${element.type}-${element.id}`}
                          name={element.name}
                          icon={element.icon}
                          isActive={activeDragId === `${element.type}-${element.id}`}
                        />
                      ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              
            </Accordion>
          </ScrollArea>
        </TabsContent>
        
        <TabsContent value="templates" className="flex-1 m-0 p-0">
          <ScrollArea className="h-full">
            <div className="grid grid-cols-1 gap-4 p-4">
              {templateData
                .filter(item => 
                  item.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((template) => (
                  <div 
                    key={template.id} 
                    className="rounded-md border overflow-hidden cursor-pointer hover:border-blue-500 transition-colors"
                    onClick={() => loadTemplate(template.id)}
                  >
                    <div className="aspect-video relative bg-muted">
                      <img 
                        src={template.thumbnail} 
                        alt={template.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-2">
                      <h3 className="text-sm font-medium">{template.name}</h3>
                      <p className="text-xs text-muted-foreground">{template.category}</p>
                    </div>
                  </div>
                ))}
            </div>
          </ScrollArea>
        </TabsContent>
        
        <TabsContent value="pages" className="flex-1 m-0 p-0">
          <ScrollArea className="h-full">
            <div className="p-4 space-y-4">
              <div className="space-y-1">
                <h3 className="text-sm font-medium">Website Pages</h3>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-accent cursor-pointer">
                    <File className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Home</span>
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-accent cursor-pointer">
                    <File className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">About</span>
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-accent cursor-pointer">
                    <File className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Services</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-1">
                <h3 className="text-sm font-medium">Blog Posts</h3>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-accent cursor-pointer">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Getting Started</span>
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-accent cursor-pointer">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Design Tips</span>
                  </div>
                </div>
              </div>
              
              <Accordion type="multiple" className="w-full">
                <AccordionItem value="add-page">
                  <AccordionTrigger className="py-1.5">Add New</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-accent cursor-pointer">
                        <File className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">New Page</span>
                      </div>
                      <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-accent cursor-pointer">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">New Blog Post</span>
                      </div>
                      <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-accent cursor-pointer">
                        <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">New Service</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
}

interface DraggableElementProps {
  id: string;
  name: string;
  icon: React.ReactNode;
  isActive: boolean;
}

function DraggableElement({ id, name, icon, isActive }: DraggableElementProps) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={cn(
        "flex flex-col items-center justify-center gap-1 p-2 rounded-md border cursor-grab active:cursor-grabbing",
        isActive && "border-blue-500 bg-blue-50 dark:bg-blue-900/20",
        isDragging && "opacity-50"
      )}
    >
      <div className="text-muted-foreground">{icon}</div>
      <span className="text-xs font-medium">{name}</span>
    </div>
  );
}