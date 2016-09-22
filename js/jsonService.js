 (function() {
    'use strict';
 function jsonService($http) {

        //Get Products Data
        function _getProductData() {
            return $http.get('data/data.json');


            /*.then(success)
                        .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(e) {
                return exception.catcher('XHR Failed for getPeople')(e);
            }*/
        }

        var service = {
            getProductData: _getProductData
        };

        return service;

    }

    /* @ngInject */

    jsonService.$inject = ['$http'];

    angular
        .module('taskTracker')
        .service('jsonService', jsonService);



})();