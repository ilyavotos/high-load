# High Load API

## Overview

This API allows for updating user balances and listing users in a high-load environment.

Stack: NodeJS, TS, Express, BullMq, Docker

- The creation of test tasks is located in the app.ts file.
- Default TZ='Europe/Moscow' for ap1 ap2 ap3 pa4 ap5

### Init

```js
npm i
docker compose up --build
```

### Update User Balance

- **Endpoint**: `http://localhost:3001/api/user/update-balance`
- **Method**: `PUT`
- **Headers**:
  - `Content-Type: application/json`
- **Body**:
  ```json
  {
    "userId": 1,
    "amount": -2
  }
  ```

### List Users

- **Endpoint**: `http://localhost:3001/api/user/list`
- **Method**: `GET`
- **Headers**:
  - `Content-Type: application/json`

### List Background Task

- **Endpoint**: `http://localhost:3001/api/task/queue`
- **Method**: `GET`
- **Headers**:
  - `Content-Type: application/json`

### List History Task

- **Endpoint**: `http://localhost:3001/api/task/history/list`
- **Method**: `GET`
- **Headers**:
  - `Content-Type: application/json`

### Docker

- `docker compose up --build`
- `docker compose down`

### Docker PostgreSQL

- run `psql -U postgres -h localhost postgres;`

<!-- SELECT tablename FROM pg_tables WHERE schemaname = 'public'; -->
<!-- SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'tasks'; -->
