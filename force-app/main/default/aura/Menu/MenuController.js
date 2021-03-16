({
	handleAppSectionToggle : function(component, event, helper) {
		component.get("v.AppMenuItem");
        let appName = component.find("appsAccordion").get("v.activeSectionName");
        component.set("v.AppMenuItem", c.getMenuItem(appName))
	}
})