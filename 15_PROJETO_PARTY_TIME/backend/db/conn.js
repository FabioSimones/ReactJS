const mongoose = require("mongoose")

async function main() {
    try {
        
        await mongoose.connect(
            "mongodb+srv://simonesfabio94:aPUXIICxIuUDkRAS@cluster0.raceqyq.mongodb.net/?retryWrites=true&w=majority"
        );
        console.log("Conectado ao banco!")
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

module.exports = main

//aPUXIICxIuUDkRAS