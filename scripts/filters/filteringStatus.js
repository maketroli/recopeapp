angular.module('RecopeApp.filters', [])
  .filter('FilteringStatus', function() {

    return function (operations) {

      var completed = [],
          incomplete = [];

      if (!operations) {
        return;
      }

      _.filter(operations, function(operation) {

        if (operation.status === 3) {
          completed.push(operation);
        }
        else {
          incomplete.push(operation);
        }
      });

      return incomplete.concat(completed);
    }

  });
