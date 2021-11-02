import { Request, Response } from "express";
import { CreateMessegerService } from "../services/CreateMessegerService";

class CreateMessageController{
   async handle(req: Request, res: Response) {      
      const { message } = req.body;            
      const { user_id } = req;

      const service = new CreateMessegerService();

      const result = await service.execute(message, user_id);

      return res.json(result);
   }
}

export { CreateMessageController }