# Sight Interview Compute API

This is a demo compute api service implementation for Sight AI interview quiz.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/)

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
$ pnpm run start
```

The service listens to port 3000 by default.

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