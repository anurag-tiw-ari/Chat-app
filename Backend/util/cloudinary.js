import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'

(async function() {

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View Credentials' below to copy your API secret
    })
}
)()

async function uploadOnCloudinary(localFilePath)
{
     try{
        if(!localFilePath)  return null

        //uploadFileOnCloudinary

     const resp=  await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        //file has been uploaded
       // console.log(resp.url)
       // console.log("file has been uploaded")
       console.log("Cloudinary Response=",resp)
       fs.unlinkSync(localFilePath)
        return resp;
     }
     catch(error)
     {
        fs.unlinkSync(localFilePath)    //Remove the locally saved temprory file as the upload operation got failed
        return null
     }
}

export {uploadOnCloudinary}