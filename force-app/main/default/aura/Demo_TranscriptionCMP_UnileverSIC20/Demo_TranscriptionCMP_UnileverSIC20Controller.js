({
    doInit : function(component, event, helper) {
        // set initial phrase and stage
        component.set('v.phrase','  ');
        component.set('v.phraseTwo','  ');
        component.set('v.stage',1);
    },
    handleGlobalEvent : function(component, event, helper) {
        // hide help text icons 
        var helptextButtons = document.getElementsByClassName('tool-tip');
        var toolOne = helptextButtons[0];
        var toolTwo = helptextButtons[1];
        var iconOne = toolOne.getElementsByTagName('lightning-primitive-icon');
        var iconTwo = toolTwo.getElementsByTagName('lightning-primitive-icon');
        var iconButtonOne = iconOne[0];
        var iconButtonTwo = iconTwo[0];
        iconButtonOne.style.visibility = "hidden";
        iconButtonTwo.style.visibility = "hidden";

        // when video chat starts open transcription window and start live transcription 
        window.setTimeout(
            $A.getCallback(function() {
                helper.showAssistant(component, event, helper);
                helper.startAssistant(component, event, helper);
            }), 1000
        );
    },
    closePanel : function(component, event, helper) {
        // close window and reset all
        helper.resetBar(component, helper)
    }
})