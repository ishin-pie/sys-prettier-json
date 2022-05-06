# sys-prettier-json
Format JSON with beautiful color

### Installation
   ```sh
   npm i sys-prettier-json
   ```
   or
   ```sh
   yarn add sys-prettier-json
   ```

### Usage

```js
// index.js

import { prettyJson } from 'sys-prettier-json'

const json = JSON.parse('{ "sys": "Simple Yet Special", "awesome": true, "optional": null, "number": 2022}');

const htmlString = prettyJson(JSON.stringify(json, undefined, 4));
```

[Demo - https://jsfiddle.net/q7zewko5/11/](https://jsfiddle.net/q7zewko5/11/)

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

## Contact

Ishin Vin - ishin.pie@gmail.com