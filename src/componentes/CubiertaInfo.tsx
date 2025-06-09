import React from "react";
import Cubierta from "../modelos/cubierta";

interface Props {
    tripulacion: boolean;
    vuelo: boolean;
    emergencia: boolean;
    tanques: number;
    salidas: number;
}

const CubiertaInfo: React.FC<Props> = ({ tripulacion, vuelo, emergencia, tanques, salidas }) => {
    const cubierta = new Cubierta(tripulacion, vuelo, emergencia, tanques, salidas);
    return <p>{cubierta.toString()}</p>;
};

export default CubiertaInfo;
