import { BasicClass } from "./BasicClass";

describe('A Basic Test of a basic class', () => {
    let sut: BasicClass;

    beforeAll(() => {
        sut = new BasicClass();
    });
    test('a public prop', () => {
        expect(sut.publicProp).toBe('A Public Property Value');
    });
    test('a public method', () => {
        expect(sut.APublicMethod()).toBeTruthy
    });
});
