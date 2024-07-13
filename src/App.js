import React, { useState } from 'react';
import FilteredList from './FilteredList/FilteredList';
import SearchBox from './SearchBox/SearchBox';
import './App.css'

const App = () => {
  const [searchText, setSearchText] = useState('');
  const items = ['Wrecked by Imagine Dragons', 'human by rangn bone man', 'Gods dont pray by Imagine Dragons', 'Abyss by Yungblud', 'The Devil and The Huntsman by Daniel Pemberton'];

  return (
    <div>
      <SearchBox onSearchChange={setSearchText} />
      <FilteredList items={items} searchText={searchText} />
    </div>
  );
};

export default App;

