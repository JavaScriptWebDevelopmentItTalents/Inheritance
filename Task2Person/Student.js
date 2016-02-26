/*global person, validator, Person*/
var Student = (function iife(parent) {
    'use strict';

    function Student(name, age, isMale, score) {
        var _score;
        parent.call(this, name, age, isMale);

        this.setScore(score);
        this.getScore = function get() {
            return _score;
        };
        this.setScore = function set(value) {
            validator.validateNumberInRange(value, 'Student number', 2, 6);
            _score = value;
        };
    }

    Student.prototype = Object.create(parent.prototype);
    Student.prototype.constructor = Student;
    return Student;
}(Person));