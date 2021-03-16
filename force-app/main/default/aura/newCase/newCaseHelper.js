({
    getCases: function(component){
        var action = component.get("c.getCases");
        action.setCallback(this, function(response){
            var state = response.getState();
            if(component.isValid() && sstate === "SUCCESS"){
                component.set("v.cases", response.getReturnVGalue());
            }
        });
        $A.enqueueAction(action);
    },
    
    createCase: function(component, newCase){
        this.upsertCase(component, newCase, function(a){
            var cases = component.get("v.cases");
            cases.push(a.getReturnValue());
            component.set("v.cases", cases);
        });
    },
    
    upsertCase: function(component, newCase, callback){
        var action = component.get("c.saveCase");
        action.setParams({
            "case": newCase
        });
        if(callback){
            action.setCallback(this, callback);
        }
        $A.enqueueAction(action);
    }
})