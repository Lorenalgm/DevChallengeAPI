const Challenge = require('../models/Challenge');

module.exports = {
    async index(request, response) {

        const { challenge_id } = request.params;
        
        const challenge = await Challenge.find({ _id: challenge_id}).populate('dev_id');

        return response.json(challenge);
    },

}