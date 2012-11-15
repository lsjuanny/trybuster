if ('undefined' != typeof require) {
	buster = require("buster");
	//myLib = require("../lib/my-lib");
}

buster.testCase("A module", {
    "states the obvious": function () {
        assert(true);
    },

    "Assert for 1 should be true": function () {
        assert(1);
    }
});