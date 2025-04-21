"use client";

import { useState } from "react";
import { BuilderTopbar } from "@/components/builder/builder-topbar";
import { ElementsPanel } from "@/components/builder/elements-panel";
import { Canvas } from "@/components/builder/canvas";
import { PropertiesPanel } from "@/components/builder/properties-panel";
import { DndContext, DragEndEvent, DragStartEvent } from "@dnd-kit/core";
import { useBuilderStore } from "@/lib/stores/builder-store";
import { useToast } from "@/hooks/use-toast";

export default function BuilderPage() {
  const [activeDragId, setActiveDragId] = useState<string | null>(null);
  const { addElement, selectElement, selectedElement } = useBuilderStore();
  const { toast } = useToast();
  
  const handleDragStart = (event: DragStartEvent) => {
    setActiveDragId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    
    if (over && over.id === "canvas") {
      const elementType = (active.id as string).split("-")[0];
      const newElementId = addElement(elementType);
      selectElement(newElementId);
      
      toast({
        title: "Element added",
        description: `Added ${elementType} element to the canvas`,
      });
    }
    
    setActiveDragId(null);
  };

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="h-screen flex flex-col">
        <BuilderTopbar />
        <div className="flex-1 flex overflow-hidden">
          <ElementsPanel activeDragId={activeDragId} />
          <Canvas />
          <PropertiesPanel selectedElement={selectedElement} />
        </div>
      </div>
    </DndContext>
  );
}