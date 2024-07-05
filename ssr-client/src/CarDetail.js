import "./CarDetail.css";

const CarDetail = ({ car }) => {
    return (
        <div className="car-detail">
            <h3>{car.name}</h3>
            <p>{car.details}</p>
        </div>
    );
}

export default CarDetail;
