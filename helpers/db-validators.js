const Role = require("../models/rol");
const User = require("../models/user");

const isRoleValid = async (rol = "") => {
  const existRole = await Role.findOne({ role: rol });
  console.log(existRole);
  if (!existRole) {
    throw new Error(`Role ${rol} does not exist`);
  }
};

const emailExist = async (email = '') => {
  const emailAux = await User.findOne({ email: email });

  if (emailAux) {
    throw new Error(` Email ${emailAux}  exist`);
  }
};

module.exports = { isRoleValid, emailExist };
