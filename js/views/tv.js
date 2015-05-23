define([
    'jquery',
    'underscore',
    'backbone',
    'app',
    'text!templates/tv.html'
],  function ($, _, Backbone, App, Template) {
    var Tv = Backbone.View.extend({
        el: '#content',
        template: _.template(Template),
        initialize: function () {
            this.render();
            this.getThumb();
        },
        getThumb: function () {
            $(".helpVideo").each(function (i) {
                var video = $(this).attr("rel");
                var vidHtml = $(this);
                $.ajax({
                    type: 'GET',
                    url: 'http://vimeo.com/api/v2/video/'+video+'.json',
                    jsonp: 'jsonp',
                    success: function (data) {
                        var thumbSrc = data[0].thumbnail_large;
                        var videoTitle = data[0].title;
                        var videoDesc = data[0].description;
                        $(vidHtml).find(".vidthumb").append('<img src="'+thumbSrc+'" width="80" height="60" />');
                        $(vidHtml).find(".eventInfo").append('<h4 class="eventName">'+videoTitle.slice(0,30) +'...</h4>');
                        $(vidHtml).find(".videoDesc").append('<p>'+videoDesc.slice(0,50)+'...</p>');
                    }
                });
            });
        },
        showVideo: function () {
            console.log('show video');
        },
        showMenu: function () {
            $("#rightSidebarMenu").toggleClass('toggled');
        },
        events: {
            'click .helpVideo' : 'showVideo',
            'click #menuButton' : 'showMenu'
        },
        render: function () {
            this.$el.html(this.template());
            return this;
        }
    });
    return Tv;
});