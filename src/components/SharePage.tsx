import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchSharedContents } from "../lib/content";
import type { ContentItem } from "../lib/content";
import Card from "./Card";

function SharePage() {
  const { shareLink } = useParams();
  const [contents, setContents] = useState<ContentItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!shareLink) {
      setError("Invalid share link.");
      setIsLoading(false);
      return;
    }

    const loadSharedContents = async () => {
      setIsLoading(true);
      try {
        const items = await fetchSharedContents(shareLink);
        setContents(items);
      } catch (err) {
        console.error(err);
        setError("Unable to load shared brain.");
      } finally {
        setIsLoading(false);
      }
    };

    loadSharedContents();
  }, [shareLink]);

  return (
    <div className="App min-h-screen w-full bg-black text-white">
      <div className="max-w-[1200px] mx-auto py-10 px-4">
        <div className="mb-6 rounded-xl bg-[#242627] p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-4xl font-semibold">Shared Brain</h1>
              <p className="mt-2 text-sm text-slate-400">
                View the shared workspace link below. Share it with anyone so
                they can explore your saved content.
              </p>
            </div>
            <Link
              to="/"
              className="rounded-lg border border-blue-500 bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-500"
            >
              Back to Home
            </Link>
          </div>
        </div>

        <div className="rounded-xl bg-[#242627] p-6">
          {isLoading ? (
            <div className="text-center text-gray-400">
              Loading shared brain...
            </div>
          ) : error ? (
            <div className="text-center text-red-400">{error}</div>
          ) : contents.length === 0 ? (
            <div className="text-center text-slate-300">
              No contents are available in this shared brain.
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {contents.map((content) => (
                <Card
                  key={content._id}
                  title={content.title}
                  link={content.link}
                  type={content.type}
                  uploadedAt={content.uploadedAt ?? ""}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SharePage;
