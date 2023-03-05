import express, {Request, Response} from 'express';
const app = express();

app.get('/hello', async(req: Request, res: Response): Promise<void> => {
    res.json({"content": ['Hello World!', "blah blah blah"]});
})

app.get('/goodbye', async (req: Request, res: Response): Promise<void> => {
    res.json({"goodbye": ['Goodbye World!', "blah blah blah"]});
})

export default app;
