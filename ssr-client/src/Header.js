import "./Header.css";
import {useEffect, useState} from "react";

function fetchText({text, delay}) {
    return new Promise((resolve) =>
        setTimeout(() => {
            resolve(text);
        }, delay)
    );
}

const Header = () => {
    // const [headerText, setHeaderText] = useState(null);
    //
    // useEffect(() => {
    //     fetchText({
    //         text: "React 18 SSR example with Pipeable stream",
    //         delay: 30000
    //     })
    //     .then((text) => setHeaderText(text))
    //     .catch((error) => console.error(error));
    // }, []);

    return <div className="header">{"React 18 SSR example with Pipeable stream"}</div>
}

export default Header;
