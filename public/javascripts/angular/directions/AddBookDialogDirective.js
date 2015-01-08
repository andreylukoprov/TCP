/**
 * Created by AndreyLukoprov on 1/8/2015.
 */
booksApp.directive('modalDialog', function() {
    return {
        restrict: 'E',
        scope: {
            show: '='
        },
        replace: true, // Replace with the template below
        transclude: true, // we want to insert custom content inside the directive
        link: function(scope, element, attrs) {
            scope.dialogStyle = {};
            scope.dialogStyle.width = 'auto';
            scope.dialogStyle.height = 'auto';
            scope.hideModal = function() {scope.show = false;
            };
        },
        template: "<div class='ng-modal' ng-show='show'>" +
        "<div class='ng-modal-overlay' ng-click='hideModal()'>" +
        "</div><div class='ng-modal-dialog' ng-style='dialogStyle'>" +
        "<div class='ng-modal-close' ng-click='hideModal()'>X</div>" +
        "<div class='ng-modal-dialog-content' ng-transclude>" +
        "</div>" +
        "</div>" +
        "</div>"
    };
});