import "./Cars.css";

const Cars = ({ cars, setSelectedCar }) => {
    return (
        <div className="cars">
            <h2>Cars</h2>
            <ul>
                {cars.map(car => (
                    <li key={car.name} onClick={() => setSelectedCar(car)}>
                        {car.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cars;
