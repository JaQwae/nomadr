const { Country } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
//const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    country: async (parent, { countryName }) => {
      const params = countryName ? { country: countryName } : {};
      // console.log(params)
      let KC = await Country.find(params);
      // console.log(KC)
      return KC
    },
    users: async () => {
      return User.find().populate();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate();
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate();
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    createMatchup: async (parent, args) => {
      const matchup = await Matchup.create(args);
      return matchup;
    },
    createVote: async (parent, { _id, techNum }) => {
      const vote = await Matchup.findOneAndUpdate(
        { _id },
        { $inc: { [`tech${techNum}_votes`]: 1 } },
        { new: true }
      );
      return vote;
    },
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
