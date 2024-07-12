import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Cars from "./Cars";
import CarDetail from "./CarDetail";
import Footer from "./Footer";
import { useState } from "react";

function App({ initialData }) {
    const [selectedCar, setSelectedCar] = useState(null);
    const [cars] = useState(initialData.cars || []); // Use the initial data for cars

    return (
        <>
            <Header />
            <div className="app-layout">
                <Sidebar />
                <div className="main-content">
                    <Cars cars={cars} setSelectedCar={setSelectedCar} />
                    {selectedCar ? <CarDetail car={selectedCar} /> : null}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default App;
