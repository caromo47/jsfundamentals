var _ = {
   map: function(array, callback) {
     for (var i = 0; i < array.length; i++){
		 array[i] = callback(array[i]);
	 }
   },
   reduce: function(array, callback, memo) {
     var element = 0;
	 if (!memo){
		memo = array[0];
		element = 1;
	 }
	 for (var i = element; i < array.length; i++){
		 memo = callback(array[i], memo);
	 }
	 return memo;
   },
   find: function(array, callback) {
     for (var i = 0; i < array.length; i++){
		 if (callback(array[i])){
			 return array[i];
		 }
	 }
   },
   filter: function(array, callback) {
    var arr = [];
	for (var i = 0; i < array.length; i++){
		if (callback(array[i])){
			arr.push(array[i]);
		}
	}
	return arr;
   },
   reject: function(array, callback) {
	   var arr = [];
	   for (var i = 0; i < array.length; i++){
		   if (!callback(array[i])){
			   arr.push(array[i]);
		   }
	   }
	   return arr;
   }

 }


var array = [4,7,3]
_.map(array, function (x){return x + 7;});
console.log(array);
console.log(_.reduce(array, function (x, memo){return x * memo;}));
console.log(_.find(array, function (x){return x == 10;}));
console.log(_.filter(array, function(x){return x < 12;}));
console.log(_.reject(array, function (x) {return x == 11}));
