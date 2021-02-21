(function (app) {
    var DetailsController = function ($scope, $routeParams, sensorService) {
        var id = $routeParams.id;
        sensorService
            .getById(id)
            .then(function (response) {
                $scope.data = response.data;
                $scope.status = response.status;
            }, function (response) {
                $scope.data = response.data || 'Request failed';
                $scope.status = response.status;
            });

        $scope.edit = function () {
            $scope.edit.sensor = angular.copy($scope.data);
        };
    };

    app.controller("DetailsController", DetailsController);

}(angular.module("atTheSensors")));

//buradaki id, id mi kalacak? SensorId mi olmalı?
// id, id kalacak herhalde. adresteki id parametresi herhalde


