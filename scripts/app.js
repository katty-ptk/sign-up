function signUp(event) {
    event.preventDefault();  
  
    const inputs = $("form").find($("input")).length;
   
    for ( let i = 0; i < inputs; i++ ) {
        if ( !($("form").children()[i].value )) {
            $("form").children()[i].style.borderColor = "hsl(0, 100%, 74%)";
        }
    }
};