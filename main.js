preload(libs['GUI']).before(function(args){
		//this is how you can optionally run scripts before loading your libraries.
		args.app.showLoading();//Here we show the loading animation.
	});

preload("some_class.js");

var main=function(args){
	args.app.clearContents();//clears the loading animation

	var wind=args.app.getWindow();//gets the window object, which has many parameters, methods, and listeners

	//We create a GUI menu bar with three menu items:
	var menulayout=new MenuLayout();
	menulayout.getMenuBar().append(new MenuItem('File')).whenClicked().then((item)=>{
		area.innerHTML="I clicked File!";
	});
	menulayout.getMenuBar().append(new MenuItem('View')).whenClicked().then((item)=>{
		area.innerHTML="I clicked View!";
	});
	menulayout.getMenuBar().append(new MenuItem('Help')).whenClicked().then((item)=>{
		area.innerHTML="I clicked Help!";
	});

	//You can append GUI elements to the window like this:
	wind.getContent().append(menulayout);

	var buttonArea=document.createElement('div');
	opn.set(buttonArea.style,{
		position:"static",
		display:"inline-block",
		boxSizing:"border-box",
		background:"gray",
		border:"5px",
		borderColor:"black",
		width:"20%",
		height:"100%",
		padding:"10px",
		overflow:"hidden",
		color:"white",
		fontWeight:"700",
		fontSize:"28px",
		fontFamily:"Arial"
	});
	menulayout.getContainer().div.appendChild(buttonArea);

	var explorerButton=document.createElement('button');
	opn.set(explorerButton.style,{
		position:"static",
		display:"inline-block",
		width:"20%",
		height:"100%"
	});
	buttonArea.appendChild(explorerButton);

	var span=document.createElement('span');
	opn.set(span.style,{
		display:"block",
		transform:"rotate(90deg)"
	});
	span.textContent="Explorer";
	explorerButton.append(span);

	var smallWindow=document.createElement('window');
	opn.set(smallWindow.style,{
		position:"static",
		display:"inline-block",
		width:"55%",
		height:"100%",
		//padding:"10px",
		background:"white",
		color:"gray",
		fontWeight:"700",
		fontSize:"28px",
		fontFamily:"Arial",
		verticalAlign:"right"
	});
	buttonArea.appendChild(smallWindow);

	//Or alternatively you can append custom divs made with vanilla JS:
	var area=document.createElement('div');
	opn.set(area.style,{
		position:"static",
		display:"inline-block",
		boxSizing:"border-box",
		width:"80%",
		height:"100%",
		padding:"10px",
		background:"gray",
		overflow:"hidden",
		color:"white",
		fontWeight:"700",
		fontSize:"28px",
		fontFamily:"Arial"
	});
	menulayout.getContainer().div.appendChild(area);
	area.innerHTML="Hello World!";
}
