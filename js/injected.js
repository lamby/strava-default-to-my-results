var view = Strava.Labs.Activities.SegmentLeaderboardView;
var fn = view.prototype.render;

view.prototype.render = function () {
  var result = fn.apply(this, Array.prototype.slice.call(arguments));

  var elem = jQuery(this.el);
  if (!elem.hasClass('disabled')) {
    elem.addClass('disabled').find('.clickable[data-filter=my_results]').click();
  }

  return result;
};
