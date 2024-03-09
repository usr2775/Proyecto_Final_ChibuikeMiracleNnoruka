const { connectMongoDB, disconnectMongoDB } = require('../config/index');

class ProductoModel {
    static async getAll() {
        try {
            const clientMongo = await connectMongoDB();
            if (!clientMongo) {
                throw Error('No se pudo conectar a MongoDB');
            }
            const collection = clientMongo.db('tienda').collection('productos');
            const result = await collection.find().toArray();
            await disconnectMongoDB();
            console.log(result);

            if (!result || result.length === 0) {
                return { data: null, error: true };
            }
            return { data: result, error: false };
        } catch (error) {
            console.log(error);
            return { data: null, error: true };
        }
    }
}

module.exports = ProductoModel;