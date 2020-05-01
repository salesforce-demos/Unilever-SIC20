({
    doInit : function(component, event, helper) {
        // set initial phrases and stage
        component.set('v.phrase','  ');
        component.set('v.phraseTwo','  ');
        component.set('v.phraseThree','  ');
        component.set('v.phraseFour','  ');
        component.set('v.highlightOne','  ');
        component.set('v.highlightTwo','  ');
        component.set('v.highlightThree','  ');
        component.set('v.stage',1);
    },
    handleGlobalEvent : function(component, event, helper) {
        // when video chat starts open transcription window and start live transcription 
        window.setTimeout(
            $A.getCallback(function() {
                helper.showAssistant(component, event, helper);
                helper.startAssistant(component, event, helper);
            }), 1000
        );
    },
    showTooltipOne : function(component, event, helper) {
        // open tooltip one
        component.set("v.tooltipOne" , true);
    },
    hideTooltipOne : function(component, event, helper){
        // close tooltip one
        component.set("v.tooltipOne" , false);
    },
    showTooltipTwo : function(component, event, helper) {
        // open tooltip two
        component.set("v.tooltipTwo" , true);
    },
    hideTooltipTwo : function(component, event, helper){
        // close tooltip two
        component.set("v.tooltipTwo" , false);
    },
    closePanel : function(component, event, helper) {
        // close window and reset all
        helper.resetBar(component, helper)
    }
})