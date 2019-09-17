import React, { Fragment } from 'react';
import { useImagesSearch } from '../../store';
import Debounce from '../../../../utils/debounce';
import {
  NO_RESULTS_FOUND,
  RESULTS_MSG,
  SEARCH_PLACEHOLDER
} from '../../constants';
import './Search.scss';

export default () => {
  const [
    { q: searchValue, pagination: { total_count = 0 } = {} },
    { search }
  ] = useImagesSearch();
  const debouncedSearch = Debounce(v => search(v), 700);
  return (
    <Fragment>
      <input
        defaultValue={searchValue}
        type="text"
        className="search"
        placeholder={SEARCH_PLACEHOLDER()}
        onChange={e => {
          debouncedSearch(e.target.value);
        }}
      />
      <div className="search-message">
        {total_count ? RESULTS_MSG(total_count) : NO_RESULTS_FOUND()}
      </div>
    </Fragment>
  );
};
