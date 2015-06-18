/* ===================================================
 * jqueryimgOriginalSizes.js v1.0.0
 * ===================================================
 * (c) 2015 Nicolas Guillaume, Nice, France - Rocco Aliberti, Salerno, Italy
 * CenterImages plugin may be freely distributed under the terms of the GNU GPL v2.0 or later license.
 *
 * Heavily based on http://www.jacklmoore.com/notes/naturalwidth-and-naturalheight-in-ie/
 *
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 *
 * Retrieves the original imgs width and height, cross-browser
 *
 * Example usage
 * var imgHeight = $('img#my-img').originalHeight(),
 *     imgWidth  = $('img#my-img').originalWidth()
 *
 * =================================================== */
;(function ( $, window, document, undefined ) {

  var pluginPrefix = 'original',
      _props       = ['Width', 'Height'];

  while (_prop = _props.pop()) {
    (function ( _prop, _lprop ) {
      $.fn[ pluginPrefix + _prop ] = ('natural' + _prop in new Image()) ? 
        function () {
          return this[0][ 'natural' + _prop ];
        } : 
        function () {
          var _size = _getAttr( this, l_prop );
        
          if ( _size )
            return _size;

          var _node = this[0],
              _img;

          if (_node.tagName.toLowerCase() === 'img') {
            _img = new Image();
            _img.src = _node.src,
            _size = _img[ _lprop ];
          }
          return _size;
        };
    }( _prop, _prop.toLowerCase()));
  }

  function _getAttr( _el, prop ){
    var _img_size = $(_el).attr( prop );  
    return ( typeof _img_size === undefined ) ? false : _img_size;     
  }

})( jQuery, window, document );
