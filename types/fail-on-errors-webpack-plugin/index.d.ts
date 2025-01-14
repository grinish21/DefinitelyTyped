// Type definitions for fail-on-errors-webpack-plugin 3.0
// Project: https://github.com/AustinMatherne/fail-on-errors-webpack-plugin
// Definitions by: Ciarán Ingle <https://github.com/inglec-arista>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { Plugin } from "webpack";

declare class FailOnErrorsWebpackPlugin extends Plugin {
    constructor(options?: { failOnErrors?: boolean | undefined; failOnWarnings?: boolean | undefined });
}

export = FailOnErrorsWebpackPlugin;
