({
	newFortune : function(component, event, helper) {
        let action = component.get("c.getFortune");
        //add callback behavior for when response is recieved
        action.setCallback(this, function(response){
            let state = response.getState();
            if(state === "SUCCESS"){
                component.set("{!v.fortune}", response.getReturnValue());
            }
        })
        $A.enqueueAction(action);
	}
})