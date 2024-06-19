
//Promises function
const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((error) => next(error))
    }
}


export { asyncHandler }

// const asyncHandler = () => { }
// const asyncHandler = (fn) => () => { }
// const asyncHandler = (fn) => async () => { }

// err, req , res, next // next is middlewete


//try catch function
// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }