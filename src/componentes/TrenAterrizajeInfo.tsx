import React from "react";
import TrendeAterrizaje from "../modelos/trenDeAterrizaje";

interface Props {
    neumaticos: number;
    amortiguadores: number;
    retractil: boolean;
}

const TrenAterrizajeInfo: React.FC<Props> = ({ neumaticos, amortiguadores, retractil }) => {
    const tren = new TrendeAterrizaje(neumaticos, amortiguadores, retractil);
    return <p>{tren.toString()}</p>;
};

export default TrenAterrizajeInfo;
