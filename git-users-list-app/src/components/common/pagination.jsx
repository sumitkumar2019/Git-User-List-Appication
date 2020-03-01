import React from "react";

import PropTypes from "prop-types";
const Pagination = ({
  itemCount,
  pageSize,
  currentPage,
  onPageChange,
  onNextPage,
  onPreviousPage,
  pageRange
}) => {
  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount === 0 || pageCount === 1) return null;
  const url = "#";

  return (
    <ul className="pagination pagination-lg justify-content-center">
      <li className={currentPage <= 1 ? "page-item  disabled" : "page-item"}>
        <a
          className="page-link"
          href={url}
          tabIndex="-1"
          onClick={() => onPreviousPage(currentPage)}
        >
          Previous
        </a>
      </li>
      {pageRange.map(page => (
        <li
          key={page}
          className={page === currentPage ? "page-item active" : "page-item"}
        >
          <a
            className="page-link"
            href={url}
            onClick={() => onPageChange(page)}
          >
            {page}
          </a>
        </li>
      ))}
      <li className="page-item">
        <a
          className="page-link"
          href={url}
          onClick={() => onNextPage(currentPage)}
        >
          Next
        </a>
      </li>
    </ul>
  );
};
Pagination.propTypes = {
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  itemCount: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
