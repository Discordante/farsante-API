# API TRELLO

This API is able to generate random data from Spanish users, adapting the format to the one expected in that country.
The project is inspired by the faker API, which is widely used to obtain random data.

The API must handle the following resources:

* Column

| HTTP Method |     Path     |        Description        |
| ----------- | ------------ | ------------------------- |
| GET         | /randomName  | get a random name         |
| GET         | /femaleName  | get a random female name  |
| GET         | /maleName    | get a random male name    |
| GET         | /lastName    | get a random surname      |


Example of the column object:

```
{
  "_id": "60a79464237a638c6c108402",
  "name": "Calixto",
  "createdAt": "2021-05-21T11:07:16.586Z",
  "updatedAt": "2021-05-21T11:07:16.586Z"
}
