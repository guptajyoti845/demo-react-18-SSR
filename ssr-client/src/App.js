import "./App.css";
import {Suspense, lazy, useState} from "react";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const CarsComponent = lazy(() =>
    delay(10500).then(() => import("./Cars.js" /* webpackPrefetch: true */))
);

const HeadersComponent = lazy(() =>
    delay(10000).then(() => import("./Header.js" /* webpackPrefetch: true */))
);

const SidebarComponent = lazy(() => import("./Sidebar.js"));
const FooterComponent = lazy(() => import("./Footer.js"));
const CarDetailComponent = lazy(() => import("./CarDetail.js"));

const LoadingScreen = () => <div>Loading Cars...</div>;
const LoadingHeaderScreen = () => <div>Loading Header...</div>;
const LoadingSidebarScreen = () => <div>Loading Sidebar...</div>;
const LoadingFooterScreen = () => <div>Loading Footer...</div>;
const LoadingCarDetailScreen = () => <div>Loading Car Details...</div>;

function App() {
    const [selectedCar, setSelectedCar] = useState(null);

    return (
        <>
            <Suspense fallback={<LoadingHeaderScreen/>}>
                <HeadersComponent/>
            </Suspense>

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
