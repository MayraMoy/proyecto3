class Alas {
    private numAlasFrente: number = 0;
    private numAlasCola: number = 0;

    public constructor(mAlasFrente: number, nAlasCola: number) {
        this.numAlasFrente = mAlasFrente;
        this.numAlasCola = nAlasCola;
    }

    public toString(): string {
        return "Alas Frontales: " + this.numAlasFrente + ", Alas Posteriores: " + this.numAlasCola + ".";
    }
}

export default Alas;