preload('utils/DICOMFile.js');

var DICOMDataset=function(){
	
	this.files=[];
}


DICOMDataset.prototype.open=function(input, options){
	var p=new opn.Promise(this);
	debugLog("DICOM Dataset Parsing started");
	this.files=[];
	var non_dicom_files=0;
	var dicom_files=0;
	var folders=0;
	var non_dicom_list={};
	
	var progress=p.getProgress();
	progress.oneMoreToDo(input.length);
	
	var i=0;
	
	var parseNext=()=>{
		if(i>=input.length){
			p.callThen({event:{non_dicom_files:non_dicom_files,dicom_files:dicom_files,folders:folders,non_dicom_list:non_dicom_list}});
			return;
		}
		
		debugLog(i+" out of "+input.length);
		
		if(input[i].file){
			debugLog("File");
			debugLog(input[i].name);
			var f=new DICOMFile();
			f.name=input[i].name;
			f.path=input[i].path;
			f.size=input[i].size;
			f.open(input[i].file).then(()=>{
				debugLog("Is DICOM");
				if(options && options.parseOnly){}else{ 
					input[i].byteArray=f.dataSet.byteArray;
					this.files.push(f);
				}
				i+=1;
            	dicom_files+=1;
            	progress.oneMoreDone();
				parseNext();
				return true;
			}).otherwise((f,e)=>{
				debugLog("Is NOT a DICOM")
				if(i<input.length){
	            	console.log(e);
	            	non_dicom_list[i]=true;
	            	i+=1;
	            	non_dicom_files+=1;
	            	progress.oneMoreDone();
					parseNext();
            	}
				return true;
			});
		}
		else{
			debugLog("Folder");
			debugLog(input[i].name);
			i+=1;
			folders+=1;
			progress.oneMoreDone();
			parseNext();
		}
	}
	
	parseNext();
	
	return p;
}


var main=function(){exportData({DICOMDataset,DICOMFile,DICOMTag})}