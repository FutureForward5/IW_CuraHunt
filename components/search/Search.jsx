import { doctors, hospital } from "@/assets";
import Image from "next/image";
import "./search.css";

const Search = () => {
  return (
    <div className="search">
      <div className="search-img">
        <Image src={doctors} alt="doctor" />
      </div>
      <div id="search">
        <div>
          <h1>"FIND BEST DOCTORS AND HOSPITALS"</h1>
        </div>
        <div className="search-location">
          <div className="search-region">
            <i className="fas fa-map-marker-alt"></i>
            <span>
              <p>Nearest Locality</p>
              <select name="" id="">
                <option value="">Select Region</option>
                <option value="East Delhi">East Delhi</option>
                <option value="North Delhi">North Delhi</option>
                <option value="South Delhi">South Delhi</option>
                <option value="West Delhi">West Delhi</option>
                <option value="Dwarka">Dwarka</option>
                <option value="Janakpuri">Janakpuri</option>
              </select>
            </span>
          </div>
          <div className="search-bar">
            <i className="fas fa-search"></i>
            <input
              type="text"
              className="search-input"
              placeholder="Search Your Need"
            />
            <i className="fas fa-times"></i>
          </div>
        </div>
      </div>
      <div className="search-img">
        <Image src={hospital} alt="hospital" />
      </div>
    </div>
  );
};

export default Search;
