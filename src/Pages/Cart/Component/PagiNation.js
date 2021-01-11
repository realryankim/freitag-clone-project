import React from "react";
import styled from "styled-components";

export default function Pagination({
  productsPerPage,
  paginate,
  currentPage,
  count,
}) {
  const pageArrLength = Math.ceil(count / productsPerPage);
  const pageNumber = Array(pageArrLength)
    .fill(1)
    .map((el, idx) => el + idx);

  return (
    <PageContainer currentPage={currentPage} className="pagination">
      {pageNumber.map((pageNum) => (
        <li
          key={pageNum}
          className={` ${currentPage === pageNum && "thisPage"}`}
          onClick={() => paginate(pageNum)}
        >
          {pageNum}
        </li>
      ))}
    </PageContainer>
  );
}

const PageContainer = styled.div`
  margin: 24px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  li {
    list-style: none;
    margin-left: -1px;
    padding: 8px 10px;
    background-color: #fff;
    border: 1px solid #000;
    color: #999;
    cursor: pointer;
    &:hover,
    &:active {
      color: #fff;
      background-color: #999;
    }
    &.thisPage {
      color: #fff;
      background-color: #000;
    }
  }
`;
