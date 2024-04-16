import Skeleton from "react-loading-skeleton";

const LoadingProductDetails = () => {
  return (
    <>
      <ul className="mb-4 w-80 h-6">
        <Skeleton width={"100%"} height={"100%"} />
      </ul>
      <div
        className='p--info grid [grid-template-areas:"b"_"a"_"c"]
            md:[grid-template-areas:"a_b"_"a_c"] md:gap-x-12 justify-center items-center md:mt-6'
      >
        <div className="p-img w-full h-80  [grid-area:a] border-2 md:w-96 border-slate-300 p-6 my-4">
          <Skeleton className="w-full h-full object-contain" />
        </div>
        <div className="p--text [grid-area:b]  md:w-9/12 md:mt-6">
          <h1 className="text-3xl font-medium">
            <Skeleton width={"30vw"} />
          </h1>
          <div className="p--rating flex items-center mt-1.5">
            <Skeleton width={"10vw"} height={"24px"} />
          </div>
        </div>
        <div className="price [grid-area:c] w-52">
          <p className="text-center text-3xl font-bold md:text-left">
            <Skeleton />
          </p>
          <button className=" w-48 py-1.5 h-14">
            <Skeleton height={"100%"} />
          </button>
        </div>
      </div>
      <div className="details--rating lg:px-32 lg:mt-12">
        <div className="p--details mb-6 mt-4">
          <h1 className='text-xl font-medium relative after:absolute after:h-0.5 after:w-full after:bg-slate-300 after:-bottom-1.5 after:left-0 after:content-[""]'>
            Details
          </h1>
          <p className="py-6 [line-height:1.6] font-medium">
            <Skeleton count={3} />
          </p>
        </div>
        <div>
          <h1 className='text-xl font-medium relative after:absolute after:h-0.5 after:w-full after:bg-slate-300 after:-bottom-1.5 after:left-0 after:content-[""]'>
            Rating
          </h1>
          <Skeleton count={1} width={"100%"} height={"32px"} className="mt-8" />
        </div>
      </div>
    </>
  );
};
export default LoadingProductDetails;
