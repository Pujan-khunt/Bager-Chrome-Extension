import { useEffect, useState } from "react";
import { sendMessage } from "../utils/chromeAPI";
import { MESSAGE_TYPES, ResponseType } from "@/shared/messages";

const useBookmarkTree: () => {
  bookmarkTree: chrome.bookmarks.BookmarkTreeNode[],
  loading: boolean,
  error: string | null
} = () => {
  const [bookmarkTree, setBookmarkTree] = useState<chrome.bookmarks.BookmarkTreeNode[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookmarks: () => Promise<void> = async () => {
      try {
        const response: ResponseType = await sendMessage({
          type: MESSAGE_TYPES.GET_BOOKMARK_TREE
        });

        console.log("BookmarkTree response:\n", response);
        switch (response?.type) {
          case "bookmark-tree":
            setBookmarkTree(response.data.tree[0].children || []);
            break;
          case "error":
            setError(response.error);
            break;
          case "mock":
            setBookmarkTree(response.data);
            break;
          default:
            setError("Unexpected Response Type");
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Error fetching bookmarks\n", error.message);
          setError(error.message);
        } else {
          console.error("Unexpected Error:", error);
          setError("Unexpected Error Occured! 🥲");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBookmarks();
  }, []);

  return { bookmarkTree, loading, error };
};

export default useBookmarkTree;
