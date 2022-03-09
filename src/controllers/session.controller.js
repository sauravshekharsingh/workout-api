const sessionServices = require("./../services/session.services");
const exerciseInfoServices = require("./../services/exerciseInfo.services");
const userServices = require("./../services/user.services");

const createSession = async (req, res, next) => {
  try {
    const { userEmail } = req.body;

    const user = await userServices.get({ email: userEmail });

    const userId = user._id;
    const trainerId = user.trainerRef;

    const pushupExerciseInfo = await exerciseInfoServices.get({
      name: "Pushup",
    });
    const squatExerciseInfo = await exerciseInfoServices.get({ name: "Squat" });

    let sessionObj = {
      workout: {
        name: "Workout 1",
        exercises: [
          {
            exerciseInfoRef: pushupExerciseInfo._id,
            exerciseInfo: {
              name: pushupExerciseInfo.name,
            },
            name: "Pushup",
            exerciseSets: [
              {
                number: 20,
                suggestedWeight: 40,
                suggestedReps: 4,
                performedReps: 0,
              },
              {
                number: 40,
                suggestedWeight: 50,
                suggestedReps: 6,
                performedReps: 0,
              },
              {
                number: 30,
                suggestedWeight: 20,
                suggestedReps: 4,
                performedReps: 0,
              },
            ],
          },
          {
            exerciseInfoRef: squatExerciseInfo._id,
            exerciseInfo: {
              name: squatExerciseInfo.name,
            },
            name: "Squat",
            exerciseSets: [
              {
                number: 40,
                suggestedWeight: 40,
                suggestedReps: 6,
                performedReps: 0,
              },
              {
                number: 30,
                suggestedWeight: 60,
                suggestedReps: 2,
                performedReps: 0,
              },
              {
                number: 20,
                suggestedWeight: 30,
                suggestedReps: 8,
                performedReps: 0,
              },
            ],
          },
        ],
      },
      date: new Date(),
      userRef: userId,
      trainerRef: trainerId,
    };

    const session = await sessionServices.create(sessionObj);

    return res.status(200).json({
      success: true,
      message: "Session created successfully",
      data: session,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const updateExercisePerfomed = async (req, res, next) => {
  try {
    const { userEmail } = req.body;

    const user = await userServices.get({ email: userEmail });

    const userId = user._id;
    const trainerId = user.trainerRef;

    const session = await sessionServices.update(
      {
        userRef: userId,
        trainerRef: trainerId,
      },
      {
        $set: {
          "workout.exercises.$.exerciseSets.0.performedWeight": 1,
          "workout.exercises.$.exerciseSets.0.performedReps": 1,
        },
      }
    );

    return res.status(200).json({
      success: true,
      message: "Exercise performance updated successfully",
      data: session,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const updateCompletion = async (req, res, next) => {
  try {
    const { userEmail } = req.body;

    const user = await userServices.get({ email: userEmail });

    const userId = user._id;
    const trainerId = user.trainerRef;

    const testDate = new Date("2022-03-05");

    const session = await sessionServices.update(
      {
        userRef: userId,
        trainerRef: trainerId,
        date: testDate,
      },
      {
        $set: {
          isCompleted: true,
        },
      }
    );

    return res.status(200).json({
      success: true,
      message: "Session completion updated successfully",
      data: session,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const updateSessionDates = async (req, res, next) => {
  try {
    const testDate = new Date("2022-03-10");

    const sessions = await sessionServices.updateMany(
      {
        isCompleted: false,
        date: testDate,
      },
      {
        $set: { date: new Date(testDate).setDate(testDate.getDate() + 1) },
      }
    );

    return res.status(200).json({
      success: true,
      message: "Session dates updated successfully",
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const updateShiftDates = async (req, res, next) => {
  try {
    await sessionServices.update(
      {
        isCompleted: false,
        date: new Date("2022-03-10"),
      },
      {
        $set: { date: new Date("2022-03-11") },
      }
    );

    await sessionServices.update(
      {
        isCompleted: false,
        date: new Date("2022-03-14"),
      },
      {
        $set: { date: new Date("2022-03-15") },
      }
    );

    return res.status(200).json({
      success: true,
      message: "Session dates updated successfully",
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = {
  createSession,
  updateCompletion,
  updateSessionDates,
  updateShiftDates,
  updateExercisePerfomed,
};
