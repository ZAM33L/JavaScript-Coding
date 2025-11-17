function HTMLGen () {
  // Your code here plox!
  ['a', 'b', 'p','body','div','span','title','comment'].forEach(function(el){
      HTMLGen.prototype[el] =  function(content){
        return el === 'comment' ? '<!--'+content+'-->':'<'+el+'>'+content+'</'+el+'>';        
      };
  });
}