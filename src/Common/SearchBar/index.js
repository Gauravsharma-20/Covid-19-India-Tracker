import React, { useEffect, useState , useRef} from 'react';
import { Link } from 'react-router-dom';

import StateCodes from '../../utils/StateCodes.json';

import './SearchBar.css';



const SearchBar = () => {

  const [term, setTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);
  const ref = useRef();


  //To close on outside the Region of interest clicks
  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
      
      setOpen(false);
    };

    document.body.addEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);


  //Set Debounced term
  useEffect(() => {

    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    },50);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);


  //Use Debounced term
  useEffect(() => {

    const searchResults = Object.entries(StateCodes).filter(
      ([key,value]) => {

          if(key!=='TT'&&key!=='UT'&&value.toLowerCase().startsWith(debouncedTerm.toLowerCase())) {
            return [key,value];
          }
      });
      
    setResults(searchResults);
  }, [debouncedTerm]);


  const suggestions = results.map( ([key,value]) => {
    
    return (
      <div key={key} className="suggestion-box">
      <Link to={`/state/${key}`}>
      <div>
        <span className="suggestion-value">{value}</span>
        <span className="suggestion-key">
          <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
          {key}
        </span>
      </div>
      </Link>
      </div>
    );
  });


  return (
      <div className="search-bar" onClick={() => setOpen(!open)} ref={ref}>
          <div className="input-icons">
            <i className="fa fa-search" aria-hidden="true"></i>
            <input 
              className="search-input"
              type="text"
              placeholder="Search State"
              value={term}
              onChange={event => setTerm(event.target.value) }
            />
          </div>

          <div className={`suggestions-container ${open ?'show':'hide'}`} >
            {suggestions}
          </div>
      </div>
    );
}

export default SearchBar;


/*
const onSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  }
*/
