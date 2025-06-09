import React from "react";
import Helice from "../modelos/helice";
import TrendeAterrizaje from "../modelos/trenDeAterrizaje";
import Alas from "../modelos/alas";
import Cubierta from "../modelos/cubierta";
import Aeroplano from "../modelos/aeroplano";

const AeroplanoInfo: React.FC = () => {
    const helice = new Helice(2);
    const tren = new TrendeAterrizaje(4, 2, true);
    const alas = new Alas(2, 2);
    const cubierta = new Cubierta(true, true, false, 3, 2);

    const aeroplano = new Aeroplano(helice, tren, alas, cubierta);

    return <pre>{aeroplano.toString()}</pre>;
};

export default AeroplanoInfo;
