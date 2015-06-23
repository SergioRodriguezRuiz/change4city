define([
    'jquery',
    'underscore',
    'backbone',
    'app',
    'collections/videos',
    'text!templates/tv.html'
],  function ($, _, Backbone, App, VideosCollection, Template) {
    var Tv = Backbone.View.extend({
        el: '#content',
        template: _.template(Template),
        initialize: function () {
            var videos = new VideosCollection;
            videos.bind('reset', this.render, this);

        },
        getThumb: function () {
            console.log('fdf');
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
        showVideo: function (ev) {
            var id = $(ev.currentTarget).attr("rel");
            console.log('show video',id);
            App.router.navigate("video/"+id, {trigger: true});
        },
        showMenu: function () {
            $("#rightSidebarMenu").toggleClass('toggled');
        },
        events: {
            'click .helpVideo' : 'showVideo',
            'click #menuButton' : 'showMenu'
        },
        render: function (videos) {
            this.$el.html(this.template({
                videos: videos.models
            }));
            this.getThumb();
            return this;
        }
    });
    return Tv;
});