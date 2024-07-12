import "./Cars.css";

const Cars = ({setSelectedCar}) => {
    const cars = [
        {name: "Tata Tiago", details: "Fast and red"},
        {name: "Ford Figo", details: "Luxurious and powerful"},
        {name: "Volkswagen Polo", details: "Stylish and fast"},
        {name: "Toyota Yaris", details: "Reliable and comfortable"}
    ];

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
}

export default Cars;
