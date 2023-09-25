preload(libs['GUI']).before(function(args){
		args.app.showLoading();
	});

preload("some_class.js");
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

	let leftPanel=new SlidingTabbedLayout({side:'left'});
	leftPanel.newTab('Image Explorer',new VerticalLayout()).makeHoverable();

	toolbarSplit.getSecondContainer().append(leftPanel);
}
