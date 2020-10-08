$(document).ready(function(){
 
    let menuButton = $("[aria-controls='main-menu']");
    let ul = $("[aria-haspopup='true']").next(); 
    let menuButton2 = $("[aria-controls='secondary-menu']");
    

    function menuToggle(){
        
        if(ul.attr("aria-expanded") == "true"){
            ul.attr("aria-expanded", "false");
        } else {
            ul.attr("aria-expanded", "true");
        }
        ul.toggleClass("expanded");
        $("li:first-child a").focus();  //attention to this "focus" function
        console.log(document.activeElement);
    }

    menuButton.on('click', function(event){
        event.preventDefault();
       menuToggle();

    }).on('keydown', function(event){
        console.log('key is ' + event.key);
        
        let pressedKey = event.key;
    
        if(pressedKey == 'ArrowDown' || pressedKey == ''){
            event.preventDefault();
            menuToggle();
        }
    });
    menuButton2.on('click', function(event){
        event.preventDefault();
       menuToggle();

    }).on('keydown', function(event){
        console.log('key is ' + event.key);
        
        let pressedKey = event.key;
    
        if(pressedKey == 'ArrowDown' || pressedKey == ''){
            event.preventDefault();
            menuToggle();
        }
    });
    
    $("[role='menuitem']").on('keydown', function(event){
        let pressedKey = event.key;
        let focus = $("a:focus").parent();
        if(pressedKey == 'ArrowDown'){

           if(focus.next().children().length == 0){
                $("nav li:first-child a").focus();
           }else {
                $("a:focus").parent().next().children().focus();
           }
            
        }else if (pressedKey == 'ArrowUp') {
            event.preventDefault();
            if(focus.prev().children().length == 0){
                $("nav li:last-child a").focus();
           }else {
                $("a:focus").parent().prev().children().focus();
           }
        } else if(pressedKey == 'Tab'){ 
            menuToggle();
        }

    });


})
