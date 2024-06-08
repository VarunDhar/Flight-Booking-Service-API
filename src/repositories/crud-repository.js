const {Logger} = require("../config");
class CrudRepository{
    constructor(model){
        this.model = model;
    }
    async create(data){
        //try {
            const response = await this.model.create(data);
            return response;

        // } catch (error) {
        //     Logger.error("Error : creating");
        //     throw error;
        // }
    }
    async destroy(data){
        //try {
            return response = await this.model.destroy({
                where:{
                    id:data // delete by id
                }
            });

        // } catch (error) {
        //     Logger.error("Error : destroying");
        //     throw error;
        // }
    }
    async getOne(data){
        //try {
            return response = await this.model.findByPk(data);

        // } catch (error) {
        //     Logger.error("Error : getOne");
        //     throw error;
        // }
    }
    async getAll(){
        //try {
            return response = await this.model.findAll();

        //} catch (error) {
        //    Logger.error("Error : getAll");
        //    throw error;
        //}
    }
    async update(id,data){
        //try {
            return response = await this.model.update(data,{
                where:{
                    id
                }
            });

        //} catch (error) {
        //    Logger.error("Error : getOne");
        //    throw error;
        //}
    }

}

module.exports = CrudRepository;