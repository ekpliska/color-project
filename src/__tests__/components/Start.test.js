import React from 'react';
import { shallow } from 'enzyme';
import Star from '../../../src/components/Star';

describe("<Star /> UI Component", () => {
    it("renders default star", () =>
        expect(
            shallow(<Star />)
                .find('div.star')
                .length
        ).toBe(1)
    );

    it("renders selected stars", () =>
        expect(
            shallow(<Star selected={true} />)
                .find('div.selected.star')
                .length
        ).toBe(1)
    )
});