const Employee = require('../models/employeeModel');

exports.getAllEmployees = async (req, res) => {
  const employees = await Employee.getAll();
  res.json(employees);
};

exports.getEmployeeById = async (req, res) => {
  const employee = await Employee.getById(req.params.id);
  if (!employee) return res.status(404).send('Employee not found');
  res.json(employee);
};

exports.createEmployee = async (req, res) => {
  const employee = await Employee.create(req.body);
  res.status(201).json(employee);
};

exports.updateEmployee = async (req, res) => {
  const employee = await Employee.update(req.params.id, req.body);
  if (!employee) return res.status(404).send('Employee not found');
  res.json(employee);
};

exports.deleteEmployee = async (req, res) => {
  const employee = await Employee.delete(req.params.id);
  if (!employee) return res.status(404).send('Employee not found');
  res.send('Employee deleted');
};
