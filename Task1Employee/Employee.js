/*global validator*/
var Employee = (function iife() {
    'use strict';

    function Employee(name) {
        var _name,
            _currentTask,
            _hoursLeft,
            _allWork;

        validator.validateIfString(name, 'Task1Employee name');
        _name = name;

        this.getName = function get() {
            return _name;
        };
        this.getAllAWork = function get() {
            return _allWork;
        };
        this.setAllWork = function set(allWork) {
            validator.validateIfObject(allWork, 'Task1Employee allWork');
            _allWork = allWork;
        };
        this.getHoursLeft = function get() {
            return _hoursLeft;
        };
        this.setHoursLeft = function set(value) {
            validator.validateIfNumber(value, 'Task1Employee hoursLeft');
            _hoursLeft = value;
        };
        this.getCurrentTask = function get() {
            return _currentTask;
        };
        this.setCurrentTask = function set(currentTask) {
            validator.validateIfObject(currentTask, 'Task1Employee current task');
            _currentTask = currentTask;
        };
    }

    Employee.prototype.startWorkingDay = function startWorkingDay() {
        this.setHoursLeft(8);
    };

    Employee.prototype.work = function work() {
        if (this.getCurrentTask() !== undefined) {//TODO: fix if?
            this.setCurrentTask(this.getAllAWork().getNextTask());
        }
    };

    return Employee;
}());