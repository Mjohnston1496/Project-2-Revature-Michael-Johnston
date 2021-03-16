({
	doinit : function(component, event, helper) {
		component.set("v.columns", [
            {label: 'Case Number', fieldName: 'CaseNumber', type: 'autonumber'},
            {label: 'Case Subject', fieldName: 'Subject', type: 'text'},
            {label: 'Status', fieldName: 'Status', type: 'text'}
        ]);
        
        let action = component.get('c.getCases');
        action.setCallback(this, function(response){
            component.set('v.cases', response.getReturnValue())
        });
        $A.enqueueAction(action);
	}
})