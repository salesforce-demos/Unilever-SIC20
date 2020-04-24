({
    doInit : function(component, event, helper) {
        // set inital phrase and stage
        component.set('v.phrase','  ');
        component.set('v.phraseTwo','  ');
        component.set('v.stage',1);
    },
    /*afterRender: function(component, helper) {
        this.superAfterRender();
        //helper.hideHelpText(component, event, helper);
        // hide the helper text 
        var helptextButtons = document.getElementsByClassName('tool-tip');
        var toolOne = helptextButtons[0];
        var toolTwo = helptextButtons[1];
        var iconOne = toolOne.getElementsByTagName('lightning-primitive-icon');
        var iconTwo = toolTwo.getElementsByTagName('lightning-primitive-icon');
        var iconButtonOne = iconOne[0];
        var iconButtonTwo = iconTwo[0];
        iconButtonOne.style.visibility = "hidden";
        iconButtonTwo.style.visibility = "hidden";
    },*/
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
            helper.fakeText(component,helper);
            stage++;
        }else if(stage == 2){
            helper.resetPanel(component);
            stage = 1; 
		}
        component.set('v.stage',stage);
    },
    showTooltipOne : function (component, helper, event){
        var tooltip = component.find('tooltipOne');
        $A.util.toggleClass(tooltip,'slds-hide');
    },
    showTooltipOne : function (component, helper, event){
        var tooltip = component.find('tooltipTwo');
        $A.util.toggleClass(tooltip,'slds-hide');
    },
    closePanel : function(component, event, helper) {
        // close window and reset all
        var assistant = component.find('panel');
        $A.util.toggleClass(assistant,'hidden');
		var bar = component.find('bar');
        $A.util.toggleClass(bar,'slds-is-active');
        helper.resetBar(component, helper)
    }
})