const { User } = require('../models/');
const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const jwtConfig = {
  expiresIn: '15m',
  algorithm: 'HS256',
};

const createUser = async ({ email, password }) => {
    try {
       const user = await User.create({ email, password });
       return user;
    } catch (error) {
       throw error;
    }
   };

const getUserByEmailAndPassword = async ({ email, password }) => {
   try {
      const user = await User.findOne({
         where: {
            email: email,
            password: password
         }
      });
      return user;
   } catch (error) {
      throw error;
   }
};

const loginUser = async ({ email, password }) => {
   try {
      const user = await getUserByEmailAndPassword({email, password});
      if (!user) {
        throw new Error('Email or password is incorrect');
      }
      const { id } = user.dataValues;
      const token = jwt.sign({ data: { userId: id } }, secret, jwtConfig);
      return { message: 'Login successful', token: token };
   } catch (error) {
      throw error;
   }
  };
  
const removeUser = async (userId) => {
   try {
      const result = await User.destroy({
        where: {
          id: userId
        }
      });
      return result;
   } catch (error) {
      throw error;
   }
};

const updateUser = async (userId, { name, email, password, clinicName }) => {
   try {
      const result = await User.update({ name, email, password, clinicName }, {
        where: {
          id: userId
        },
        returning: true
      });
      return result[0];
   } catch (error) {
      throw error;
   }
};

module.exports = {
   createUser,
   getUserByEmailAndPassword,
   loginUser,
   removeUser,
   updateUser,
}
   