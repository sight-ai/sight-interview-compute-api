## Installation

```bash
$ pnpm install
```

## Running the app

```bash
$ pnpm run start
```

## Making the request

```bash
curl -X POST http://localhost:3000/compute \
-H "Content-Type: application/json; charset=utf-8" \
-d '{
  "numbers": [1],
  "ast": {
    "type": "operation",
    "value": "+",
    "left": {
      "type": "variable",
      "index": 0
    },
    "right": {
      "type": "number",
      "value": 2
    }
  }
}'
```