import zimmerInfoSchema from "../models/zimmerInfo.mjs";
import resevationSchema from "../models/resevation.mjs";

function DisplayZimmer(req, res) {
  console.log("get for: display zimmer");
  const zimerDisplayinfo = zimmerInfoSchema;
  zimerDisplayinfo
    .find()
    .sort({ name: 1 })
    .then((result) => {
      if (result) {
        res.json({
          message: "Downloading Zimmer Data success ",
          download: true,
          zimmerdata: result,
        });
      }
    })
    .catch((err) => console.log(err));
}

function AddZimmer(req, res) {
  console.log("post to: adding zimmer info");
  const AddZimmerInfo = zimmerInfoSchema;
  const zimmerData = req.body;

  AddZimmerInfo.insertMany(zimmerData)
    .then((result) => {
      if (result) {
        console.log("zimmer data added succsess");
        res.json({
          adding_zimmer_data_status: true,
          message: "zimmer data added succsess",
          zimmer_data: result,
        });
      }
    })
    .catch((err) => {
      console.log("zimmer data adding failed");
      res.json({
        message: "zimmer data adding failed",
        adding_zimmer_data_status: false,
      });
    });
}

function DeleteZimmer(req, res) {
  console.log("post to: deleting zimmer");
  const DeleteZimmerInfo = zimmerInfoSchema;
  const _id = req.body.id;

  DeleteZimmerInfo.findByIdAndDelete({ _id })
    .then((result) => {
      if (result) {
        console.log("deleting zimmer success");
        res.json({
          messsge: "deleting zimmer success",
          deleteing_status: true,
          data: result,
        });
      }
    })
    .catch((err) => {
      console.log("deleting zimmer failed");
    });
}

function EditZimmer(req, res) {
  console.log("post to: edit zimmer");
  const zimmerdata = req.body;
  const EditZimmerShcema = zimmerInfoSchema;
  const _id = zimmerdata.zimmerid;

  const newZimmerInfo = {
    name: zimmerdata.name,
    price: zimmerdata.price,
    description: zimmerdata.description,
    img: zimmerdata.img,
  };

  EditZimmerShcema.findByIdAndUpdate(
    { _id },
    { $set: newZimmerInfo },
    { new: true }
  )
    .then((result) => {
      console.log("zimmer new information is success");
      res.json({
        message: "zimmer new information is success",
        update_status: true,
        zimmerdata: result,
      });
    })
    .catch((err) => {
      console.log("zimmer new information is failed");
      res.json({
        message: "zimmer new information is success",
        update_status: false,
      });
    });
}

function DeleteZimmerResevation(req, res) {
  console.log("posting from : Deleting Zimmer Resevation");
  const zimmerResevation = req.body;
  const orderResevation = resevationSchema;
  const zimmerId = zimmerResevation.zimmerId;
  const clientName = zimmerResevation.clientName;
  const startDate = zimmerResevation.startDate;

  orderResevation.findOneAndDelete(
    { zimmerId },
    {
      $pull: {
        zimmerUnitResevation: { clientName },
        zimmerUnitResevation: { startDate },
      },
    }
  );
}

function AddZimmerResevation(req, res) {
  console.log("posting from :Add Zimmer Resevation");
  const zimmerResevation = req.body;
  const orderResevation = resevationSchema;
  const zimmerId = zimmerResevation.zimmerId;

  const newResevation = {
    clientName: zimmerResevation.zimmerUnitResevation.clientName,
    ClientId: zimmerResevation.zimmerUnitResevation.clientId,
    zimmerPrice: zimmerResevation.zimmerUnitResevation.zimmerPrice,
    duration: zimmerResevation.zimmerUnitResevation.duration,
    startDate: zimmerResevation.zimmerUnitResevation.startDate,
    endDate: zimmerResevation.zimmerUnitResevation.endDate,
  };

  orderResevation
    .findOneAndUpdate(
      { zimmerId },
      { $push: { zimmerUnitResevation: newResevation } },
      { new: true }
    )
    .then((result) => {
      if (result) {
        console.log("client resevation saving succsessful");
        res.json({
          message: "client resevation saving succsessful",
          staus: true,
          resevationData: result,
        });
      } else {
        orderResevation
          .insertMany(zimmerResevation)
          .then((result) => {
            if (result) {
              console.log("client resevation saving succsessful");
              res.json({
                message: "client resevation saving succsessful",
                staus: true,
                resevationData: result,
              });
            }
          })
          .catch((err) => console.log(err));
      }
    })
    .catch((err) => {
      console.log(err);
      console.log("client resevation saving failed");
      res.json({
        message: `resevation failed`,
        staus: false,
      });
    });
}

function ZimmerResevations(req, res) {
  console.log("get from : my resevation");
  const userId = req.body.userId;
  const clientresevation = resevationSchema;
  clientresevation
    .find()
    .sort({ updatedAt: 1 })
    .then((result) => {
      res.json({ resevations: result });
    });
}

export default {
  AddZimmer,
  DisplayZimmer,
  DeleteZimmer,
  EditZimmer,
  AddZimmerResevation,
  DeleteZimmerResevation,
  ZimmerResevations,
};
