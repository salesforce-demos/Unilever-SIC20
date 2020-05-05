({
    showAssistant : function(component, event, helper) {
        // slide up window 
		var assistant = component.find('panel');
        $A.util.toggleClass(assistant,'hidden');
		var bar = component.find('bar');
        $A.util.toggleClass(bar,'slds-is-active');
	},
    startDialogueOne : function(cmp, event, helper) {
        console.log('clicked for dialgoue one');
        cmp.set('v.phrase','');  
         /* Sakshi:
        Hi Darshil, this is Sakshi your Unilever sales representative.  
        I see that you have some questions about the contents of your cart, is that right? */      
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi');
            }), 500
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil');
            }), 700
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this');
            }), 900
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is');
            }), 1100
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is Sakshi');
            }), 1300
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is Sakshi your');
            }), 1500
        );  
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is Sakshi your unilever');
            }), 1700
        ); 
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is Sakshi your unilever sales');
            }), 1900
        ); 
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is Sakshi your Unilever sales representative.');
            }), 2100
        ); 
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is Sakshi your Unilever sales representative. I');
            }), 3100
        ); 
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is Sakshi your Unilever sales representative. I see');
            }), 3300
        ); 
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is Sakshi your Unilever sales representative. I see that');
            }), 3500
        ); 
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is Sakshi your Unilever sales representative. I see that you');
            }), 3700
        ); 
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is Sakshi your Unilever sales representative. I see that you');
            }), 3900
        ); 
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is Sakshi your Unilever sales representative. I see that you have');
            }), 4100
        ); 
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is Sakshi your Unilever sales representative. I see that you have questions');
            }), 4300
        ); 
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is Sakshi your Unilever sales representative. I see that you have questions about');
            }), 4500
        ); 
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is Sakshi your Unilever sales representative. I see that you have questions about the');
            }), 4700
        ); 
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is Sakshi your Unilever sales representative. I see that you have questions about the contents');
            }), 4900
        ); 
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is Sakshi your Unilever sales representative. I see that you have questions about the contents');
            }), 5100
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is Sakshi your Unilever sales representative. I see that you have questions about the contents in');
            }), 5300
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is Sakshi your Unilever sales representative. I see that you have questions about the contents in your');
            }), 5500
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is Sakshi your Unilever sales representative. I see that you have questions about the contents in your cart');
            }), 5700
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is Sakshi your Unilever sales representative. I see that you have questions about the contents in your cart, is');
            }), 6200
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is Sakshi your Unilever sales representative. I see that you have questions about the contents in your cart, is that');
            }), 6400
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is Sakshi your Unilever sales representative. I see that you have questions about the contents in your cart, is that right');
            }), 6600
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is Sakshi your Unilever sales representative. I see that you have questions about the contents in your cart, is that right?');
            }), 6700
        );
    },
	startDialogueTwo : function(cmp,event,helper) {
        console.log('clicked for dialgoue two');
        cmp.set('v.phraseTwo','');  
        cmp.set('v.phraseThree','');  
        cmp.set('v.phraseFour','');  
        cmp.set('v.highlightOne','');  
        cmp.set('v.highlightTwo','');  
        cmp.set('v.highlightThree',''); 
        /* Darshil:
        यह क्या है? 
        This order is huge! I don't think have enough money to purchase this right now. 
        Why is it so much higher than normal */
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.highlightOne','यह');
            }), 500
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.highlightOne','यह क्या');
            }), 700
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.highlightOne','यह क्या है');
            }), 900
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.highlightOne','यह क्या है? ');
            }), 1100
        );
       window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseTwo','This order ');
            }), 2100
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.highlightTwo','is');
            }), 2300
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.highlightTwo',' is huge');
            }), 2500
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseThree',', I');
            }), 2700
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseThree',", I don't");
            }), 2900
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseThree',", I don't think");
            }), 3300
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseThree',", I don't think I");
            }), 3500
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseThree',", I don't think I have ");
            }), 3700
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.highlightThree','enough');
            }), 3900
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.highlightThree','enough money ');
            }), 4100
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseFour','to');
            }), 4300
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseFour','to purchase');
            }), 4500
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseFour','to purchase this');
            }), 4700
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseFour','to purchase this much');
            }), 4900
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseFour','to purchase this much right');
            }), 5100
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseFour','to purchase this much right now');
            }), 5300
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseFour','to purchase this much right now. Why');
            }), 6300
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseFour','to purchase this much right now. Why is');
            }), 6500
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseFour','to purchase this much right now. Why is it');
            }), 6700
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseFour','to purchase this much right now. Why is it so?');
            }), 6900
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseFour','to purchase this much right now. Why is it so much');
            }), 7100
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseFour','to purchase this much right now. Why is it so much higher');
            }), 7300
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseFour','to purchase this much right now. Why is it so much higher than');
            }), 7500
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseFour','to purchase this much right now. Why is it so much higher than normal');
            }), 7700
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseFour','to purchase this much right now. Why is it so much higher than normal?');
            }), 7900
        );
    },
    startDialogueThree : function (cmp, event, helper) {
        console.log('clicked for dialgoue three');
        cmp.set('v.phraseFive','');  
        /* Sakshi:
        I can help you out with that Darshil!*/
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseFive','I');
            }), 500
        )
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseFive','I can');
            }), 700
        )
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseFive',' I can help');
            }), 900
        )
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseFive','I can help you out');
            }), 1100
        )
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseFive','I can help you out with');
            }), 1300
        )
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseFive','I can help you out with that');
            }), 1500
        )
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseFive','I can help you out with that Darshil!');
            }), 1700
        )
    },
    resetBar : function(component){
        // set bar to original status
        var assistant = component.find('panel');
        $A.util.toggleClass(assistant,'hidden');
		var bar = component.find('bar');
        $A.util.toggleClass(bar,'slds-is-active');
        window.setTimeout(
            $A.getCallback(function() {
		        this.resetPanel(component);
            }), 300
        );
	},
    resetPanel : function(component){
        // set panel to original status
        component.set('v.phrase','  ');
        component.set('v.phraseTwo','  ');
        component.set('v.phraseThree','  ');
        component.set('v.phraseFour','  ');
        component.set('v.highlightOne','  ');
        component.set('v.highlightTwo','  ');
        component.set('v.highlightThree','  ');
        component.set('v.stage',1);
	}
})