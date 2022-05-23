# Dev Notes

## Convert erb to haml
```shell
rails haml:erb2haml
```

## Docker Run Postgres DB
```shell
docker run --name paul-postgres -v "$PWD/pg_data":/var/lib/postgresql/data -e POSTGRES_USER=root -e POSTGRES_PASSWORD=rootpwd --publish 5432:5432 -d postgres:14
```
