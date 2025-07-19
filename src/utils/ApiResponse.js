class ApiResponse{
    constructor(statuecode, data, message = "Success"){
        this.statuecode = statuecode,
        this.data = data,
        this.message = message,
        this.success = statuecode < 400
}
}

export {ApiResponse}