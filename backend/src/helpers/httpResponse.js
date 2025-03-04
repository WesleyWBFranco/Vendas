export const ok = (body) => {
    return {
        success: true,
        statusCode: 200,
        body: body
    }
}

export const notFound = (body) => {
    return {
        success: true,
        statusCode: 200,
        body: 'Not found'
    }
}

export const serverError = (error) => {
    return {
        success: true,
        statusCode: 200,
        body: error
    }
}