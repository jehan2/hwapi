import React, { useState } from "react";
import { Input, Flex } from "@chakra-ui/react";

function Search({ data }) {
  const [searchInput, setSearchInput] = useState([]);

  const handlChange = (e) => {
    
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    if (e.target.value === "") {
      setSearchInput([]);
    } else {
      setSearchInput(newFilter);
    }
  };

  return (
    <div>
      
        <Input type="text" placeholder="Search..." onChange={handlChange} />
      {searchInput.length != 0 && (
        <div className="dataResult">
          {searchInput.map((value, key) => {
            return (
              <a className="dataItem"  target="_blank">
                <p> {value.name}</p>
                <p>{value.disc}</p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Search;