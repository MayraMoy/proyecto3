class Helice {
    private numHelices: number = 0;

    public constructor(n: number) {
        this.numHelices = n;
    }

    public toString(): string {
        return this.numHelices + " hélice/s";
    }
}
