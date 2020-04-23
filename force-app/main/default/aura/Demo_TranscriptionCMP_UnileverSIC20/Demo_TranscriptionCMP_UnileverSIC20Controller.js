({
    doInit:function(component, event, helper) {
//    	component.set('v.phrase','Click on mic or say "Einstein"');
        component.set('v.phrase','Click on mic or say "Einstein"');
        var mic = component.find('mic');
        $A.util.toggleClass(mic,'active');
        
        var samples = component.find('samples');
        $A.util.toggleClass(samples,'hide');
        
        var micl = component.find('mic-left');
        $A.util.toggleClass(micl,'on');
        
        var micr = component.find('mic-right');
        $A.util.toggleClass(micr,'on');
        
        component.set('v.stage',1);
    },
    startAssistant : function(component, event, helper) {
        var stage = component.get('v.stage');
        
        if(stage == 1){
            helper.fakeText(component,helper);
			//helper.toggleWave(component)
           // helper.playSound(component,helper,'micon');
            /*
            var micbutton = component.find('mic-button');
            $A.util.addClass(micbutton,'hide');
            
            var micwave = component.find('mic-wave');
            $A.util.removeClass(micwave,'hide');
			*/
            stage++;
        }else if(stage == 2){
            helper.resetPanel(component);
            /*
            var micbutton = component.find('mic-button');
            $A.util.removeClass(micbutton,'hide');
            
            var micwave = component.find('mic-wave');
            $A.util.addClass(micwave,'hide');
            */
            stage = 1;
		}
        
        component.set('v.stage',stage);

    },
	showAssistant : function(component, event, helper) {
		var assistant = component.find('panel');
        $A.util.toggleClass(assistant,'hidden');
		var bar = component.find('bar');
        $A.util.toggleClass(bar,'slds-is-active');
	},
    closePanel : function(component, event, helper) {
        var assistant = component.find('panel');
        $A.util.toggleClass(assistant,'hidden');
		var bar = component.find('bar');
        $A.util.toggleClass(bar,'slds-is-active');
    }
})