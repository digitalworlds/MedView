preload(libs['GUI']);
preload("DICOMFile.js");
preload("DICOMView.js");
preload("Icons.js");

var importDICOM=function(fileSelector, e, tabbedLayout){
    fileSelector.createIndex(e).then(()=>{
        new DICOMFile().open(fileSelector.files[0]).then((df) => {
            var dicomView=new DICOMView();
            dicomView.setDICOMFile(df);//set this dicom file to the viewer
            var tab = tabbedLayout.newTab(fileSelector.files[0].name, dicomView);
            tab.setSelected(true);
        
            tab.whenClicked().then(()=>{
                dicomView.imageView.reapplyStyle();
            });

            tab.whenSelected().then(()=>{
                dicomView.imageView.reapplyStyle();
            })

            let closeTabButton=new Button("").setIcon(new GUIIcon(ICONS_DICT["closeTabIcon"]));

            tab.append(closeTabButton);

            closeTabButton.whenClicked().then(()=>{
                tab.removeFromParent();
                dicomView.clear();
                dicomView.imageView.reapplyStyle();
            });
        });
    });
}

var main=function(){
    exportData({importDICOM});
}