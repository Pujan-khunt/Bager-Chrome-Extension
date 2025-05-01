import React from "react";
import BookmarkTree from "../components/main/BookmarkTree";

const MainArea: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-hidden">
      <BookmarkTree />
    </div>
  );
};

export default MainArea;
