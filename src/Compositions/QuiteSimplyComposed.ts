import { BasicClass } from "../Basics/BasicClass";

export class QuiteSimplyComposed {
    basicClass: BasicClass;

    constructor() {
        this.basicClass = new BasicClass();
    }

    public Add(a: number, toAnother: number): number {
        return this.basicClass.Add(a, toAnother);
    }

}
