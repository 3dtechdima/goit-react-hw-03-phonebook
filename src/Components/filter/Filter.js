import React from "react";
import PropTypes from "prop-types";
import { FilterStyles } from "./FilterStyle";

const Filter = ({ onChange, filterStr }) => {
  return (
    <>
      <FilterStyles>
        <label>Find contacts by name</label>
        <input
          className="filterInput"
          type="filter"
          name="filter"
          onChange={onChange}
          value={filterStr}
          autoComplete="off"
        />
      </FilterStyles>
    </>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filterStr: PropTypes.string,
};

export default Filter;
