(function () {

'use script';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject=['$scope'];
  function LunchCheckController($scope)
  {
    $scope.inputTextValue="";
    $scope.MessageToDisplay="";
    $scope.CheckIfTooMuchFn=function(){
         $scope.MessageToDisplay=checkIfTooMuch($scope.inputTextValue);
    };
  }

  function checkIfTooMuch(string){
     var msg="";
     var count= getListElementCount(string);
     //console.log("string: "+ string+" Count: "+count);

     if(string=="")
     {
       msg="Please enter data first";
     }
     else if(count<=3)
     {
       msg="Enjoy!";
     }
     else if(count>3)
     {
         msg="Too much!";
     }
     //console.log(msg);
     return msg;
  }

  function getListElementCount(string)
  {
    var listArr=string.split(',');
    return listArr.length;
  }

})();
