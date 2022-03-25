import React, { useState } from "react";
import Card from "../../../components/card/Card";

const AllProductsGrid = ({ data, isLoading, onViewAll, filter }) => {
  const [size, setSize] = useState(20);

  const [loadingMore, setLoadingMore] = useState(false);

  return (
    <>
      {isLoading ? (
        <div class="text-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <div className="d-flex justify-content-between my-4">
            <h5>{`Products - ${data?.length} found`}</h5>
            {filter && (
              <button
                type="button"
                className="btn btn-light"
                aria-label="Clear All"
                onClick={onViewAll}
              >
                Clear Filter
              </button>
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
                "End result..."
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
