define([
    'jquery',
    'underscore',
    'backbone',
    'app',
    'text!templates/nav.html'
],  function ($, _, Backbone, App, Template) {
    var Nav = Backbone.View.extend({
        el: '#rightSidebarMenu',
        template: _.template(Template),
        initialize: function () {
            this.render();
        },
        toggleMenu: function () {
            $("#rightSidebarMenu").toggleClass('toggled');
        },
        render: function () {
            this.$el.html(this.template());
            return this;
        },
        events: {
            'click #nav li a': 'toggleMenu'
        }
    });
    return Nav;
});