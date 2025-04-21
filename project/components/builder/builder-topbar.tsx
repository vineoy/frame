"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  Eye,
  Layers,
  Undo,
  Redo,
  Save,
  Upload,
  Smartphone,
  Tablet,
  Monitor,
} from "lucide-react";
import { useBuilderStore } from "@/lib/stores/builder-store";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function BuilderTopbar() {
  const router = useRouter();
  const { setPreviewMode, previewMode, setPreviewDeviceType, previewDeviceType } = useBuilderStore();
  const [isPublishing, setIsPublishing] = useState(false);

  const handlePublish = () => {
    setIsPublishing(true);
    setTimeout(() => {
      setIsPublishing(false);
    }, 2000);
  };

  return (
    <div className="h-16 border-b flex items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.push("/")}
          className="mr-2"
        >
          <Layers className="h-6 w-6 text-blue-600" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="h-8">
              File <ChevronDown className="ml-1 h-3 w-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Save className="mr-2 h-4 w-4" /> Save
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Upload className="mr-2 h-4 w-4" /> Export
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="h-8">
              Edit <ChevronDown className="ml-1 h-3 w-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Undo className="mr-2 h-4 w-4" /> Undo
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Redo className="mr-2 h-4 w-4" /> Redo
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex items-center gap-2">
        {previewMode && (
          <div className="flex items-center border rounded-md p-1 mr-4">
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "h-7 w-7",
                previewDeviceType === "mobile" && "bg-muted"
              )}
              onClick={() => setPreviewDeviceType("mobile")}
            >
              <Smartphone className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "h-7 w-7",
                previewDeviceType === "tablet" && "bg-muted"
              )}
              onClick={() => setPreviewDeviceType("tablet")}
            >
              <Tablet className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "h-7 w-7",
                previewDeviceType === "desktop" && "bg-muted"
              )}
              onClick={() => setPreviewDeviceType("desktop")}
            >
              <Monitor className="h-4 w-4" />
            </Button>
          </div>
        )}

        <Button
          variant={previewMode ? "default" : "outline"}
          size="sm"
          className="gap-1"
          onClick={() => setPreviewMode(!previewMode)}
        >
          <Eye className="h-4 w-4" />
          {previewMode ? "Exit Preview" : "Preview"}
        </Button>

        <Button variant="outline" size="sm" onClick={() => handlePublish()}>
          Save as Draft
        </Button>

        <Button 
          onClick={() => handlePublish()}
          disabled={isPublishing}
        >
          {isPublishing ? "Publishing..." : "Publish"}
        </Button>
      </div>
    </div>
  );
}