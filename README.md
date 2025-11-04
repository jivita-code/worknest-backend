# WorkNest Backend

Node.js + TypeScript backend structure

```bash
npx jest -t "errorMiddleware" --runInBand
```

----

```bash
npm install

npx prisma migrate dev --name <migration_name>
```
- for production use:
```bash
npx prisma migrate deploy
```

```bash
npx prisma generate
```
- to open Prisma Studio
```bash
npx prisma studio
```

----

- Seed / Delete Features
```bash
npx tsx src/scripts/features/seed-features.ts

npx tsx src/scripts/features/delete-features.ts
```

- Seed  / Delete Plans
```bash
npx tsx src/scripts/plans/seed-plans.ts

npx tsx src/scripts/plans/delete-plans.ts
```