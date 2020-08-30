const registerserviceObj = require('../services/registerservice');

module.exports.register = async (req, res) => {
    try {
        const result = await registerserviceObj.register(req.body);
        return res.status(200).json({ "success": "true", "error": "false", "data": result });
    } catch (e) {
        return res.status(400).json({ "success": "false", "error": "true", "data": e });
    }
}

module.exports.salaryInsert = async (req, res) => {
    try {
        const result = await registerserviceObj.salaryInsert(req.body);
        return res.status(200).json({ "success": "true", "error": "false", "data": result });
    } catch (e) {
        return res.status(400).json({ "success": "false", "error": "true", "data": e });
    }
}

module.exports.registerDelete = async (req, res) => {
    try {
        const result = await registerserviceObj.registerDelete(req.params.id);
        return res.status(200).json({ "success": "true", "error": "false", "data": result });
    } catch (e) {
        return res.status(400).json({ "success": "false", "error": "true", "data": e });
    }
}

module.exports.registerData = async (req, res) => {
    try {
        const result = await registerserviceObj.registerData(req.params.id);
        return res.status(200).json({ "success": "true", "error": "false", "data": result });
    } catch (e) {
        return res.status(400).json({ "success": "false", "error": "true", "data": e });
    }
}

module.exports.salaryData = async (req, res) => {
    try {
        const result = await registerserviceObj.salaryData(req.params.id);
        return res.status(200).json({ "success": "true", "error": "false", "data": result });
    } catch (e) {
        return res.status(400).json({ "success": "false", "error": "true", "data": e });
    }
}

module.exports.registerUpdate = async (req, res) => {
    try {
        const result = await registerserviceObj.registerUpdate(req.body);
        return res.status(200).json({ "success": "true", "error": "false", "data": result });
    } catch (e) {
        return res.status(400).json({ "success": "false", "error": "true", "data": e });
    }
}
