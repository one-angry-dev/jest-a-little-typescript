export class BasicClass {

    publicProp: string;
    private _privateProp: string;

    constructor() {
        this.publicProp = 'A Public Property Value';
        this._privateProp = 'A Private Property Value';
    }

    public APublicMethod(): boolean {
        console.log("Method call to APublicMethod");
        return true;
    }

    public Add(a: number, another: number): number {
        return a + another;
    }
}