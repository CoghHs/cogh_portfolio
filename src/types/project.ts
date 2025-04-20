export type Project = {
  id: number;
  title: string;
  description: string;
  image?: string;
  detailImages?: string[];
  technologies: string[];
  link?: string;
  features?: string[];
  challenge?: string;
  solution?: string;
};
