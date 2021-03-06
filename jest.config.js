module.exports = {
    "testEnvironment": "node",
    "roots": [
        "<rootDir>"
    ],
    "preset": 'ts-jest',
    "setupFilesAfterEnv": ["<rootDir>/setupTests.ts"],
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    "testRegex": "(/tests/.*|(\\.|/)test)\\.tsx?$",
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    "testPathIgnorePatterns": ["<rootDir>/.next/", "<rootDir>/node_modules/"],
    "snapshotSerializers": ["enzyme-to-json/serializer"],
    "globals": {
        "ts-jest": {
            "tsConfig": "<rootDir>/tsconfig.jest.json"
        }
    }
}
