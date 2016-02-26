/*global validator*/
var Person = (function iife() {
    'use strict';

    function Person(name, age, isMale) {
        var _name,
            _age,
            _isMale;

        this.setName(name);
        this.setAge(age);
        this.setIsMale(isMale);
        this.getName = function get() {
            return _name;
        };
        this.setName = function set(value) {
            validator.validateIfString(value, 'Person name');
            _name = value;
        };
        this.getAge = function get() {
            return _age;
        };
        this.setAge = function set(value) {
            validator.validateIfNumber(value, 'Person age');
            _age = value;
        };
        this.getIsMale = function get() {
            return _isMale;
        };
        this.setIsMale = function set(value) {
            validator.validateIfBool(value, 'Person isMale');
            _isMale = value;
        };
    }

    Person.prototype.showPersonInfo = function showPersonInfo() {
        return 'My name is ' + this.getName() +
                '. My age is ' + this.getAge() +
                '. I am' + this.getIsMale() ? 'male' : 'woman';
    };
    return Person;
}());