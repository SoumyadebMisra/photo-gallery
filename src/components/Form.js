import React,{ useState } from "react";

export const Form = ({ setQuery }) => {
  const [search,setSearch] = useState('');
  const handleChange = (e)=>{
    setSearch(e.target.value);
  }
  const handleClick = (e)=>{
    // e.preventDefault();
    setQuery(search);
    setSearch('')
  }
  return (
    <>
      <div className="container m-10 flex items-center justify-center">
        <input
          className="placeholder:italic placeholder:text-slate-500 block bg-white w-72 h-8.5 border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search for anything..."
          type="text"
          name="search"
          value={search}
          onChange={handleChange}
        />
        <span><button onClick={ handleClick } className="bg-sky-500 m-4 ml-5 border border-slate-400 rounded-lg py-1 pl-2 pr-2 hover:opacity-90 active:bg-sky-400 transition-all shadow-md">Search</button></span>
      </div>
    </>
  );
};
