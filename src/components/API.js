import axios from 'axios';

const GenerateSTEP = async () => {
    try {
        const formData = require('../../src/testparams.json');
        const response = await axios.post('http://127.0.0.1:5000/generate_step, formData, {
            headers: {
                'Content-Type': 'application/json'
            },
            responseType: 'blob' // Ensure response type is blob to handle zip file
        });
        // Create a blob URL for the zip file response
        const blob = new Blob([response.data], {type: 'application/zip'});
        const fileURL = URL.createObjectURL(blob);

        // Create a link element to trigger the download
        const link = document.createElement('a');
        link.href = fileURL;
        link.setAttribute('download', 'controller.zip'); // Set default file name for download
        document.body.appendChild(link);
        link.click();
    } catch (error) {
        console.error('Error posting data:', error);
        throw error; // Throw the error to be handled where postData is called
    }
};

export {GenerateSTEP};