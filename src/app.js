angular.module('app', ['ui.bootstrap'])
    .controller('MainCtrl', function ($scope) {
        $scope.tabs = [
            {
                heading: 'Panels',
                url: './templates/panels.html'
            },
            {
                heading: 'List group',
                url: './templates/list-group.html'
            },
            {
                heading: 'Thumbnails',
                url: './templates/thumbnails.html'
            },
            {
                heading: 'Jumbotron',
                url: './templates/jumbotron.html'
            },
            {
                heading: 'Text visual effects',
                url: './templates/text-effects.html'
            },
            {
                heading: 'Navbars',
                url: './templates/navbars.html'
            },
            {
                heading: 'Navs',
                url: './templates/navs.html'
            },
            {
                heading: 'Forms',
                url: './templates/forms.html'
            },
            {
                heading: 'Dropdowns',
                url: './templates/dropdown.html'
            },
            {
                heading: 'Button groups',
                url: './templates/button-groups.html'
            }
        ]
    });