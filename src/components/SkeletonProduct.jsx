export const SkeletonProduct = () => {
  return (
    <span className="products-grid-child ">
      <div className="wrapper max-w-96 sm:max-w-none mx-auto w-full border-4 border-[--color-accent] rounded-xl py-8 space-y-8 relative">
        {/* 📷📷 IMAGE PLACEHOLDER 📷📷 */}
        <div className="mx-auto w-10/12 h-36 bg-[--color-skeleton] animate-pulse rounded-md" />

        <div className="flex flex-col px-6 gap-y-2">
          {/* 💵💵 PRICE PLACEHOLDER 💵💵 */}
          <span className="h-6 w-1/3 bg-[--color-skeleton] animate-pulse rounded-md" />
          {/* 🏷️🏷️🏷️ TITLE PLACEHOLDER 🏷️🏷️🏷️ */}
          <span className="h-7 w-2/3 bg-[--color-skeleton] animate-pulse rounded-md" />
          {/* ⭐⭐⭐ RATING PLACEHOLDER ⭐⭐⭐ */}
          <span className="h-6 w-1/3 bg-[--color-skeleton] animate-pulse rounded-md" />
          {/* 📌📌📌 CATEGORY PLACEHOLDER 📌📌📌 */}
          <span className="h-6 w-1/4 bg-[--color-skeleton] animate-pulse rounded-md" />
          {/* 🔳🔳🔳 BUTTON PLACEHOLDER 🔳🔳🔳 */}
          <div className="rounded-full bg-[--color-skeleton] animate-pulse w-full h-16 mt-2" />
        </div>
      </div>
    </span>
  );
};
