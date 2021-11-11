const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
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
        enum: ['resistance', 'cardio'],
        required: "resistance or cardio"
      },
      weight: {
        type: Number,
        required: isRequired('weight')
      },
      reps: {
        type: Number,
        required: isRequired('reps')
      },
      sets: {
        type: Number,
        trim: true,
        required: isRequired('sets')
      },
      duration: {
        type: Number,
        required: "Please enter the duration of your workout"
      },
      distance: {
        type: Number,
        required: isRequired('distance')
      }
    }]
  
});

function isRequired(field) {
  return function () {
    if (field == "distance") {
      return this.type === 'cardio';
    } else {
      return this.type === 'resistance';
    }
  };
}

workoutSchema.firtual('totalDuration').get(function() {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
})
