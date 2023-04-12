import { changeName, changeCost } from "../store";
import { addCar } from "../store";
import { useDispatch, useSelector } from "react-redux";
function CarForm() {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCar({ name, cost }));
  };
  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };

  const handleCostChange = (event) => {
    const carCost = parseInt(event.target.value) || 0;
    dispatch(changeCost(carCost));
  };

  return (
    <div className="car-form panel p-3">
      <h4 className="subtitle is-3">Add car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              value={name}
              onChange={handleNameChange}
              className="input is-expanded"
              type="text"
            />
          </div>
          <div className="field">
            <label className="label">Cost</label>
            <input
              value={cost || ""}
              onChange={handleCostChange}
              className="input is-expanded"
              type="number"
            />
          </div>
        </div>
        <div className="field">
          <button onClick={handleSubmit} className="button is-link">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
