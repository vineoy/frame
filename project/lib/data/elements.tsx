import { ElementTemplate } from "@/lib/types";
import { Type, Image, Square, Columns, AlignLeft, GripHorizontal, ListOrdered, Shapes, Donut as ButtonIcon, Link as LinkIcon, Layers, LayoutGrid, Table, Worm as Form, VideoIcon, MapPin } from "lucide-react";

// Basic elements
const basic: ElementTemplate[] = [
  {
    id: "heading",
    type: "heading",
    name: "Heading",
    icon: <Type className="h-5 w-5" />,
  },
  {
    id: "paragraph",
    type: "paragraph",
    name: "Paragraph",
    icon: <AlignLeft className="h-5 w-5" />,
  },
  {
    id: "image",
    type: "image",
    name: "Image",
    icon: <Image className="h-5 w-5" />,
  },
  {
    id: "button",
    type: "button",
    name: "Button",
    icon: <ButtonIcon className="h-5 w-5" />,
  },
  {
    id: "link",
    type: "link",
    name: "Link",
    icon: <LinkIcon className="h-5 w-5" />,
  },
  {
    id: "spacer",
    type: "spacer",
    name: "Spacer",
    icon: <GripHorizontal className="h-5 w-5" />,
  },
  {
    id: "divider",
    type: "divider",
    name: "Divider",
    icon: <Square className="h-5 w-5" />,
  },
];

// Layout elements
const layout: ElementTemplate[] = [
  {
    id: "container",
    type: "container",
    name: "Container",
    icon: <Square className="h-5 w-5" />,
  },
  {
    id: "grid",
    type: "grid",
    name: "Grid",
    icon: <LayoutGrid className="h-5 w-5" />,
  },
  {
    id: "columns",
    type: "columns",
    name: "Columns",
    icon: <Columns className="h-5 w-5" />,
  },
  {
    id: "section",
    type: "section",
    name: "Section",
    icon: <Layers className="h-5 w-5" />,
  },
];

// Advanced elements
const advanced: ElementTemplate[] = [
  {
    id: "list",
    type: "list",
    name: "List",
    icon: <ListOrdered className="h-5 w-5" />,
  },
  {
    id: "form",
    type: "form",
    name: "Form",
    icon: <Form className="h-5 w-5" />,
  },
  {
    id: "video",
    type: "video",
    name: "Video",
    icon: <VideoIcon className="h-5 w-5" />,
  },
  {
    id: "table",
    type: "table",
    name: "Table",
    icon: <Table className="h-5 w-5" />,
  },
  {
    id: "map",
    type: "map",
    name: "Map",
    icon: <MapPin className="h-5 w-5" />,
  },
  {
    id: "icon",
    type: "icon",
    name: "Icon",
    icon: <Shapes className="h-5 w-5" />,
  },
];

export const elementData = {
  basic,
  layout,
  advanced,
};