app.controller('myCtrl', function($scope, $uibModal) {

  var addBeer = function(nb) {
    console.log(nb);
    // beerFactory.addBeer(nb)
    //   .then(function() {})
    //   .catch(function() {})
  }

  $scope.openAddBeer = function() {

    var modalInstance = $uibModal.open({
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'addBeerTemplate.html',
      controller: function($scope, $uibModalInstance) {
        $scope.addBeer = function() {
          $uibModalInstance.close($scope);
        };
      }
    });

    modalInstance.result.then(function(scope) {
      addBeer({
        name: scope.name,
        abv: scope.abv
      })
    }, function() {
      console.log('Modal dismissed at: ' + new Date());
    });

  }
})
