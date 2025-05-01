export enum MESSAGE_TYPES {
  GET_VERSION = "GET_VERSION",
  GET_BOOKMARK_TREE = "GET_BOOKMARK_TREE",
}

export type MessageType =
  | { type: MESSAGE_TYPES.GET_VERSION }
  | { type: MESSAGE_TYPES.GET_BOOKMARK_TREE };

export type VersionResponse = {
  type: "version",
  data: {
    version: string
  }
}

export type ErrorResponse = {
  type: "error",
  error: string
}

export type MockResponse = {
  type: "mock"
}

export type BookmarkTreeResponse = {
  type: "bookmark-tree",
  data: {
    tree: chrome.bookmarks.BookmarkTreeNode[]
  }
}

export type ResponseType =
  | VersionResponse
  | ErrorResponse
  | MockResponse
  | BookmarkTreeResponse
