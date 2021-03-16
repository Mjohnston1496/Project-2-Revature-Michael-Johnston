public class FortuneCallout {
    @AuraEnabled
    public static string getFortune(){
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://api.adviceslip.com/advice');
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        string advice;
        //if the response is successful, parse the JSON response
        if(response.getStatusCode() == 200) {
            //deserialize the JSON string into tcollections of primitive data types
            Map<String, object> results = (Map<string, object>) JSON.deserializeUntyped(response.getBody());
            Map<string, object> slip = (Map<string, object>) results.get('slip');
            advice = (string) slip.get('advice');
            system.debug('Advice recieved: ' + advice);
        } 
        return advice;
    }
}