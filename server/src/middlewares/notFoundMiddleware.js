const notFoundMiddleware = (req, res) => {
    res.status(404).json({
        status: 'error',
        message: 'Route not found',
    });
};

export default notFoundMiddleware;
