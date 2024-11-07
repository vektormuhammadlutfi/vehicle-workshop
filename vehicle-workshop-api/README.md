# Vehicle Workshop API

To install dependencies:

```sh
bun install
```

Setup database container:
`

```sh
docker compose up database
```

Setup database:

```sh
bun migrate
bun generate
# bun seed
```

To run:

```sh
bun run dev
```

open http://localhost:3000
