export type CollectionItem = {
  id: string;
  title: string;
  subtitle: string;
  year?: number;
  meta?: string;
  tags: string[];
  href?: string;
};

export type Collection = {
  certifications: CollectionItem[];
  education: CollectionItem[];
  achievements: CollectionItem[];
};
