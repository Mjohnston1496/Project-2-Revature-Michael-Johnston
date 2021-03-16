public class MenuItemController {
    @AuraEnabled
    public static sObject getMenuItem(string foodName){
        sObject item = [SELECT id, name, price__c, type__c, description__c FROM Menu_Item__c WHERE name = :foodName];
    	system.debug(item);
    	return item;
    }
}