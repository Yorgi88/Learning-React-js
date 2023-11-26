import { useState } from "react";
const useToggle = (defaultValue) => {
    const [show, setShow] = useState(defaultValue);

    // next we setup the toggle function :
    const Toggle = ()=> {
        setShow(!show);
    }
    return {show, Toggle};

}

export default useToggle;