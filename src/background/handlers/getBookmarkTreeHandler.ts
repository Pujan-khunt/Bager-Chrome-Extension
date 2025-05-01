import { ResponseType } from "@/shared/messages";

export const getBookmarkTreeHandler: () => Promise<ResponseType> = async () => {
  try {
    const response: chrome.bookmarks.BookmarkTreeNode[] = await chrome.bookmarks.getTree();
    const bookmarkTreeResponse: ResponseType = {
      type: "bookmark-tree",
      data: {
        tree: response
      }
    }

    return bookmarkTreeResponse;
  } catch (error: unknown) {
    console.error("Unexpected Error from getBookmarkTreeHandler", error);

    const errorResponse: ResponseType = {
      type: "error",
      error: "Unexpected Error from getBookmarkTreeHandler"
    }

    return errorResponse;
  }
}

