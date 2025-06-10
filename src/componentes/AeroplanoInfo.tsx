import React from "react";
import Helice from "../modelos/helice";
import TrendeAterrizaje from "../modelos/trenDeAterrizaje";
import Alas from "../modelos/alas";
import Cubierta from "../modelos/cubierta";
import Aeroplano from "../modelos/aeroplano";

const aeroplanos: Aeroplano[] = [];


const AeroplanoInfo: React.FC = () => {
    /*const helice = new Helice(2);
    const tren = new TrendeAterrizaje(4, 2, true);
    const alas = new Alas(2, 2);
    const cubierta = new Cubierta(true, true, false, 3, 2);*/

    aeroplanos[0] = new Aeroplano(new Helice(3),new TrendeAterrizaje(3,3,true), new Alas(3,3), new Cubierta(false, true, true, 4, 2));
    aeroplanos[1] = new Aeroplano(new Helice(5),new TrendeAterrizaje(3,6,true), new Alas(3,3), new Cubierta(true, true, true, 4, 2));

    return (
        <div>
            {aeroplanos.map((aeroplano, index) => (
                <div key={index}>
                    <h2>Aeroplano {index + 1}</h2>
                    <p>{aeroplano.toString()}</p>
                </div>
            ))}
        </div>
    );
};




export default AeroplanoInfo;
