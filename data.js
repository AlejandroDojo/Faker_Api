const {faker} = require('@faker-js/faker')

class Usuario {
    constructor() {
        this._id = faker.string.uuid();
        this.firstName = faker.person.firstName();
        this.lastName = faker.person.lastName();
        this.email = faker.internet.email();
        this.password= faker.internet.password();
        this.telefono = faker.phone.number();
    }
}

class Empresa {
    constructor() {
        this._id = faker.string.uuid();
        this.name = faker.company.name();
        this.location = {
            street : faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            postal: faker.location.zipCode(),
            country: faker.location.country()
        }
    }
}

module.exports = {
    Usuario: Usuario,
    Empresa: Empresa
}