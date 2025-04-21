"use client";

import { ElementData } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { renderElementByType } from "@/lib/element-renderer";

interface CanvasElementProps {
  element: ElementData;
  isSelected: boolean;
  onSelect: () => void;
  isPreview: boolean;
}

export function CanvasElement({
  element,
  isSelected,
  onSelect,
  isPreview,
}: CanvasElementProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isPreview) {
      onSelect();
    }
  };

  return (
    <div
      className={cn(
        "relative my-2 transition-all",
        !isPreview && "hover:outline hover:outline-blue-300 outline-1"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {isSelected && !isPreview && (
        <div className="absolute -top-3 -left-3 right-0 bottom-0 border-2 border-blue-500 pointer-events-none z-10" />
      )}
      
      {(isHovered || isSelected) && !isPreview && (
        <div className="absolute -top-7 left-0 bg-blue-500 text-white text-xs py-1 px-2 rounded-sm z-10">
          {element.type}
        </div>
      )}
      
      {renderElementByType(element)}
    </div>
  );
}