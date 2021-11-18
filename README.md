# Administrador de almacen de telematica de la policia

Bueno esta nota es para el equipo de desarrollo. aqui voy a dejar las especificaciones consignadas sobre lo que nos dijo carlos con respecto a lo que quiere con la aplicacion

## Entidades

para el proyecto se crearon 6 modelos correspondiendo a las necesidades del proyecto.

a continuacion una breve explicación

### Funcionario

> Atributos

- id (reservado para mongodb)
- nombre
- apellidos
- placa
- cedula
- grado
- telefono
- contraseña (como un hash encriptado en base a sha2)

es el usuario principal de la aplicacion, este tiene los datos basicos, se relaciona con las salidas y entradas ya que este es el que las consigna en la base de datos.

### Prestante

> Atributos

- id (reservado para mongodb)
- nombre
- apellidos
- cedula
- placa
- dependencia
- grado
- telefono

Esta entidad hace referencia a los funcionarios que soliciten los prestamos de elementos solo pueden ser dados de baja si y solo si no tienen prestamos a su nombre.

### elemento

> Atributos

- id (reservado para mongodb)
- clase
- marca
- modelo
- serie
- numeroInventario (Numero de referencia dentro del almacen)
- plazomaximo

Esta entidad hace referencia a los elementos guardados dentro del inventario del almacen ya que su numero de inventario es unico no deben haber elementos duplicados y tampoco elementos prestados en varios prestamos activos

### prestamo

> atributos

- id (reservado para mongodb)
- idSalida
- idEntrada
- idPrestante
- idElemento
- servicio
- fechaSalida
- fechaEntrada

Esta entidad encapsula la funcion principal de la aplicacion la cual es gestionar los prestamos de elementos, tiene un id de salida y entrada ya que carlos especifico que se puedan escribir observaciones sobre el estado de salida y entrada de elementos


### salida

> atributos

- id (reservado para mongodb)
- idFuncionarioResponsable
- observacion

Entidad que sirve para referenciar el inicio de un prestamo

### Entrada

> atributos

- id (reservado para mongodb)
- idFuncionarioResponsable
- observacion

Entidad que sirve para referenciar la finalizacion de un prestamo

## Info loopBack

Un poco de documentacion que viene con la inicializacion de loopback

This application is generated using [LoopBack 4 CLI](https://loopback.io/doc/en/lb4/Command-line-interface.html) with the
[initial project layout](https://loopback.io/doc/en/lb4/Loopback-application-layout.html).

### Install dependencies

By default, dependencies were installed when this application was generated.
Whenever dependencies in `package.json` are changed, run the following command:

```sh
npm install
```

To only install resolved dependencies in `package-lock.json`:

```sh
npm ci
```

### Run the application

```sh
npm start
```

You can also run `node .` to skip the build step.

Open http://127.0.0.1:3000 in your browser.

### Rebuild the project

To incrementally build the project:

```sh
npm run build
```

To force a full build by cleaning up cached artifacts:

```sh
npm run rebuild
```

### Fix code style and formatting issues

```sh
npm run lint
```

To automatically fix such issues:

```sh
npm run lint:fix
```

### Other useful commands

- `npm run migrate`: Migrate database schemas for models
- `npm run openapi-spec`: Generate OpenAPI spec into a file
- `npm run docker:build`: Build a Docker image for this application
- `npm run docker:run`: Run this application inside a Docker container

### Tests

```sh
npm test
```

### What's next

Please check out [LoopBack 4 documentation](https://loopback.io/doc/en/lb4/) to
understand how you can continue to add features to this application.

[![LoopBack](https://github.com/loopbackio/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)
