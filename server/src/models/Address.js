module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    street: {
      type: DataTypes.STRING,
      allowNull: false
    },
    number: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    district: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    country: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    postalCode: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  },
  {
    classMethods: {
      associate: function (models) {
        Address.belongsTo(models.User)
      }
    }
  })

  return Address
}
