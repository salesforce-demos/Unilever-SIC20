({
    fakeText : function(cmp,hlp) {
        var samples = cmp.find('samples');
        $A.util.addClass(samples,'hide');
        cmp.set('v.phrase','');       
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hello');
            }), 1500
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hello my');
            }), 2200
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hello my name');
            }), 2600
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hello my name is');
            }), 3100
        );
        window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Hello my name is a');
            }), 3800
        );
        /*window.setTimeout(
            $A.getCallback(function() {
                cmp.set('v.phrase','Einstein how can I improve consumer');
            }), 4200
        );
        window.setTimeout(
            $A.getCallback(function() {
				cmp.set('v.phrase','Einstein how can I improve consumer engagement');
            }), 4800
        );*/
        window.setTimeout(
            $A.getCallback(function() {
				cmp.set('v.phrase','Hello my name is A');
                var evt = new Event('filter');
				document.dispatchEvent(evt);
                //hlp.resetBar(cmp,hlp);
                var micl = cmp.find('mic-left');
                $A.util.removeClass(micl,'active');
                $A.util.addClass(micl,'on');
                
                var micr = cmp.find('mic-right');
                $A.util.removeClass(micr,'active');	
                $A.util.addClass(micr,'on');	
				hlp.playSound(cmp,hlp,'analysis');
            }), 5300
        );
        window.setTimeout(
            $A.getCallback(function() {
                hlp.toggleWave(cmp);
                var event = new Event('build');
                window.dispatchEvent(event);
            }), 5100
        );
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
        var mic = component.find('mic');
        $A.util.removeClass(mic,'active');
        
        var samples = component.find('samples');
        $A.util.addClass(samples,'hide');
        
        var micl = component.find('mic-left');
        $A.util.removeClass(micl,'on');
        $A.util.removeClass(micl,'active');
        
        var micr = component.find('mic-right');
        $A.util.removeClass(micr,'on');		
        $A.util.removeClass(micr,'active');		
        
        component.set('v.phrase','Click on mic or say "Einstein"');
        component.set('v.stage',0);
	}
})
