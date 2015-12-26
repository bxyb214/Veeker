'use strict';

angular.module('veekerApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


