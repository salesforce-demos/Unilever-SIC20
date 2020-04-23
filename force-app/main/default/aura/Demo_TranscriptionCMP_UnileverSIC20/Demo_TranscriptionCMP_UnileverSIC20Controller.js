({
    doInit : function(component, event, helper) {
        // set inital phrase and stage
        component.set('v.phrase','  ');
        component.set('v.stage',1);
    },
    showAssistant : function(component, event, helper) {
        // slide up window 
		var assistant = component.find('panel');
        $A.util.toggleClass(assistant,'hidden');
		var bar = component.find('bar');
        $A.util.toggleClass(bar,'slds-is-active');
	},
    startAssistant : function(component, event, helper) {
        // start transcription 
            // press 1 for first dialogue
            // press 2 for second dialogue 
        var stage = component.get('v.stage');

        if(stage == 1){
            helper.fakeText(component,helper);
            stage++;
        }else if(stage == 2){
            helper.resetPanel(component);
            stage = 1; 
		}
        component.set('v.stage',stage);
    },
    closePanel : function(component, event, helper) {
        // close window and reset all
        var assistant = component.find('panel');
        $A.util.toggleClass(assistant,'hidden');
		var bar = component.find('bar');
        $A.util.toggleClass(bar,'slds-is-active');
    }
})