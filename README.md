# nestjs-postrges-auth

## How to start

1. Istall PostreSQL;
2. Create `.env` file contains:

- `TYPEORM_CONNECTION`; // postgres
- `TYPEORM_HOST`; // localhost
- `TYPEORM_USERNAME`; // root
- `TYPEORM_PASSWORD`; // admin
- `TYPEORM_DATABASE`; // db_migration
- `TYPEORM_PORT` // 5432
- `TYPEORM_SYNCHRONIZE`; // false
- `TYPEORM_LOGGING`; // true
- `TYPEORM_ENTITIES`; // dist/**/*entity.js
- `TYPEORM_MIGRATIONS`; // dist/migrations/*.js
- `TYPEORM_MIGRATIONS_DIR`; // src/migrations
- `TYPEORM_MIGRATIONS_RUN`; // false
- `TYPEORM_MIGRATIONS_TABLE_NAME`; // users
- `JWT_SECRET`; // hard_jwt_secret
= `JWT_EXPIRATION_IN_DAYS`; // 1d


3. yarn install or npm i
4. npm run start

### Available API

http://localhost:3000/api/auth/sign-up = user register; [POST]
http://localhost:3000/api/auth/sign-in = user login; [POST]

### Migration commands

`npm run migration:create --name=your_migration_name`;
`npm run migration:generate --name=your_migration_name`;
`npm run migration:run`;
`npm run migration:down`;
