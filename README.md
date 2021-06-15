![GitHub repo size](https://img.shields.io/github/repo-size/Discordante/farsante-API)
![APM](https://img.shields.io/apm/l/vim-mode?logoColor=https%3A%2F%2Fimg.shields.io%2Fapm%2Fl%2Fvim-mode)

# FARSANTE API

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
      <li>
        <a href="#getting-started">Getting Started</a>
        <ul>
          <li><a href="#prerequisites">Prerequisites</a></li>
          <li><a href="#installation">Installation</a></li>
        </ul>
      </li>
        <li><a href="#usage">Usage</a></li>
     <li>
      <a href="#endpoints">EndPoints</a>
      <ul>
          <li><a href="#people">People</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#documentation">Documentation</a></li>
          <li><a href="#cities-and-municipalities">Cities and Municipalities</a></li>
      </ul>
    </li>
  
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

https://farsante-api.herokuapp.com

This API is able to generate random data adapted to the format used in Spain and Europe.
The project is inspired by the faker API, which is widely used to obtain random data.

The first time a request is made it is possible that the response time will be around 20s due to heroku. This only happens the first time, subsequent requests will work as normal.

### Built With

The main technologies used to develop the project are as follows:

* [nodeJs](https://nodejs.org/en/about/)
* [ExpressJs](https://expressjs.com/)
* [Mongoose](https://mongoosejs.com/)
* [Jest](https://jestjs.io/)


<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

farsante-api is developed using npm packages, so it is necessary to have it installed.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Discordante/farsante-API.git
   ```
2. Install npm packages
   ```sh
   npm install
   ```

<!-- USAGE EXAMPLES -->
## Usage

### Postman

The project comes with configured environment files and postman collections. To use them, it is only necessary to import these files from the postman folder.

### test

1. Run test
   ```sh
   npm test
   ```
### Docker

https://hub.docker.com/repository/docker/discordante/farsante

In case you want to use the project via a docker container, the link to download it is as follows:

   ```sh
   docker pull discordante/farsante:latest
   ```

## EndPoints

The API must handle the following resources:

## People

| HTTP Method |     Path     |        Description        |
| ----------- | ------------ | ------------------------- |
| GET         | /randomName  | get a random name         |
| GET         | /femaleName  | get a random female name  |
| GET         | /maleName    | get a random male name    |
| GET         | /lastName    | get a random lastname     |
| GET         | /fullName    | get a random full name    |


Example of /fullName endpoint request:
```
{
    "name": "Josefa",
    "firstSurname": "Campos",
    "secondSurname": "Fernandez"
}

```
## Contact

| HTTP Method |     Path     |        Description        |
| ----------- | ------------ | ------------------------- |
| GET         | /phoneNumber | get a random phone number |
| GET         | /email       | get a random email        |



Example of /phoneNumber endpoint request:

```
{
  "phone": "652194271"
}
```

Example of /email endpoint request:

```
{
    "user": "luciano92",
    "domain": "msn",
    "TLD": ".com",
    "email": "luciano92@msn.com"
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
