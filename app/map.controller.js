/**
 * @ngInject
 * @ngdocs
 * @name module.type:name
 * @description Does something cool
 * @author Duane_Hinkley
 */

angular.module('myApp')
    .controller('MapController', MapController);

function MapController(NgMap) {
    var vm = this;
    vm.types = '[\'address\']';

    vm.originPlaceChanged = originPlaceChanged;
    vm.destinationPlaceChanged = destinationPlaceChanged;

    NgMap.getMap().then(function(map) {
        vm.map = map;
    });

    function destinationPlaceChanged() {
        vm.destinationPlace = this.getPlace();
        console.log('location', vm.destinationPlace.geometry.location);
        vm.map.setCenter(vm.destinationPlace.geometry.location);
    }

    function originPlaceChanged() {
        vm.originPlace = this.getPlace();
        console.log('location', vm.originPlace.geometry.location);
        vm.map.setCenter(vm.originPlace.geometry.location);
    }
}
