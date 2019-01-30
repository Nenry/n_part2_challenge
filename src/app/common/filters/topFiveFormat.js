angular.module('filters.formatStr', [])

  .filter('formatStr', [
    function () {
      return function (input, unit) {
  
        var sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
        if (sizes.includes(unit)){

          if (input == 0)
            return '0';
  
          if (isNaN(parseFloat(input)) || !isFinite(input))
            return '-';
  
          // find power of 2^10
          var i = parseInt(Math.floor(Math.log(input) / Math.log(1024)));
  
          if (i == 0)
            return input.toFixed(2) + ' ' + sizes[0];
          else
            return (input / Math.pow(1024, i)).toFixed(2) + ' ' + sizes[i];
            
        } else {
          return `${input}${unit}`;
        }
      };
    }
  ]);
