const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword (user, options) {
  const SALT_FACTOR = 8

  if (!user.changed('password')) {
    return
  }

  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => { user.setDataValue('password', hash) })
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userType: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'user'
    },
    fullname: {
      type: DataTypes.STRING(101)
    },
    birhdate: {
      type: DataTypes.DATEONLY
    },
    disabled: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: 0
    }
  },
  {
    hooks: {
      beforeUpdate: hashPassword,
      beforeSave: hashPassword
    }
  })

  User.prototype.comparePassword = function (candidatePassword) {
    return bcrypt.compareSync(candidatePassword, this.password)
  }

  return User
}
