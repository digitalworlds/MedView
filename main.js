preload(libs['GUI']).before(function(args){
		//this is how you can optionally run scripts before loading your libraries.
		args.app.showLoading();//Here we show the loading animation.
	});

preload("some_class.js");
preload("app:9mkazv7tifp94mda@research.dwi.ufl.edu/op.n");//SlidingTabbedLayout class

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
	let file_menu=menulayout.getMenuBar().append(new MenuItem('File')).getSubMenu();
	
	file_menu.append(new MenuItem("Item 1")).whenClicked().then((item)=>{
		item.collapseMenu();
		//area.innerHTML="I clicked Help!";
	});

	let menu2=menulayout.getMenuBar().append(new MenuItem('Menu 2')).getSubMenu();
	
	menu2.append(new MenuItem("Item 1")).whenClicked().then((item)=>{
		item.collapseMenu();
		//area.innerHTML="I clicked Help!";
	});

	let menu3=menulayout.getMenuBar().append(new MenuItem('Menu 3')).getSubMenu();
	
	menu3.append(new MenuItem("Item 1")).whenClicked().then((item)=>{
		item.collapseMenu();
		//area.innerHTML="I clicked Help!";
	});

	//You can append GUI elements to the window like this:
	wind.getContent().append(menulayout);

	

	let toolbar_split=new SplitLayout({orientation:'vertical',sticky:'first',editable:false});
	toolbar_split.setStickySize('auto','hidden');
	menulayout.getContainer().append(toolbar_split);


	let toolbar_layout=new HorizontalLayout();
	toolbar_split.getFirstContainer().append(toolbar_layout);


	var an_icon=new GUIIcon('https://research.dwi.ufl.edu/op.n/img/logo.png');

	let toolbar_style={
		applyStyle:function(button){
			button.div.style.width="auto";
		}
	}

	toolbar_layout.append(new Button("")).setIcon(an_icon).appendCustomStyle(toolbar_style);
	toolbar_layout.append(new Button("")).setIcon(an_icon).appendCustomStyle(toolbar_style);
	toolbar_layout.append(new Button("")).setIcon(an_icon).appendCustomStyle(toolbar_style);
	toolbar_layout.append(new Button("")).setIcon(an_icon).appendCustomStyle(toolbar_style);
	toolbar_layout.append(new Button("")).setIcon(an_icon).appendCustomStyle(toolbar_style);
	toolbar_layout.append(new Button("")).setIcon(an_icon).appendCustomStyle(toolbar_style);


	/*let left_split=new SplitLayout({orientation:'horizontal',sticky:'first'});
	left_split.setStickySize('auto','hidden');
	toolbar_split.getSecondContainer().append(left_split);*/

	

	let left_panel=new SlidingTabbedLayout({side:'left'});
	left_panel.newTab('',new VerticalLayout()).setIcon(an_icon);
	left_panel.newTab('',new VerticalLayout()).setIcon(an_icon);
	left_panel.newTab('',new VerticalLayout()).setIcon(an_icon);

	toolbar_split.getSecondContainer().append(left_panel);

}
