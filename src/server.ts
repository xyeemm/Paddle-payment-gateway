
  import mongoose from "mongoose";
  import app from "./app";
  const PORT = process.env.PORT || 5000;

  const mongoDbConnect = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI || "");
      console.log('Connected to MongoDB!',mongoose.connection.name);
      app.listen(PORT, ()=>{
        console.log(`Listening on port ${PORT}`)
      })
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  };
  
  export default mongoDbConnect


