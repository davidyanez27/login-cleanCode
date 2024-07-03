import express from "express";

export class Server {
    private app = express()
    public start() {
        //* Middlewares
        //* Public Folder

        this.app.listen(3000, () => {
            console.log(`Server running on port ${3000}`);
        });
    }
}