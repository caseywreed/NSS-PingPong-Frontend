"use strict";

app.controller("HomeCtrl", function ($scope, $q, DataFactory) {

    $scope.playersArray = null;
    $scope.sortType = 'name'; // set the default sort type
    $scope.sortReverse = false;  // set the default sort order
    $scope.searchPlayer = '';     // set the default search/filter term

    $scope.customComparator = function(v1, v2) {
      if (v1.type === 'number' || v2.type === 'number') {
        if (isNaN(v1.value)) return -1;
        else if (isNaN(v2.value)) return 1;
        return (Number(v1.value) < Number(v2.value)) ? -1 : 1;
      }

      else if (v1.type === 'string' || v2.type === 'string') {
        // Compare strings as numbers if both are string numbers
        if (!isNaN(v1.value) && !isNaN(v2.value)) {
            return (Number(v1.value) < Number(v2.value)) ? -1 : 1;
        }
        // Compare strings alphabetically, taking locale into account
        return v1.value.localeCompare(v2.value);
      }

      return (v1.index < v2.index) ? -1 : 1;
    }


    $scope.init = function () {
        if ($scope.$parent.dataCache.playerData == undefined) {
            $scope.$parent.loadDataFromAPI()
        }
    }

})
