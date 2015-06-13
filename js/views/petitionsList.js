define([
    'jquery',
    'underscore',
    'backbone',
    'app',
    'text!templates/petitionsList.html',
    'collections/petition'
],  function ($, _, Backbone, App, Template, PetitionCollection) {
        var PetitionsList = Backbone.View.extend({
            el: '#content',
            template: _.template(Template),
            initialize: function () {
                var petitions = new PetitionCollection ();
                petitions.bind('reset', this.render, this);
            },
            showMenu: function () {
                $("#rightSidebarMenu").toggleClass('toggled');
            },
            filter: function () {

            },
            events: {
                'click #menuButton' : 'showMenu',
                'click .notesButton' : 'filter'
            },
            render: function (petitions) {
                this.$el.html(this.template({
                    petitions: petitions.models
                }));
                return this;
            }
        });
    return PetitionsList;
});