/*global validator, console*/
var Task = (function iife() {
    'use strict';

    function Task(name, workingHours) {
        var _name,
            _workingHours;

        validator.validateNonEmptyString(_name, 'Task name');
        _name = name;
        console.log(_name + ' has been added to the tasks!');
        this.setWorkingHours(workingHours);

        this.getName = function get() {
            return _name;
        };
        this.getWorkingHours = function set() {
            return _workingHours;
        };
        this.setWorkingHours = function (value) {
            validator.validateIfNumber(value, ' Task working hours');
            _workingHours = value;
        };
    }

    return Task;
}());