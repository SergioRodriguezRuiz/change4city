define([
    'jquery',
    'underscore',
    'backbone',
    'app',
    'text!templates/eventDetails.html',
], function ($, _, Backbone, App, Template) {
    var EventDetails = Backbone.View.extend({
        el: '#content',
        template: _.template(Template),
        initialize: function () {
            this.render();
        },
        events: {

        },
        showMenu: function () {
            $("#rightSidebarMenu").toggleClass('toggled');
        },
        render: function () {
            this.$el.html(this.template());
            return this;
        }
    });
    return EventDetails;
});

