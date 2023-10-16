preload(libs['GUI']);


var DICOMView=function(){
	GuiElement.call(this);
	
	this.layout=new SplitLayout({orientation:'vertical',sticky:'second',editable:false});
	this.layout.setStickySize('auto','visible');
	this.append(this.layout);

	this.imageView=this.layout.getFirstContainer().append(new ImageView());
	this.imageView.setPixelMagnification(10);
	
	
	this.defaultStyle={
	    	applyStyle:function(view){
	    		view.applyStyleForClass("GuiElement");
	    		opn.set(view.div.style,{
	    			height:'100%',
	    			width:'100%'
	    		})
	    	}	
	    };
}

DICOMView.prototype.setDICOMFile=function(dicomFile){
	var images=dicomFile.getImages();
	if(images.length>1)
	{
		var slider=this.layout.getSecondContainer().append(new Slider({min:0,max:images.length-1}));
		slider.whenMoved().then((slider) => {
	        var slider_value = slider.getValue();
	        var image=images[slider_value];
	    	image.whenLoaded().then(()=>{
	    		this.image = image;
	    		this.imageView.setSource(image.getDataURL());
	    	})
	    })
	}
	
	var image=images[0];
	image.whenLoaded().then(()=>{
		this.image = image;
		this.imageView.setSource(image.getDataURL());
	})
}

var main=function(){
	opn.extend(GuiElement,DICOMView);
	exportData({DICOMView});
}