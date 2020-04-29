({
    showAssistant : function(component, event, helper) {
        // slide up window 
		var assistant = component.find('panel');
        $A.util.toggleClass(assistant,'hidden');
		var bar = component.find('bar');
        $A.util.toggleClass(bar,'slds-is-active');
	},
    startAssistant : function(component, event, helper) {
        // start transcription 
        var stage = component.get('v.stage');
        if(stage == 1){
            this.fakeText(component,helper);
            stage++;
        }else if(stage == 2){
            this.resetPanel(component);
            stage = 1; 
		}
        component.set('v.stage',stage);
    },
	fakeText : function(cmp,hlp) {
        // Darshil + Shaki Script
        /* Sakshi:
        Hi Darshil, this is Sakshi your Unilever sales representative.  
        I see that you have some questions about the contents of your cart, is that right? 
        
        Darshil:
        Yeh kya hai. It’s a _much bigger order_ than I usually make and I don’t know if I have enough money to purchase this much right now. 
        Why is it so much higher than normal? */ 
        
        cmp.set('v.phrase','');  
        cmp.set('v.phraseTwo','');  
        cmp.set('v.highlightOne','');  
        cmp.set('v.highlightTwo','');       
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
                cmp.set('v.phrase','Hi my name is');
            }), 2100
        );  
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.highlightOne','A');
            }), 2300
        );    
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
                cmp.set('v.phraseTwo','Hi my name is');
            }), 3500
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.highlightTwo','B');
            }), 3800
        );
    },
    resetBar : function(component,hlp){
        // set bar to original status
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
        // set panel to original status
        component.set('v.phrase',' ');
        component.set('v.phraseTwo',' ');
        component.set('v.highlightOne',' ');
        component.set('v.highlightTwo',' ');
        component.set('v.stage',0);
	}
})