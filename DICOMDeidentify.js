
const KEEP={
		'(0010,0020)':1,//PatientID
		'(0018,1030)':1,//ProtocolName
		'(0018,9423)':1,//AcquisitionProtocolName
		'(0012,0021)':1,//ClinicalTrialProtocolName
		'(0008,1030)':1,//StudyDescription
		'(0008,0070)':1,//Manufacturer
		'(0008,0022)':1,//AcquisitionDate
		'(0008,002A)':1,//AcquisitionDateTime
		'(0008,103E)':1,//SeriesDescription
		'(0018,0087)':1,//MagneticFieldStrength
		'(0018,1314)':1,//FlipAngle
		'(0018,0080)':1,//RepetitionTime
		'(0018,0081)':1,//EchoTime
		'(0018,0050)':1,//SliceThickness
		'(0040,0245)':1,//PerformedProcedureStepStartTime
};

const KEEP_GROUP={
		'0000':1,//COMMANDS
		'0002':1,//FILE MEDIA INFO
		'0004':1,//FILE SET DIRECTORY
		'0008':1,//GENERAL CONTENT GROUP
		'0012':1,//CLINICAL TRIAL DETAILS
		'0014':1,//ENVIRONMENTAL/SYSTEM SETUP
		'0018':1,//ACQUISITION PARAMETERS
		'0020':1,//IMAGE PAREMETERS
		'0022':1,//LIGHT/OPTICAL PARAMETERS
		'0024':1,//OTHER PARAMETERS
		'0026':1,//PIXEL FRAME PARAMETERS
		'0028':1,//MORE PIXEL FRAME PARAMETERS
		'003A':1,//WAVE/CHANNEL PARAMETERS
		'0042':1,//ENCAPSULATED DOCUMENT DESCRIPTORS
		'0044':1,//PRODUCT/SUSTANCE DESCRIPTORS
		'0046':1,//LENS PARAMETERS
		'0048':1,//IMAGE VOLUME PARAMETERS
		'0050':1,//DEVICE PARAMETERS
		'0052':1,//INTRAVASCULAR/CATHETER PARAMETERS
		'0054':1,//OTHER IMAGE PARAMETERS
		'0060':1,//HISTOGRAM
		'0062':1,//SEGMENTATION
		'0064':1,//REGISTRATION
		'0066':1,//SURFACES
		'0068':1,//IMPLANT DETAILS
		'0070':1,//GRAPHIC OVERLAYS
		'0072':1,//RENDERING DETAILS
		'0074':1,//OTHER PARAMETERS
		'0076':1,//IMPLANT ASSEMBLY
		'0078':1,//IMPLANT TEMPLATE
		'0088':1,//TOPIC and STORAGE MEDIA
		'0100':1,//SOP
		'0400':1,//DIGITAL SIGNATURES		
};

//Please exercise caution when including fields in the REMOVE list because some data types may be hard to be filled with empty values.
const REMOVE={
		'(0010,0010)':1,//PatientName
		'(0010,1010)':1,//PatientAge
		'(0010,0030)':1,//PatientBirthDate
		'(0010,1040)':1,//PatientAddress
		'(0010,0040)':1,//PatientSex
		'(0010,1020)':1,//PatientSize
		'(0010,1030)':1,//PatientWeight
		'(0010,2154)':1,//PatientTelephoneNumbers
		'(0010,2150)':1,//CountryOfResidence
		'(0010,2160)':1,//EthnicGroup
		'(0010,21A0)':1,//SmokingStatus
		'(0010,1060)':1,//PatientMotherBirthName
		'(0008,0080)':1,//InstitutionName
		'(0008,0081)':1,//InstitutionAddress
		'(0008,0082)':1,//InstitutionCodeSequence
		'(0008,0090)':1,//ReferringPhysicianName
		'(0008,0092)':1,//ReferringPhysicianAddress
	    '(0008,0094)':1,//ReferringPhysicianTelephoneNumbers
	    '(0008,0096)':1,//ReferringPhysicianIdentificationSequence
	    '(0008,1040)':1,//InstitutionalDepartmentName
	    '(0008,1048)':1,//PhysiciansOfRecord
	    '(0008,1049)':1,//PhysiciansOfRecordIdentificationSequence
	    '(0008,1050)':1,//PerformingPhysicianName
	    '(0008,1052)':1,//PerformingPhysicianIdentificationSequence
	    '(0008,1060)':1,//NameOfPhysiciansReadingStudy
	    '(0008,1062)':1,//PhysiciansReadingStudyIdentificationSequence
	    '(0008,1070)':1,//OperatorsName
	    '(0008,1072)':1,//OperatorIdentificationSequence
	    '(0008,1080)':1,//AdmittingDiagnosesDescription
	    '(0008,1084)':1,//AdmittingDiagnosesCodeSequence
		'(0008,1050)':1,//PerformingPhysicianName
		'(0040,0006)':1,//ScheduledPerformingPhysicianName
		
};

const REMOVE_GROUP={
		'0010':1,//PATIENT INFO
		'0032':1,//VISIT DETAILS
};

var deidentifyFilter=function(tag, vr){
	
	var group=tag.substring(1,5);
	var group_last_digit=tag.substring(4,5);
	var is_exception_keep = KEEP[tag];
	var is_exception_remove = REMOVE[tag];
	var keep_group=KEEP_GROUP[group];
	var remove_group=REMOVE_GROUP[group];

	if(remove_group===1){
		if(is_exception_keep===1){
			return false;
		}
		//The fields LO, SH, PN, DA, TM in a remove_group will be removed. 
		//We will not remove the other fields in the remove_group because the data types may be hard to be replaced with empty values.
		//However if another field is in the REMOVE list it will be removed. Please exercise caution when including fields in the REMOVE list.
		if(is_exception_remove===1 || (vr==='LO'||vr==='SH'||vr==='PN'||vr==='DA'||vr==='TM'))
			return "Found in REMOVE_GROUP";
		else return false;
		
	}else if(keep_group===1){
		if(is_exception_remove===1){
			return "Found in the REMOVE list";
		}
		return false;
	}
	//Odd number groups are free to be used by manufacturers and are not standardized 
	else if(group_last_digit==='1'||group_last_digit==='3'||group_last_digit==='5'||group_last_digit==='7'||group_last_digit==='9'){
		if(is_exception_remove===1){
			return "Found in the REMOVE list";
		}
		return false;
	}
	else if(is_exception_remove===1 || ((vr==='LO'||vr==='SH'||vr==='PN'||vr==='DA'||vr==='TM') && is_exception_keep!==1)){
		
		if(is_exception_remove===1) return "Found in the REMOVE list";
		if(vr==='LO'||vr==='SH'||vr==='PN'||vr==='DA'||vr==='TM') return "VR type is "+vr;
		
	}
	return false;
} 

var main=function(){exportData({deidentifyFilter})}