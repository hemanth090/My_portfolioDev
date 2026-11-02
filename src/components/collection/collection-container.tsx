"use client";

import * as React from "react";

import { Separator } from "@/components/ui/separator";
import CollectionFilter from "@/components/collection/collection-filter";
import CollectionSection from "@/components/collection/collection-section";
import { COLLECTION } from "@/features/portfolio/data/collection";

const allTags = Array.from(
  new Set(COLLECTION.certifications.flatMap((item) => item.tags))
);

export default function CollectionContainer() {
  const [selectedTag, setSelectedTag] = React.useState("all");

  const filteredItems = React.useMemo(() => {
    let items = COLLECTION.certifications;
    if (selectedTag !== "all") {
      items = items.filter((item) => item.tags.includes(selectedTag));
    }
    return [...items].sort((a, b) => (b.year ?? 0) - (a.year ?? 0));
  }, [selectedTag]);

  return (
    <div className="flex flex-col gap-8">
      <CollectionSection
        title="Certifications"
        items={filteredItems}
        emptyMsg="No certifications match this filter."
      >
        <CollectionFilter
          tags={allTags}
          selectedTag={selectedTag}
          onTagChange={setSelectedTag}
        />
      </CollectionSection>
      <Separator />
      <CollectionSection
        title="Education"
        items={COLLECTION.education}
        emptyMsg="No credentials yet."
      />
      <Separator />
      <CollectionSection
        title="Achievements"
        items={COLLECTION.achievements}
        emptyMsg="No achievements yet."
      />
    </div>
  );
}
