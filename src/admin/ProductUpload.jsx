import { uploadToCloudinary } from "../../utils/cloudinaryUpload"

const ImageUpload = () => {
  const handleImage = async (e) => {
    const file = e.target.files[0]
    const imageUrl = await uploadToCloudinary(file)
    console.log(imageUrl)
  }

  return (
    <input
      type="file"
      accept="image/*"
      onChange={handleImage}
    />
  )
}

export default ImageUpload
