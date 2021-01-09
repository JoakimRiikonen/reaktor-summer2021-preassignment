const axios = require('axios')

const instance = axios.create({
  baseURL: "https://bad-api-assignment.reaktor.com/v2/"
})

const getCategory = (category) => {
  const request = instance.get("products/" + category)
  return request.then((res) => res.data)
}

const getAvailability = (manufacturer) => {
  const request = instance.get("availability/" + manufacturer)
  return request.then((res) => res.data)
}

//returns valid availability data
const getValidAvailability = async (manufacturer) => {
  let validResponse = false
  let validData = []

  //requests are made until a valid response is given
  while (!validResponse) {
    const data = await getAvailability(manufacturer)
    if(data.response[0].id) {
      validResponse = true
      validData = data.response
    }
  }
  return validData
}

//returns formatted availability data
const getFormattedAvailability = async (manufacturer) => {
  let validData = await getValidAvailability(manufacturer)
  let formattedData = []

  /*
      Each item is formatted as such: 
      {
      "id": "9AB28FEC550F95411F52F",
      "DATAPAYLOAD": "<AVAILABILITY>\n  <CODE>200</CODE>\n  <INSTOCKVALUE>INSTOCK</INSTOCKVALUE>\n</AVAILABILITY>"
      },
  */
  validData.forEach(item => {
    const datapayload = item.DATAPAYLOAD
    //the INSTOCKVALUE is parsed by splitting the string at the tags 
    const instockvalue = datapayload
                        .split("<INSTOCKVALUE>")[1]
                        .split("</INSTOCKVALUE>")[0]
    //add cleaned data to array
    formattedData.push({
      id: item.id,
      instockvalue
    })
  });
  return formattedData
}

module.exports = { getCategory, getFormattedAvailability }