preload(libs['GuiElement']);
//preload('./utils/DICOMFile.js');

const DICOMImage=function(dicomFile){

	this.dicomFile=dicomFile;
};

DICOMImage.prototype.getDataURL=function(){
	var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = this.img.naturalWidth;
    canvas.height = this.img.naturalHeight;
    ctx.drawImage(this.img, 0, 0);
    
    return canvas.toDataURL();
}


DICOMImage.prototype.getPNGImagefromImageData=function(imagedata) {
	var p=new opn.Promise(this);
	
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = imagedata.width;
    canvas.height = imagedata.height;
    ctx.putImageData(imagedata, 0, 0);

    canvas.toBlob((blob)=> {//toBlob returns a PNG encoded image.
    	var url = URL.createObjectURL(blob);
     	
     	var img=document.createElement('img');
     	img.onload=()=>{
     		this.img=img;
     		URL.revokeObjectURL(url);
     		this.whenLoaded().callThen();
     	};
     	img.src=url;
    });
    
    return this.whenLoaded();
}

DICOMImage.prototype.getRAWfromImage=function(img) {
	var p=new opn.Promise(this);
	
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var width=img.width;
    var height=img.height;
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(img,0,0);
    var imagedata=ctx.getImageData(0,0,width,height);

    var raw=new Uint8Array(width*height);
    var j=0;//slot in data array
    var i=0;//slot in raw array
    var max=1;
    var v=0;
    var data=imagedata.data;
    for(var y=0;y<height;y++){
    	for(var x=0;x<width;x++){
    		
    		var r=data[j];j++;
    		var g=data[j];j++;
    		var b=data[j];j++;
    		j++;
    		raw[i]=(r+g+b)/3;i++;
    	}
    }
    
    this.raw=raw;
}

/**
* @param {Uint8Array} arr - Unit8Array image data
*/
DICOMImage.prototype.getImageFromUint8Array=function(arr){
	
	var blob = new Blob([arr]);
 	var url = URL.createObjectURL(blob);
 	
 	var img=document.createElement('img');
 	img.onload=()=>{
 		this.getRAWfromImage(img);
 		this.img=img;
 		URL.revokeObjectURL(url);
 		this.whenLoaded().callThen();
 	};
 	img.src=url;
 	
	return this.whenLoaded();
}

DICOMImage.prototype.whenLoaded=function(){
	if(this._loaded_p)return this._loaded_p;
	this._loaded_p=new opn.Promise(this);
	return this._loaded_p;
}


DICOMImage.prototype.load=function(options){
	
	if(this.img)return this.whenLoaded();
	

    if(options&&options.image){
    
       
        var width=options.image.imageFrame.columns;
        var height=options.image.imageFrame.rows;
        var data16=options.image.imageFrame.pixelData;
        var sm=options.image.imageFrame.smallestPixelValue;
        var len=(options.image.imageFrame.largestPixelValue-options.image.imageFrame.smallestPixelValue)/255;
        
//We convert the data to RGBA
var RGBA=new Uint8ClampedArray(width*height*4);
j=0;//slot in data16 array
i=0;//slot in RGBA array
for(var y=0;y<height;y++){
    for(var x=0;x<width;x++){

        v=(data16[j]-sm)/len;j++
            
        RGBA[i]=v;i++
        RGBA[i]=v;i++
        RGBA[i]=v;i++
        RGBA[i]=255;i++
    }
}

        return this.getPNGImagefromImageData(new ImageData(RGBA, width));
		
    }
	else if(options&&options.imageFrame){
    
		return this.getImageFromUint8Array(options.imageFrame);
		
    }else if(options&&options.raw){        
        
    	var df=this.dicomFile;
    	
        var width=df.getValue('(0028,0011)');
        var height=df.getValue('(0028,0010)');
        var samples=df.getValue('(0028,0002)');
        var bits=df.getValue('(0028,0100)');
        var data=options.raw;
        
        //Upper Left corner of the image is x=0,y=0
        //Image is saved row by row from top to bottom of the image
        
        //First we convert the data to uint16
        var data16=new Uint16Array(width*height);
        var j=0;//slot in data array
        var i=0;//slot in data16 array
        var max=1;
        var v=0;
        for(var y=0;y<height;y++){
        	for(var x=0;x<width;x++){
        		
        		var b1=data[j];j+=1;
        		var b2=data[j];j+=1;
        		v=b2*256+b1;
        		
        		if(v>max)max=v;
        		data16[i]=v;i++
        	}
        }
        
        this.raw=data16;
      
        //We convert the data to RGBA
        var RGBA=new Uint8ClampedArray(width*height*4);
        j=0;//slot in data16 array
        i=0;//slot in RGBA array
        for(var y=0;y<height;y++){
        	for(var x=0;x<width;x++){
       
        		v=(data16[j]*255)/max;j++
        			
        		RGBA[i]=v;i++
        		RGBA[i]=v;i++
        		RGBA[i]=v;i++
        		RGBA[i]=255;i++
        	}
        }
        
        return this.getPNGImagefromImageData(new ImageData(RGBA, width));
      
    }
}

var main=function(args){
	opn.extend(GuiElement,DICOMImage);
	exportData({DICOMImage});
};
