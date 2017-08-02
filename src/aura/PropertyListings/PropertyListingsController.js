({
    doInit : function(component, event, helper) {
        console.log("doInit fire");
        var action = component.get("c.getPropertyListings");
        action.setParams({
            recordId: component.get("v.recordId"),
            sortField: component.get("v.sortField"),
            sortOrder: component.get("v.sortOrder")
        });
        action.setCallback(this, function(response){
            var properties = response.getReturnValue();
            console.log(properties);
            component.set("v.brokersListings", properties);
        });
        $A.enqueueAction(action);
    }
})