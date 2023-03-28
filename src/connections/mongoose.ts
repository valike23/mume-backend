import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/mume', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export const db = mongoose.connection;