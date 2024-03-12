preload('cornerstone.min.js');
preload('dicomParser.min.js');
preload('cornerstoneWADOImageLoader.bundle.min.js');
preload('DICOMDeidentify.js');
preload('DICOMImage.js');

function padString(input, size,options) {
    var s = input+"";
    var ch="0";
    var right=false;
    if(typeof input ==="string"){ch=" ";right=true;}
    if(options){
    	if(options.left)right=false;
    	if(options.right)right=true;
    	if(options.character)ch=options.character;
    }
    while (s.length < size) {
    	if(right)
    		s = s+ch;
    	else s=ch+s;
    }
    if(s.length>size)s=s.substring(0,size);
    return s;
}

function replaceString(dataSet, tag, new_value,options){
	var element=dataSet.elements[tag];
	if(element){
		var v=padString(new_value,element.length,options);
		for(var j=0; j < element.length; j++) {
			dataSet.byteArray[element.dataOffset + j] = v.charCodeAt(j);
		}
	}
}

function getString(dataSet,tag){
	if(dataSet.elements[tag].length>0)return dataSet.string(tag);
	return "";
}

const VR_INDEX={
	'AE':{
			name:'Application Entry',
			read:function(dataSet, tag){
				return getString(dataSet,tag);
			},
			replace:function(dataSet,tag,new_value){
				replaceString(dataSet,tag,new_value);
			},
			dvalue:""
		},
		
	'AS':{
			name:'Age String',
			read:function(dataSet, tag){
				var s=dataSet.string(tag);
				if(typeof s!=='undefined'){//because the field may be empty (size=0)
					var a=new DICOMAge(s);
					return a;
				}else return;
			},
			replace:function(dataSet,tag,new_value){
				if(typeof new_value ==='string') replaceString(dataSet,tag,(new DICOMAge(new_value)).toString());
				else{//new_value is assumed a DICOMAge object and the toString method will be automatically used.
					replaceString(dataSet,tag,new_value.toString());
				}
			},
			dvalue:'000Y'
		},
	
	'AT':{
			name:'Attribute Tag',
			read:function(dataSet, tag){
				return new DICOMTag(dataSet.attributeTag(tag));
			}
			//IT IS NOT ALLOWED TO REPLACE AN ATTRIBUTE TAG
		},
	
	'CS':{
			name:'Code String',
			read:function(dataSet, tag){
				return getString(dataSet,tag);
			},
			replace:function(dataSet,tag,new_value){
				replaceString(dataSet,tag,new_value);
			},
			dvalue:""
		},
		
	'DA':{
			name:'Date',
			read:function(dataSet, tag){
				var s=dataSet.string(tag);
				if(typeof s!=='undefined'){//because the field may be empty (size=0)
					var d=new DICOMDate(s);
					return d;
				}else return;
			},
			replace:function(dataSet,tag,new_value){
				if(typeof new_value ==='string') replaceString(dataSet,tag,(new DICOMDate(new_value)).toString());
				else{//new_value is assumed a DICOMDate object and the toString method will be automatically used.
					replaceString(dataSet,tag,new_value.toString());
				}
			},
			dvalue:"20000101"
		},
		
	'DS':{
			name:'Decimal String',
			read:function(dataSet, tag){
				return dataSet.floatString(tag);
			},
			replace:function(dataSet,tag,new_value){
				replaceString(dataSet,tag,new_value);
			},
			dvalue:"0.0"
		},
		
	'DT':{
			name:'Date Time',
			read:function(dataSet, tag){
				return getString(dataSet,tag);
			}
		},
		
	'FL':{
			name:'Floating Point Single',
			read:function(dataSet, tag){
				return dataSet.float(tag);
			}
		},
		
	'FD':{
			name:'Floating Point Double',
			read:function(dataSet, tag){
				return dataSet.double(tag);
			}
		},
	
	'IS':{
			name:'Integer String',
			read:function(dataSet, tag){
				return  dataSet.intString(tag);
			},
			replace:function(dataSet,tag,new_value){
				replaceString(dataSet,tag,new_value);
			},
			dvalue:"0"
		},
	
	'LO':{
			name:'Long String',
			read:function(dataSet, tag){
				return getString(dataSet,tag);
			},
			replace:function(dataSet,tag,new_value){
				replaceString(dataSet,tag,new_value);
			},
			dvalue:""
		},
		
	'LT':{
			name:'Long Text',
			read:function(dataSet, tag){
				if(dataSet.element)
				return getString(dataSet,tag);
			},
			replace:function(dataSet,tag,new_value){
				replaceString(dataSet,tag,new_value);
			},
			dvalue:""
		},
		
	'OB':{name:'Other Byte String'},
	'OD':{name:'Other Double String'},
	'OF':{name:'Other Float String'},
	'OW':{name:'Other Word String'},
	
	'PN':{
			name:'Person Name',
			read:function(dataSet, tag){
				return getString(dataSet,tag);
			},
			replace:function(dataSet,tag,new_value){
				replaceString(dataSet,tag,new_value);
			},
			dvalue:""
		},
		
	'SH':{
			name:'Short String',
			read:function(dataSet, tag){
				return getString(dataSet,tag);
			},
			replace:function(dataSet,tag,new_value){
				replaceString(dataSet,tag,new_value);
			},
			dvalue:""
		},
		
	'SL':{
			name:'Signed Long',
			read:function(dataSet, tag){
				return dataSet.int32(tag);
			}
		},
		
	'SQ':{name:'Sequence of Items'},
	
	'SS':{
			name:'Signed Short',
			read:function(dataSet, tag){
				return dataSet.int16(tag);
			}
	},
	
	'ST':{
			name:'Short Text',
			read:function(dataSet, tag){
				return getString(dataSet,tag);
			},
			replace:function(dataSet,tag,new_value){
				replaceString(dataSet,tag,new_value);
			},
			dvalue:""
	},
	
	'TM':{
			name:'Time',
			read:function(dataSet, tag){
				var s=dataSet.string(tag);
				if(typeof s!=='undefined'){//because the field may be empty (size=0)
					var t=new DICOMTime(s);
					return t;
				}else return;
			},
			replace:function(dataSet,tag,new_value){
				if(typeof new_value ==='string') {
					replaceString(dataSet,tag,(new DICOMTime(new_value)).toString());
				}
				else{//new_value is assumed a DICOMTime object and the toString method will be automatically used.
					replaceString(dataSet,tag,new_value.toString());
				}
			},
			dvalue:"000000.000000"
		},
		
	'UI':{
			name:'Unique Identifier (UID)',
			read:function(dataSet, tag){
				return getString(dataSet,tag);
			},
			replace:function(dataSet,tag,new_value){
				replaceString(dataSet,tag,new_value,{left:true,character:'0'});
			},
			dvalue:""
		},
	
	'UL':{
			name:'Unsigned Long',
			read:function(dataSet, tag){
				return dataSet.uint32(tag);
			}
		},
		
	'UN':{name:'Unknown'},
	
	'US':{
			name:'Unsigned Short',
			read:function(dataSet, tag){
				return dataSet.uint16(tag);
			}
		},
	
	'US|SS':{
			name:'Unsigned Short',
			read:function(dataSet, tag){
				return dataSet.uint16(tag);
			}
		},
	
	'UT':{
			name:'Unlimited Text',
			read:function(dataSet, tag){
				return getString(dataSet,tag);
			},
			replace:function(dataSet,tag,new_value){
				replaceString(dataSet,tag,new_value);
			},
			dvalue:""
		}
}

