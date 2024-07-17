import React, { useState, ChangeEvent, FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faFilter } from "@fortawesome/free-solid-svg-icons";

interface Filters {
  label: string[];
}

interface SideMenuProps {
  filters: Filters;
  setFilters: (filters: Filters) => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ filters, setFilters }) => {
  const [click, setClick] = useState(false); // Creates opposite state to open and close menu on click
  const [localFilters, setLocalFilters] = useState<Filters>(filters); // Local state for form inputs

  const handleClick = () => setClick(!click); // Reverses false click state set

  const handleLabelChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setLocalFilters((prevFilters) => {
      if (checked) {
        return {
          ...prevFilters,
          label: [...prevFilters.label, value],
        };
      } else {
        return {
          ...prevFilters,
          label: prevFilters.label.filter((label) => label !== value),
        };
      }
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setFilters(localFilters);
    setClick(false); // Close the side menu after applying filters
  };

  return (
    <div className={click ? "inline-block w-[300px] h-[100vh] fixed top-[80px] bg-white left-[52px] opacity-100 transition-all z-[999] shadow-xl max-[1800px]:left-0" : "inline-block w-[300px] h-[100vh] fixed top-[80px] -left-full opacity-100 transition-all overflow-hidden bg-slate-100 z-[999]"}>
      <div className="block 
      fixed 
      top-32 
      left-[90px] 
      -translate-y-full 
      translate-x-[40%] 
      text-3xl 
      text-black 
      cursor-pointer 
      z-[999]
      max-[1800px]:left-[20px]
      " onClick={handleClick}>
      <FontAwesomeIcon icon={click ? faTimes : faFilter} />
        {/* ? is equal to true. : creates toggle from one item to another. */}
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center relative text-black my-20 mx-auto w-[156px]">
        <h2 className="text-2xl">Filter Options</h2>
        <div className="flex flex-col justify-start items-start">
          <label htmlFor="label" className="text-[28px]">Category</label>
          <div>
            <label>
              <input
                className="text-white ml-5 mr-[10px]"
                type="checkbox"
                value="T-Shirt"
                checked={localFilters.label.includes("T-Shirt")}
                onChange={handleLabelChange}
              />
              T-Shirt
            </label>
          </div>
          <div>
            <label>
              <input
                className="text-white ml-5 mr-[10px]"
                type="checkbox"
                value="Jeans"
                checked={localFilters.label.includes("Jeans")}
                onChange={handleLabelChange}
              />
              Jeans
            </label>
          </div>
          <div>
            <label>
              <input
                className="text-white ml-5 mr-[10px]"
                type="checkbox"
                value="Joggers"
                checked={localFilters.label.includes("Joggers")}
                onChange={handleLabelChange}
              />
              Joggers
            </label>
          </div>
          <div>
            <label>
              <input
                className="text-white ml-5 mr-[10px]"
                type="checkbox"
                value="Jackets"
                checked={localFilters.label.includes("Jackets")}
                onChange={handleLabelChange}
              />
              Jackets
            </label>
          </div>
        </div>
        <button type="submit" className="mt-6 border-2 border-solid border-black w-32 h-10 text-base">Apply Filters</button>
      </form>
    </div>
  );
};

export default SideMenu;
