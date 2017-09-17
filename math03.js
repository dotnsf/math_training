//. math03.js
var arr = [];
for( var i = 0; i < 100; i ++ ){ arr[i] = true; }
for( var i = 1; i < 100; i ++ ){
  for( var j = i;  j < 100; j += (i+1) ){
    arr[j] = !arr[j];
  }
}

for( var i = 0; i < 100; i ++ ){
  if( arr[i] ){ console.log( i + 1 ); }
}


