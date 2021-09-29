import React, { useState } from 'react';

import Input from './Input';
import Button from './Button';

import styels from './Search.scss';

const Search = () => {
  const [input, setInput] = useState('');
  return (
    <div className={styels.fieldSearch}>
      <Input placeholder={'Поиск'} label={''} value={input} onChange={e => setInput(e.currentTarget.value)} />
      <Button>Найти</Button>
    </div>
  );
};

export default Search;
