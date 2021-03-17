function validate() {
      
    if( document.myForm.full-name.value == "" ) {
       alert( "Please provide your name!" );
       document.myForm.full-name.focus() ;
       return false;
    }
    if( document.myForm.email.value == "" ) {
       alert( "Please provide your Email!" );
       document.myForm.EMail.focus() ;
       return false;
    }
    
    return( true );
 }