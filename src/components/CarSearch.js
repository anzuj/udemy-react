import { changeSearchTerm } from "../store";
import { useDispatch, useSelector } from "react-redux";
function CarSearch() {
  const dispatch = useDispatch();
  const handleSearchTermChange = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  };

  const searchTerm = useSelector((state)=> state.cars.searchTerm)

  return (
    <div className="list-header">
      <h3 className="title is-3">My cars</h3>
      <div className="search field is-horizontal">
        <label className="label">Search</label>
        <input className="input" value={searchTerm} onChange={handleSearchTermChange}></input>
      </div>
    </div>
  );
}

export default CarSearch;
