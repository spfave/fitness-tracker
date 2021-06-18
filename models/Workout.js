const Schema = require('mongoose').Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Exercise',
    },
  ],
});

const Workout = mongoose.model('Workout', WorkoutSchema);
module.exports = Workout;
