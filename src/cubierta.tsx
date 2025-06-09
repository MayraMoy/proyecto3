class Cubierta {
    private cabinaTripulacion: boolean = false;
    private cabinaVuelo: boolean = false;
    private sistemaEmergencia: boolean = false;
    private numTanquesCombustible: number = 0;
    private numPuertasSalidas: number = 0;

    public constructor(pCabinaTripulacion: boolean, pCabinaVuelo: boolean, pSistemaEmergencia: boolean, pTanquesCombustible: number, pPuertasSalida: number) {
        this.cabinaTripulacion = pCabinaTripulacion;
        this.cabinaVuelo = pCabinaVuelo;
        this.sistemaEmergencia = pSistemaEmergencia;
        this.numTanquesCombustible = pTanquesCombustible;
        this.numPuertasSalidas = pPuertasSalida;
    }

    public toString(): string {
        let mensaje = "Cubierta compuesta de:";
        if (this.cabinaVuelo) {
            mensaje += " Cabina de Vuelo,";
        }
        if (this.cabinaTripulacion) {
            mensaje += " Cabina de Tripulación,";
        }
        if (this.sistemaEmergencia) {
            mensaje += " Sistema de Emergencia,";
        }
        mensaje += " " + this.numTanquesCombustible + " Tanques de Combustible,";
        mensaje += " " + this.numPuertasSalidas + " Puertas de Salida.";
        return mensaje;
    }
}