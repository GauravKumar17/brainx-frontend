import ContentGrid from "./ContentGrid";

type DocsListProps = {
  searchTerm?: string;
};

function DocsList({ searchTerm }: DocsListProps) {
  return (
    <ContentGrid
      type="doc"
      searchTerm={searchTerm}
      emptyMessage="No documents available. Please add some!"
    />
  );
}

export default DocsList;
