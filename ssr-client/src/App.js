import "./App.css";
import {Suspense, lazy, useState} from "react";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const HeadersComponent = lazy(() =>
    import("./Header.js")
);

const SidebarComponent = lazy(() =>
    delay(1000).then(() => import("./Sidebar.js"))
);

const CarsComponent = lazy(() =>
    delay(2000).then(() => import("./Cars.js" ))
);

const CarDetailComponent = lazy(() =>
    delay(100).then(() => import("./CarDetail.js"))
);

const FooterComponent = lazy(() => import("./Footer.js"));

const LoadingScreen = () => <div>Loading Cars...</div>;
const LoadingSidebarScreen = () => <div>Loading Sidebar...</div>;
const LoadingFooterScreen = () => <div>Loading Footer...</div>;
const LoadingCarDetailScreen = () => <div>Loading Car Details...</div>;

function App() {
    const [selectedCar, setSelectedCar] = useState(null);

    return (
        <>
            <HeadersComponent/>
            <div className="app-layout">
                <Suspense fallback={<LoadingSidebarScreen/>}>
                    <SidebarComponent/>
                </Suspense>

                <div className="main-content">
                    <Suspense fallback={<LoadingScreen/>}>
                        <CarsComponent setSelectedCar={setSelectedCar}/>
                    </Suspense>

                    <Suspense fallback={<LoadingCarDetailScreen/>}>
                        {selectedCar ? <CarDetailComponent car={selectedCar}/>
                            : null}
                    </Suspense>
                </div>
            </div>

            <Suspense fallback={<LoadingFooterScreen/>}>
                <FooterComponent/>
            </Suspense>
        </>
    );
}

export default App;
