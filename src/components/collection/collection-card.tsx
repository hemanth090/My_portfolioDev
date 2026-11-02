import type { CollectionItem } from "@/features/portfolio/types/collection";

export default function CollectionCard({ item }: { item: CollectionItem }) {
  const content = (
    <>
      <h3 className="font-geist-sans group-hover:underline">{item.title}</h3>
      <div className="flex items-center gap-1.5 font-geist-mono text-sm text-muted-foreground">
        <p>{item.subtitle}</p>
        {(item.year || item.meta) && (
          <>
            •<p>{item.meta ?? item.year}</p>
          </>
        )}
      </div>
    </>
  );

  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col gap-1"
      >
        {content}
      </a>
    );
  }

  return <div className="flex flex-col gap-1">{content}</div>;
}
