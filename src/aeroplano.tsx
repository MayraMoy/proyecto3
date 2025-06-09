class Aeroplano {
    private helice: Helice;
    private trenAterrizaje: TrenDeAterrizaje;
    private alas: Alas;
    private cubierta: Cubierta;

    constructor(pHelice: Helice, pTrenAterrizaje: TrenDeAterrizaje, pAlas: Alas, pCubierta: Cubierta) {
        this.helice = pHelice;
        this.trenAterrizaje = pTrenAterrizaje;
        this.alas = pAlas;
        this.cubierta = pCubierta;
    }

    public toString(): string {
        let mensaje = "Aeroplano compuesto por:\n";
        mensaje += this.helice.toString() + "\n";
        mensaje += this.alas.toString() + "\n";
        mensaje += this.trenAterrizaje.toString() + "\n";
        mensaje += this.cubierta.toString();
        return mensaje;
    }
}
