import express,{ Application, Request, Response, NextFunction} from 'express'

const app:Application = express()

app.get('/', (req: Request,res: Response,next: NextFunction)=>{
    res.send("Hello single guy")
})

app.listen(5001, ()=>console.log('Server Running'))