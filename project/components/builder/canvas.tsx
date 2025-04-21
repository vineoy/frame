"use client";

import { cn } from "@/lib/utils";
import { useBuilderStore } from "@/lib/stores/builder-store";
import { useDroppable } from "@dnd-kit/core";
import { CanvasElement } from "@/components/builder/canvas-element";

export function Canvas() {
  const { elements, previewMode, previewDeviceType, selectElement, selectedElement } = useBuilderStore();
  
  const { setNodeRef, isOver } = useDroppable({
    id: "canvas",
  });

  const deviceWidthClass = {
    mobile: "max-w-[375px]",
    tablet: "max-w-[768px]",
    desktop: "max-w-full",
  }[previewDeviceType];

  return (
    <div className="flex-1 bg-muted/30 flex items-center justify-center overflow-auto">
      <div
        ref={setNodeRef}
        className={cn(
          "bg-white rounded-md shadow-md transition-all duration-300 min-h-[80vh] relative",
          previewMode ? deviceWidthClass : "w-full max-w-5xl mx-8",
          isOver && !previewMode && "ring-2 ring-blue-500 ring-inset"
        )}
      >
        {elements.length === 0 && !previewMode ? (
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
            <div className="text-center p-8">
              <p className="mb-2">Drag and drop elements here</p>
              <p className="text-sm">Or select a template from the left panel</p>
            </div>
          </div>
        ) : (
          <div className="p-6">
            {elements.map((element) => (
              <CanvasElement
                key={element.id}
                element={element}
                isSelected={selectedElement?.id === element.id}
                onSelect={() => selectElement(element.id)}
                isPreview={previewMode}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}