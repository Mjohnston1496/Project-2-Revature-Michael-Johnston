({
    init: function(component, event, helper){
        helper.getCases(component);
    },
    
    handleSubmit : function(component, event, helper) {
        
        var subjectField = component.find("subject");
        var subject = subjectField.get("v.value");
        
        var descriptionField = component.find("description");
        var description = descriptionField.get("v.value");
        
        var newCase = component.get('v.newCase');
        newCase.subject = subject;
        newCase.description = description;
        
        helper.createCase(component, newCase);
	}
})