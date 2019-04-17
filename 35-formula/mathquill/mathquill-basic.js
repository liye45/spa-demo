(function() {

  var jQuery = window.jQuery,
  undefined,
  mqCmdId = 'mathquill-command-id',
  mqBlockId = 'mathquill-block-id',
  min = Math.min,
  max = Math.max;

function noop() {}

var __slice = [].slice;
function variadic(fn) {
    var numFixedArgs = fn.length - 1;
    return function() {
          var args = __slice.call(arguments, 0, numFixedArgs);
              var varArg = __slice.call(arguments, numFixedArgs);
                  return fn.apply(this, args.concat([ varArg  ]));
                    
    };

}
var send = variadic(function(method, args) {
  return variadic(function(obj, moreArgs) {
        if (method in obj) return obj[method].apply(obj, args.concat(moreArgs));
          
  });

});
function iterator(generator) {
  return variadic(function(fn, args) {
        if (typeof fn !== 'function') fn = send(fn);
            var yield_ = function(obj) { return fn.apply(obj, [ obj  ].concat(args));  };
                return generator.call(this, yield_);
                  
  });

}
function bind(cons /*, args... */) {
    var args = __slice.call(arguments, 1);
    return function() {
          return cons.apply(this, args);
            
    };

}
