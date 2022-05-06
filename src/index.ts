type ColorOptionsProps = {
    jsonNumber?: string;
    jsonBoolean?: string;
    jsonNull?: string;
    jsonKey?: string;
    jsonValue?: string;
};
const colorOptions: ColorOptionsProps = {
    jsonNumber: "#0CBB52",
    jsonKey: "#EB2013",
    jsonValue: "#097BED",
    jsonBoolean: "blue",
    jsonNull: "magenta",
};

export const prettyJson = (
    json: string,
    options: ColorOptionsProps = colorOptions
) => {
    json = json
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    return json.replace(
        /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g,
        function (match: string) {
            let color = options.jsonNumber;
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    color = options.jsonKey;
                } else {
                    color = options.jsonValue;
                }
            } else if (/true|false/.test(match)) {
                color = options.jsonBoolean;
            } else if (/null/.test(match)) {
                color = options.jsonNull;
            }
            return `<span style="color: ${color}">${match}</span>`;
        }
    );
};
