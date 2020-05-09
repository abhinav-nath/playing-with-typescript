var Employee = /** @class */ (function () {
    function Employee(_employeeId, _department, _fullName, _dob) {
        this._employeeId = _employeeId;
        this._department = _department;
        this._fullName = _fullName;
        this._dob = _dob;
    }
    Object.defineProperty(Employee.prototype, "employeeId", {
        // accessors: get/set
        get: function () {
            return this._employeeId;
        },
        set: function (value) {
            this._employeeId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "department", {
        get: function () {
            return this._department;
        },
        set: function (value) {
            this._department = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "dob", {
        get: function () {
            return this._dob;
        },
        set: function (value) {
            this._dob = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (value) {
            this._fullName = value;
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
// create an instance
var employee1 = new Employee(1234, "Sales", "Superman", "19900929");
console.log(employee1);
