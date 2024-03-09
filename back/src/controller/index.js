const ProductoModel = require('../model/index');

class ProductosController {
    static async getAll(req, res) {
        try {
            const { data, error } = await ProductoModel.getAll();
            if (error) {
                res.status(404).json({ error: 'No hay productos' });
            } else {
                res.status(200).json({ data });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    }
}

module.exports = ProductosController;