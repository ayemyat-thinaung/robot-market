import React, { useState } from "react";
import Card from "../../../components/card/Card";
import DeleteIcon from "../../../components/icon/DeleteIcon";

const AllProductsGrid = ({ data, isLoading, onViewAll, filter, material }) => {
  const [size, setSize] = useState(20);

  const [loadingMore, setLoadingMore] = useState(false);

  return (
    <>
      {isLoading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <div className="d-flex justify-content-between my-4">
            <h5 className="mb-0">
              Products
              <span className="text-asset1">{` (${data?.length})`}</span>
            </h5>
            {filter && (
              <div className="d-flex align-items-center">
                Filtered By:&nbsp;
                <div
                  role="button"
                  class="px-2 rounded-pill border border-secondary text-secondary"
                  onClick={onViewAll}
                  aria-label="Clear Filter"
                >
                  {material}
                  <DeleteIcon />
                </div>
                {/* <button
                  type="button"
                  className="btn btn-sm rounded-pill border border-secondary text-secondary mx-2"
                  aria-label="Clear All"
                  onClick={onViewAll}
                >
                  {material}
                  <DeleteIcon />
                </button> */}
              </div>
            )}
          </div>
          <div className="row g-4">
            {data?.slice(0, size).map((item) => (
              <div
                className="col-sm-6 col-md-4 col-lg-4 col-xl-3"
                key={item?.id}
              >
                <Card item={item} />
              </div>
            ))}

            <div className="d-flex justify-content-center my-5">
              {size >= data?.length ? (
                "There is no more data..."
              ) : (
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={() => {
                    setLoadingMore(true);
                    setSize(size + 20);
                    setLoadingMore(false);
                  }}
                >
                  {loadingMore ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Loading...
                    </>
                  ) : (
                    "  Load more"
                  )}
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AllProductsGrid;
