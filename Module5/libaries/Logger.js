class Logger {
    constructor() {
            this.id=Math.floor(Math.random() * 99999);
        }
        log=(value)=>{
         console.log(`[Logger:${this.id}]:${value}`)
    }
}
module.exports= Logger