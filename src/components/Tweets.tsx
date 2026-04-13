import ContentGrid from "./ContentGrid";

type TweetsListProps = {
  searchTerm?: string;
};

function TweetsList({ searchTerm }: TweetsListProps) {
  return (
    <ContentGrid
      type="tweet"
      searchTerm={searchTerm}
      emptyMessage="No tweets available. Please add some!"
    />
  );
}

export default TweetsList;
