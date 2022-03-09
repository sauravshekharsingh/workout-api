const trainerServices = require("./../services/trainer.services");
const userServices = require("./../services/user.services");

const createUser = async (req, res, next) => {
  try {
    let userObj = {
      email: req.body.email,
      name: req.body.name,
      gender: req.body.gender,
      DOB: req.body.DOB,
      phone: req.body.phone,
    };

    const user = await userServices.create(userObj);

    return res.status(200).json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const mapUserToTrainer = async (req, res, next) => {
  try {
    const { userEmail, trainerEmail } = req.body;

    const user = await userServices.get({ email: userEmail });

    const trainerUpdated = await trainerServices.update(
      { email: trainerEmail },
      { $addToSet: { userRefs: user._id } }
    );

    const userUpdated = await userServices.update(
      { email: user.email },
      { $set: { trainerRef: trainerUpdated._id } }
    );

    return res.status(200).json({
      success: true,
      message: "Trainer user mapped successfully",
      data: {
        user: userUpdated,
        trainer: trainerUpdated,
      },
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = { createUser, mapUserToTrainer };
