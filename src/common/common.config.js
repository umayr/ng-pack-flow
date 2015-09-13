/**
 * Author: Umayr Shahid <umayrr@hotmail.com>,
 * Created: 14:22, 13/09/15.
 */
routing.$inject = ['$urlRouterProvider', '$locationProvider'];

export default function routing($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
}
