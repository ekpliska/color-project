import storeFactory from '../../../src/store/index';
import { addColor } from '../../../src/actions/colors';

describe("addColor", () => {
    let store;
    const colors = [
        {
            id: "48498",
            title: "lawn",
            color: "#44ef37",
            timestamp: "Mon Apr 11 2019 12:54:01 GTM-0700 (PDT)",
            rating: 4
        },
        {
            id: "48499",
            title: "ocean blue",
            color: "#0061ff",
            timestamp: "Mon Apr 11 2019 12:54:01 GTM-0700 (PDT)",
            rating: 0
        },
    ];

    beforeAll(() => {
        store = storeFactory({ colors });
        store.dispatch(addColor("Dark Blue", "#000033"));
    });

    it("should add a new color", () => {
        return expect(store.getState().colors.length).toBe(4);
    });

    it("should add a unique guid id", () => {
        return expect(store.getState().colors[3].id.length).toBe(5);
    });

    it("should set the ating to 0", () => {
        return expect(store.getState().colors[3].rating).toBe(0);
    });

    // toBeDefined() Для проверки наличия переменной или функции (Проверка наличия timestamp)
    it("should set timestamp", () => {
        return expect(store.getState().colors[3].timestamp).toBeDefined();
    });

})