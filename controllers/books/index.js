const {
    getAllData,
    getDataById,
    getDataByJenis,
    updateDataById,
    postData,
    deleteDataById
} = require('./books.controller');

module.exports = { getAllData, getDataById, getDataByJenis, updateDataById, postData, deleteDataById }