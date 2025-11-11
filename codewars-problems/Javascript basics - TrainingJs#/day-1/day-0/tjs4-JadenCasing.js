Object.defineProperty(String.prototype,'toJadenCase',{ value :
   function toJadenCase() {
     return this
     .split(' ')
     .map(word => word.charAt(0).toUpperCase()+word.slice(1))
     .join(' ')
   }
  }
);