import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    // Connect to MongoDB using the correct connection string and options
    const conn = await mongoose.connect('mongodb+srv://ruchisingh748828:2YAbjWu4iA47li16@cluster0.p8jvr.mongodb.net/MyProject?retryWrites=true&w=majority&appName=Cluster0', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      // Ensure the app connects correctly with the latest versions of MongoDB
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`) // Log connection details

  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold) // Enhanced error handling
    process.exit(1) // Exit process if there's an error
  }
}

export default connectDB
