({
    doInit : function(component, event, helper) {
        var action = component.get("c.getBroker");
        action.setParams({
            recordId: component.get("v.recordId")
        });
        action.setCallback(this, function(response){
            var broker = response.getReturnValue();
            component.set("v.Broker", broker);
        });
        $A.enqueueAction(action);
    }
})