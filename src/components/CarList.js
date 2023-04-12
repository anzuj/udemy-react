
import { removeCar } from "../store";
import { useSelector, useDispatch } from "react-redux";

function CarList() {
  const dispatch = useDispatch();
  const {cars, name } = useSelector(({form, cars: {searchTerm, data}}) => {  
    const filteredCars =  data.filter((car)=> car.name.toLowerCase().includes(searchTerm.toLowerCase()))

    return {
      cars: filteredCars,
      name: form.name
    }
  });

  const handleCarDelete = (id) => {
    dispatch(removeCar(id));
  };

  const renderedCars = cars.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase())
    return (
      <div key={car.id} className={`panel ${bold && 'bold'}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button onClick={() => handleCarDelete(car.id)} className="button is-danger">
          Delete
        </button>
      </div>
    );
  });

  return <div className="car-list" >{renderedCars}
  <hr />
  </div>;
}

export default CarList;
