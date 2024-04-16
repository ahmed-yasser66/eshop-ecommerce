import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const SearchResult = ({ word = "mens" }) => {
  const { products } = useSelector((state) => state.products);
  const [matchedData, setMatchedData] = useState([]);
  function highlightMatch(words) {
    return words.split(" ").map((w, i) => {
      const regex = new RegExp(word, "ig");
      if (w.match(regex)) {
        return (
          <span className="bg-yellow-400 px-0.5" key={w + i}>
            {w}
          </span>
        );
      }
      return (
        <span className="px-0.5" key={w + i}>
          {w}
        </span>
      );
    });
  }
  useEffect(() => {
    const regex = new RegExp(word, "ig");
    const matched = products.filter((item) =>
      item.title.toLowerCase().match(regex),
    );
    setMatchedData(matched);
  }, [word]);
  return (
    <div className="srch-rslt-container bg-slate-100 absolute top-9 lg:left-0 lg:w-full min-h-10  w-72 -left-14">
      <div className="srch-rslt overflow-y-scroll max-h-64">
        {/* handling searching  */}
        {matchedData.length == 0 && (
          <div className="srch-item text-center my-3 leading-3 pb-2 border-b-slate-500 border-b-2 font-medium">
            <p>No results to show...</p>
          </div>
        )}
        {/* searching results */}
        {matchedData.length > 0 &&
          matchedData.map((item, index) => (
            <div
              className="srch-item text-center my-3 leading-3 pb-2 border-b-slate-500 border-b-2 font-medium"
              key={item.title}
            >
              <NavLink
                to={`products/${item.id}`}
                className="overflow-hidden text-ellipsis whitespace-nowrap block py-1"
              >
                {highlightMatch(item.title)}
              </NavLink>
            </div>
          ))}
      </div>
    </div>
  );
};
export default SearchResult;
