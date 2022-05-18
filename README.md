## Running the project

Add node_modules to your project by installing the dependencies in package.json by running

- `$ npm i`

In order to start the project run the following command:

- `$ npm run dev`

which concurrently combines:

- `$ npm run gen-typings`
- `$ npm run prisma:generate`
- `$ npm run start:dev`
