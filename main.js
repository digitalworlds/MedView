preload(libs['GUI']).before(function(args){
		//this is how you can optionally run scripts before loading your libraries.
		args.app.showLoading();//Here we show the loading animation.
	});

preload("some_class.js");

var main=function(args){
	
	let a=new A(10);
	console.log(a.getNumber());


	args.app.clearContents();//clears the loading animation

	var wind=args.app.getWindow();//gets the window object, which has many parameters, methods, and listeners
	//for example:
	wind.whenResized().then((wind)=>{
		//if(area) area.innerHTML="Window resized!";
	})




	//We create a GUI menu bar with one menu item:
	var menulayout=new MenuLayout();
	menulayout.getMenuBar().append(new MenuItem('Help')).whenClicked().then((item)=>{
		//area.innerHTML="I clicked Help!";
	});

	//You can append GUI elements to the window like this:
	wind.getContent().append(menulayout);

	

	let toolbar_split=new SplitLayout({orientation:'vertical',sticky:'first',editable:false});
	toolbar_split.setStickySize('auto','hidden');
	menulayout.getContainer().append(toolbar_split);


	let toolbar_layout=new HorizontalLayout();
	toolbar_split.getFirstContainer().append(toolbar_layout);
	toolbar_layout.append(new Button("Test"));


	let left_split=new SplitLayout({orientation:'horizontal',sticky:'first'});
	left_split.setStickySize('auto','hidden');
	toolbar_split.getSecondContainer().append(left_split);

	let left_panel=left_split.getFirstContainer().append(new VerticalLayout());

	left_panel.append(new Button("test"));

}
