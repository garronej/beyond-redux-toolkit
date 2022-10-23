

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CoreProvider } from "ui/coreApi";
import type { CoreParams } from "ui/coreApi";
import { App } from "./App";
import { assert } from "tsafe/assert";

const coreParams: CoreParams = {
    "port1Config": {
        "port1Config1": "foo",
    },
    "port2Config": {
        "port2Config1": "bar",
        "port2Config2": "baz",
    }
};

createRoot((() => {

    const rootElement = document.getElementById("root");

    assert(rootElement !== null);

    return rootElement;

})()).render(
    <StrictMode>
        <CoreProvider 
            coreParams={coreParams}
            fallback={<h1>Loading</h1>}
        >
            <App />
        </CoreProvider>
    </StrictMode>
);