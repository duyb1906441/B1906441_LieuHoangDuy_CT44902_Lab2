const config = {
    app: {
        port: process.env.PORT || 3000,
    },
    db: {
        uri: process.env.MONGODB_URI || "mongodb+srv://duyb1906441:lieuhoangduy909@cluster0.l5jeijx.mongodb.net/?retryWrites=true&w=majority"
    }
};

module.exports = config;
