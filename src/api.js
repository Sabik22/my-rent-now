import fetch from "node-fetch"

export default async function postNewPersonHandler(req, res) {
  const url = `https://api.8storage.com/v1/movein/leaseprofiles/438586f0-9926-4187-b418-4a94034a2eaa`

  const headers = {
    "content-type": "application/json",
Authorization: `Bearer Csi0TWrkWroLDkn7PMVj4EB7PVRiV1ercQ6KeWO97naJWfNuO3YDLGFOcrwINiDDxLX3kFrgT2dtX6NBjsMSZgwW9Jc7IkCA97a8iuTbxA`,
  }

  const data = {}

  try {
    const result = await fetch(url, {
      method: `GET`,
      headers: headers,
      body: data,
    }).then(res => {
      return res.json()
    })

    res.json(result)
  } catch (error) {
    res.status(500).send(error)
  }
}