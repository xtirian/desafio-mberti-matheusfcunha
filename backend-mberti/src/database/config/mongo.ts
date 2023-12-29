import mongoose from 'mongoose'

const getUrl : () => string = () => {
  if(process.env.MONGO_DATABASE_URL && typeof process.env.MONGO_DATABASE_URL == "string"){
    return process.env.MONGO_DATABASE_URL
  }
  return ""
}

let url = getUrl()

mongoose.connect("mongodb://localhost:27017/local")


export default mongoose;
