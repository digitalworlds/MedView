var main=function()
{

    const url = "https://research.dwi.ufl.edu/projects/sttr2/01_009/01_009_FLAIR.nii.gz";

    //const url = "https://medx.digitalworlds.ufl.edu/aidp/nii/10_008/10_008_FLAIR.nii.gz";


    // Send a GET request
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response; // Parse JSON from the response
  })
  .then(data => {
    console.log('Response Data:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });


}