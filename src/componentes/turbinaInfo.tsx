import React from "react";
import Turbina from "../modelos/turbina";

interface Props {
    cantidad: number;
}

const TurbinaInfo: React.FC<Props> = ({ cantidad }) => {
    let mensaje = "";
    try {
        const t = new Turbina(cantidad);
        mensaje = t.toString();
    } catch (e) {
        mensaje = (e as Error).message;
    }
    return <p>{mensaje}</p>;
};

export default TurbinaInfo;
