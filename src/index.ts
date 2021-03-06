import express from 'express';

class App {
    public application: express.Application;

    constructor() {
        this.application = express();
    }

    private config(): void {
        this.application.use(express.json());

        this.application.use(express.urlencoded({ extended: false }));
    }
}

const app = new App().application;

app.get("/", (req: express.Request, res: express.Response) => {
    res.send("start");
});

app.listen(4000, () => console.log("start"));