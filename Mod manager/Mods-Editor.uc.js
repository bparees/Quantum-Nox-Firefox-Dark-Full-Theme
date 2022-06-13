// ==UserScript==
// @name            Mod manager
// @include         main
// @author          Izheil
// @onlyonce
// ==/UserScript==

function createButton(doc, tag, props) {
      let el = doc.createXULElement(tag);
      for (let p in props) {
        el.setAttribute(p, props[p]);
      }
      return el;
    }

CustomizableUI.createWidget({
	id: 'QNModManager',
	type: 'custom',
	defaultArea: CustomizableUI.AREA_NAVBAR,
	onBuild: function (aDocument) {
		let toolbaritem = createButton(aDocument, 'toolbarbutton', {
			id: 'QNModManager',
			label: 'Mod Manager',
			tooltiptext: 'Quantum Nox - Mod Manager',
			type: 'menu',
			class: 'toolbarbutton-1 chromeclass-toolbar-additional',
			style: 'list-style-image: url(data:image/png;base64,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)',
			popup: 'QNModManager_options',
			onclick: "gBrowser.selectedTab = gBrowser.addTab('chrome://userchromejs/content/QNModManager/options.html#settings.html', \
	    		  {triggeringPrincipal: Services.scriptSecurityManager.getSystemPrincipal()});"
		});
		return toolbaritem;
	}
});