//Xuất chiếu

const { DataTypes } = require('sequelize');
const db = require('./db');

//Tạo bảng suất chiếu (Showtime)
const Showtime = db.define('Showtime', {
    //id rạp
    idCinema: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    //id phim
    idMovie: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    //thời điểm bắt đầu
    start: {
        type: DataTypes.DATE,
        allowNull: false
    },
    //thời điểm kết thúc
    finish: {
        type: DataTypes.DATE,
        allowNull: false
    },
    //giá vé
    money: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
});

//code function here

Showtime.findById = async function(id) {
    return Showtime.findByPk(id);
}

//thêm xuất chiếu
Showtime.addShowtime = async function(idCinema, idMovie, start, finish, money) {
    const all = (await Showtime.findAll()).length;
    await Showtime.create({
        id: all + 1,
        idCinema: idCinema,
        idMovie: idMovie,
        start: start,
        finish: finish,
        money: money,
    })
    if (all < (await Showtime.findAll()).length) {
        return 1;
    } else {
        return -1;
    }
}

//xóa xuất chiếu
Showtime.deleteShowtime = async function(id) {
    const temp = await Showtime.findByPk(id);
    await temp.destroy();
}

//cập nhật xuất chiếu
//không yêu cầu
// Showtime.updateShowtime = async function(id, idCinema, idMovie, start, finish, money) {

// }



module.exports = Showtime;