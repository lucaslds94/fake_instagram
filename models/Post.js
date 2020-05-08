let Post = (sequelize, DataTypes) => {
    let post = sequelize.define(
        'Post',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey:true,
                allowNull: false,
                autoIncrement: true
            },
            texto: {
                type: DataTypes.STRING,
                allowNull: false
            },
            img:{
                type: DataTypes.STRING,
                allowNull: true
            },
            usuarios_id:{
                type: DataTypes.INTEGER,
                allowNull: false
            },
            n_likes: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            }
        },
        {
            tableName: "posts",
            timestamps: true
        }
    );

    post.associate = (models) => {
        post.belongsTo(models.Usuario, {foreignKey:'usuarios_id', as: 'usuario'});
    }

    return post;
}

module.exports = Post;