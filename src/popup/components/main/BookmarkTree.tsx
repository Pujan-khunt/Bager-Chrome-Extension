import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "@/components/ui/command";
import useBookmarkTree from "@/popup/hooks/useBookmarkTree";
import { ChevronDownIcon, ChevronUpIcon, FolderClosedIcon, FolderOpenIcon, LinkIcon, OctagonAlertIcon } from "lucide-react";
import React, { useState } from "react";

const BookmarkTree: React.FC = () => {
  const { bookmarkTree, loading, error } = useBookmarkTree();

  if (loading) {
    return (
      <>
        loading...
      </>
    );
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
    );
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
            <CommandItem>
              <BookmarkTreeNode bookmark={node} />
              <CommandSeparator />
            </CommandItem>
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
  const hasChildren = bookmark.children;
  const paddingLeft = '0.5rem';

  const toggleOpenState = () => setIsOpen(prev => !prev);

  return (
    !isFolder ? (
      // Render a Link
      <CommandItem className="flex gap-x-2 items-center  py-1 m-0">
        <LinkIcon className="w-4 h-4" />
        <a href={bookmark.url} target="_blank" className="truncate">{bookmark.title || bookmark.url}</a>
      </CommandItem>
    ) : (
      // Holds a single item along with all recursive children
      <div className="flex-col w-full overflow-hidden">
        {/* Holds a single item (Folder / Link) */}
        <CommandItem className="w-full flex flex-col border-transparent border hover:border-gray-400 m-0 py-1 rounded-lg">
          {/* Clickable Item To Load Children */}
          <div onClick={toggleOpenState} className="flex-col w-full">
            <div className="w-full flex gap-x-2 items-center">
              {/* Folder Icon */}
              {isOpen ? <FolderOpenIcon /> : <FolderClosedIcon />}

              {/* Folder Title */}
              <div className="flex-1">{bookmark.title}</div>

              {/* Chevron Icon */}
              {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </div>
          </div>
        </CommandItem >

        {/* Holds all recursive children items */}
        <div>
          {isOpen && hasChildren && (
            <>
              <CommandGroup style={{ paddingLeft }}>
                {bookmark.children?.map((child) => {
                  return <BookmarkTreeNode key={child.id} bookmark={child} />;
                })}
              </CommandGroup>
              <CommandSeparator className="my-2 bg-white" />
            </>
          )}
        </div>
      </div>
    )
  );
};

export default BookmarkTree;
