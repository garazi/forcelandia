public class PropertyListings {
    @AuraEnabled
    public static List<Property__c> getPropertyListings (Id recordId, String sortField, String sortOrder) {
        String sorting;
        String query = 'SELECT Id, Name, Beds__c, Baths__c, Price__c, Broker__c, Status__c, Thumbnail__c FROM Property__c WHERE Broker__c=:recordId'; 
            if (String.isNotEmpty(sortField)) {
                query = query + ' ORDER BY ' + sortField;
                if (String.isNotEmpty(sortOrder)) {
                    query = query + ' ' + sortOrder;
                }
            }          
        return Database.query(query);
    }
    @AuraEnabled
    public static List<Property__c> getPropertyListings(Id recordId) {
        return [SELECT Id, Name, Beds__c, Baths__c, Price__c, Broker__c, Status__c, Thumbnail__c FROM Property__c WHERE Broker__c=:recordId];
    }
}