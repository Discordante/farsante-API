# FARSANTE API
![GitHub repo size](https://img.shields.io/github/repo-size/Discordante/farsante-API)

https://farsante-api.herokuapp.com

This API is able to generate random data adapted to the format used in Spain and Europe.
The project is inspired by the faker API, which is widely used to obtain random data.

The API must handle the following resources:

## People

| HTTP Method |     Path     |        Description        |
| ----------- | ------------ | ------------------------- |
| GET         | /randomName  | get a random name         |
| GET         | /femaleName  | get a random female name  |
| GET         | /maleName    | get a random male name    |
| GET         | /lastName    | get a random lastname     |


Example of /randomName endpoint request:

```
{
  "_id": "60a79464237a638c6c108402",
  "name": "Alfonso",
  "createdAt": "2021-05-21T11:07:16.586Z",
  "updatedAt": "2021-05-21T11:07:16.586Z"
}

```
## Documentation

| HTTP Method |     Path     |        Description        |
| ----------- | ------------ | ------------------------- |
| GET         | /dni         | get a random DNI          |



Example of /dni endpoint request:

```
{
  "dni": "75015202N"
}
```
## Cities and Municipalities

| HTTP Method |     Path             |        Description        |
| ----------- | -------------------- | ------------------------- |
| GET         | /randomCity          | get a random city         |
| GET         | /randomMunicipality  | get a random municipality |



Example of /randomCity endpoint request:

```
{
  "_id": "60ac98e155e39114379e611a",
  "city": "Arroyo de la Luz",
  "lat": "39.4840",
  "lng": "-6.5846",
  "country": "Spain",
  "iso2": "ES",
  "admin_name": "Extremadura",
  "capital": "",
  "population": "5811",
  "population_proper": "5811"
}
```

Example of /randomMunicipality endpoint request:

```
{
  "_id": "60ac978a55e39114379df6a3",
  "codigo_postal": "33450",
  "municipio_id": "33016",
  "municipio_nombre": "Castrillón",
  "codigo_unidad_poblacional": "0218702",
  "entidad_singular_nombre": "Vegarrozadas",
  "nucleo_nombre": "Muro (El)"
}
```
