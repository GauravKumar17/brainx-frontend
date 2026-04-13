import ContentGrid from "./ContentGrid";

type ContentsListProps = {
  searchTerm?: string;
};

function ContentsList({ searchTerm }: ContentsListProps) {
  return (
    <ContentGrid
      searchTerm={searchTerm}
      emptyMessage="No contents available. Please add some!"
    />
  );
}

export default ContentsList;
