import { QuiteSimplyComposed } from "./QuiteSimplyComposed";

describe('that composition works', () => {
    let sut: QuiteSimplyComposed;
    beforeAll(() => {
        sut = new QuiteSimplyComposed();
    });
    test('that addition is redirected', () => {
        expect(sut.Add(3,7)).toBe(10);
    })
})