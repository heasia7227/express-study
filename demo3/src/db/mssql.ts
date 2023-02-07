/**
 * sqlserver Model
 **/
import mssql from "mssql";
import conf from "../config";

export type CallBack = (err?: Error, result?: mssql.IProcedureResult<any>) => void;

const con = new mssql.ConnectionPool(conf.mssqlConfig);
con.on("error", (err) => {
    if (err) {
        throw err;
    }
});
con.connect((err) => err && console.error(err));
console.log("----sqlserver init done----");

const querySql = (sql: string, params: Array<any>, callBack: CallBack) => {
    params = params || [];
    try {
        let ps = new mssql.PreparedStatement(con);
        for (var index in params) {
            if (typeof params[index] == "number") {
                ps.input(index, mssql.Int);
            } else if (typeof params[index] == "string") {
                ps.input(index, mssql.NVarChar);
            }
        }
        ps.prepare(sql, (err) => {
            if (err) console.log(err);
            ps.execute(params, (err, recordset) => {
                callBack(err, recordset);
                ps.unprepare((err) => {
                    if (err) console.log(err);
                });
            });
        });
    } catch (err) {
        console.error("SQL error", err);
    }
};

const select = (
    tableName: string,
    topNumber: string,
    whereSql: string,
    params: Array<any>,
    orderSql: string,
    callBack: CallBack
) => {
    try {
        var ps = new mssql.PreparedStatement(con);
        var sql = "select * from " + tableName + " ";
        if (topNumber != "") {
            sql = "select top(" + topNumber + ") * from " + tableName + " ";
        }
        sql += whereSql + " ";
        for (var index in params) {
            if (typeof params[index] == "number") {
                ps.input(index, mssql.Int);
            } else if (typeof params[index] == "string") {
                ps.input(index, mssql.NVarChar);
            }
        }
        sql += orderSql;
        console.log(sql);
        ps.prepare(sql, (err) => {
            if (err) console.log(err);
            ps.execute(params, (err, recordset) => {
                callBack(err, recordset);
                ps.unprepare((err) => {
                    if (err) console.log(err);
                });
            });
        });
    } catch (err) {
        console.error("SQL error", err);
    }
};

const selectAll = (tableName: string, callBack: CallBack) => {
    try {
        var ps = new mssql.PreparedStatement(con);
        var sql = "select * from " + tableName + " ";
        ps.prepare(sql, (err) => {
            if (err) console.log(err);
            ps.execute("", (err, recordset) => {
                callBack(err, recordset);
                ps.unprepare((err) => {
                    if (err) console.log(err);
                });
            });
        });
    } catch (err) {
        console.error("SQL error", err);
    }
};

const add = (addObj: Array<any>, tableName: string, callBack: CallBack) => {
    try {
        var ps = new mssql.PreparedStatement(con);
        var sql = "insert into " + tableName + "(";
        for (var index in addObj) {
            if (typeof addObj[index] == "number") {
                ps.input(index, mssql.Int);
            } else if (typeof addObj[index] == "string") {
                ps.input(index, mssql.NVarChar);
            }
            sql += index + ",";
            sql = sql.substring(0, sql.length - 1) + ") values(";
            for (var index in addObj) {
                if (typeof addObj[index] == "number") {
                    sql += addObj[index] + ",";
                } else if (typeof addObj[index] == "string") {
                    sql += "'" + addObj[index] + "'" + ",";
                }
            }
        }
        sql = sql.substring(0, sql.length - 1) + ")";
        ps.prepare(sql, (err) => {
            if (err) console.log(err);
            ps.execute(addObj, (err, recordset) => {
                callBack(err, recordset);
                ps.unprepare((err) => {
                    if (err) console.log(err);
                });
            });
        });
    } catch (err) {
        console.error("SQL error", err);
    }
};

const update = (updateObj: Array<any>, whereObj: Array<any>, tableName: string, callBack: CallBack) => {
    try {
        var ps = new mssql.PreparedStatement(con);
        var sql = "update " + tableName + " set ";
        for (var index in updateObj) {
            if (typeof updateObj[index] == "number") {
                ps.input(index, mssql.Int);
                sql += index + "=" + updateObj[index] + ",";
            } else if (typeof updateObj[index] == "string") {
                ps.input(index, mssql.NVarChar);
                sql += index + "=" + "'" + updateObj[index] + "'" + ",";
            }
        }
        sql = sql.substring(0, sql.length - 1) + " where ";
        for (var index in whereObj) {
            if (typeof whereObj[index] == "number") {
                ps.input(index, mssql.Int);
                sql += index + "=" + whereObj[index] + " and ";
            } else if (typeof whereObj[index] == "string") {
                ps.input(index, mssql.NVarChar);
                sql += index + "=" + "'" + whereObj[index] + "'" + " and ";
            }
        }
        sql = sql.substring(0, sql.length - 5);
        ps.prepare(sql, (err) => {
            if (err) console.log(err);
            ps.execute(updateObj, (err, recordset) => {
                callBack(err, recordset);
                ps.unprepare((err) => {
                    if (err) console.log(err);
                });
            });
        });
    } catch (err) {
        console.error("SQL error", err);
    }
};

const del = (whereSql: string, params: Array<any>, tableName: string, callBack: CallBack) => {
    try {
        var ps = new mssql.PreparedStatement(con);
        var sql = "delete from " + tableName + " ";
        for (var index in params) {
            if (typeof params[index] == "number") {
                ps.input(index, mssql.Int);
            } else if (typeof params[index] == "string") {
                ps.input(index, mssql.NVarChar);
            }
        }
        sql += whereSql;
        ps.prepare(sql, (err) => {
            if (err) console.log(err);
            ps.execute(params, (err, recordset) => {
                callBack(err, recordset);
                ps.unprepare((err) => {
                    if (err) console.log(err);
                });
            });
        });
    } catch (err) {
        console.error("SQL error", err);
    }
};

export { conf, del, select, update, querySql, selectAll, add };
export default mssql;
