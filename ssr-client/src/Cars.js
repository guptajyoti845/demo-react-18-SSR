import "./Cars.css";

const Cars = ({ setSelectedCar }) => {
    const cars = [
        { name: "Ferrari", details: "Fast and red" },
        { name: "Porsche", details: "Luxurious and powerful" },
        { name: "Lamborghini", details: "Stylish and fast" },
        { name: "Lexus", details: "Reliable and comfortable" }
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
