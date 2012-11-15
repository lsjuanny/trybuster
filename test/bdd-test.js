if ('undefined' != typeof require) {
	buster = require("buster");
	//myLib = require("../lib/my-lib");
}

buster.spec.expose(); // Make some functions global

describe("A module", function () {
    it("states the obvious", function () {
        expect(true).toEqual(true);
    });
});