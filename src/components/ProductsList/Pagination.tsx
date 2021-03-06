import React from "react";
import { Link } from "react-router-dom";

const Pagination: React.FC<{
  productPerPage: number;
  totalProducts: number;
  paginate: Function;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
}> = (props) => {
  const {
    totalProducts,
    productPerPage,
    paginate,
    currentPage,

    setCurrentPage,
  } = props;
  const totalPage = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
    totalPage.push(i);
  }

  const prevPage = (pageNumber: number) => {
    if (pageNumber > totalPage.length) {
      setCurrentPage(pageNumber + 1);
    }
  };

  const nextPage = (pageNumber: number) => {
    if (pageNumber < totalPage.length) {
      setCurrentPage(pageNumber + 1);
    }
  };
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <Link
            className="page-link"
            to={"#!"}
            onClick={() => prevPage(currentPage)}
          >
            Prev
          </Link>
        </li>
        {totalPage.map((number) => (
          <li className="page-item" key={number}>
            <Link
              onClick={() => paginate(number)}
              to={"#!"}
              className="page-link"
            >
              {number}
            </Link>
          </li>
        ))}
        <li className="page-item">
          <Link
            className="page-link"
            to={"#!"}
            onClick={() => nextPage(currentPage)}
          >
            Next
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
