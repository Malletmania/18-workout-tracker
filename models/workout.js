const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Please enter name"
  },
  type: {
    type: String,
    trim: true,
    required: "Please enter type of workout"
  },
  weight: {
    type: Number,
    trim: true,
    required: "Please enter weight"
  },
  sets: {
    type: Number,
    trim: true,
    required: "Please enter number of sets"
  },
  duration: {
    type: Number,
    trim: true,
    required: "Please enter the duration of your workout"
  }
});
