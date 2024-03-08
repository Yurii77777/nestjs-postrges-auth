# nestjs-postrges-auth

## How to start

1. Istall PostreSQL;
2. Create `.env` file contains:

- `DATABASE_HOST`;
- `DATABASE_PORT`;
- `DATABASE_USERNAME`;
- `DATABASE_PASSWORD`;
- `DATABASE_NAME`;
- `JWT_SECRET`;
- `JWT_EXPIRATION_IN_DAYS`; // for example 1d

3. yarn install or npm i
4. npm run start

### Available API

http://localhost:3000/api/user = user register;
http://localhost:3000/api/auth/login = user login;

### Additionally

Є можливість винести перевірку e-mail на унікальність написавши кастомний декоратор та використовувати його в dto для валідації.
