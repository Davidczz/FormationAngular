// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apis:{
    wookie : {
      url: 'https://91467100-63cc-4151-bf46-f78d3300f5ef.mock.pstmn.io/selfies'
    },
    wookiePost: {
      url: 'https://e9dbfcee-a23f-4ed3-a158-e365359e0097.mock.pstmn.io/selfie'
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
