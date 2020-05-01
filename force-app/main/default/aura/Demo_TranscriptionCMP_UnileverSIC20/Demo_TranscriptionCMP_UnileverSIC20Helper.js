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
        cmp.set('v.phrase','');  
        cmp.set('v.phraseTwo','');  
        cmp.set('v.highlightOne','');  
        cmp.set('v.highlightTwo','');  
        /* Sakshi:
        Hi Darshil, this is Sakshi your Unilever sales representative.  
        I see that you have some questions about the contents of your cart, is that right? */      
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi');
            }), 1000
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil');
            }), 1200
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this');
            }), 1400
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is');
            }), 1600
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is Sakshi');
            }), 1800
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is Sakshi your');
            }), 2100
        );  
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is Sakshi your unilever');
            }), 2300
        ); 
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is Sakshi your unilever sales');
            }), 2500
        ); 
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is Sakshi your unilever sales representative.');
            }), 2700
        ); 
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is Sakshi your Unilever sales representative.');
            }), 2900
        ); 
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is Sakshi your Unilever sales representative.');
            }), 2900
        ); 
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is Sakshi your Unilever sales representative. I');
            }), 3300
        ); 
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is Sakshi your Unilever sales representative. I see');
            }), 3500
        ); 
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is Sakshi your Unilever sales representative. I see that');
            }), 3700
        ); 
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is Sakshi your Unilever sales representative. I see that you');
            }), 3900
        ); 
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is Sakshi your Unilever sales representative. I see that you');
            }), 4100
        ); 
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is Sakshi your Unilever sales representative. I see that you have');
            }), 4300
        ); 
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is Sakshi your Unilever sales representative. I see that you have questions');
            }), 4500
        ); 
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is Sakshi your Unilever sales representative. I see that you have questions about');
            }), 4700
        ); 
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is Sakshi your Unilever sales representative. I see that you have questions about the');
            }), 4900
        ); 
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is Sakshi your Unilever sales representative. I see that you have questions about the contents');
            }), 5100
        ); 
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is Sakshi your Unilever sales representative. I see that you have questions about the contents');
            }), 5300
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is Sakshi your Unilever sales representative. I see that you have questions about the contents in');
            }), 5500
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is Sakshi your Unilever sales representative. I see that you have questions about the contents in your');
            }), 5700
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is Sakshi your Unilever sales representative. I see that you have questions about the contents in your cart');
            }), 5900
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is Sakshi your Unilever sales representative. I see that you have questions about the contents in your cart, is');
            }), 6100
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is Sakshi your Unilever sales representative. I see that you have questions about the contents in your cart, is that');
            }), 6300
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is Sakshi your Unilever sales representative. I see that you have questions about the contents in your cart, is that right');
            }), 6500
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hi Darshil, this is Sakshi your Unilever sales representative. I see that you have questions about the contents in your cart, is that right?');
            }), 6700
        );
        /* Darshil:
        यह क्या है(Yeh kya hai)?. It’s a _much bigger order_ than I usually make and I don’t know if I have _enough money_ to purchase this much right now. 
        Why is it so much higher than normal? */
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.highlightOne','यह');
            }), 7300
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.highlightOne','यह क्या');
            }), 7500
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.highlightOne','यह क्या है');
            }), 7700
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.highlightOne','यह क्या है? ');
            }), 7900
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseTwo','It’s a ');
            }), 8300
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.highlightTwo','much');
            }), 8500
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.highlightTwo','much bigger');
            }), 8700
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.highlightTwo','much bigger order ');
            }), 8900
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseThree','than');
            }), 9100
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseThree','than I');
            }), 9300
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseThree','than I usually');
            }), 9500
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseThree','than I usually make');
            }), 9700
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseThree','than I usually make and');
            }), 9900
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseThree','than I usually make and I');
            }), 10200
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseThree','than I usually make and I don’t');
            }), 10400
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseThree','than I usually make and I don’t know');
            }), 10600
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseThree','than I usually make and I don’t know if');
            }), 10800
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseThree','than I usually make and I don’t know if I');
            }), 11000
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseThree','than I usually make and I don’t know if I have ');
            }), 11200
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.highlightThree','enough');
            }), 11400
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.highlightThree','enough money ');
            }), 11600
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseFour','to');
            }), 11800
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseFour','to purchase');
            }), 12000
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseFour','to purchase this');
            }), 12000
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseFour','to purchase this much');
            }), 12200
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseFour','to purchase this much right');
            }), 12400
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseFour','to purchase this much right now');
            }), 12600
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseFour','to purchase this much right now. Why');
            }), 13000
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseFour','to purchase this much right now. Why is');
            }), 13200
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseFour','to purchase this much right now. Why is it');
            }), 13400
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseFour','to purchase this much right now. Why is it so?');
            }), 13600
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseFour','to purchase this much right now. Why is it so much');
            }), 13800
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseFour','to purchase this much right now. Why is it so much higher');
            }), 14000
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseFour','to purchase this much right now. Why is it so much higher than');
            }), 14200
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseFour','to purchase this much right now. Why is it so much higher than normal');
            }), 14400
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phraseFour','to purchase this much right now. Why is it so much higher than normal?');
            }), 14600
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