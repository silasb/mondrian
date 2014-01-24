// Generated by CoffeeScript 1.6.3
(function() {
  var $logo, prefixer, randomDeg, randomValues, setTransform;

  $logo = $('#dancing-logo');

  prefixer = function(attr, val) {
    var attrs;
    attrs = {};
    attrs["-webkit-" + attr] = val;
    attrs["-moz-" + attr] = val;
    attrs["-ms-" + attr] = val;
    return attrs;
  };

  setTransform = function(vals) {
    var transform;
    transform = ["X", "Y"].map(function(axis) {
      return "skew" + axis + "(" + vals[axis] + "deg)";
    });
    transform.push("scaleX(" + (Math.random() + 0.5) + ")");
    transform.push("scaleY(" + (Math.random() + 0.5) + ")");
    $logo.css(prefixer("transform", transform.join(" ")));
    return $logo.css({
      left: (Math.random() * 200) - 100,
      top: (Math.random() * 100) - 50
    });
  };

  randomDeg = function() {
    return ((Math.random() * 80) - 40) / 2;
  };

  randomValues = function() {
    return {
      X: randomDeg(),
      Y: randomDeg()
    };
  };

  setInterval(function() {
    return setTransform(randomValues());
  }, 2300);

  setTransform(randomValues());

}).call(this);
