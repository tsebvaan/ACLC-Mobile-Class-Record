var rcSubmitDirective={'rcSubmit':['$parse',function($parse){return{restrict:'A',require:['rcSubmit','?form'],controller:['$scope',function($scope){this.attempted=!1;var formController=null;this.setAttempted=function(){this.attempted=!0};this.setFormController=function(controller){formController=controller};this.needsAttention=function(fieldModelController){if(!formController)return!1;if(fieldModelController){return fieldModelController.$invalid&&(fieldModelController.$dirty||this.attempted)}else{return formController&&formController.$invalid&&(formController.$dirty||this.attempted)}}}],compile:function(cElement,cAttributes,transclude){return{pre:function(scope,formElement,attributes,controllers){var submitController=controllers[0];var formController=(controllers.length>1)?controllers[1]:null;submitController.setFormController(formController);scope.rc=scope.rc||{};scope.rc[attributes.name]=submitController},post:function(scope,formElement,attributes,controllers){var submitController=controllers[0];var formController=(controllers.length>1)?controllers[1]:null;var fn=$parse(attributes.rcSubmit);formElement.bind('submit',function(event){submitController.setAttempted();if(!scope.$$phase)scope.$apply();if(!formController.$valid)return!1;scope.$apply(function(){fn(scope,{$event:event})})})}}}}}]}