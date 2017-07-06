app.controller('myCtrl', function($scope, $uibModal) {

  var addBeer = function(nb) {
    console.log(nb);
    // beerFactory.addBeer(nb)
    //   .then(function() {})
    //   .catch(function() {})
  }

  $scope.openAddBeer = function() {

    $uibModal.open({
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'addBeerTemplate.html',
      controller: function($scope, $uibModalInstance) {
        $scope.addBeer = function() {
          $uibModalInstance.close({
            name: $scope.name,
            abv: $scope.abv
          });
        };
      }
    }).result.then(function(beer) {
      addBeer(beer)
    }, function() {
      console.log('Modal dismissed at: ' + new Date());
    });

  }
})
