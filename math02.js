//. math02.js

for( var i = 1000; i < 10000; i ++ ){
  if( isAnswer( i ) ){
    console.log( i );
  }
}

function isAnswer( n ){
  var s = '' + n;
  var r = reverse( s );
  var b = check02( s, eval(r) );
  return b;  
}

function reverse( str ){
  var r = '';
  for( var i = 0; i < str.length; i ++ ){
    r = str.charAt( i ) + r;
  }

  return r;
}

function check02( str, ans ){
  var b = false;
  //var arr = [ '', '+', '-', '*', '/' ];
  var arr = [ '', '*' ];
  for( var i1 = 0; i1 < arr.length && !b; i1 ++ ){
    for( var i2 = 0; i2 < arr.length && !b; i2 ++ ){
      for( var i3 = 0; i3 < arr.length && !b; i3 ++ ){
        var newstr = str.charAt( 0 ) + arr[i1]
            + str.charAt( 1 ) + arr[i2]
            + str.charAt( 2 ) + arr[i3]
            + str.charAt( 3 );
        if( newstr.length > 4 ){
          var newval = eval( newstr );
          b = ( newval == ans );
        }
      }
    }
  }

  return b;
}

