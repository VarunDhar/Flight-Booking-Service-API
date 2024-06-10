const { StatusCodes } = require("http-status-codes");
const {Logger} = require("../config");
const AppError = require("../utils/errors/app-error");
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
            const response = await this.model.destroy({
                where:{
                    id:data // delete by id
                }
            });
            if(!response){
                throw new AppError("Error: Resource not found", StatusCodes.NOT_FOUND);
            }
            return response;
        // } catch (error) {
        //     Logger.error("Error : destroying");
        //     throw error;
        // }
    }
    async getOne(data){
        //try {
            const response = await this.model.findByPk(data);
            if(!response){
                throw new AppError("Error: Resource not found", StatusCodes.NOT_FOUND);
            }
            return response;
        // } catch (error) {
        //     Logger.error("Error : getOne");
        //     throw error;
        // }
    }
    async getAll(){
        //try {
            const response = await this.model.findAll();
            return response;

        //} catch (error) {
        //    Logger.error("Error : getAll");
        //    throw error;
        //}
    }
    async update(id,data){
        //try {
            //console.log(id,data);
            const response = await this.model.update(data,{
                where:{
                    id
                }
            });
            if(!response){
                throw new AppError("Error: Resource not found", StatusCodes.NOT_FOUND);
            }
            return response;

        //} catch (error) {
        //    Logger.error("Error : getOne");
        //    throw error;
        //}
    }

}

module.exports = CrudRepository;