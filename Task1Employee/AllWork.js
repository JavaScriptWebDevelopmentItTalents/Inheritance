/*global validator*/
var AllWork = (function iife() {
    'use strict';

    function AllWork() {
        var _tasks = [],
            _freePlacesForTasks = 10,
            _currentUnassignedTask = 0;

        this.addTask = function addTask(task) {
            validator.validateIfObject(task, "AllWork task");
            _tasks.push(task);
            _freePlacesForTasks -= 1;
        };

        this.getNextTask = function getNextTask() {
            _currentUnassignedTask += 1;
            return _tasks[_currentUnassignedTask];
        };

        this.allWorkIsDone = function allWorkIsDone() {
            if (_freePlacesForTasks <= 0) {
                return true;
            }
            return false;
        };
    }

    return AllWork;
}());