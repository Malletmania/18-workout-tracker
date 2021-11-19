const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      name: {
        type: String,
        trim: true,
        required: "Please enter name"
      },
      typeOfWorkout: {
        type: String,
        required: "resistance or cardio"
      },
      weight: {
        type: Number,
        // required: isRequired('weight')
      },
      reps: {
        type: Number,
        // required: isRequired('reps')
      },
      sets: {
        type: Number,
        // required: isRequired('sets')
      },
      duration: {
        type: Number,
        required: "Please enter the duration of your workout"
      },
      distance: {
        type: Number,
        // required: isRequired('distance')
      }
    }]
  
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;