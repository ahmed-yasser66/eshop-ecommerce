import { useState } from "react";
import SearchResult from "./SearchResult";

const SearchBar = () => {
  const [word, setWord] = useState("");
  return (
    <div className="nav--search mt-1.5 w-full flex border-2 border-gray-700 rounded-md">
      <input
        type="text"
        className="w-full h-full ps-4 outline-none p-1 text-xl font-medium bg-transparent"
        onChange={(e) => setWord(e.target.value)}
        value={word}
        placeholder="search..."
      />
      <div onClick={() => setWord("")}>
        {word.length > 0 && <SearchResult word={word} />}
      </div>
    </div>
  );
};
export default SearchBar;
