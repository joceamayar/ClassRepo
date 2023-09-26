//our resolvers are new our routes- controllers

const { Class } = require('../models');

const resolvers = {
  Query: {
    classes: async () => {
      return await Class.find({});
    }
  }
};

module.exports = resolvers;
