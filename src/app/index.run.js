(function() {
  'use strict';

  angular
    .module('researchAngularMaterial')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
