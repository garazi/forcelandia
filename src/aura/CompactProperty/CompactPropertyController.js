({
    navToRecord : function (component, event, helper) {
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId": component.get("v.property.Id")
        });
        navEvt.fire();
    },
    editRecord : function(component, event, helper){
        var editEvent = $A.get("e.force:editRecord");
        editEvent.setParams({
            "recordId": component.get("v.property.Id")
        });
        editEvent.fire();
    }
    //future code here
})