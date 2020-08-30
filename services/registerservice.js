const registermodelObj = require('../model/register');
const salarymodelObj = require('../model/salary');

module.exports.register = async (data) => {
    return await registermodelObj.create(data)
}

module.exports.salaryInsert = async (data) => {
    return await salarymodelObj.create(data)
}

module.exports.registerDelete = async (data) => {
    return await registermodelObj.remove({ _id: data })
}

module.exports.registerData = async (data) => {
    return await registermodelObj.find({ _id: data })
}

module.exports.salaryData = async (data) => {
    return await registermodelObj.aggregate([
        {
            $match: {
                _id: 1
            }
        },
        {
            $lookup:
            {
                from: "salries",
                localField: "useremail",
                foreignField: "useremail",
                as: "mixData"
            }
        },
        {
            "$project": {
                "totalSalary": { "$sum": "$mixData.amount" },
                "firstname": "$firstname",
                "lastname": "$lastname",
                "useremail": "$useremail",
                "MinimumSalary": { "$min": "$mixData.amount" },
                "MaximumSalary": { "$max": "$mixData.amount" },
                "AverageSalary": { "$avg": "$mixData.amount" }

            }
        }
    ])
}

module.exports.registerUpdate = async (data) => {
    return await registermodelObj.update({ useremail: data.useremail }, data)
}