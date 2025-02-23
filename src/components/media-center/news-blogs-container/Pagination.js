import React from "react";

const Pagination = ({ fromBlogs }) => {
  return (
    <div className={`${fromBlogs ? "black_varient" : ""} newsblogs_pagination`}>
      <div className="chevron_indicator">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none">
          <path
            d="M8.67644 9.3235C8.67644 8.85067 8.86427 8.3972 9.19861 8.06286L11.9995 5.26196L10.9553 4.21777L5.84961 9.3235L10.9553 14.4292L11.9995 13.385L9.19861 10.5841C8.86427 10.2498 8.67644 9.79633 8.67644 9.3235Z"
            className="fill-current"
          />
        </svg>
      </div>
      <div className="number active">
        <span>1</span>
      </div>
      <div className="number">
        <span>2</span>
      </div>
      <div className="number !hidden lg:!flex">
        <span>3</span>
      </div>
      <div className="number !hidden lg:!flex">
        <span>4</span>
      </div>
      <div className="number lg:!hidden !flex">
        <span>...</span>
      </div>
      <div className="chevron_indicator noflipped">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none">
          <path
            d="M8.67644 9.3235C8.67644 8.85067 8.86427 8.3972 9.19861 8.06286L11.9995 5.26196L10.9553 4.21777L5.84961 9.3235L10.9553 14.4292L11.9995 13.385L9.19861 10.5841C8.86427 10.2498 8.67644 9.79633 8.67644 9.3235Z"
            className="fill-current"
          />
        </svg>
      </div>
    </div>
  );
};

export default Pagination;
