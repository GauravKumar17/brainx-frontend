import { useEffect, useState } from "react";
import Card from "./Card";
import { deleteContent, fetchContents, type ContentItem } from "../lib/content";

type ContentGridProps = {
  emptyMessage: string;
  type?: string;
  searchTerm?: string;
  allowDelete?: boolean;
};

function ContentGrid({
  emptyMessage,
  type,
  searchTerm = "",
  allowDelete = true,
}: ContentGridProps) {
  const [contents, setContents] = useState<ContentItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadContents = async () => {
      try {
        const items = await fetchContents(type, searchTerm);
        if (isMounted) {
          setContents(items);
        }
      } catch (error) {
        console.error("Error fetching contents:", error);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    setIsLoading(true);
    loadContents();

    return () => {
      isMounted = false;
    };
  }, [type, searchTerm]);

  const handleDelete = async (id: string) => {
    try {
      await deleteContent(id);
      setContents((current) => current.filter((content) => content._id !== id));
    } catch (error) {
      console.error("Error deleting content:", error);
      alert("Failed to delete content");
    }
  };

  if (isLoading) {
    return (
      <div className="text-center text-gray-400 mt-10 text-2xl flex justify-center items-center h-[70vh] w-full">
        Loading your saved content...
      </div>
    );
  }

  return (
    <>
      {contents.length === 0 ? (
        <div className="text-center text-gray-500 mt-10 text-4xl flex justify-center items-center h-[70vh] w-full">
          <div className="para">
            {searchTerm.trim()
              ? `No results found for "${searchTerm}".`
              : emptyMessage}
          </div>
        </div>
      ) : (
        contents.map((content) => (
          <Card
            key={content._id}
            title={content.title}
            link={content.link}
            type={content.type}
            uploadedAt={content.uploadedAt ?? ""}
            onDelete={allowDelete ? () => handleDelete(content._id) : undefined}
          />
        ))
      )}
    </>
  );
}

export default ContentGrid;
