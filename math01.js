//. math01.js

var bool = true;
for( var i = 10; bool; i ++ ){
  var d = '' + i;
  var b = toBin( i );
  var o = toOct( i );
  if( kaibun( d ) && kaibun( b ) && kaibun( o ) ){
    console.log( i );
    bool = false;
  }
}

function reverse( str ){
  var r = '';
  for( var i = 0; i < str.length; i ++ ){
    r = str.charAt( i ) + r;
  }

  return r;
}

function kaibun( str ){
  var rts = reverse( str );
  return ( str === rts );
}

function Dec2Str( n, m ){
  var s = '';
  while( n > 0 ){
    s = ( n % m ) + s;
    n = Math.floor( n / m );
  }

  return s;
}

function toBin( n ){
  return Dec2Str( n, 2 );
}

function toOct( n ){
  return Dec2Str( n, 8 );
}




