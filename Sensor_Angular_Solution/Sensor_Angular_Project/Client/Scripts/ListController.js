(function (app) {
    var ListController = function ($scope, sensorService) {
        sensorService
            .getAll().then(function (response) {
                $scope.data = response.data;
                $scope.status = response.status;
            }, function (response) {
                $scope.data = response.data || 'Request failed';
                $scope.status = response.status;
            });


        $scope.create = function () {
            $scope.edit = {
                sensor: {
                    SensorName: "",
                    SensorDescription: "",
                    SensorProductionYear: new Date().getFullYear()
                }
            };
        };

        $scope.delete = function (sensor) {
            sensorService.delete(sensor)
                .then(function () {
                    removeSensorById(sensor.SensorId);
                });
        };

        var removeSensorById = function (id) {
            for (var i = 0; i < $scope.data.length; i++) {
                if ($scope.data[i].Id == id) {
                    $scope.data.splice(i, 1);
                    break;
                }
            }
        };

        //var removeSensorById = function (id) {
        //    for (var i = 0; i < $scope.data.length; i++) {
        //        if ($scope.data[i].SensorId == id) {
        //            $scope.data.splice(i, 1);
        //            break;
        //        }
        //    }
        //};

    };
    app.controller("ListController", ListController);
}(angular.module("atTheSensors")));