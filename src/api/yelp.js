import axios from "axios"

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: "Bearer dFtvi53_RK1YP_XAHPbcM4MwaY6j731_DlQS8APq41LP0ma2177fse0AfzSQA5qTjUB4GMW2ufPzTTFE9qC1AOhVwF1QF88TkRW29y-RJphGksTQgfBXLkFo84npX3Yx"
  }

})