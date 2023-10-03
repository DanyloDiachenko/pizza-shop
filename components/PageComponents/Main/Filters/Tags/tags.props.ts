import { TagType } from "@/types/tag.type";

export interface TagsProps {
    activeTag: TagType;
    setActiveTag: (tag: TagType) => void;
    tags: TagType[];
}
