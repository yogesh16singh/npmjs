"use client";
const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div>
      {/* Previous Button */}
      <button
        className={`px-3 py-1 border ${
          currentPage === 1 ? "text-gray-500" : "text-black"
        }`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &laquo;
      </button>

      {/* First Page */}
      <button
        onClick={() => onPageChange(1)}
        className={`px-3 py-1 border ${
          currentPage === 1 ? "text-gray-500" : "text-black"
        }`}
      >
        1
      </button>

      {/* Ellipsis if current page is far from the first page */}
      {currentPage > 3 && <span className="px-3 py-1">...</span>}

      {/* Current Page */}
      {currentPage !== 1 && currentPage !== totalPages && (
        <button
          onClick={() => onPageChange(currentPage)}
          className={`px-3 py-1 border text-gray-500`}
        >
          {currentPage}
        </button>
      )}

      {/* Ellipsis if current page is far from the last page */}
      {currentPage < totalPages - 2 && <span className="px-3 py-1">...</span>}

      {/* Last Page */}
      <button
        onClick={() => onPageChange(totalPages)}
        className={`px-3 py-1 border ${
          currentPage === totalPages ? "text-gray-500" : "text-black"
        }`}
      >
        {totalPages}
      </button>

      {/* Next Button */}
      <button
        className={`px-3 py-1 border ${
          currentPage === totalPages ? "text-gray-500" : "text-black"
        }`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;
