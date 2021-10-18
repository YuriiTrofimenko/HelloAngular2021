// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
type Mode = 'demo' | 'full'
interface IOptions {
  apiUrl: string,
  todoItemsEndpoint: string
}
interface IEnvironment {
  production: boolean,
  mode: Mode
  demo: IOptions,
  full: IOptions
}
export const environment: IEnvironment = {
  production: false,
  mode: 'full',
  demo: {
    apiUrl: 'https://jsonplaceholder.typicode.com',
    todoItemsEndpoint: '/todos'
  },
  full: {
    apiUrl: 'http://localhost:4000',
    todoItemsEndpoint: '/api/items'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