var DICOMAge=function(s){
	this.age=0;
	this.unit='Y';
	if(typeof s!=='undefined'){//if input is given
		if(s.length>=3)
			this.age=parseInt(s.substring(0,3));
		if(s.length>=4)
			this.unit=s.substring(3,4);
	}
}

DICOMAge.prototype.toString=function(){
	var v=padString(this.age,3,{left:true, character:'0'});
	return v+this.unit;
}

var DICOMTime=function(s){
	this.hours=0;
	this.minutes=0;
	this.seconds=0;//a float value with fractions of second
	if(typeof s!=='undefined'){//if input is given
		if(s.length>=2)
			this.hours=parseInt(s.substring(0,2));
		if(s.length>=4)
			this.minutes=parseInt(s.substring(2,4));
		if(s.length>4)
			this.seconds=parseFloat(s.substring(4));
	}
}

DICOMTime.prototype.toString=function(){
	var hours=padString(this.hours,2,{left:true,character:'0'});
	var minutes=padString(this.minutes,2,{left:true,character:'0'});
	var seconds=""+this.seconds;
	if(this.seconds<10)seconds="0"+this.seconds;
	var s=hours+minutes+seconds;
	if(s.length==6)s=s+'.';
	return padString(s,13,{right:true,character:'0'});
}

