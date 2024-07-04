export interface TTag {
  id: string;
  name: string;
  shortName: string;
  color: string;
}

const TAGS: TTag[] = [];

export function getTagById(id: string) {
  const tag = TAGS.find((tag) => tag.id === id);
  if (!tag) {
    throw new Error(`Tag with id ${id} not found`);
  }
  return tag;
}
