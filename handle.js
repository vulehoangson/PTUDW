	angular.module('myApp',[]).controller('myController',function($scope,$http)
	{
		$http.get('data.json').success(function(response)
		{
			$scope.myData=response;
		});
		
	});