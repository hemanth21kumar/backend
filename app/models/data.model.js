module.exports = (sequelize, Sequelize) => {
    const sampleTable = sequelize.define("test", {
        title: {
            type: Sequelize.STRING
        },
    });
    return sampleTable;
}