DICOMTime.prototype.getDate=function(){
	var d=new Date('January 1, 1970 00:00:00');
		d.setHours(this.hours);
		d.setMinutes(this.minutes);
		d.setSeconds(Math.floor(this.seconds));
		d.setMilliseconds(1000*(this.seconds-Math.floor(this.seconds)));
	return d;
}

var DICOMDate=function(s){
	this.year=2000;
	this.month=1;
	this.date=1;
	if(typeof s!=='undefined'){//if input is given
		if(s.length==8){
			this.year=parseInt(s.substring(0,4));
			this.month=parseInt(s.substring(4,6));
			this.date=parseInt(s.substring(6,8));
		}else{
			console.log('DICOMDate formatting error');
		}
	}
}

DICOMDate.prototype.toString=function(){
	var year=padString(this.year,4,{left:true,character:'0'});
	var month=padString(this.month,2,{left:true,character:'0'});
	var date=padString(this.date,2,{left:true,character:'0'});
	return year+month+date;
}

DICOMDate.prototype.getDate=function(){
	var d=new Date('January 1, 1970 00:00:00');
	d.setFullYear(this.year);
	d.setMonth(this.month-1);
	d.setDate(this.date);
	return d;
}

var DICOMTag=function(s){
	if(s.length==9){
		this.group = s.substring(1,5);
		this.element = s.substring(5,9);
	}
	else if(s.length==11){
		this.group = s.substring(1,5);
		this.element = s.substring(6,10);
	}
}

DICOMTag.prototype.toString=function(){
	return "("+this.group+","+this.element+")";
}

var DICOMFile=function(){
	this.dataSet;
}

DICOMFile.prototype.getValue=function(tag){

	if(this.dataSet){
		//console.log(this.dataSet);
		var t=new DICOMTag(tag);
		var tindx='x'+t.group+t.element;
		var element=this.dataSet.elements[tindx];
		if(element){
			var vr=VR_INDEX[this.getVR(tag)];
			if(vr){
				var f=vr.read;
				if(f){
					return f(this.dataSet,tindx);
				}
				else {
					console.log('No read function available for '+element.vr);
					return;
				}
			}else{
				console.log('Unknown VR '+element.vr);
				return;
			}
		}
		else {
			console.log(tindx+' not found in dataset');
			return;
		}
	}else {
		console.log('No dataset');
		return;
	}
}

DICOMFile.prototype.replaceValue=function(tag,new_value){
	if(this.dataSet){
		var t=new DICOMTag(tag);
		//console.log(t+':'+new_value);
		var tindx='x'+t.group+t.element;
		var element=this.dataSet.elements[tindx];
		if(element){
			var vr=VR_INDEX[element.vr];
			if(vr){
				var f=vr.replace;
				if(f){
					return f(this.dataSet,tindx,new_value);
				}
				else {
					console.log('No replace function available for '+element.vr);
					return;
				}
			}else{
				console.log('Unknown VR '+element.vr);
				return;
			}
		}
		else {
			console.log(tindx+' not found in dataset');
			return;
		}
	}else {
		console.log('No dataset');
		return;
	}
}

DICOMFile.prototype.deidentifyElement=function(tag){
	var vr=this.getVR(tag);
	var i=VR_INDEX[vr];
	if(i && typeof i.dvalue!=='undefined') this.replaceValue(tag,i.dvalue);
}

//De-identifies the entire file based on the filter in DICOMDeidentify.js
DICOMFile.prototype.deidentify=function(){
	if(this.dataSet){
		for(var i in this.dataSet.elements){
			var t=new DICOMTag(i);
			var vr=this.getVR(i);
			if(deidentifyFilter(t.toString(),vr)!==false){
				this.deidentifyElement(i);
			}
		}
	}
}

DICOMFile.prototype.toJSON=function(){
	if(this.dataSet){
		for(var i in this.dataSet.elements){
			var t=new DICOMTag(i);
			var vr=this.getVRDescription(this.getVR(i));
			//console.log(this.dataSet.elements[i])
			//console.log(t.toString()+':'+this.getName(i)+':'+vr+':'+this.getValue(i));
		}
	}
}

