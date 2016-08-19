/**
 * Listen and send Events to analytics.js
 * @author Mark Unthank / markunthank.co.uk / @alrightmark
 * @license MIT
**/
(function( $ ){
  // Listeners
  var _track = [ $( ".ga-track" ) ];

  _track.forEach( setup );

  function setup( element, index, array ) {
    var _ = new event( element, index, array );
    _.trackEvent();
  }

  function event( element, index, array ) {
    e = element, i = index, a = array;
    this.trackEvent = function() {
      if ( e.length ) {
        e.click( function( event ){
          event.preventDefault();
          var _ = $( this ),
          h = _.attr( "href" ),
          t = _.attr( "target" ),
          c = _.attr( "data-ec" ),
          a = _.attr( "data-ea" ),
          l = _.attr( "data-el" ),
          v = _.attr( "data-ev" );
          sendEvent( c , a , l , v );

          if ( t === "_blank" ) {
            window.open( h , t );
          } else if ( h !== undefined ) {
            window.location = h;
          } else {
            _.unbind('click').click();
          }

        });
      }
    };
    sendEvent = function( c , a , l , v ){
      if ( v === undefined ) { v = 1; }
      ga('send', {
        'hitType': 'event',
        'eventCategory': c,
        'eventAction': a,  
        'eventLabel': l,
        'eventValue': v
      });
    };
  }
  })( jQuery );
