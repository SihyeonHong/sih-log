import Tag from "@/components/tester/Tag";

interface TagsContainerProps {
  tags: string[];
}

export default function TagsContainer({ tags }: TagsContainerProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <Tag key={index}>{tag}</Tag>
      ))}
    </div>
  );
}
