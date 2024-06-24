const DetailsGrid = ({ children }) => {
  return (
    <div className="grid grid-cols-12 grid-rows-12 md:gap-x-10 h-screen max-h-[500px] md:max-h-80">
      {children}
    </div>
  );
};

DetailsGrid.img = ({ children }) => {
  return (
    <div className="product-image row-start-3 row-end-10 col-span-12 mt-4 md:m-0 md:col-span-6 xl:col-span-4 md:row-start-1 md:row-span-11 xl:row-span-full order-3 md:order-1">
      {children ? children : <DetailsGrid.Skeleton />}
    </div>
  );
};
DetailsGrid.Title = ({ children }) => {
  return (
    <div
      className={`product-title max-h-14 overflow-hidden whitespace-break-spaces row-start-1 row-end-3 col-span-full md:col-span-6 md:row-start-2 md:row-end-4 order-1 md:order-2`}
    >
      {children ? children : <DetailsGrid.Skeleton />}
    </div>
  );
};
DetailsGrid.ProductRate = ({ children }) => {
  return (
    <div
      className={`product-rate row-start-2 row-end-3 col-start-1 col-end-13 mt-5 md:m-0 md:col-span-4 lg:col-span-3 md:row-start-4 md:row-end-5 order-2 max-w-48 xl:max-w-none`}
    >
      {children ? children : <DetailsGrid.Skeleton />}
    </div>
  );
};
DetailsGrid.Price = ({ children }) => {
  return (
    <div
      className={`product price row-Start-10 row-end-11 col-span-full my-7 md:m-0 md:col-span-4 lg:col-span-3 md:row-start-6 md:row-end-7 order-4 md:order-3 `}
    >
      {children ? children : <DetailsGrid.Skeleton />}
    </div>
  );
};
DetailsGrid.Counter = ({ children }) => {
  return (
    <div
      className={`product-counter row-start-12 row-end-13 col-span-6 hidden md:block md:col-span-4 lg:col-span-3 md:row-start-8 md:row-end-11 order-5 xl:max-w-40 `}
    >
      {children}
    </div>
  );
};
DetailsGrid.Button = ({ children }) => {
  return (
    <div
      className={`product-button row-start-12 row-end-13 col-span-6  md:col-span-4 lg:col-span-2 md:row-start-11 md:row-end-13 order-5 max-w-36 xl:max-w-40`}
    >
      {children ? children : <DetailsGrid.Skeleton />}
    </div>
  );
};
DetailsGrid.productDetails = ({ children }) => {
  return (
    <div className="product-details mt-12 md:mt-6">
      <h1 className='text-lg font-medium relative after:absolute after:h-0.5 after:w-full after:bg-slate-300 after:-bottom-1.5 after:left-0 after:content-[""] mb-4'>
        Details
      </h1>
      {children ? (
        children
      ) : (
        <>
          <div className="py-6 [line-height:1.6] font-medium space-y-2">
            <div className="w-full h-6 bg-neutral-300 rounded-md animate-pulse" />
            <div className="w-11/12 h-6 bg-neutral-300 rounded-md animate-pulse" />
            <div className="w-10/12 h-6 bg-neutral-300 rounded-md animate-pulse" />
          </div>
        </>
      )}
    </div>
  );
};
DetailsGrid.Rating = ({ children }) => {
  return (
    <div className="rating-section mt-4">
      {children ? (
        children
      ) : (
        <>
          <h1 className='text-xl font-medium relative after:absolute after:h-0.5 after:w-full after:bg-slate-300 after:-bottom-1.5 after:left-0 after:content-[""]'>
            Rating
          </h1>
          <span className="w-52 h-10 block bg-neutral-300 rounded-md animate-pulse my-6 mx-auto" />
        </>
      )}
    </div>
  );
};
DetailsGrid.Skeleton = () => {
  return <div className="bg-neutral-300 animate-pulse rounded-md size-full" />;
};
export default DetailsGrid;
