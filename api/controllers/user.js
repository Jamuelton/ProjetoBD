import {db} from "../db.js"

export const getUsers = (_, res) => {
    const sql = "Select * from Roupa";

    db.query(sql, (err,data) => {
        if(err) return res.json(err)
        return res.status(200).json(data);
    });
};