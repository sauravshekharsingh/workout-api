const trainerServices = require("./../services/trainer.services");

const createTrainer = async (req, res, next) => {
  try {
    let trainerObj = {
      name: req.body.name,
      email: req.body.email,
    };

    const trainer = await trainerServices.create(trainerObj);

    return res.status(200).json({
      success: true,
      message: "Trainer created successfully",
      data: trainer,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = { createTrainer };
