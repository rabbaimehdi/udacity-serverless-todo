import { TodosAccess } from '../dataLayer/todosAcess'
import { AttachmentUtils } from '../helpers/attachmentUtils';
import { TodoItem } from '../models/TodoItem'
import { CreateTodoRequest } from '../requests/CreateTodoRequest'
//import { UpdateTodoRequest } from '../requests/UpdateTodoRequest'
//import { createLogger } from '../utils/logger'
import * as uuid from 'uuid'
// import * as createError from 'http-errors'

// TODO: Implement businessLogic
//const logger = createLogger('TodosAccess')
const attachmentUtils = new AttachmentUtils()
const todosAccess = new TodosAccess()

//write create todo function

export const createTodo = async (userId: string, newTodo: CreateTodoRequest): Promise<TodoItem> => {
    // createLogger('creating todo')
    const todoId = uuid.v4()
    const todoItem = {
      createdAt: new Date().toString(),
      userId,
      todoId,
      attachmentUrl: attachmentUtils.getAttachmentUrl(todoId),
      done: false,
      ...newTodo
    }
  
    return await todosAccess.createTodo(todoItem)
  }
