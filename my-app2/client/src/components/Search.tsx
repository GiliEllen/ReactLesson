
import React, { FC, useState } from 'react'
import axios from 'axios';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

interface SearchProps{
  setInputValue: any;
}

const Search: FC <SearchProps> = ({ setInputValue }) => {

  // // const onLine = useOnlineStatus();
  // let disp = "";
  // // if (onLine) disp = "none";
  // else disp = "block";

  const handleSearch = (ev:any) => {

    setInputValue(ev.target.value)
  }

  return (
    <input onInput={handleSearch} 
    id={"search"} type={"text"} 
    placeholder={`Enter breed`}
    style={{ textDecoration: "none"}} />
  )
}

export default Search;