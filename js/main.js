$(document).ready(function() {
    console.log( "ready!" );

    $('.detour').one('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function() {
        // Do something once!
        console.log('yeet');
        $('#virtualprotect').removeClass("hide");
    });

    jQuery(function($, undefined) {
        $('#virtualprotect').terminal(function(command) {
            if (command !== '') {
                try {
                    var result = window.eval(command);
                    if (result !== undefined) {
                        this.echo(new String(result));
                    }
                } catch(e) {
                    this.error(new String(e));
                }
            } else {
               this.echo('');
            }
        }, {
            greetings: 'Corsage::Initialize();',
            name: 'Init',
            height: 50,
            prompt: 'corsage> '
    });
});

});

function Hook() {
    console.log("Called.");
}
