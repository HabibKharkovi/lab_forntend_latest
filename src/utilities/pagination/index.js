import React from "react";
import _ from "lodash";
import './pagination.style.scss';

const Pagination = props => {
    const { handlePagination, totalItem, pageSize, currentPage } = props;
    const totalPageNo = totalItem / pageSize;
    const totalPage = _.range(1, totalPageNo + 1);
  
    return (
      <div className="pagination">
        <ul className="list">
          {totalPage.map(page => (
            <li
              key={page}
              onClick={() => handlePagination(page)}
              className={currentPage === page ? `list-item active` : "list-item"}
            >
              {page}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  export default Pagination;