import React from "react";
import Alas from "../modelos/alas";

interface Props {
    frente: number;
    cola: number;
}

const AlasInfo: React.FC<Props> = ({ frente, cola }) => {
    const alas = new Alas(frente, cola);
    return <p>{alas.toString()}</p>;
};

export default AlasInfo;
