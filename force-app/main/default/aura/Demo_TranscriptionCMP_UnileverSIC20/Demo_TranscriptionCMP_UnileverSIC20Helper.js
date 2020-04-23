({
	fakeText : function(cmp,hlp) {
        cmp.set('v.phrase','');  
        cmp.set('v.phraseTwo','');       
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi');
            }), 1000
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi my');
            }), 1200
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi my name');
            }), 1400
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi my name is');
            }), 1600
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi my name is a');
            }), 1800
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi my name is A');
            }), 2100
        );
         //add class to last character of string and add tooltip hover
        /*var phrases = document.getElementsByClassName('phrase');
        var phraseOne = phrases[0];
        var text = phraseOne.innerHTML[14];
        
        */     
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseTwo','Hi');
            }), 2500
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseTwo','Hi my');
            }), 2700
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseTwo','Hi my name');
            }), 2900
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseTwo','Hi my name is');
            }), 3100
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseTwo','Hi my name is b');
            }), 3300
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseTwo','Hi my name is B');
            }), 3500
        );
        //add class to last character of string and add tooltip hover
        /*var phrases = document.getElementsByClassName('phrase');
        var phraseTwo = phrases[1];
        var text = phraseTwo.innerHTML[14];
        
        */
    },
    resetBar : function(component,hlp){
        var assistant = component.find('panel');
        $A.util.toggleClass(assistant,'hidden');
		var bar = component.find('bar');
        $A.util.toggleClass(bar,'slds-is-active');
        window.setTimeout(
            $A.getCallback(function() {
		        hlp.resetPanel(component);
            }), 300
        );

	},
    resetPanel : function(component){
        component.set('v.phrase',' ');
        component.set('v.phraseTwo',' ');
        component.set('v.stage',0);
	}
})