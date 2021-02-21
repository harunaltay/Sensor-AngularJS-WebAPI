(function (app) {

    var sensorService = function ($http, sensorApiUrl) {

        var getAll = function () {
            return $http.get(sensorApiUrl);
        };

        var getByID = function (id) {
            return $http.get(sensorApiUrl + id);
        };

        var update = function (sensor) {
            return $http.put(sensorApiUrl + sensor.SensorId, sensor);
        };

        var create = function (sensor) {
            return $http.post(sensorApiUrl, sensor);
        };

        var destroy = function (sensor) {
            return $http.delete(sensorApiUrl + sensor.SensorId);
        };

        return {
            getAll: getAll,
            getById: getByID,
            update: update,
            create: create,
            delete: destroy
        };
    };
    app.factory("sensorService", sensorService);
}(angular.module("atTheSensors")))