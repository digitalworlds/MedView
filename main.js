preload(libs['GUI']).before(function(args){
		args.app.showLoading();
	});

preload("DICOMDataset.js");
preload("DICOMDeidentify.js");
preload("DICOMFile.js");
preload("DICOMImage.js");
preload("dicomParser.min.js");
preload("DICOMView.js");
preload("Icons.js");
preload("app:9mkazv7tifp94mda@research.dwi.ufl.edu/op.n");//SlidingTabbedLayout class
preload("app:2lqjuzir2rve70ac@research.dwi.ufl.edu/op.n");//FileSelector
var main=function(args){
	args.app.clearContents();

	var wind=args.app.getWindow();

	var menulayout=new MenuLayout();

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

	let importDICOMButton=new Button("").setIcon(new GUIIcon(ICONS_DICT["importDICOMIcon"])).appendCustomStyle(toolbarStyle);
	importDICOMButton.setToolTipText("Import DICOM");
	importDICOMButton.whenClicked().then(()=>{
		var fileSelector=new FileSelector();
		fileSelector.setDirectory(true);
		fileSelector.setMultiple(true);
		fileSelector.show();
		fileSelector.whenSelected().then((fileSelector,e)=>{
			fileSelector.createIndex(e).then((index)=>{
				new DICOMFile().open(fileSelector.files[1]).then((df) => {
					dicomView.setDICOMFile(df);//set this dicom file to the viewer
				});
			});
		});
	});
	toolbarLayout.append(importDICOMButton);

	let importCDButton=new Button("").setIcon(new GUIIcon(ICONS_DICT["importCDIcon"])).appendCustomStyle(toolbarStyle);
	importCDButton.setToolTipText("Import DICOM CD");
	toolbarLayout.append(importCDButton);

	let exportDICOMButton=new Button("").setIcon(new GUIIcon(ICONS_DICT["exportDICOMIcon"])).appendCustomStyle(toolbarStyle);
	exportDICOMButton.setToolTipText("Export DICOM");
	toolbarLayout.append(exportDICOMButton);

	let dicomLayout=new SplitLayout({orientation:'horizontal',sticky:'second',editable:false,splitPosition:'0.25'});
	toolbarSplit.getSecondContainer().append(dicomLayout);

	let leftPanel=new SlidingTabbedLayout({side:'left'});
	let imageExplorer=leftPanel.newTab('',new VerticalLayout()).setIcon(new GUIIcon(ICONS_DICT["imageExplorerIcon"]));
	imageExplorer.setToolTipText("Image Explorer");
	var tabExtended=false;
	imageExplorer.whenClicked().then(()=>{
		if(!tabExtended)
			dicomLayout.setPosition('0.4');
		else
			dicomLayout.setPosition('0.25');

		tabExtended=!tabExtended;
	});

	dicomLayout.getFirstContainer().append(leftPanel);

	var dicomView=new DICOMView();
	dicomLayout.getSecondContainer().append(dicomView);

	let fileButton=menulayout.getMenuBar().append(new MenuItem('File')).getSubMenu();
	let openMenu=fileButton.append(new MenuItem("Open")).getSubMenu();
	openMenu.append(new MenuItem("DICOM")).setIcon(new GUIIcon(ICONS_DICT["importDICOMIcon"])).whenClicked().then((item)=>{
		item.collapseMenu();
	});
	openMenu.append(new MenuItem("Image")).setIcon(new GUIIcon(ICONS_DICT["importImageIcon"])).whenClicked().then((item)=>{
		item.collapseMenu();
	});

	let importMenu=fileButton.append(new MenuItem("Import")).getSubMenu();
	importMenu.append(new MenuItem("DICOM")).setIcon(new GUIIcon(ICONS_DICT["importDICOMIcon"])).whenClicked().then((item)=>{
		item.collapseMenu();

		var fileSelector=new FileSelector();
		fileSelector.setDirectory(true);
		fileSelector.setMultiple(true);
		fileSelector.show();
		fileSelector.whenSelected().then((fileSelector,e)=>{
			fileSelector.createIndex(e).then((index)=>{
				new DICOMFile().open(fileSelector.files[1]).then((df) => {
					dicomView.setDICOMFile(df);//set this dicom file to the viewer
				});
			});
		});
	});
	importMenu.append(new MenuItem("DICOM CD")).setIcon(new GUIIcon(ICONS_DICT["importDICOMCDIcon"])).whenClicked().then((item)=>{
		item.collapseMenu();
	});

	let exportMenu=fileButton.append(new MenuItem("Export")).getSubMenu();
	exportMenu.append(new MenuItem("DICOM")).setIcon(new GUIIcon(ICONS_DICT["exportDICOMIcon"])).whenClicked().then((item)=>{
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

	helpButton.append(new MenuItem("Keyboard Shortcuts")).whenClicked().then((item)=>{
		item.collapseMenu();
	});
	helpButton.append(new MenuItem("Online Help")).whenClicked().then((item)=>{
		item.collapseMenu();
	});

	wind.getContent().append(menulayout);

}
