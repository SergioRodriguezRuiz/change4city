define([
    'jquery',
    'underscore',
    'backbone',
    'app',
    'text!templates/petitionsList.html'
],  function ($, _, Backbone, App, Template) {
        var PetitionsList = Backbone.View.extend({
            el: '#content',
            template: _.template(Template),
            initialize: function () {
                this.render();
            },
            render: function () {
                this.$el.html(this.template());
                return this;
            },
            showMenu: function () {
                $("#rightSidebarMenu").toggleClass('toggled');
            },
            events: {
                'click #menuButton' : 'showMenu'
            }
        });
    return PetitionsList;
});