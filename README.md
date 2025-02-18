# High Load API

## Overview

This API allows for updating user balances and listing users in a high-load environment.

### Init

```js
npm i
npm run start
```

### Update User Balance

- **Endpoint**: `http://localhost:3000/api/user/update-balance`
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

- **Endpoint**: `http://localhost:3000/api/user/list`
- **Method**: `GET`
- **Headers**:
  - `Content-Type: application/json`
