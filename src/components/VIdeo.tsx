import ContentGrid from "./ContentGrid";

type VideosListProps = {
  searchTerm?: string;
};

function VideosList({ searchTerm }: VideosListProps) {
  return (
    <ContentGrid
      type="youtube"
      searchTerm={searchTerm}
      emptyMessage="No videos available. Please add some!"
    />
  );
}

export default VideosList;
