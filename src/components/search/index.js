import React from 'react';
import Types from 'prop-types';
import { VscSearch } from 'react-icons/vsc';

import {
  BtnSearch,
  InputText,
  LabelText,
  SearchContainer,
} from './Search.styles';

const Search = ({ search, setSearch }) => {
  const hOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <SearchContainer onSubmit={hOnSubmit}>
      <InputText
        type="text"
        value={search}
        valid={search.trim() !== ''}
        onChange={({ target }) => setSearch(target.value)}
      />
      <LabelText>What you looking for...</LabelText>
      <BtnSearch type="submit">
        <VscSearch />
      </BtnSearch>
    </SearchContainer>
  );
};

Search.propTypes = {
  search: Types.string.isRequired,
  setSearch: Types.func.isRequired,
};

export default Search;
