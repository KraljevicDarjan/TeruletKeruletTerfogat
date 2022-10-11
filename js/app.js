let app = new angular.module('szamolosApp', [])

app.controller('mainCtrl',function($scope){
    $scope.title='Ez az első AngularJS Példánk!'
    $scope.company='Bajai SZC Türr István Technikum'
    $scope.author='2/14.szft Szoftverfejlesztő'
    
})