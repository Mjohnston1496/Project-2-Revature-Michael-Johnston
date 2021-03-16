public with sharing class caseController {
	@AuraEnabled
    public static List<Case> getCases(){
        string UserEmail = UserInfo.getUserEmail();
        System.debug(UserEmail);
        List<Case> clist = [SELECT Id, Subject, CaseNumber, Status, ContactEmail FROM Case WHERE ContactEmail = :UserEmail];
        
        return clist;
    }
}