DICOMFile.prototype.open=function(input){
	var p=new opn.Promise(this);
	
	if(input instanceof Uint8Array){
		
		try{
        	this.dataSet = dicomParser.parseDicom(input);
        }catch(e){
        	p.callOtherwise({event:e});
        	return;
        }
		p.callThen();
		
	}else if(input instanceof File){
			var reader = new FileReader();
	        reader.onload = () => {
	        	var arrayBuffer = reader.result;
	            // Here we have the file data as an ArrayBuffer.  dicomParser requires as input a
	            // Uint8Array so we create that here
	            var byteArray = new Uint8Array(arrayBuffer);
	            try{
	            	this.dataSet = dicomParser.parseDicom(byteArray);
					this.toJSON();
		        }catch(e){
	            	p.callOtherwise({event:e});
	            	return;
	            }
				p.callThen();
		    };
	        reader.readAsArrayBuffer(input);
	}
	
	return p;
}

//return array of DICOMImage objects
DICOMFile.prototype.getImages=function(){
	//console.log(this.dataSet);
	if(this.images)return this.images;
	this.images=[];
	
	var element = this.dataSet.elements.x7fe00010;

	var u8arr;

	if(element.encapsulatedPixelData){
		var image_frames = element.fragments.length == undefined ? 0 : element.fragments.length;

		// var frameIndex = 95;
		//this.imageData.uint8Array=[];
			var isRLE = this.dataSet.string('x00020010') === '1.2.840.10008.1.2.5';
			for(let i = 0; i < image_frames; i ++){
				var imageFrame;
				if(isRLE) {
					// RLE cannot be fragmented so frameIndex = fragmentIndex
					imageFrame = dicomParser.readEncapsulatedPixelDataFromFragments(this.dataSet, element, i);
				} else {
					var bot = element.basicOffsetTable;
					// if basic offset table is empty, calculate it
					if(bot.length === 0) {
						bot = dicomParser.createJPEGBasicOffsetTable(this.dataSet, element);
					}
					imageFrame = dicomParser.readEncapsulatedImageFrame(this.dataSet, element, i, bot);
				}

				var dm = new DICOMImage(this);
				dm.load({imageFrame:imageFrame});
				this.images.push(dm);
				// dm.imageData.uint8Array.push(imageFrame); 
				// dm.imageData.frames = image_frames; 

			}
			//console.log(image_array);
			return this.images;
	}else{
		
		var blob = new Blob([{raw:this.dataSet.byteArray.subarray(element.dataOffset,element.dataOffset+element.length)}]);
		var url = URL.createObjectURL(blob); 
		url = "wadouri:" + url;
		console.log(url);
		//var dm = cornerstone.loadAndCacheImage(url);
		//dm.load({raw:this.dataSet.byteArray.subarray(element.dataOffset,element.dataOffset+element.length)});
		this.images.push(cornerstone.loadAndCacheImage(url));

		//console.log(image_array)
		return this.images;
	}
}

DICOMFile.prototype.getName=function(tag){
	var t=new DICOMTag(tag);
	var d=TAG_DICT[t.toString()];
	if(d){
		//Split if a lower case letter is followed by a capital letter (lN in modelName), or if a capital letter if followed by a capital letter and a lower case letter (IEl in GUIElement)
		var s = d.name.replace(/\B([a-z](?=[A-Z])|[A-Z](?=[A-Z][a-z]))/g,'$1 ');
		
		return s;
	}else return;
}

DICOMFile.prototype.getTag=function(tag){
	return new DICOMTag(tag);
}

//Returns the Value Representation (VR) of the tag, which is basically the data type of this DICOM field
DICOMFile.prototype.getVR=function(tag){
	var t=new DICOMTag(tag);
	
	if(this.dataSet){
		var tindx='x'+t.group+t.element;
		var element=this.dataSet.elements[tindx];
		if(element && element.vr)return element.vr;
	}


	var d=TAG_DICT[t.toString()];
	if(d){
		return d.vr;
	}
	else {
		//console.log(t.toString());
		return;	
	}
}

DICOMFile.prototype.getVRDescription=function(vr){
	if(vr){
		var e=VR_INDEX[vr];
		if(e){
			return e.name;
		}else return "";
	}else return "";
}



var main=function(){exportData({DICOMFile,DICOMTag})}