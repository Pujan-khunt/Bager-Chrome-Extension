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

export interface Mock {
  type: "mock"
}

export interface MockVersion extends Mock {
  version: string
}

export interface MockBookmarkTree extends Mock {
  data: chrome.bookmarks.BookmarkTreeNode[]
};

export type MockResponse = MockVersion | MockBookmarkTree;

export type BookmarkTreeResponse = {
  type: "bookmark-tree",
  data: {
    tree: chrome.bookmarks.BookmarkTreeNode[]
  }
}

export type MessageResponseMap = {
  [MESSAGE_TYPES.GET_VERSION]: VersionResponse | MockVersion | ErrorResponse
  [MESSAGE_TYPES.GET_BOOKMARK_TREE]: BookmarkTreeResponse | MockBookmarkTree | ErrorResponse
}

export type ResponseType =
  | VersionResponse
  | ErrorResponse
  | MockResponse
  | BookmarkTreeResponse
