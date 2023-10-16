preload(libs['GUI']).before(function(args){
		args.app.showLoading();
	});

preload("some_class.js");
preload("app:9mkazv7tifp94mda@research.dwi.ufl.edu/op.n");//SlidingTabbedLayout class
preload("app:9mkazv7tifp94mda@research.dwi.ufl.edu/op.n");//SlidingTabbedLayout class

var main=function(args){
	args.app.clearContents();

	var wind=args.app.getWindow();

	var menulayout=new MenuLayout();
	let fileButton=menulayout.getMenuBar().append(new MenuItem('File')).getSubMenu();

	fileButton.append(new MenuItem("Open")).whenClicked().then((item)=>{
		item.collapseMenu();
	});
	fileButton.append(new MenuItem("Import")).whenClicked().then((item)=>{
		item.collapseMenu();
	});
	fileButton.append(new MenuItem("Export")).whenClicked().then((item)=>{
		item.collapseMenu();
	});
	fileButton.append(new MenuItem("Print")).whenClicked().then((item)=>{
		item.collapseMenu();
	});
	fileButton.append(new MenuItem("Preferences")).whenClicked().then((item)=>{
		item.collapseMenu();
	});
	fileButton.append(new MenuItem("Exit")).whenClicked().then((item)=>{
		item.collapseMenu();
	});


	let viewButton=menulayout.getMenuBar().append(new MenuItem('View')).getSubMenu();

	viewButton.append(new MenuItem("Toolbars")).whenClicked().then((item)=>{
		item.collapseMenu();
	});
	viewButton.append(new MenuItem("Tools")).whenClicked().then((item)=>{
		item.collapseMenu();
	});
	viewButton.append(new MenuItem("Explorer")).whenClicked().then((item)=>{
		item.collapseMenu();
	});

	let helpButton=menulayout.getMenuBar().append(new MenuItem('Help')).getSubMenu();

	wind.getContent().append(menulayout);

	let toolbarSplit=new SplitLayout({orientation:'vertical',sticky:'first',editable:false});
	toolbarSplit.setStickySize('auto','hidden');
	menulayout.getContainer().append(toolbarSplit);

	let toolbarLayout=new HorizontalLayout();
	toolbarSplit.getFirstContainer().append(toolbarLayout);

	let toolbarStyle={
		applyStyle:function(button){
			button.div.style.width="auto";
		}
	}

	let importDICOMIcon=new GUIIcon("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAABSElEQVR4nO3awUrDQBSF4R/ax2jWvoru3HXTt9NFjIXsfKB2q2K7rXBESKWUUaTMHa8z98DZZvKRkMxMApFIJBKpLx2wBvaAMnYL3OIQ+5IZetoDsMRR1oZYl+h9AbArtAr2HVi1BJYHtFpDqzW0WkOrNbRaQ8tJD6WmoXLUTWtg/UfwCCymPtUO7oH5ybEXNYP7M+xx6VkluE9g59PtXR14SGBnwP2Fx3MNHjJjXYMHA6xb8GCEdQkeE9iS57MFbiwHOO/nu9Uy5lNQBRjXt/QGuLYcINXHbx5adzU+tGSMdguWEdo1WAZo92C1tnjQD+iq18NKoKtdDyuxxdO1sMWjDA1w7shZzSNnDXDuyFnNI2cNcO7IWc0jZ63mxzT9om8lwKMD6LEPJcBXwKsD7HOBLeCvdNPXhN0fQHfTlS2GjUQikQiF8gHwGt0CbidqpwAAAABJRU5ErkJggg==");
	let importDICOMButton=new Button("").setIcon(importDICOMIcon).appendCustomStyle(toolbarStyle);
	importDICOMButton.setToolTipText("Import DICOM");
	toolbarLayout.append(importDICOMButton);

	let importCDIcon=new GUIIcon("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACk0lEQVR4nO2bT4hNURzHP4aamZ4dw5SFzMJ0m43EgqgJKRolspgShRUrZcdCRiZLCzaTErHQzELKgtLIhh2ShVASFhb+NoppRqfO03O75/2593fv+93n963v5r7T+X2/v3vuPb/fO++BwWBoA3qBPmDAs89f60j0AluBs8A94C0wB8zHOOc/uwuMAVuAHkqMjcBl4GuC2Wb5BZgANlAibAceZjAd4gNgG4qxAriag/E4bwMrUYa9wOcCzFf5DRhFARYCFws0HucFoKtd5ruByTaar/Km11L4nZ9UYL7KW8CiIhMwocB0nJeKMn9EgdkQD+ZtPgJmFBgN8QewOi/zC4D7Ckw24rTXKo5RBeaa5T5p813AcwXGmuUL6fpgjwJTrXK3ZALuKDCUpmcQQT/wW1jcJ+A6MO55w1+TjPELWCaRgEOCot4B+30lGYe7dgB4LxjPzZcZ14TEPGryjiwHHgvFvCKRgFcCQl4DS1qIuRR4IxD3ZVbz3cCsgJAdKWKPCMSdzdopDgmIeBaYu8ebHKkjUqL2cOV7amwWEHAuYd7FwNOaMU+ASsK4cYH4m7IkYKeAALeLxHEsYdzRhHGH2/T4/cUuAQFu24vjVMK4kzn1H85DagwLCDidMO8g8LNmzEygjT0uEN95SI1Bf5qThecDc6/1ByeOawJjTgjEdx4MhhYwJrDstPJMI/MDAi8d7VxVLwGRAoF5s25lGCkQaAnAVgAd8wh8BKb8AWYaTvk5SpuAiOwYKnMC1gkkYH2ZE/DdH1WlLVym/RylTcC8QloCsBUQRqRgidojgL0DsJcgtgtg2yBWB2CFEFYJYqUw1gtgzRDWDVJIO1zJ4Ts4TfwQ+CHGP6jU/KGx09jQvMHA/4U/B6BgTfSAf+cAAAAASUVORK5CYII=");
	let importCDButton=new Button("").setIcon(importCDIcon).appendCustomStyle(toolbarStyle);
	importCDButton.setToolTipText("Import DICOM CD");
	toolbarLayout.append(importCDButton);

	let exportDICOMIcon=new GUIIcon("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAABVElEQVR4nO3awUoCURiG4bfrqNZdThFJi7rBQmgTXU4LpSCySLcTfBFMJOGUzvnPzH86/wsfuBD00cEZRYiiKIrK7RCYAitAhpsDJzjEvhhD19cA5zhqmhHrEr0aAOwKrQH3DlzWBJYHtGpDqza0akOrNrRqQ8vJmqEuQ+Vos9rACvB3E2ABPKQe+nK2Te0Bz1bX5XK2rp5+3K83Ws7W1WmLTEbL2X7rbAN653N4SWATtJyN3Gg5G7nRMt4tsL/DE7d+Ps1f52lr8EECFsOfh6sCz3I/wPruEtHFHdJK3LZNOj60LnK/omOAe2MpEJyEpTBwMpaCwMe1fXmYW2ApCPxogaWwQ/rzguK+vd07OVv25GwBtk7Olj05W4Ctk7NlT84WYOvkbP/mj2naYm9DgG8cQL92NQT4CHh1gF0Y/OK50z9qr4HlCNBl+84Oho2iKIoYuQ+eYr0rZQX35QAAAABJRU5ErkJggg==");
	let exportDICOMButton=new Button("").setIcon(exportDICOMIcon).appendCustomStyle(toolbarStyle);
	exportDICOMButton.setToolTipText("Export DICOM");
	toolbarLayout.append(exportDICOMButton);

	let explorerIcon=new GUIIcon("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACcUlEQVR4nO2av2sUQRSAP4LgL1ajoGgEQUsltoogiNZiIRZiY2VhK+SsjCGl/gMWaqMWh/9BCFHQRiwsTu0URFIcihYRDYmMDExgGd7d3GTnNrsz88FrwuzlvW/ezM7uHWQymUwmk8lkMhmDijycqMgjC3ChIo8swIWKPLIAF2rEWAVmgCkTHfO3ZDqgI1zbSUnAYeHaQykJmBKuPZL6ErgzpqSfAs+bJmDVSBj3JvgZ2AtMAl+bJEDVEGvA2VJu54D1lATMCvk9SEXAa2CbkN924H3sAn4Bx4bkeBL4E7OA6yPkeTsmActAF7gJHB8lSWACWIxBwDM2jz54/WizgG/AfqpxpYkC+sBV4JJpb2nMP+ACYfjSJAFd4EDp8/YBD4Vx9wnHkyYI6JtZlzhvje0BOwIKuLHVArrWrNsslcb+BU4RlqNbJaA/ZNYHzb6+f/ugT30fgDlgOsA+4EQFmnVp9hfN/duHnvV/PwHzQGGNe1yngJ5HARuvyX6aVvVlbkAOb4A9pXEHBVljE3DPswg9/hqbY9rxwFRYr+Q+1iHgBPUyrCjfTnCiHKE3pLqZd+Tk0wmVBcxSP7utzbRKJzhRDWv/0BKC7AGqpngL7AosoVUCFPDCOjtUldA6AUp4cKoioZUCFHDLyrMwu7/v3aG1AtaBy0InvPTshNYKUMBv4PS4JaiGx7LwTFGYIl3LYWcMApQ5jU56dMLagC9zRVRLYsl8S+SS8B24SEIUpeXwTlguE+anPfb7hKjQxd0V1rwu/lFpTyhIiHLxG7FAwsXrWCERZgZspK9IBOnYrF/PnyEhCrPmV8zMJ1V8JpNB5D/G0ztpV3cL5wAAAABJRU5ErkJggg==");

	let leftPanel=new SlidingTabbedLayout({side:'left'});
	let imageExplorer = leftPanel.newTab('',new VerticalLayout()).setIcon(explorerIcon);
	imageExplorer.setToolTipText("Image Explorer");

	toolbarSplit.getSecondContainer().append(leftPanel);
}
