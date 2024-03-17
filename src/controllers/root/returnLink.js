/**
 * Echo endpoint
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
const returnLink = (req, res) => {
    const json = "https://fb68e.com/?link_id=aOmL63gBz"
    res.json({link: json})
}

export default returnLink