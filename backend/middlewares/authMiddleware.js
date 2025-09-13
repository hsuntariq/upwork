import jwt from 'jsonwebtoken'
import { userModel } from '../models/userModel.js'


export const decodeToken = async (req, res, next) => {
    // check if token present
    if (req.cookies.cookieToken) {
        try {
            let token = req.cookies.cookieToken
            let decode = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await userModel.findById(decode.id)
            next()
        } catch (error) {
            res.status(401)
            throw new Error('Invalid Token')
        }
    } else {
        res.status(401)
        throw new Error('Unauthorized')
    }
}






// Bearer[0] eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YmQzYTE1OGYzYzY2Mjg1ZTc1YmI3MCIsImlhdCI6MTc1NzIzMTYzNywiZXhwIjoxNzU4MDk1NjM3fQ.tlExTAS_wKeUqhxIk148DajVKo3Edrq3r-sitDBeACE[1]


