import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "@/components/ui/command";
import useBookmarkTree from "@/popup/hooks/useBookmarkTree";
import { FolderIcon, SunMoonIcon } from "lucide-react";
import React from "react";

const BookmarkTree: React.FC = () => {
  const { bookmarkTree, loading, error } = useBookmarkTree();

  if (loading) {
    return (
      <>
        loading...
      </>
    )
  }

  if (error) {
    return (
      <>
        error...
      </>
    )
  }

  console.log(bookmarkTree);
  return (
    <Command className="rounded-lg border shadow-md w-full">
      <CommandInput placeholder="Type bookmark name..." />
      <CommandList>
        <CommandEmpty>No Results Found.</CommandEmpty>
        <CommandGroup heading="Bookmarks">
          {/* <ScrollArea className="w-full h-full text-white my-2"></ScrollArea> */}
          {bookmarkTree.map((node) => (
            <>
              <BookmarkTreeNode bookmark={node} />
              <CommandSeparator />
            </>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

type BookmarkTreeNodeProps = {
  bookmark: chrome.bookmarks.BookmarkTreeNode, // Either Folder or a Link
}


const BookmarkTreeNode: React.FC<BookmarkTreeNodeProps> = ({ bookmark }) => {
  const isFolder = !bookmark.url;

  return (
    !isFolder ? (
      <CommandItem>
        <SunMoonIcon />
        <span>{bookmark.url}</span>
      </CommandItem>
    ) : (
      <CommandItem>
        <FolderIcon />
        <span>{bookmark.title}</span>
      </CommandItem>
    )
  )
}

export default BookmarkTree;
