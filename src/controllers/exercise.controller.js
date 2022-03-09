const exerciseInfoServices = require("./../services/exerciseInfo.services");

const createExerciseInfo = async (req, res, next) => {
  try {
    let exerciseInfoObj = { name: req.body.name };

    const exerciseInfo = await exerciseInfoServices.create(exerciseInfoObj);

    return res.status(200).json({
      success: true,
      message: "Exercise Info created successfully",
      data: exerciseInfo,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = { createExerciseInfo };
