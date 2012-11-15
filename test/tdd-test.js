if ('undefined' != typeof require) {
	buster = require("buster");
	//myLib = require("../lib/my-lib");
}

buster.testCase("A module", {
    "states the obvious": function () {
        assert(true);
    }
});