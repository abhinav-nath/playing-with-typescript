class Employee {

    // Parameter Properties : define and initialize the properties at the same time
    constructor(private _employeeId: number, private _department: string, private _fullName: string, private _dob: string) {

    }

    // accessors: get/set
    public get employeeId(): number {
        return this._employeeId;
    }

    public set employeeId(value: number) {
        this._employeeId = value;
    }

    public get department(): string {
        return this._department;
    }

    public set department(value: string) {
        this._department = value;
    }

    public get dob(): string {
        return this._dob;
    }

    public set dob(value: string) {
        this._dob = value;
    }

    public get fullName(): string {
        return this._fullName;
    }

    public set fullName(value: string) {
        this._fullName = value;
    }
    
}

// create an instance
let employee1 = new Employee(1234, "Sales", "Superman", "19900929")

console.log(employee1);