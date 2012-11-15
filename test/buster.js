var config = module.exports;

config["My tests"] = {
    extensions: [ require("buster-coverage") ],
    rootPath: "../",
    environment: "node", // or "node"
    sources: [
        //"lib/mylib.js",
        "lib/**/*.js"
    ],
    tests: [
        "test/*-test.js"
    ]
}

config["browser test"] = {
    extensions: [ require("buster-coverage") ],
    rootPath: "../",
    environment: "browser", // or "node"
    sources: [
        //"lib/mylib.js",
        "lib/**/*.js"
    ],
    tests: [
        "test/*-client-test.js"
    ]
}