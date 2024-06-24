import { memo, useEffect, useState } from "react";
import Modal from "../Modal";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Search = () => {
  const { all } = useSelector((state) => state.products);
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const regex = new RegExp("\\b(" + searchTerm + ")(')?(\\w+)?", "ig");

  async function searching() {
    if (searchTerm.length < 3) return;
    const results = all.filter((product) => {
      return product.title.match(regex) || product.description.match(regex);
    });
    setData(results);
  }

  useEffect(() => {
    searching();
  }, [searchTerm]);

  return (
    <Modal>
      <Modal.Toggler name="search-modal">
        <label
          htmlFor="search"
          className="relative order-3 md:order-2 w-full md:w-5/12"
        >
          <input
            type="text"
            id="search"
            className="h-10 w-full ps-4 pe-16 py-1 bg-[--color-accent] rounded-md text-[--text-color] font-semibold placeholder:text-[--text-color]"
            placeholder="Search...."
          />
        </label>
      </Modal.Toggler>
      <Modal.Window
        name="search-modal"
        position={{ top: 0, left: 0, minHeight: "100vh" }}
        preventScroll
      >
        <div className="w-[90vw] max-w-screen-md lg:w-[55vw] block z-10 absolute top-1/2 left-1/2 [transform:translate(-50%,-50%)]">
          <input
            type="text"
            id="search"
            className="h-12 w-full ps-4 pe-16 py-1 bg-[--color-accent] rounded-md text-[--text-color] font-semibold placeholder:text-[--text-color]"
            placeholder="Search...."
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* 🕵️🕵️🕵️ SEARCH RESULTS... 🕵️🕵️🕵️ */}
          <div className="search-result mt-6 min-h-72 max-h-[60vh] bg-[--color-accent] rounded-md overflow-y-hidden p-0 overflow-x-hidden relative">
            {searchTerm.length > 2
              ? data.map((result, idx) => {
                  const title = result.title.replace(
                    regex,
                    `<span class="bg-electric-violet-600 text-white px-0.5">
                  ${result.title.match(regex)}
                </span>`,
                  );
                  return (
                    <Modal.Toggler
                      name="search-modal"
                      key={`srch-result-${idx}(${result.id})`}
                    >
                      <Link
                        to={`/products/${result.id}`}
                        dangerouslySetInnerHTML={{ __html: title }}
                        className="py-3 px-4 border-b border-b-gray-300 cursor-pointer hover:bg-[--color-secondary] block"
                      ></Link>
                    </Modal.Toggler>
                  );
                })
              : null}
            {data.length === 0 || searchTerm.length === 0 ? (
              <span
                className="block absolute top-1/2 left-1/2 
              [transform:translate(-50%,-50%)]"
              >
                No results to show...
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
        {/*🫨🫨🫨 OVERLAY 🫨🫨🫨 */}
        <Modal.Toggler>
          <div className="fixed top-0 left-0 backdrop-blur-xl h-screen w-screen bg-gray-500/30"></div>
        </Modal.Toggler>
      </Modal.Window>
    </Modal>
  );
};
export default memo(Search);
