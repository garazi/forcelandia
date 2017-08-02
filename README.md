# Forcelandia
## Lightning Components Bootcamp

The following code snippets are for the Hands-on Lightning Components Bootcamp at Forcelandia 2017.

> Prior to beginning the workshop, please ensure that you have a **new** Developer Org with **My Domain** enabled, and that you have [installed this package](https://login.salesforce.com/packaging/installPackage.apexp?p0=04t6A000000SG0F).

1. Click the App Launcher and select the **Dreamhouse Lightning** app.
2. Click the **Data Import** tab and then Initialize Sample Data. This imports data that you use within this project.

### Step 1 &mdash; Apex Controller

	```java
	@AuraEnabled
    public static List<Property__c> getPropertyListings(Id recordId) {
        return [SELECT Id, Name, Beds__c, Baths__c, Price__c, Broker__c, Status__c, Thumbnail__c FROM Property__c WHERE Broker__c=:recordId];
    }
	```

### Step 1 &mdash; PropertyListings Component Content

	```html
	<div class="slds-p-left--medium slds-p-right--medium">
        <ul class="slds-list--vertical slds-has-dividers--top-space">
            <aura:iteration items="{!v.brokerListings}" var="item" indexVar="i">
                <li class="slds-list__item">                   
                    {!item.Name}
                </li>
            </aura:iteration>
        </ul>
    </div>
	```
	
### Step 2 &mdash; CompactProperty Component Content

	```html
	<div class="slds-media">
	        <div class="slds-media__figure">
	            <img src="{!v.property.Thumbnail__c}" class="slds-avatar--large slds-avatar--circle" alt="{!v.property.Title_c}" />
	        </div>
	        <div class="slds-media__body">
	            <div class="slds-grid">
	                <a onclick="{!c.navToRecord}">
	                    <h3 class="slds-text-heading--small slds-m-bottom--xx-small">{!v.property.Name}</h3>
	                </a>
	                <!-- Edit button goes here -->
	            </div>
	            <div aura:id="propertyDetails" class="slds-m-top--small">
	                <ul class="slds-grid slds-wrap">
	                    <li class="slds-list__item slds-size--1-of-2"><span class="slds-text-color--weak slds-m-right--small">Beds:</span> {!v.property.Beds__c}</li>
	                    <li class="slds-list__item slds-size--1-of-2"><span class="slds-text-color--weak slds-m-right--small">Baths:</span> {!v.property.Baths__c}</li>
	                    <li class="slds-list__item slds-size--1-of-2"><span class="slds-text-color--weak slds-m-right--small">Price:</span> {!v.property.Price__c}</li>
	                    <li class="slds-list__item slds-size--1-of-2"><span class="slds-text-color--weak slds-m-right--small">Status:</span> {!v.property.Status__c}</li>
	                </ul>
	            </div>
	        </div>
	    </div>
	```

### Step 2 &mdash; navToRecord

	```js
	({
	    navToRecord : function (component, event, helper) {
	        var navEvt = $A.get("e.force:navigateToSObject");
	        navEvt.setParams({
	            "recordId": component.get("v.property.Id")
	        });
	        navEvt.fire();
	    }
	})
	```
	
### Step 4 &mdash; editButton

	```html
	<lightning:buttonIcon iconName="utility:edit" class="slds-col--bump-left" variant="bare" alternativeText="Edit Record" onclick="{!c.editRecord}" />
	```

### Step 3 &mdash; editRecord

	```js
		editRecord : function(component, event, helper) {
	    var editRecordEvent = $A.get("e.force:editRecord");
	    editRecordEvent.setParams({
	        "recordId": component.get("v.property.Id")
	    });
	    editRecordEvent.fire();
	}
	```
	
### Step 5 &mdash; Design Parameters

	```html
	<design:attribute name="sortField" label="Sort By" datasource="Date_Listed__c, Price__c, Status__c" default="Price" description="Set the list based on what criteria?" />
	<design:attribute name="sortOrder" label="Sort Order" datasource="ASC, DESC" description="Sort in ascending or descending order" />
	```