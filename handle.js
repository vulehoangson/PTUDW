	var app = angular.module("myApp", ["xeditable"]);
	app.run(function(editableOptions) {
		editableOptions.theme = 'bs3'; 
	});
	app.controller('myController',function($scope,$http)
	{
		$scope.visiblesummary=false;
		$scope.visibleexperience=false;
		$scope.visibleproject=false;
		$scope.visibleskill=false;
		$scope.visibleeducation=false;
		
		$http.get('data.json').success(function(response)
		{
			$scope.myData=response;
		});
		$scope.AddSummary=function()
		{
				$scope.myData.SUMMARY.push({value:$scope.summary});
				$scope.visiblesummary=false;
				$scope.summary="";
		
		};
			$scope.AddExperience=function()
		{
			$scope.myData.EXPERIENCE.push({value:$scope.experience});
			$scope.visibleexperience=false;
			$scope.experience="";
		};
			$scope.AddProject=function()
		{
			$scope.myData.PROJECT.push({value:$scope.project});
			$scope.visibleproject=false;
			$scope.project="";
		};
			$scope.AddSkill=function()
		{
			$scope.myData.SKILL.push({value:$scope.skill});
			$scope.visibleskill=false;
			$scope.skill="";
		};
			$scope.AddEducation=function()
		{
			$scope.myData.EDUCATION.push({value:$scope.education});
			$scope.visibleeducation=false;
			$scope.education="";
		};
				
			
		
	});