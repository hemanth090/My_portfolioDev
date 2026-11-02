"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface CollectionFilterProps {
  tags: string[];
  selectedTag: string;
  onTagChange: (tag: string) => void;
}

export default function CollectionFilter({
  tags,
  selectedTag,
  onTagChange,
}: CollectionFilterProps) {
  return (
    <ToggleGroup
      aria-label="Filter certifications by tag"
      value={[selectedTag]}
      onValueChange={(value) => {
        if (value.length > 0) onTagChange(value[0]);
      }}
      variant="outline"
      size="sm"
      spacing={2}
      className="flex-wrap justify-start font-geist-sans"
    >
      <ToggleGroupItem
        value="all"
        aria-label="Toggle All"
        className="rounded-lg px-2"
      >
        All
      </ToggleGroupItem>
      {tags.map((tag) => (
        <ToggleGroupItem
          key={tag}
          value={tag}
          aria-label={`Toggle ${tag}`}
          className="rounded-lg px-2"
        >
          {tag}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
