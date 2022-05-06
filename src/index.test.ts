import { prettyJson } from ".";

describe("prettyJson", () => {
    test("should generate pretty html json format", () => {
        const json = JSON.parse(
            '{ "sys": "Simple Yet Special", "awesome": true, "optional": null, "number": 2022}'
        );
        const pretty = prettyJson(JSON.stringify(json, undefined, 4));
        expect(pretty).toEqual(
            '{\n    <span style="color: #EB2013">"sys":</span> <span style="color: #097BED">"Simple Yet Special"</span>,\n    <span style="color: #EB2013">"awesome":</span> <span style="color: blue">true</span>,\n    <span style="color: #EB2013">"optional":</span> <span style="color: magenta">null</span>,\n    <span style="color: #EB2013">"number":</span> <span style="color: #0CBB52">2022</span>\n}'
        );
    });
});
