class TrenDeAterrizaje {
    private numNeumaticos: number = 0;
    private numAmortiguadores: number = 0;
    private fijoRetractil: boolean = false;

    public constructor(a: number, b: number, c: boolean) {
        this.numNeumaticos = a;
        this.numAmortiguadores = b;
        this.fijoRetractil = c;
    }

    public toString(): string {
        let mensaje: string = "Tren de Aterrizaje compuesto por:";
        if (this.fijoRetractil) {
            mensaje += " con Retráctil fijo,";
        }
        mensaje += " " + this.numNeumaticos + " neumáticos, " + this.numAmortiguadores + " amortiguadores.";
        return mensaje;
    }
}

export default TrenDeAterrizaje;