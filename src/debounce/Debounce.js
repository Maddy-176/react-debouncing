
function Debounce(func, delay) {
  let debounceTimer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(function(){
      func.apply(context, args);
    }, delay);
  };
}


export default Debounce