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

const getUserByEmailAndPassword = async (email, password) => {
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

const loginUser = async ({email, password}) => {
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
  
     
module.exports = {
   createUser,
   getUserByEmailAndPassword,
   loginUser,
}
   