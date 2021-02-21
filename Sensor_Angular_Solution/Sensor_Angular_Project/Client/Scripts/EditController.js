(function (app) {
    var EditController = function ($scope, sensorService) {
        $scope.isEditable = function () {
            return $scope.edit && $scope.edit.sensor;
        };

        $scope.cancel = function () {
            $scope.edit.sensor = null;

        };

        $scope.save = function () {
            if ($scope.edit.sensor.SensorId) {
                updateSensor();
            } else {
                createSensor();
            }
        };

        var updateSensor = function () {
            sensorService.update($scope.edit.sensor)
                .then(function () {
                    angular.extend($scope.data, $scope.edit.sensor);
                    $scope.edit.sensor = null;
                });
        };


        var createSensor = function () {
            sensorService.create($scope.edit.sensor)
                .then(function (sensor) {
                    $scope.data.push(sensor);
                    $scope.edit.sensor = null;
                });
        };

    };

    app.controller("EditController", EditController);

}(angular.module("atTheSensors")));