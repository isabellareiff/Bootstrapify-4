BannerVideo = {};

require('jquery.mb.ytplayer');
var $player = $('.banner-video-player');

BannerVideo.init = function () {
  if ($player.length > 0 && !Modernizr.touch) {
    $player.YTPlayer();
  }
};

module.exports = BannerVideo;