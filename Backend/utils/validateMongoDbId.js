const mongoose = require("mongoose");
const const validateMongoDbId = require("../utils/validateMongoDbId"); = (id) => {
  const isValid = mongoose.Types.ObjectId.isValid(id);
  if (!isValid) throw new Error("This id is not valid or not Found");
};
module.exports = const validateMongoDbId = require("../utils/validateMongoDbId");;
