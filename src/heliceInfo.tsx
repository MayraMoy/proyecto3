// src/components/HeliceInfo.tsx

import React from "react";
import Helice from "./helice";

interface Props {
    cantidad: number;
}

const HeliceInfo: React.FC<Props> = ({ cantidad }) => {
    let mensaje = "";

    try {
        const helice = new Helice(cantidad);
        mensaje = helice.toString();
    } catch (error) {
        mensaje = (error as Error).message;
    }

    return <p>{mensaje}</p>;
};

export default HeliceInfo;
