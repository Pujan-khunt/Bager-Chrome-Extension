import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "@/components/ui/command";
import useBookmarkTree from "@/popup/hooks/useBookmarkTree";
import { ChevronDownIcon, ChevronUpIcon, FolderIcon, OctagonAlertIcon, SunMoonIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import React, { useState } from "react";

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
      <div className="h-full flex justify-center items-center mx-2 text-white gap-x-6">
        <Alert>
          <OctagonAlertIcon className="h-full" />
          <AlertTitle className="text-yellow-200">Oh No! Error Message :(</AlertTitle>
          <AlertDescription className="text-red-300">{error}</AlertDescription>
        </Alert>
      </div>
    )
  }

  console.log("Bookmark Tree That is About To Get Printed\n", bookmarkTree);
  return (
    <Command className="rounded-none shadow-md w-full text-white">
      <CommandInput placeholder="Type bookmark name..." />
      <CommandList>
        <CommandEmpty>No Results Found.</CommandEmpty>
        <CommandGroup heading="Bookmarks">
          {/* <ScrollArea className="w-full h-full text-white my-2"></ScrollArea> */}
          {bookmarkTree.map((node) => (
            <div key={node.id}>
              <BookmarkTreeNode bookmark={node} />
              <CommandSeparator />
            </div>
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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isFolder = !bookmark.url;

  const toggleOpenState: () => void = () => {
    setIsOpen(prev => !prev);
    console.log("new state:", isOpen);
  }

  return (
    !isFolder ? (
      <CommandItem>
        <SunMoonIcon />
        <span>{bookmark.url}</span>
      </CommandItem>
    ) : (
      <CommandItem onClick={toggleOpenState} className="flex items-center border-transparent border hover:border-gray-400">
        <div className="flex gap-x-2 flex-1 items-center">
          <FolderIcon />
          <span>{bookmark.title}</span>
        </div>
        {!isOpen ? <ChevronDownIcon /> : <ChevronUpIcon />}
      </CommandItem>
    )
  )
}

export default BookmarkTree;
