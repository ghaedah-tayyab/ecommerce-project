import "./SearchBar.css";
import { useRef, useEffect } from "react";


const SearchBar = ({ setSearch }) => {
  const myref = useRef();
  useEffect(() => {
      myref.current.focus();
  }, [])
  
  return (
    <div>
     <input
        className="search-bar"
        ref={myref}
        type="text"
        placeholder="Search Product"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}

export default SearchBar;