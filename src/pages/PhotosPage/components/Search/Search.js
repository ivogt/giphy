import React from 'react';
import { useImagesSearch } from '../../store';
import Debounce from '../../../../utils/debounce';

export default () => {
  const [searchedValue, { search }] = useImagesSearch();
  const safeSearch = Debounce((v)=>search(v),700);
  return (
    <input
      defaultValue={searchedValue}
      type="text"
      className="search"
      onChange={(e)=>{ safeSearch(e.target.value) }}
    />
  );
};
