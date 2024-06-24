import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

import { Star } from "../assets/Icons";
import { formatCurrency, formatTitle } from "../utils/helpers";

const NewProduct = (props) => {
  const {
    image,
    title,
    price,
    rating: { rate, count },
    id,
    category,
    badge = false,
  } = props;

  return (
    <article className="max-w-96 sm:max-w-none mx-auto w-full border-4 border-[--color-accent] rounded-xl py-8 space-y-8 relative">
      {badge && (
        <span className="absolute top-4 right-4 bg-[#3e863c] py-1.5 px-2.5 rounded-md font-medium text-white text-sm">
          NEW
        </span>
      )}
      <LazyLoadImage
        src={image}
        width={100}
        height={100}
        alt={title}
        wrapperClassName="!size-full block"
        className="mx-auto !size-36 object-contain"
        effect="blur"
      />
      <div className="flex flex-col px-6">
        <span className="text-lg font-normal mb-2">
          {formatCurrency(price)}
        </span>

        <span className="text-lg font-medium tracking-wider mb-1">
          {formatTitle(title)}
        </span>

        <span className="flex items-start mb-2 text-sm">
          <span className="flex gap-x-0.5">
            {Array.from({ length: Math.round(rate) }).map((_, idx) => (
              <Star key={title + "star" + idx} />
            ))}
          </span>
          <span>&nbsp;({count})</span>
        </span>

        <span className="text-sm text-[--text-color] opacity-75 mb-4">
          {category}
        </span>

        <Link
          to={`/products/${id}`}
          className="block text-center py-2 font-medium rounded-full border-2 border-electric-violet-600 text-electric-violet-600 hover:bg-electric-violet-600 hover:text-white duration-300"
        >
          Buy now
        </Link>
      </div>
    </article>
  );
};
export default NewProduct;
