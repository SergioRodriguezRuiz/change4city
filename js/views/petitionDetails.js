define([
    'jquery',
    'underscore',
    'backbone',
    'app',
    'text!templates/petitionDetails.html',
], function ($, _, Backbone, App, Template) {
    var PetitionDetails = Backbone.View.extend({
        el: '#content',
        template: _.template(Template),
        initialize: function () {
            this.render();
        },
        events: {
            'click .noteClose': 'closeNote'
        },
        showMenu: function () {
            $("#rightSidebarMenu").toggleClass('toggled');
        },
        closeNote: function() {
            window.history.back();
        },
        render: function () {
            this.$el.html(this.template());
            return this;
        }
    });
    return PetitionDetails;
});

