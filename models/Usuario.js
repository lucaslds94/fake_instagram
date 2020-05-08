let Usuario = (sequelize, DataTypes) => {
    let usuario = sequelize.define(
        'Usuario', // <== primeiro param: Nome do model
        { 
            // <== segundo param: Colunas da minha tabela...
            id:{
                type: DataTypes.INTEGER,
                primaryKey:true,
                allowNull: false,
                autoIncrement: true
            },
            nome:{
                type: DataTypes.STRING,
                allowNull: false
            },
            email:{
                type: DataTypes.STRING,
                allowNull: false
            },
            senha:{
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            tableName: "usuarios",
            timestamps: true,
        }
    );

    usuario.associate = (models) => {
        usuario.hasMany(models.Post, {foreignKey: 'usuarios_id',as: 'posts'});
    }

    return usuario;
}

module.exports = Usuario;