function isPrototypeOf(obj, obj2) {
  
  if (typeof obj2 === 'object' && typeof obj === 'object' && Object.getPrototypeOf(obj2)) {

    if (obj === obj2 || Object.getPrototypeOf(obj2) === obj) {
      return true;
    } else if (Object.getPrototypeOf(obj2)) {
      return isPrototypeOf(obj, Object.getPrototypeOf(obj2));
    }
    
  } else {
    return false;
  }
}
