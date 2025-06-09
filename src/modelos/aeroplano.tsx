import Helice from "./helice";
import TrendeAterrizaje from "./trenDeAterrizaje";
import Alas from "./alas";
import Cubierta from "./cubierta";

class Aeroplano {
    constructor(
        private helice: Helice,
        private tren: TrendeAterrizaje,
        private alas: Alas,
        private cubierta: Cubierta
    ) {}

    public toString(): string {
        return `Aeroplano:\n- ${this.helice.toString()}\n- ${this.alas.toString()}\n- ${this.tren.toString()}\n- ${this.cubierta.toString()}`;
    }
}

export default Aeroplano;
